import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Box, Button, Heading, HStack, VStack } from '@navikt/ds-react';
import { RhfForm, RhfRadioGroup, RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { AksjonspunktBox } from '@navikt/ft-ui-komponenter';
import { dateFormat } from '@navikt/ft-utils';

import { AksjonspunktKode, AksjonspunktStatus, NavBrukerKjonn } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, Fagsak, Soknad } from '@navikt/fp-types';
import type { AvklarDekningsgradAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import { ManIcon } from '../../icons/Man';
import { UnknownIcon } from '../../icons/Unknown';
import { WomanIcon } from '../../icons/Woman';

import styles from './dekningradApForm.module.css';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

const finnIkonForKjønn = (kjonn: string) => {
  if (kjonn === NavBrukerKjonn.KVINNE) {
    return <WomanIcon />;
  }
  return kjonn === NavBrukerKjonn.MANN ? <ManIcon /> : <UnknownIcon />;
};

type FormValues = {
  dekningsgrad: number;
  begrunnelse: string;
};

interface Props {
  søknad: Soknad;
  fagsak: Fagsak;
  aksjonspunkt: Aksjonspunkt;
  submitCallback: (data: AvklarDekningsgradAp) => Promise<void>;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  readOnly: boolean;
}

export const DekningradApForm = ({
  søknad,
  fagsak,
  aksjonspunkt,
  submitCallback,
  readOnly,
  alleMerknaderFraBeslutter,
}: Props) => {
  const intl = useIntl();
  const formMethods = useForm<FormValues>({
    defaultValues: {
      dekningsgrad: søknad.oppgittFordeling.dekningsgrader.avklartDekningsgrad,
      begrunnelse: aksjonspunkt.begrunnelse ?? '',
    },
  });
  const { annenPart: dgAnnenpart, søker: dgSøker } = søknad.oppgittFordeling.dekningsgrader;

  const erAksjonspunktApent = aksjonspunkt.status === AksjonspunktStatus.OPPRETTET;
  const erIkkeGodkjentAvBeslutter = !!alleMerknaderFraBeslutter[aksjonspunkt.definisjon]?.notAccepted;

  return (
    <VStack gap="4">
      <AksjonspunktBox erAksjonspunktApent={erAksjonspunktApent} erIkkeGodkjentAvBeslutter={erIkkeGodkjentAvBeslutter}>
        <RhfForm
          formMethods={formMethods}
          onSubmit={(values: FormValues) =>
            submitCallback({
              kode: AksjonspunktKode.AVKLAR_DEKNINGSGRAD,
              begrunnelse: values.begrunnelse,
              dekningsgrad: values.dekningsgrad,
            })
          }
        >
          <VStack gap="10">
            <HStack gap="4">
              <Box background="surface-selected" padding="5" borderColor="border-default" borderRadius="medium">
                <VStack gap="2">
                  <HStack gap="4" align="center">
                    {finnIkonForKjønn(fagsak.bruker.kjønn)}
                    <VStack gap="0">
                      <BodyShort size="medium">{fagsak.bruker.navn}</BodyShort>
                      <BodyShort size="small">
                        <FormattedMessage
                          id="DekningradApForm.SøknadSendt"
                          values={{
                            dato: dateFormat(dgSøker.søknadsdato, {
                              month: 'long',
                            }),
                          }}
                        />
                      </BodyShort>
                    </VStack>
                  </HStack>
                  <Heading size="xsmall">
                    <FormattedMessage id="DekningradApForm.HarValgt" values={{ dekningsgrad: dgSøker.dekningsgrad }} />
                  </Heading>
                </VStack>
              </Box>
              {fagsak.annenPart && (
                <Box background="surface-selected" padding="5" borderColor="border-default" borderRadius="medium">
                  <VStack gap="2">
                    <HStack gap="4" align="center">
                      {finnIkonForKjønn(fagsak.annenPart.kjønn)}
                      <VStack gap="0">
                        <BodyShort size="medium">{fagsak.annenPart.navn} </BodyShort>
                        <BodyShort size="small">
                          <FormattedMessage
                            id="DekningradApForm.SøknadSendt"
                            values={{
                              dato: dgAnnenpart
                                ? dateFormat(dgAnnenpart.søknadsdato, {
                                    month: 'long',
                                  })
                                : '-',
                            }}
                          />
                        </BodyShort>
                      </VStack>
                    </HStack>
                    <Heading size="xsmall">
                      <FormattedMessage
                        id="DekningradApForm.HarValgt"
                        values={{ dekningsgrad: dgAnnenpart?.dekningsgrad }}
                      />
                    </Heading>
                  </VStack>
                </Box>
              )}
            </HStack>
            <RhfRadioGroup
              name="dekningsgrad"
              control={formMethods.control}
              label={<FormattedMessage id="DekningradApForm.HvilkenDekningsgrad" />}
              validate={[required]}
              isReadOnly={readOnly}
              parse={value => parseInt(value, 10)}
              radios={[
                {
                  label: intl.formatMessage({ id: 'DekningradApForm.80' }),
                  value: '80',
                },
                {
                  label: intl.formatMessage({ id: 'DekningradApForm.100' }),
                  value: '100',
                },
              ]}
            />
            <RhfTextarea
              name="begrunnelse"
              control={formMethods.control}
              label={<FormattedMessage id="DekningradApForm.Begrunnelse" />}
              validate={[required, minLength3, maxLength1500, hasValidText]}
              maxLength={1500}
              readOnly={readOnly}
            />
            <div>
              <Button
                variant="primary"
                size="small"
                disabled={readOnly || !formMethods.formState.isDirty || formMethods.formState.isSubmitting}
                loading={formMethods.formState.isSubmitting}
              >
                <FormattedMessage id="DekningradApForm.Bekreft" />
              </Button>
            </div>
          </VStack>
        </RhfForm>
      </AksjonspunktBox>
      {!erIkkeGodkjentAvBeslutter && !erAksjonspunktApent && <hr className={styles.hr} />}
    </VStack>
  );
};
