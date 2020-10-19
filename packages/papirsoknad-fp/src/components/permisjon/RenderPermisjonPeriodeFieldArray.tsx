import React from 'react';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import { Undertekst } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';
import AlertStripe from 'nav-frontend-alertstriper';

import {
  FlexColumn, FlexContainer, FlexRow, PeriodFieldArray, VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import {
  dateAfterOrEqual,
  dateRangesNotOverlapping,
  hasValidDate,
  hasValidDecimal,
  isArrayEmpty,
  ISO_DATE_FORMAT,
  isRequiredMessage,
  maxValue,
  required,
} from '@fpsak-frontend/utils';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__prop-types... Remove this comment to see the full error message
import { kodeverkPropType } from '@fpsak-frontend/prop-types';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__kodeverk` ... Remove this comment to see the full error message
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__kodeverk` ... Remove this comment to see the full error message
import uttakPeriodeType from '@fpsak-frontend/kodeverk/src/uttakPeriodeType';
import {
  CheckboxField, DatepickerField, DecimalField, SelectField,
} from '@fpsak-frontend/form';

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './renderPermisjonPeriodeFieldA... Remove this comment to see the full error message
import styles from './renderPermisjonPeriodeFieldArray.less';

const maxValue100 = maxValue(100);

export const gyldigeUttakperioder = [uttakPeriodeType.FELLESPERIODE,
  uttakPeriodeType.FEDREKVOTE,
  uttakPeriodeType.FORELDREPENGER_FOR_FODSEL,
  uttakPeriodeType.FORELDREPENGER,
  uttakPeriodeType.MODREKVOTE];

const mapPeriodeTyper = (typer: any) => typer
  .filter(({
    kode,
  }: any) => gyldigeUttakperioder.includes(kode))
  .map(({
    kode,
    navn,
  }: any) => <option value={kode} key={kode}>{navn}</option>);

const mapAktiviteter = (aktiviteter: any) => aktiviteter
  .map(({
    kode,
    navn,
  }: any) => <option value={kode} key={kode}>{navn}</option>);

export const periodsWithNoMorsAktivitet = [
  uttakPeriodeType.FEDREKVOTE,
  uttakPeriodeType.FORELDREPENGER_FOR_FODSEL,
  uttakPeriodeType.MODREKVOTE];

const shouldDisableSelect = (selectedPeriodeTyper: any, index: any) => {
  if (typeof selectedPeriodeTyper === 'undefined' || typeof selectedPeriodeTyper[index] === 'undefined') {
    return true;
  }

  return periodsWithNoMorsAktivitet.includes(selectedPeriodeTyper[index])
    || selectedPeriodeTyper[index] === '';
};

const getLabel = (erForsteRad: any, id: any) => (erForsteRad ? { id } : '');

type RenderPermisjonPeriodeFieldArrayProps = {
    fields: {};
    meta: {};
    readOnly: boolean;
    periodeTyper: any; // TODO: kodeverkPropType
    morsAktivitetTyper: any; // TODO: kodeverkPropType
    sokerErMor: boolean;
    selectedPeriodeTyper: string[];
};

/**
 *  RenderPermisjonPeriodeFieldArray
 *
 * Presentasjonskomponent: Viser inputfelter for dato for bestemmelse av perioder med permijon.
 * Komponenten må rendres som komponenten til et FieldArray.
 */
export const RenderPermisjonPeriodeFieldArray = ({
  fields, meta, periodeTyper, morsAktivitetTyper, sokerErMor, readOnly, selectedPeriodeTyper,
}: RenderPermisjonPeriodeFieldArrayProps) => {
  if (morsAktivitetTyper.filter(({
    kode,
  }: any) => kode === '-').length === 0) { morsAktivitetTyper.unshift({ kode: '-', navn: '' }); }
  return (
    // @ts-expect-error ts-migrate(2740) FIXME: Type '{}' is missing the following properties from... Remove this comment to see the full error message
    <PeriodFieldArray readOnly={readOnly} fields={fields} meta={meta} emptyPeriodTemplate={{}}>
      {(periodeElementFieldId, index) => {
        const erForsteRad = (index === 0);
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'get' does not exist on type '{}'.
        const { periodeFom, harSamtidigUttak } = fields.get(index);
        const periodeFomForTidlig = periodeFom && moment(periodeFom).isBefore(moment('2019-01-01'));
        return (
          <div key={periodeElementFieldId}>
            <Row>
              <Column xs="12">
                <FlexContainer>
                  <FlexRow wrap>
                    <FlexColumn className={styles.selectFieldWidth}>
                      <SelectField
                        readOnly={readOnly}
                        name={`${periodeElementFieldId}.periodeType`}
                        bredde="m"
                        label={getLabel(erForsteRad, 'Registrering.Permisjon.periodeType')}
                        selectValues={mapPeriodeTyper(periodeTyper)}
                      />
                    </FlexColumn>
                    <FlexColumn>
                      <DatepickerField
                        readOnly={readOnly}
                        name={`${periodeElementFieldId}.periodeFom`}
                        // @ts-expect-error ts-migrate(2322) FIXME: Property 'defaultValue' does not exist on type 'In... Remove this comment to see the full error message
                        defaultValue={null}
                        label={getLabel(erForsteRad, 'Registrering.Permisjon.periodeFom')}
                      />
                    </FlexColumn>
                    <FlexColumn>
                      <DatepickerField
                        readOnly={readOnly}
                        name={`${periodeElementFieldId}.periodeTom`}
                        // @ts-expect-error ts-migrate(2322) FIXME: Property 'defaultValue' does not exist on type 'In... Remove this comment to see the full error message
                        defaultValue={null}
                        label={getLabel(erForsteRad, 'Registrering.Permisjon.periodeTom')}
                      />
                    </FlexColumn>
                    {!sokerErMor
                    && (
                    <FlexColumn>
                      <SelectField
                        readOnly={readOnly}
                        disabled={shouldDisableSelect(selectedPeriodeTyper, index)}
                        bredde="s"
                        name={`${periodeElementFieldId}.morsAktivitet`}
                        label={getLabel(erForsteRad, 'Registrering.Permisjon.Fellesperiode.morsAktivitet')}
                        selectValues={mapAktiviteter(morsAktivitetTyper)}
                        hideValueOnDisable
                      />
                    </FlexColumn>
                    )}
                    <FlexColumn className={styles.smalHeader}>
                      <Undertekst className={erForsteRad ? styles.visOverskrift : styles.skjulOverskrift}>
                        <FormattedMessage id="Registrering.Permisjon.Flerbarnsdager" />
                      </Undertekst>
                      <CheckboxField
                        readOnly={readOnly}
                        name={`${periodeElementFieldId}.flerbarnsdager`}
                        label=" "
                      />
                    </FlexColumn>
                    <FlexColumn className={styles.smalHeader}>
                      <Undertekst className={erForsteRad ? styles.visOverskrift : styles.skjulOverskrift}>
                        <FormattedMessage id="Registrering.Permisjon.HarSamtidigUttak" />
                      </Undertekst>
                      <CheckboxField
                        readOnly={readOnly}
                        name={`${periodeElementFieldId}.harSamtidigUttak`}
                        label=" "
                      />
                    </FlexColumn>
                    {harSamtidigUttak
                    && (
                    <FlexColumn className={erForsteRad ? '' : styles.alignSamtidigUttak}>
                      <DecimalField
                        name={`${periodeElementFieldId}.samtidigUttaksprosent`}
                        bredde="S"
                        // @ts-expect-error ts-migrate(2322) FIXME: Type 'null' is not assignable to type '({ id: stri... Remove this comment to see the full error message
                        validate={[hasValidDecimal, maxValue100]}
                        label={{ id: 'Registrering.Permisjon.SamtidigUttaksprosent' }}
                        // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'number'.
                        normalizeOnBlur={(value) => (Number.isNaN(value) ? value : parseFloat(value).toFixed(2))}
                      />
                    </FlexColumn>
                    )}
                    <FlexColumn>
                      {!readOnly
                    && (
                      <button
                        className={erForsteRad ? styles.buttonRemoveFirst : styles.buttonRemove}
                        type="button"
                        onClick={() => {
                          // @ts-expect-error ts-migrate(2339) FIXME: Property 'remove' does not exist on type '{}'.
                          fields.remove(index);
                        }}
                      />
                    )}
                    </FlexColumn>
                  </FlexRow>
                  {periodeFomForTidlig
                  && (
                    <div>
                      <FlexRow wrap>
                        <AlertStripe type="advarsel">
                          <FormattedMessage id="Registrering.Permisjon.PeriodeFomForTidlig" />
                        </AlertStripe>
                      </FlexRow>
                      <VerticalSpacer sixteenPx />
                    </div>
                  )}
                </FlexContainer>
              </Column>
            </Row>
            <VerticalSpacer eightPx />
          </div>
        );
      }}
    </PeriodFieldArray>
  );
};

RenderPermisjonPeriodeFieldArray.validate = (values: any) => {
  if ((!values || !values.length)) {
    return { _error: isRequiredMessage() };
  }

  const arrayErrors = values.map(({
    periodeType,
    periodeFom,
    periodeTom,
  }: any) => {
    const periodeFomDate = moment(periodeFom, ISO_DATE_FORMAT);
    const periodeTomDate = moment(periodeTom, ISO_DATE_FORMAT);
    const periodeFomError = required(periodeFom) || hasValidDate(periodeFom);
    let periodeTomError = required(periodeTom) || hasValidDate(periodeTom);
    const periodeTypeError = required(periodeType);

    if (!periodeFomError) {
      periodeTomError = periodeTomError || dateAfterOrEqual(periodeFomDate)(periodeTomDate);
    }
    if ((periodeFomError || periodeTomError || periodeTypeError)) {
      return {
        periodeType: periodeTypeError,
        periodeFom: periodeFomError,
        periodeTom: periodeTomError,
      };
    }
    return null;
  });

  if (arrayErrors.some((errors: any) => errors !== null)) {
    return arrayErrors;
  }

  if (isArrayEmpty(values)) {
    return null;
  }
  const overlapError = dateRangesNotOverlapping(values.map(({
    periodeFom,
    periodeTom,
  }: any) => [periodeFom, periodeTom]));
  if (overlapError) {
    return { _error: overlapError };
  }
  return null;
};

RenderPermisjonPeriodeFieldArray.transformValues = (values: any) => values.map((value: any) => {
  if (periodsWithNoMorsAktivitet.includes(value.periodeType)) {
    return {
      periodeType: value.periodeType,
      periodeFom: value.periodeFom,
      periodeTom: value.periodeTom,
      flerbarnsdager: value.flerbarnsdager ? value.flerbarnsdager : false,
      harSamtidigUttak: value.harSamtidigUttak ? value.harSamtidigUttak : false,
      samtidigUttaksprosent: value.samtidigUttaksprosent,
    };
  }
  return {
    periodeType: value.periodeType,
    periodeFom: value.periodeFom,
    periodeTom: value.periodeTom,
    morsAktivitet: value.morsAktivitet,
    flerbarnsdager: value.flerbarnsdager ? value.flerbarnsdager : false,
    harSamtidigUttak: value.harSamtidigUttak ? value.harSamtidigUttak : false,
    samtidigUttaksprosent: value.samtidigUttaksprosent,
  };
});

const mapStateToPropsFactory = (initialState: any, ownProps: any) => {
  const values = getFormValues(ownProps.meta.form)(initialState);
  // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  const permisjonValues = values[ownProps.namePrefix];
  let selectedPeriodeTyper = [''];
  if (typeof permisjonValues[ownProps.periodePrefix] !== 'undefined') {
    selectedPeriodeTyper = permisjonValues[ownProps.periodePrefix].map(({
      periodeType,
    }: any) => periodeType);
  }
  const periodeTyper = ownProps.alleKodeverk[kodeverkTyper.UTTAK_PERIODE_TYPE];
  const morsAktivitetTyper = ownProps.alleKodeverk[kodeverkTyper.MORS_AKTIVITET];

  return () => ({
    selectedPeriodeTyper,
    periodeTyper,
    morsAktivitetTyper,
  });
};

export default connect(mapStateToPropsFactory)(RenderPermisjonPeriodeFieldArray);
