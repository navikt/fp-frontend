import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
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

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './terminFodselDatoPanel.less' ... Remove this comment to see the full error message
import styles from './terminFodselDatoPanel.less';

type OwnTerminFodselDatoPanelImplProps = {
    intl: {};
    readOnly: boolean;
    erBarnetFodt?: boolean;
    erForeldrepenger?: boolean;
};

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'TerminFodselDatoPanelImplProps' circul... Remove this comment to see the full error message
type TerminFodselDatoPanelImplProps = OwnTerminFodselDatoPanelImplProps & typeof TerminFodselDatoPanelImpl.defaultProps;

/*
 * TerminFodselDatoPanel
 *
 * Form som brukes for registrere termin i papir soknad.
 *
 */

// @ts-expect-error ts-migrate(7022) FIXME: 'TerminFodselDatoPanelImpl' implicitly has type 'a... Remove this comment to see the full error message
export const TerminFodselDatoPanelImpl = ({
  readOnly, intl, erBarnetFodt, erForeldrepenger,
}: TerminFodselDatoPanelImplProps) => (
  <BorderBox>
    <div className={styles.flexContainer}>
      <NavFieldGroup errorMessageName="terminEllerFoedsel">
        <SkjemaGruppe legend={intl.formatMessage({ id: 'Registrering.TerminOgFodsel' })}>
          <Undertekst><FormattedMessage id="Registrering.Termin.Fodt" /></Undertekst>
          <VerticalSpacer eightPx />
          {/* @ts-expect-error ts-migrate(2322) FIXME: Type '{ id: string; }[]' is not assignable to type... Remove this comment to see the full error message */}
          <RadioGroupField name="erBarnetFodt" readOnly={readOnly} validate={[required]}>
            <RadioOption label={intl.formatMessage({ id: 'Registrering.Fodsel.ErFodt' })} value />
            <RadioOption label={intl.formatMessage({ id: 'Registrering.Fodsel.ErIkkeFodt' })} value={false} />
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
                      // @ts-expect-error ts-migrate(2322) FIXME: Type 'string[]' is not assignable to type 'string'... Remove this comment to see the full error message
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
  erBarnetFodt: undefined,
  erForeldrepenger: false,
};

const mapStateToProps = (state: any, initialProps: any) => ({
  erBarnetFodt: formValueSelector(initialProps.form)(state, 'erBarnetFodt'),
});

const TerminFodselDatoPanel = injectIntl(connect(mapStateToProps)(TerminFodselDatoPanelImpl));

const getToday = () => moment().startOf('day');
const getEarliestTerminDato = () => getToday().subtract(3, 'weeks');
const getLatestTerminbekreftelseDato = (termindato: any) => {
  const earliestTerminDato = getEarliestTerminDato();
  const actualTermindato = termindato ? moment(termindato, ISO_DATE_FORMAT) : undefined;
  const today = getToday();
  if (actualTermindato && actualTermindato.isSameOrBefore(today)) {
    return (actualTermindato.isAfter(earliestTerminDato) ? actualTermindato : earliestTerminDato).subtract(1, 'days');
  }
  return today;
};

const validateTermin = (values: any) => ({
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

const validateFodsel = (values: any) => ({
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

// @ts-expect-error ts-migrate(2339) FIXME: Property 'validate' does not exist on type 'FC<Wit... Remove this comment to see the full error message
TerminFodselDatoPanel.validate = (values: any) => {
  if (values.erBarnetFodt) {
    return validateFodsel(values);
  }
  return validateTermin(values);
};

export default TerminFodselDatoPanel;
