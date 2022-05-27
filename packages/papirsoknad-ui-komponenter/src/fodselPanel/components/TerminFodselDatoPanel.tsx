import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { UseFormGetValues } from 'react-hook-form';
import moment from 'moment';
import { Undertekst, Element } from 'nav-frontend-typografi';
import { SkjemaGruppe } from 'nav-frontend-skjema';
import Alertstripe from 'nav-frontend-alertstriper';
import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import {
  Datepicker, InputField, RadioGroupField, RadioOption, formHooks,
} from '@navikt/ft-form-hooks';
import {
  ArrowBox, BorderBox, VerticalSpacer, FlexColumn, FlexContainer, FlexRow,
} from '@navikt/ft-ui-komponenter';
import {
  dateBeforeOrEqual,
  dateBeforeOrEqualToToday,
  hasValidDate,
  hasValidInteger,
  maxValue,
  minValue,
  required,
} from '@navikt/ft-form-validators';

import styles from './terminFodselDatoPanel.less';

const validateMinValue1 = minValue(1);
const validateMaxValue9 = maxValue(9);

export type FormValues = {
  termindato?: string;
  terminbekreftelseDato?: string;
  antallBarnFraTerminbekreftelse?: number;
  foedselsDato?: string;
  antallBarn?: number;
  erBarnetFodt?: boolean;
}

const getToday = (): moment.Moment => moment().startOf('day');
const getEarliestTerminDato = (): moment.Moment => getToday().subtract(3, 'weeks');
const getLatestTerminbekreftelseDato = (termindato: string): moment.Moment => {
  const earliestTerminDato = getEarliestTerminDato();
  const actualTermindato = termindato ? moment(termindato, ISO_DATE_FORMAT) : undefined;
  const today = getToday();
  if (actualTermindato && actualTermindato.isSameOrBefore(today)) {
    return (actualTermindato.isAfter(earliestTerminDato) ? actualTermindato : earliestTerminDato).subtract(1, 'days');
  }
  return today;
};

const validateTermin = (
  getValues: UseFormGetValues<FormValues>,
) => (
  terminbekreftelseDato: string,
) => dateBeforeOrEqual(getLatestTerminbekreftelseDato(getValues('termindato')))(terminbekreftelseDato);

interface OwnProps {
  readOnly: boolean;
  erForeldrepenger?: boolean;
}

/*
 * TerminFodselDatoPanel
 *
 * Form som brukes for registrere termin i papir soknad.
 */
const TerminFodselDatoPanel: FunctionComponent<OwnProps> = ({
  readOnly,
  erForeldrepenger = false,
}) => {
  const intl = useIntl();

  const {
    watch, getValues, trigger, formState: { isSubmitted },
  } = formHooks.useFormContext<FormValues>();

  const erBarnetFodt = watch('erBarnetFodt');

  return (
    <BorderBox>
      <div className={styles.flexContainer}>
        <SkjemaGruppe legend={<FormattedMessage id="Registrering.TerminOgFodsel" />}>
          <Undertekst><FormattedMessage id="Registrering.Termin.Fodt" /></Undertekst>
          <VerticalSpacer eightPx />
          <RadioGroupField name="erBarnetFodt" readOnly={readOnly} validate={[required]} parse={(value: string) => value === 'true'}>
            <RadioOption label={<FormattedMessage id="Registrering.Fodsel.ErFodt" />} value="true" />
            <RadioOption label={<FormattedMessage id="Registrering.Fodsel.ErIkkeFodt" />} value="false" />
          </RadioGroupField>
          {erBarnetFodt === false && (
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
                      bredde="XS"
                      readOnly={readOnly}
                      validate={[required, hasValidInteger, validateMinValue1, validateMaxValue9]}
                    />
                  </FlexColumn>
                </FlexRow>
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
          )}
          {erBarnetFodt && (
            <ArrowBox alignOffset={0}>
              <FlexContainer>
                <FlexRow>
                  <FlexColumn>
                    <Datepicker
                      name="foedselsDato"
                      label={intl.formatMessage({ id: 'Registrering.Fodselsdato' })}
                      /* foedselsDato is array in DTO data model, so we transform the value to/from the store/input */
                      format={(valueFromStore) => (valueFromStore && valueFromStore.length
                        ? moment(valueFromStore[0]).format(DDMMYYYY_DATE_FORMAT)
                        : moment(valueFromStore).format(DDMMYYYY_DATE_FORMAT))}
                      // @ts-ignore Fiks
                      parse={(valueFromInput) => (valueFromInput ? [valueFromInput] : valueFromInput)}
                      isReadOnly={readOnly}
                      validate={[required, hasValidDate, dateBeforeOrEqualToToday]}
                    />
                  </FlexColumn>
                  <FlexColumn>
                    <InputField
                      name="antallBarn"
                      label={intl.formatMessage({ id: 'Registrering.AntallBarn' })}
                      bredde="XS"
                      readOnly={readOnly}
                      validate={[required, hasValidInteger, validateMinValue1, validateMaxValue9]}
                    />
                  </FlexColumn>
                </FlexRow>
                {erForeldrepenger && (
                  <>
                    <VerticalSpacer eightPx />
                    <Alertstripe type="info" form="inline">
                      <Element>
                        <FormattedMessage id="Registrering.RettTilPrematuruker" />
                      </Element>
                    </Alertstripe>
                    <VerticalSpacer eightPx />
                    <FlexRow>
                      <FlexColumn>
                        <Datepicker
                          name="termindato"
                          label={intl.formatMessage({ id: 'Registrering.Termindato' })}
                          isReadOnly={readOnly}
                          validate={[hasValidDate]}
                        />
                      </FlexColumn>
                      <FlexColumn>
                        <Datepicker
                          name="terminbekreftelseDato"
                          label={intl.formatMessage({ id: 'Registrering.UtstedtDato' })}
                          isReadOnly={readOnly}
                          validate={[hasValidDate]}
                        />
                      </FlexColumn>
                    </FlexRow>
                  </>
                )}
              </FlexContainer>
            </ArrowBox>
          )}
        </SkjemaGruppe>
      </div>
    </BorderBox>
  );
};

export default TerminFodselDatoPanel;
