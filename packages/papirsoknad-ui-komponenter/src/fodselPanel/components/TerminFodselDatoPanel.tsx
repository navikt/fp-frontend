import React from 'react';
import { useFormContext,UseFormGetValues } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Alert, Heading,Label } from '@navikt/ds-react';
import { Datepicker, InputField, RadioGroupPanel } from '@navikt/ft-form-hooks';
import {
  dateBeforeOrEqual,
  dateBeforeOrEqualToToday,
  hasValidDate,
  hasValidInteger,
  maxValue,
  minValue,
  required,
} from '@navikt/ft-form-validators';
import { ArrowBox, BorderBox, FlexColumn, FlexContainer, FlexRow,VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

dayjs.extend(isSameOrBefore);

const validateMinValue1 = minValue(1);
const validateMaxValue9 = maxValue(9);

export type FormValues = {
  termindato?: string;
  terminbekreftelseDato?: string;
  antallBarnFraTerminbekreftelse?: number;
  foedselsDato?: string;
  antallBarn?: number;
  erBarnetFodt?: boolean;
};

const getToday = (): dayjs.Dayjs => dayjs().startOf('day');
const getEarliestTerminDato = (): dayjs.Dayjs => getToday().subtract(3, 'weeks');
const getLatestTerminbekreftelseDato = (termindato?: string): dayjs.Dayjs => {
  const earliestTerminDato = getEarliestTerminDato();
  const actualTermindato = termindato ? dayjs(termindato, ISO_DATE_FORMAT) : undefined;
  const today = getToday();
  if (actualTermindato && actualTermindato.isSameOrBefore(today)) {
    return (actualTermindato.isAfter(earliestTerminDato) ? actualTermindato : earliestTerminDato).subtract(1, 'days');
  }
  return today;
};

const validateTermin = (getValues: UseFormGetValues<FormValues>) => (terminbekreftelseDato: string) =>
  dateBeforeOrEqual(getLatestTerminbekreftelseDato(getValues('termindato')))(terminbekreftelseDato);

interface Props {
  readOnly: boolean;
  erForeldrepenger: boolean;
}

/*
 * TerminFodselDatoPanel
 *
 * Form som brukes for registrere termin i papir soknad.
 */
export const TerminFodselDatoPanel = ({ readOnly, erForeldrepenger }: Props) => {
  const intl = useIntl();

  const {
    watch,
    getValues,
    trigger,
    formState: { isSubmitted },
  } = useFormContext<FormValues>();

  const erBarnetFodt = watch('erBarnetFodt');

  return (
    <BorderBox>
      <Heading size="small">{intl.formatMessage({ id: 'Registrering.TerminOgFodsel' })}</Heading>
      <VerticalSpacer sixteenPx />
      <RadioGroupPanel
        name="erBarnetFodt"
        label={<FormattedMessage id="Registrering.Termin.Fodt" />}
        validate={[required]}
        isReadOnly={readOnly}
        isHorizontal
        isTrueOrFalseSelection
        radios={[
          {
            label: <FormattedMessage id="Registrering.Fodsel.ErFodt" />,
            value: 'true',
          },
          {
            label: <FormattedMessage id="Registrering.Fodsel.ErIkkeFodt" />,
            value: 'false',
          },
        ]}
      />
      {erBarnetFodt === false && (
        <>
          <VerticalSpacer eightPx />
          <ArrowBox alignOffset={64}>
            <FlexContainer>
              <FlexRow>
                <FlexColumn>
                  <Datepicker
                    name="termindato"
                    label={intl.formatMessage({ id: 'Registrering.Termindato' })}
                    isReadOnly={readOnly}
                    validate={[required, hasValidDate]}
                    onChange={() => (isSubmitted ? trigger() : undefined)}
                  />
                </FlexColumn>
                <FlexColumn>
                  <InputField
                    name="antallBarnFraTerminbekreftelse"
                    label={intl.formatMessage({ id: 'Registrering.AntallBarn' })}
                    readOnly={readOnly}
                    validate={[required, hasValidInteger, validateMinValue1, validateMaxValue9]}
                  />
                </FlexColumn>
              </FlexRow>
              <VerticalSpacer sixteenPx />
              <FlexRow>
                <FlexColumn>
                  <Datepicker
                    name="terminbekreftelseDato"
                    label={intl.formatMessage({ id: 'Registrering.UtstedtDato' })}
                    isReadOnly={readOnly}
                    validate={[hasValidDate, validateTermin(getValues)]}
                  />
                </FlexColumn>
              </FlexRow>
            </FlexContainer>
          </ArrowBox>
        </>
      )}
      {erBarnetFodt && (
        <>
          <VerticalSpacer eightPx />
          <ArrowBox alignOffset={0}>
            <FlexContainer>
              <FlexRow>
                <FlexColumn>
                  <Datepicker
                    name="foedselsDato"
                    label={intl.formatMessage({ id: 'Registrering.Fodselsdato' })}
                    isReadOnly={readOnly}
                    validate={[required, hasValidDate, dateBeforeOrEqualToToday]}
                  />
                </FlexColumn>
                <FlexColumn>
                  <InputField
                    name="antallBarn"
                    label={intl.formatMessage({ id: 'Registrering.AntallBarn' })}
                    readOnly={readOnly}
                    validate={[required, hasValidInteger, validateMinValue1, validateMaxValue9]}
                  />
                </FlexColumn>
              </FlexRow>
              {erForeldrepenger && (
                <>
                  <VerticalSpacer sixteenPx />
                  <Alert size="small" variant="info">
                    <Label size="small">
                      <FormattedMessage id="Registrering.RettTilPrematuruker" />
                    </Label>
                  </Alert>
                </>
              )}
              <VerticalSpacer sixteenPx />
              <FlexRow>
                <FlexColumn>
                  <Datepicker
                    name="termindato"
                    label={intl.formatMessage({ id: 'Registrering.Termindato' })}
                    isReadOnly={readOnly}
                    validate={[hasValidDate]}
                  />
                </FlexColumn>
              </FlexRow>
            </FlexContainer>
          </ArrowBox>
        </>
      )}
    </BorderBox>
  );
};
