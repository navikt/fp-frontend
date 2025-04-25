import { useFormContext, type UseFormGetValues } from 'react-hook-form';
import { RawIntlProvider } from 'react-intl';

import { Alert, Heading, HStack, Label, VStack } from '@navikt/ds-react';
import { RhfDatepicker, RhfTextField } from '@navikt/ft-form-hooks';
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

import { ErBarnetFodt } from './components/ErBarnetFodt';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

export type FormValues = {
  termindato?: string;
  terminbekreftelseDato?: string;
  antallBarnFraTerminbekreftelse?: number;
  foedselsDato?: string;
  antallBarn?: number;
  erBarnetFodt?: boolean;
};

export type TransformFormValues =
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
        <VStack gap="4">
          <Heading size="small">{intl.formatMessage({ id: 'Registrering.TerminOgFodsel.Tittel' })}</Heading>

          <ErBarnetFodt readOnly={readOnly} />
          {erBarnetFodt !== undefined && (
            <VStack gap="4">
              {erBarnetFodt === false && (
                <>
                  <HStack gap="4">
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
                        const parsedValue = parseInt(value.toString(), 10);
                        return isNaN(parsedValue) ? value : parsedValue;
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
                  <HStack gap="4">
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
                        const parsedValue = parseInt(value.toString(), 10);
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
