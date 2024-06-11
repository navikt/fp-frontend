import { BodyShort, Box, Button, HStack, Heading, VStack } from '@navikt/ds-react';
import { Form, RadioGroupPanel, TextAreaField } from '@navikt/ft-form-hooks';
import React, { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { Aksjonspunkt, Fagsak, Soknad } from '@navikt/fp-types';
import { AvklarDekningsgradAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import dayjs from 'dayjs';
import { NavBrukerKjonn } from '@navikt/ft-kodeverk';
import WomanIcon from '../../icons/Woman';
import ManIcon from '../../icons/Man';
import UnknownIcon from '../../icons/Unknown';

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

interface OwnProps {
  søknad: Soknad;
  fagsak: Fagsak;
  aksjonspunkt: Aksjonspunkt;
  submitCallback: (data: AvklarDekningsgradAp) => Promise<void>;
  readOnly: boolean;
}

const DekningradApForm: FunctionComponent<OwnProps> = ({ søknad, fagsak, aksjonspunkt, submitCallback, readOnly }) => {
  const intl = useIntl();
  const formMethods = useForm<FormValues>({
    defaultValues: {
      dekningsgrad: søknad.oppgittFordeling.dekningsgrader.avklartDekningsgrad,
      begrunnelse: aksjonspunkt.begrunnelse,
    },
  });

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) =>
        submitCallback({
          kode: AksjonspunktCode.AVKLAR_DEKNINGSGRAD,
          begrunnelse: values.begrunnelse,
          dekningsgrad: values.dekningsgrad,
        })
      }
    >
      <VStack gap="6">
        <HStack gap="4">
          <Box background="surface-selected" padding="5" borderColor="border-default" borderRadius="medium">
            <VStack gap="2">
              <HStack gap="4">
                {finnIkonForKjønn(fagsak.bruker.kjønn)}
                <VStack gap="2">
                  <BodyShort size="medium">{fagsak.bruker.navn}</BodyShort>
                  <BodyShort size="small">
                    <FormattedMessage
                      id="DekningradApForm.SøknadSendt"
                      values={{
                        dato: dayjs(søknad.oppgittFordeling.dekningsgrader.søker.søknadsdato).format('D MMMM YYYY'),
                      }}
                    />
                  </BodyShort>
                </VStack>
              </HStack>
              <Heading size="xsmall">
                <FormattedMessage
                  id="DekningradApForm.HarValgt"
                  values={{ dekningsgrad: søknad.oppgittFordeling.dekningsgrader.søker.dekningsgrad }}
                />
              </Heading>
            </VStack>
          </Box>
          {fagsak.annenPart && (
            <Box background="surface-selected" padding="5" borderColor="border-default" borderRadius="medium">
              <VStack gap="2">
                <HStack gap="4">
                  {finnIkonForKjønn(fagsak.annenPart.kjønn)}
                  <VStack gap="2">
                    <BodyShort size="medium">{fagsak.annenPart?.navn} </BodyShort>
                    <BodyShort size="small">
                      <FormattedMessage
                        id="DekningradApForm.SøknadSendt"
                        values={{
                          dato: dayjs(søknad.oppgittFordeling.dekningsgrader.annenPart.søknadsdato).format(
                            'D MMMM YYYY',
                          ),
                        }}
                      />
                    </BodyShort>
                  </VStack>
                </HStack>
                <Heading size="xsmall">
                  <FormattedMessage
                    id="DekningradApForm.HarValgt"
                    values={{ dekningsgrad: søknad.oppgittFordeling.dekningsgrader.annenPart.dekningsgrad }}
                  />
                </Heading>
              </VStack>
            </Box>
          )}
        </HStack>
        <RadioGroupPanel
          name="dekningsgrad"
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
        <TextAreaField
          name="begrunnelse"
          label={<FormattedMessage id="DekningradApForm.Begrunnelse" />}
          validate={[required, minLength3, maxLength1500, hasValidText]}
          maxLength={1500}
          readOnly={readOnly}
        />
        <HStack>
          <Button
            variant="primary"
            size="small"
            disabled={readOnly || !formMethods.formState.isDirty || formMethods.formState.isSubmitting}
            loading={formMethods.formState.isSubmitting}
          >
            <FormattedMessage id="DekningradApForm.Bekreft" />
          </Button>
        </HStack>
      </VStack>
    </Form>
  );
};

export default DekningradApForm;
