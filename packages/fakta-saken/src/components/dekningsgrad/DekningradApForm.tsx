import { BodyShort, Box, Button, HStack, VStack } from '@navikt/ds-react';
import { Form, RadioGroupPanel, TextAreaField } from '@navikt/ft-form-hooks';
import React, { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { Aksjonspunkt, Fagsak, Soknad } from '@navikt/fp-types';
import { AvklarDekningsgradAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import dayjs from 'dayjs';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

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
          <Box background="surface-alt-3-subtle" padding="5" borderColor="border-default" borderRadius="medium">
            <VStack gap="2">
              <BodyShort size="small">{fagsak.bruker.navn}</BodyShort>
              <BodyShort size="small">
                <FormattedMessage
                  id="DekningradApForm.SøknadSendt"
                  values={{
                    dato: dayjs(søknad.oppgittFordeling.dekningsgrader.søker.søknadsdato).format('D MMMM YYYY'),
                  }}
                />
              </BodyShort>
              <BodyShort size="small">
                <FormattedMessage
                  id="DekningradApForm.HarValgt"
                  values={{ dekningsgrad: søknad.oppgittFordeling.dekningsgrader.søker.dekningsgrad }}
                />
              </BodyShort>
            </VStack>
          </Box>
          <Box background="surface-alt-3-subtle" padding="5" borderColor="border-default" borderRadius="medium">
            <VStack gap="2">
              <BodyShort size="small">{fagsak.annenPart?.navn} </BodyShort>
              <BodyShort size="small">
                <FormattedMessage
                  id="DekningradApForm.SøknadSendt"
                  values={{
                    dato: dayjs(søknad.oppgittFordeling.dekningsgrader.søker.søknadsdato).format('D MMMM YYYY'),
                  }}
                />
              </BodyShort>
              <BodyShort size="small">
                <FormattedMessage
                  id="DekningradApForm.HarValgt"
                  values={{ dekningsgrad: søknad.oppgittFordeling.dekningsgrader.annenPart.dekningsgrad }}
                />
              </BodyShort>
            </VStack>
          </Box>
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
          <Button variant="primary" size="small">
            <FormattedMessage id="DekningradApForm.Bekreft" />
          </Button>
        </HStack>
      </VStack>
    </Form>
  );
};

export default DekningradApForm;
