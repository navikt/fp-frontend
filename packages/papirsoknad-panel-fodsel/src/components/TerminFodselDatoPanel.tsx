import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import moment from 'moment';
import { Undertekst, Element } from 'nav-frontend-typografi';
import { SkjemaGruppe } from 'nav-frontend-skjema';
import Alertstripe from 'nav-frontend-alertstriper';

import {
  FlexColumn, FlexContainer, FlexRow, ArrowBox, BorderBox, VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import {
  DatepickerField, InputField, NavFieldGroup, RadioGroupField, RadioOption,
} from '@fpsak-frontend/form';
import {
  dateBeforeOrEqual,
  dateBeforeOrEqualToToday,
  hasValidDate,
  hasValidInteger,
  ISO_DATE_FORMAT,
  maxValue,
  minValue,
  required,
} from '@fpsak-frontend/utils';

import styles from './terminFodselDatoPanel.less';

interface PureOwnProps {
  readOnly: boolean;
  erForeldrepenger?: boolean;
  form: string;
}

interface MappedOwnProps {
  erBarnetFodt?: boolean;
}

export type FormValues = {
  termindato?: string;
  terminbekreftelseDato?: string;
  antallBarnFraTerminbekreftelse?: number;
  foedselsDato?: string;
  antallBarn?: number;
  erBarnetFodt?: boolean;
}

interface StaticFunctions {
  validate?: (values: FormValues) => any;
}

/*
 * TerminFodselDatoPanel
 *
 * Form som brukes for registrere termin i papir soknad.
 */
export const TerminFodselDatoPanelImpl: FunctionComponent<PureOwnProps & MappedOwnProps> & StaticFunctions = ({
  readOnly,
  erBarnetFodt,
  erForeldrepenger,
}) => (
  <BorderBox>
    <div className={styles.flexContainer}>
      <NavFieldGroup errorMessageName="terminEllerFoedsel">
        <SkjemaGruppe legend={<FormattedMessage id="Registrering.TerminOgFodsel" />}>
          <Undertekst><FormattedMessage id="Registrering.Termin.Fodt" /></Undertekst>
          <VerticalSpacer eightPx />
          <RadioGroupField name="erBarnetFodt" readOnly={readOnly} validate={[required]}>
            <RadioOption label={<FormattedMessage id="Registrering.Fodsel.ErFodt" />} value />
            <RadioOption label={<FormattedMessage id="Registrering.Fodsel.ErIkkeFodt" />} value={false} />
          </RadioGroupField>
          {erBarnetFodt === false
          && (
            <ArrowBox alignOffset={64}>
              <div className={styles.row}>
                <div className={styles.col}>
                  <DatepickerField
                    name="termindato"
                    label={{ id: 'Registrering.Termindato' }}
                    readOnly={readOnly}
                  />
                </div>
                <div className={styles.col}>
                  <InputField
                    name="antallBarnFraTerminbekreftelse"
                    label={{ id: 'Registrering.AntallBarn' }}
                    bredde="XS"
                    readOnly={readOnly}
                  />
                </div>
              </div>
              <div className={styles.skjemaelement}>
                <DatepickerField
                  name="terminbekreftelseDato"
                  label={{ id: 'Registrering.UtstedtDato' }}
                  readOnly={readOnly}
                />
              </div>
            </ArrowBox>
          )}
          { erBarnetFodt && (
            <ArrowBox alignOffset={0}>
              <FlexContainer>
                <FlexRow>
                  <FlexColumn>
                    <DatepickerField
                      name="foedselsDato"
                      label={{ id: 'Registrering.Fodselsdato' }}
              /* foedselsDato is array in DTO data model, so we transform the value to/from the store/input */
                      format={(valueFromStore) => (valueFromStore && valueFromStore.length ? valueFromStore[0] : valueFromStore)}
                      // @ts-ignore Fiks
                      parse={(valueFromInput) => (valueFromInput ? [valueFromInput] : valueFromInput)}
                      readOnly={readOnly}
                    />
                  </FlexColumn>
                  <FlexColumn>
                    <InputField
                      name="antallBarn"
                      label={{ id: 'Registrering.AntallBarn' }}
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
                      <DatepickerField
                        name="termindato"
                        label={{ id: 'Registrering.Termindato' }}
                        readOnly={readOnly}
                      />
                    </FlexColumn>
                    <FlexColumn>
                      <DatepickerField
                        name="terminbekreftelseDato"
                        label={{ id: 'Registrering.UtstedtDato' }}
                        readOnly={readOnly}
                      />
                    </FlexColumn>
                  </FlexRow>
                </>
                )}
              </FlexContainer>
            </ArrowBox>
          )}
        </SkjemaGruppe>
      </NavFieldGroup>
    </div>
  </BorderBox>
);

TerminFodselDatoPanelImpl.defaultProps = {
  erForeldrepenger: false,
};

const mapStateToProps = (state: any, initialProps: PureOwnProps): MappedOwnProps => ({
  erBarnetFodt: formValueSelector(initialProps.form)(state, 'erBarnetFodt'),
});

const TerminFodselDatoPanel = connect(mapStateToProps)(TerminFodselDatoPanelImpl);

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

export default TerminFodselDatoPanel;
