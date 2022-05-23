import React, { FunctionComponent, ReactElement } from 'react';
import moment from 'moment';
import { FormattedMessage, useIntl } from 'react-intl';
import { Undertekst } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';
import AlertStripe from 'nav-frontend-alertstriper';
import {
  VerticalSpacer, FlexColumn, FlexContainer, FlexRow,
} from '@navikt/ft-ui-komponenter';
import {
  CheckboxField, Datepicker, SelectField, PeriodFieldArray, InputField, formHooks,
} from '@navikt/ft-form-hooks';
import {
  hasValidDecimal,
  maxValue,
} from '@navikt/ft-form-validators';
import { AlleKodeverk, KodeverkMedNavn } from '@navikt/ft-types';
import { KodeverkType } from '@navikt/ft-kodeverk';

import uttakPeriodeType from '@fpsak-frontend/kodeverk/src/uttakPeriodeType';

import styles from './renderPermisjonPeriodeFieldArray.less';

const maxValue100 = maxValue(100);

const TIDSROM_PERMISJON_FORM_NAME_PREFIX = 'tidsromPermisjon';
export const PERMISJON_PERIODE_FIELD_ARRAY_NAME = 'permisjonsPerioder';

export const gyldigeUttakperioder = [
  uttakPeriodeType.FELLESPERIODE,
  uttakPeriodeType.FEDREKVOTE,
  uttakPeriodeType.FORELDREPENGER_FOR_FODSEL,
  uttakPeriodeType.FORELDREPENGER,
  uttakPeriodeType.MODREKVOTE,
];

const mapPeriodeTyper = (typer: KodeverkMedNavn[]): ReactElement[] => typer
  .filter(({
    kode,
  }) => gyldigeUttakperioder.includes(kode))
  .map(({
    kode,
    navn,
  }) => <option value={kode} key={kode}>{navn}</option>);

const mapAktiviteter = (aktiviteter: KodeverkMedNavn[]): ReactElement[] => aktiviteter
  .map(({
    kode,
    navn,
  }) => <option value={kode} key={kode}>{navn}</option>);

export const periodsWithNoMorsAktivitet = [
  uttakPeriodeType.FEDREKVOTE,
  uttakPeriodeType.FORELDREPENGER_FOR_FODSEL,
  uttakPeriodeType.MODREKVOTE];

const shouldDisableSelect = (selectedPeriodeTyper: string[], index: number): boolean => {
  if (typeof selectedPeriodeTyper === 'undefined' || typeof selectedPeriodeTyper[index] === 'undefined') {
    return true;
  }

  return periodsWithNoMorsAktivitet.includes(selectedPeriodeTyper[index])
    || selectedPeriodeTyper[index] === '';
};

const getLabel = (erForsteRad: boolean, text: string): string => (erForsteRad ? text : '');

const erPeriodeFormFør01012019 = (periodeFom: any) => periodeFom && moment(periodeFom).isBefore(moment('2019-01-01'));

export type FormValues = {
  periodeType: string;
  periodeFom: string;
  periodeTom: string;
  flerbarnsdager?: boolean;
  morsAktivitet?: string;
  harSamtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
}

interface OwnProps {
  readOnly: boolean;
  sokerErMor: boolean;
  alleKodeverk: AlleKodeverk;
}

interface StaticFunctions {
  transformValues: (values: FormValues[]) => any;
}

/**
 * RenderPermisjonPeriodeFieldArray
 *
 * Viser inputfelter for dato for bestemmelse av perioder med permijon.
 */
