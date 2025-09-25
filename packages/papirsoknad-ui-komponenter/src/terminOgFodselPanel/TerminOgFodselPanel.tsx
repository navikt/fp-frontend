import { useFormContext, type UseFormGetValues } from 'react-hook-form';
import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { Alert, Heading, HStack, Label, Radio, VStack } from '@navikt/ds-react';
import { RhfDatepicker, RhfRadioGroup, RhfTextField } from '@navikt/ft-form-hooks';
import {
  dateAfterOrEqual,
  dateBeforeOrEqual,
  dateBeforeOrEqualToToday,
  hasValidDate,
  hasValidInteger,
  required,
} from '@navikt/ft-form-validators';
import { BorderBox } from '@navikt/ft-ui-komponenter';
import { createIntl } from '@navikt/ft-utils';

import {
  maxFodselsdato,
  maxTerminbekreftelseDato,
  maxTermindato,
  minFodselsdato,
  minTerminbekreftelseDato,
  minTermindato,
  terminBekreftelseBeforeTodayOrTermindato,
  terminErRundtFodselsdato,
  validateMaxAntallBarn,
  validateMinAntallBarn,
} from '@navikt/fp-utils';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

type FormValues = {
  termindato?: string;
  terminbekreftelseDato?: string;
  antallBarnFraTerminbekreftelse?: number;
  foedselsDato?: string;
  antallBarn?: number;
  erBarnetFodt?: boolean;
};

type TransformFormValues =
  | {
      erBarnetFodt: false;
      termindato?: string;
      terminbekreftelseDato?: string;
      antallBarnFraTerminbekreftelse?: number;
    }
  | {
      erBarnetFodt: true;
      termindato?: string;
      foedselsDato?: string;
      antallBarn?: number;
    };

interface Props {
  readOnly: boolean;
  erForeldrepenger?: boolean;
}

const validateTermin = (getValues: UseFormGetValues<FormValues>) => (termindato: string) => {
  const fodselsdato = getValues('foedselsDato');

  return terminErRundtFodselsdato(fodselsdato, termindato);
};

const validerTerminBekreftelse =
  (getValues: UseFormGetValues<{ termindato?: string }>) => (terminbekreftelseDato: string) => {
    const termindato = getValues('termindato');
    return terminBekreftelseBeforeTodayOrTermindato(termindato, terminbekreftelseDato);
  };

