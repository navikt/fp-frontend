import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { BodyShort, Box, Button, Heading, HStack, Radio, VStack } from '@navikt/ds-react';
import { RhfForm, RhfRadioGroup, RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { AksjonspunktBox } from '@navikt/ft-ui-komponenter';
import { dateFormat } from '@navikt/ft-utils';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, Ytelsefordeling } from '@navikt/fp-types';
import type { AvklarDekningsgradAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { usePanelDataContext } from '@navikt/fp-utils';

import { ManIcon } from '../../icons/Man';
import { UnknownIcon } from '../../icons/Unknown';
import { WomanIcon } from '../../icons/Woman';

import styles from './dekningradApForm.module.css';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

const finnIkonForKjønn = (kjonn: string) => {
  if (kjonn === 'K') {
    return <WomanIcon />;
  }
  return kjonn === 'M' ? <ManIcon /> : <UnknownIcon />;
};

type FormValues = {
  dekningsgrad: number;
  begrunnelse: string;
};

interface Props {
  ytelseFordeling: Ytelsefordeling;
  aksjonspunkt: Aksjonspunkt;
}

export const DekningradApForm = ({ ytelseFordeling, aksjonspunkt }: Props) => {
  const { submitCallback, alleMerknaderFraBeslutter, fagsak, isReadOnly } = usePanelDataContext<AvklarDekningsgradAp>();

  const formMethods = useForm<FormValues>({
    defaultValues: {
      dekningsgrad: ytelseFordeling.dekningsgrader.avklartDekningsgrad ?? undefined,
      begrunnelse: aksjonspunkt.begrunnelse ?? '',
    },
  });
  const { annenPart: dgAnnenpart, søker: dgSøker } = ytelseFordeling.dekningsgrader;

  const erAksjonspunktApent = aksjonspunkt.status === 'OPPR';

  const erIkkeGodkjentAvBeslutter = !!alleMerknaderFraBeslutter[aksjonspunkt.definisjon]?.notAccepted;

  return (
    <VStack gap="space-16">
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
          <VStack gap="space-40">
            <HStack gap="space-16">
              <Box background="brand-blue-moderate" padding="space-20" borderColor="neutral" borderRadius="medium">
                <VStack gap="space-8">
                  <HStack gap="space-16" align="center">
                    {finnIkonForKjønn(fagsak.bruker.kjønn)}
                    <VStack gap="space-0">
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
                  <Heading size="xsmall" level="3">
                    <FormattedMessage id="DekningradApForm.HarValgt" values={{ dekningsgrad: dgSøker.dekningsgrad }} />
                  </Heading>
                </VStack>
              </Box>
              {fagsak.annenPart && (
                <Box background="brand-blue-moderate" padding="space-20" borderColor="neutral" borderRadius="medium">
                  <VStack gap="space-8">
                    <HStack gap="space-16" align="center">
                      {finnIkonForKjønn(fagsak.annenPart.kjønn)}
                      <VStack gap="space-0">
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
                    <Heading size="xsmall" level="3">
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
              legend={<FormattedMessage id="DekningradApForm.HvilkenDekningsgrad" />}
              validate={[required]}
              readOnly={isReadOnly}
            >
              <Radio value={80} size="small">
                <FormattedMessage id="DekningradApForm.80" />
              </Radio>
              <Radio value={100} size="small">
                <FormattedMessage id="DekningradApForm.100" />
              </Radio>
            </RhfRadioGroup>
            <RhfTextarea
              name="begrunnelse"
              control={formMethods.control}
              label={<FormattedMessage id="DekningradApForm.Begrunnelse" />}
              validate={[required, minLength3, maxLength1500, hasValidText]}
              maxLength={1500}
              readOnly={isReadOnly}
            />
            <div>
              <Button
                variant="primary"
                size="small"
                disabled={isReadOnly || !formMethods.formState.isDirty || formMethods.formState.isSubmitting}
                loading={formMethods.formState.isSubmitting}
              >
                <FormattedMessage id="DekningradApForm.Bekreft" />
              </Button>
            </div>
          </VStack>
        </RhfForm>
      </AksjonspunktBox>
      {!erIkkeGodkjentAvBeslutter && !erAksjonspunktApent && <hr className={styles['hr']} />}
    </VStack>
  );
};