const RenderPermisjonPeriodeFieldArray: FunctionComponent<OwnProps> & StaticFunctions = ({
  sokerErMor,
  readOnly,
  alleKodeverk,
}) => {
  const intl = useIntl();

  const periodeTyper = alleKodeverk[KodeverkType.UTTAK_PERIODE_TYPE];
  const morsAktivitetTyper = alleKodeverk[KodeverkType.MORS_AKTIVITET];

  if (morsAktivitetTyper.filter(({
    kode,
  }) => kode === '-').length === 0) { morsAktivitetTyper.unshift({ kode: '-', navn: '', kodeverk: '' }); }

  const { control } = formHooks.useFormContext<{ [TIDSROM_PERMISJON_FORM_NAME_PREFIX]: {
    [PERMISJON_PERIODE_FIELD_ARRAY_NAME]: FormValues[]
  }}>();
  const { fields, remove, append } = formHooks.useFieldArray({
    control,
    name: `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${PERMISJON_PERIODE_FIELD_ARRAY_NAME}`,
  });

  const selectedPeriodeTyper = [''];
  // TODO  watch(PERMISJON_PERIODE_FIELD_ARRAY_NAME);

  return (
    <PeriodFieldArray
      readOnly={readOnly}
      fields={fields}
      bodyText=""
      emptyPeriodTemplate={{}}
      append={append}
      remove={remove}
    >
      {(periodeElementFieldId, index) => {
        const erForsteRad = (index === 0);
        const { periodeFom, harSamtidigUttak } = fields.get(index);
        const periodeFomForTidlig = erPeriodeFormFør01012019(periodeFom);
        const visEllerSkulOverskriftStyle = erForsteRad ? styles.visOverskrift : styles.skjulOverskrift;
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
                        label={getLabel(erForsteRad, intl.formatMessage({ id: 'Registrering.Permisjon.periodeType' }))}
                        selectValues={mapPeriodeTyper(periodeTyper)}
                      />
                    </FlexColumn>
                    <FlexColumn>
                      <Datepicker
                        isReadOnly={readOnly}
                        name={`${periodeElementFieldId}.periodeFom`}
                        label={getLabel(erForsteRad, intl.formatMessage({ id: 'Registrering.Permisjon.periodeFom' }))}
                      />
                    </FlexColumn>
                    <FlexColumn>
                      <Datepicker
                        isReadOnly={readOnly}
                        name={`${periodeElementFieldId}.periodeTom`}
                        label={getLabel(erForsteRad, intl.formatMessage({ id: 'Registrering.Permisjon.periodeTom' }))}
                      />
                    </FlexColumn>
                    {!sokerErMor && (
                      <FlexColumn>
                        <SelectField
                          readOnly={readOnly}
                          disabled={sokerErMor || shouldDisableSelect(selectedPeriodeTyper, index)}
                          bredde="s"
                          name={`${periodeElementFieldId}.morsAktivitet`}
                          label={getLabel(erForsteRad, intl.formatMessage({ id: 'Registrering.Permisjon.Fellesperiode.morsAktivitet' }))}
                          selectValues={mapAktiviteter(morsAktivitetTyper)}
                          hideValueOnDisable
                        />
                      </FlexColumn>
                    )}
                    <FlexColumn className={styles.smalHeader}>
                      <Undertekst className={visEllerSkulOverskriftStyle}>
                        <FormattedMessage id="Registrering.Permisjon.Flerbarnsdager" />
                      </Undertekst>
                      <CheckboxField
                        readOnly={readOnly}
                        name={`${periodeElementFieldId}.flerbarnsdager`}
                        label=" "
                      />
                    </FlexColumn>
                    <FlexColumn className={styles.smalHeader}>
                      <Undertekst className={visEllerSkulOverskriftStyle}>
                        <FormattedMessage id="Registrering.Permisjon.HarSamtidigUttak" />
                      </Undertekst>
                      <CheckboxField
                        readOnly={readOnly}
                        name={`${periodeElementFieldId}.harSamtidigUttak`}
                        label=" "
                      />
                    </FlexColumn>
                    {harSamtidigUttak && (
                      <FlexColumn className={erForsteRad ? '' : styles.alignSamtidigUttak}>
                        <InputField
                          name={`${periodeElementFieldId}.samtidigUttaksprosent`}
                          bredde="S"
                          validate={[hasValidDecimal, maxValue100]}
                          label={intl.formatMessage({ id: 'Registrering.Permisjon.SamtidigUttaksprosent' })}
                          normalizeOnBlur={(value: string) => (Number.isNaN(value) ? value : parseFloat(value).toFixed(2))}
                        />
                      </FlexColumn>
                    )}
                    <FlexColumn>
                      {!readOnly && (
                        <button
                          className={erForsteRad ? styles.buttonRemoveFirst : styles.buttonRemove}
                          type="button"
                          onClick={() => {
                            remove(index);
                          }}
                        />
                      )}
                    </FlexColumn>
                  </FlexRow>
                  {periodeFomForTidlig && (
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

/*
RenderPermisjonPeriodeFieldArray.validate = (values) => {
  // eslint-disable-next-line react/destructuring-assignment
  if ((!values || !values.length)) {
    return { _error: isRequiredMessage() };
  }

  // eslint-disable-next-line react/destructuring-assignment
  const arrayErrors = values.map(({
    periodeType,
    periodeFom,
    periodeTom,
  }) => {
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

  if (arrayErrors.some((errors) => errors !== null)) {
    return arrayErrors;
  }

  if (isArrayEmpty(values)) {
    return null;
  }
  // eslint-disable-next-line react/destructuring-assignment
  const overlapError = dateRangesNotOverlapping(values.map(({
    periodeFom,
    periodeTom,
  }) => [periodeFom, periodeTom]));
  if (overlapError) {
    return { _error: overlapError };
  }
  return null;
};
*/

RenderPermisjonPeriodeFieldArray.transformValues = (values: FormValues[]) => values.map((value) => {
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

export default RenderPermisjonPeriodeFieldArray;