export const TerminOgFodselPanel = ({ readOnly, erForeldrepenger = false }: Props) => {
  const { watch, getValues, control } = useFormContext<FormValues>();

  const erBarnetFodt = watch('erBarnetFodt');

  return (
    <RawIntlProvider value={intl}>
      <BorderBox>
        <VStack gap="space-16">
          <Heading size="small" level="3">
            {intl.formatMessage({ id: 'Registrering.TerminOgFodsel.Tittel' })}
          </Heading>
          <RhfRadioGroup
            name="erBarnetFodt"
            control={control}
            label={intl.formatMessage({ id: 'Registrering.TerminOgFodsel.ErBarnetFodt' })}
            validate={[required]}
            isReadOnly={readOnly}
          >
            <Radio value={true} size="small">
              <FormattedMessage id="Registrering.TerminOgFodsel.ErFodt" />
            </Radio>
            <Radio value={false} size="small">
              <FormattedMessage id="Registrering.TerminOgFodsel.ErIkkeFodt" />
            </Radio>
          </RhfRadioGroup>
          {erBarnetFodt !== undefined && (
            <VStack gap="space-16">
              {erBarnetFodt === false && (
                <>
                  <HStack gap="space-16">
                    <RhfDatepicker
                      name="termindato"
                      control={control}
                      label={intl.formatMessage({ id: 'Registrering.TerminOgFodsel.Termindato' })}
                      isReadOnly={readOnly}
                      fromDate={minTermindato().toDate()}
                      toDate={maxTermindato().toDate()}
                      defaultMonth={new Date()}
                      validate={[
                        required,
                        hasValidDate,
                        dateAfterOrEqual(minTermindato()),
                        dateBeforeOrEqual(maxTermindato()),
                      ]}
                    />
                    <RhfTextField
                      name="antallBarn"
                      control={control}
                      label={intl.formatMessage({ id: 'Registrering.TerminOgFodsel.AntallBarn' })}
                      readOnly={readOnly}
                      parse={value => {
                        const parsedValue = Number.parseInt(value.toString(), 10);
                        return Number.isNaN(parsedValue) ? value : parsedValue;
                      }}
                      validate={[required, hasValidInteger, validateMinAntallBarn, validateMaxAntallBarn]}
                    />
                  </HStack>
                  <RhfDatepicker
                    name="terminbekreftelseDato"
                    control={control}
                    label={intl.formatMessage({ id: 'Registrering.TerminOgFodsel.UtstedtDato' })}
                    isReadOnly={readOnly}
                    fromDate={minTerminbekreftelseDato().toDate()}
                    toDate={maxTerminbekreftelseDato().toDate()}
                    defaultMonth={new Date()}
                    validate={[hasValidDate, validerTerminBekreftelse(getValues)]}
                  />
                </>
              )}
              {erBarnetFodt === true && (
                <>
                  <HStack gap="space-16">
                    <RhfDatepicker
                      name="foedselsDato"
                      control={control}
                      label={intl.formatMessage({ id: 'Registrering.TerminOgFodsel.Fodselsdato' })}
                      isReadOnly={readOnly}
                      validate={[required, hasValidDate, dateAfterOrEqual(minFodselsdato()), dateBeforeOrEqualToToday]}
                      fromDate={minFodselsdato().toDate()}
                      toDate={maxFodselsdato().toDate()}
                    />
                    <RhfTextField
                      name="antallBarn"
                      control={control}
                      label={intl.formatMessage({ id: 'Registrering.TerminOgFodsel.AntallBarn' })}
                      readOnly={readOnly}
                      parse={value => {
                        const parsedValue = Number.parseInt(value.toString(), 10);
                        return Number.isNaN(parsedValue) ? value : parsedValue;
                      }}
                      validate={[required, hasValidInteger, validateMinAntallBarn, validateMaxAntallBarn]}
                    />
                  </HStack>
                  {erForeldrepenger && (
                    <Alert size="small" variant="info">
                      <Label size="small">
                        {intl.formatMessage({ id: 'Registrering.TerminOgFodsel.RettTilPrematuruker' })}
                      </Label>
                    </Alert>
                  )}
                  <RhfDatepicker
                    name="termindato"
                    control={control}
                    label={intl.formatMessage({ id: 'Registrering.TerminOgFodsel.Termindato' })}
                    isReadOnly={readOnly}
                    validate={[
                      hasValidDate,
                      dateAfterOrEqual(minTermindato()),
                      dateBeforeOrEqual(maxTermindato()),
                      validateTermin(getValues),
                    ]}
                    fromDate={minTermindato().toDate()}
                    toDate={maxTermindato().toDate()}
                    defaultMonth={new Date()}
                  />
                </>
              )}
            </VStack>
          )}
        </VStack>
      </BorderBox>
    </RawIntlProvider>
  );
};

TerminOgFodselPanel.initialValues = (): FormValues => ({
  erBarnetFodt: undefined,
});

TerminOgFodselPanel.transformValues = ({
  antallBarn,
  erBarnetFodt,
  foedselsDato,
  termindato,
  terminbekreftelseDato,
}: FormValues): TransformFormValues =>
  erBarnetFodt
    ? {
        erBarnetFodt: true,
        termindato,
        foedselsDato,
        antallBarn,
      }
    : {
        erBarnetFodt: false,
        termindato,
        terminbekreftelseDato,
        antallBarnFraTerminbekreftelse: antallBarn,
      };
