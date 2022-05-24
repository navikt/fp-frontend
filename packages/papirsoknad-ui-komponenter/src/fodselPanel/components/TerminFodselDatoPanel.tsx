import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Undertekst, Element } from 'nav-frontend-typografi';
import { SkjemaGruppe } from 'nav-frontend-skjema';
import Alertstripe from 'nav-frontend-alertstriper';
import {
  Datepicker, InputField, RadioGroupField, RadioOption, formHooks,
} from '@navikt/ft-form-hooks';
import {
  ArrowBox, BorderBox, VerticalSpacer, FlexColumn, FlexContainer, FlexRow,
} from '@navikt/ft-ui-komponenter';
import {
  required,
} from '@navikt/ft-form-validators';

import styles from './terminFodselDatoPanel.less';

export type FormValues = {
  termindato?: string;
  terminbekreftelseDato?: string;
  antallBarnFraTerminbekreftelse?: number;
  foedselsDato?: string;
  antallBarn?: number;
  erBarnetFodt?: boolean;
}

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

  const { watch } = formHooks.useFormContext<FormValues>();

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
              <div className={styles.row}>
                <div className={styles.col}>
                  <Datepicker
                    name="termindato"
                    label={intl.formatMessage({ id: 'Registrering.Termindato' })}
                    isReadOnly={readOnly}
                  />
                </div>
                <div className={styles.col}>
                  <InputField
                    name="antallBarnFraTerminbekreftelse"
                    label={intl.formatMessage({ id: 'Registrering.AntallBarn' })}
                    bredde="XS"
                    readOnly={readOnly}
                  />
                </div>
              </div>
              <div className={styles.skjemaelement}>
                <Datepicker
                  name="terminbekreftelseDato"
                  label={intl.formatMessage({ id: 'Registrering.UtstedtDato' })}
                  isReadOnly={readOnly}
                />
              </div>
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
                      format={(valueFromStore) => (valueFromStore && valueFromStore.length ? valueFromStore[0] : valueFromStore)}
                      // @ts-ignore Fiks
                      parse={(valueFromInput) => (valueFromInput ? [valueFromInput] : valueFromInput)}
                      isReadOnly={readOnly}
                    />
                  </FlexColumn>
                  <FlexColumn>
                    <InputField
                      name="antallBarn"
                      label={intl.formatMessage({ id: 'Registrering.AntallBarn' })}
                      bredde="XS"
                      readOnly={readOnly}
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
                        />
                      </FlexColumn>
                      <FlexColumn>
                        <Datepicker
                          name="terminbekreftelseDato"
                          label={intl.formatMessage({ id: 'Registrering.UtstedtDato' })}
                          isReadOnly={readOnly}
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

/*
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

const validateTermin = (values: FormValues): any => ({
  termindato: required(values.termindato) || hasValidDate(values.termindato),

  terminbekreftelseDato: (
    hasValidDate(values.terminbekreftelseDato)
    || dateBeforeOrEqual(getLatestTerminbekreftelseDato(values.termindato))(values.terminbekreftelseDato)
  ),

  antallBarnFraTerminbekreftelse: (
    required(values.antallBarnFraTerminbekreftelse)
    || hasValidInteger(values.antallBarnFraTerminbekreftelse)
    || minValue(1)(values.antallBarnFraTerminbekreftelse)
    || maxValue(9)(values.antallBarnFraTerminbekreftelse)
  ),
});

const validateFodsel = (values: FormValues) => ({
  foedselsDato: (
    required(values.foedselsDato)
    || required(values.foedselsDato[0])
    || hasValidDate(values.foedselsDato[0])
    || dateBeforeOrEqualToToday(values.foedselsDato[0])
  ),

  // since foedselsDato is array in the DTO due to adoption
  antallBarn: (
    required(values.antallBarn)
    || hasValidInteger(values.antallBarn)
    || minValue(1)(values.antallBarn)
    || maxValue(9)(values.antallBarn)
  ),
});

TerminFodselDatoPanel.validate = (values: FormValues) => {
  if (values.erBarnetFodt) {
    return validateFodsel(values);
  }
  return validateTermin(values);
};
*/

export default TerminFodselDatoPanel;
