import React, { FunctionComponent, ReactElement, useEffect } from 'react';
import moment from 'moment';
import { FormattedMessage, useIntl } from 'react-intl';
import { UseFormGetValues } from 'react-hook-form';
import { Label, Alert } from '@navikt/ds-react';
import {
  VerticalSpacer, FlexColumn, FlexContainer, FlexRow,
} from '@navikt/ft-ui-komponenter';
import {
  CheckboxField, Datepicker, SelectField, PeriodFieldArray, InputField, formHooks,
} from '@navikt/ft-form-hooks';
import {
  dateAfterOrEqual,
  dateBeforeOrEqual,
  dateRangesNotOverlapping,
  hasValidDate,
  hasValidDecimal,
  maxValue,
  required,
} from '@navikt/ft-form-validators';
import { AlleKodeverk, KodeverkMedNavn } from '@navikt/fp-types';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';

import { KodeverkType, uttakPeriodeType } from '@navikt/fp-kodeverk';

import styles from './renderPermisjonPeriodeFieldArray.module.css';

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

export const PERIODS_WITH_NO_MORS_AKTIVITET = [
  uttakPeriodeType.FEDREKVOTE,
  uttakPeriodeType.FORELDREPENGER_FOR_FODSEL,
  uttakPeriodeType.MODREKVOTE];

const getLabel = (erForsteRad: boolean, text: string): string => (erForsteRad ? text : '');

const erPeriodeFormFør01012019 = (periodeFom: string | undefined): boolean => periodeFom && moment(periodeFom, ISO_DATE_FORMAT).isBefore(moment('2019-01-01'));

export type FormValues = {
  periodeType: string;
  periodeFom: string;
  periodeTom: string;
  flerbarnsdager?: boolean;
  morsAktivitet?: string;
  harSamtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
}

const getOverlappingValidator = (
  getValues: UseFormGetValues<{ [TIDSROM_PERMISJON_FORM_NAME_PREFIX]: { [PERMISJON_PERIODE_FIELD_ARRAY_NAME]: FormValues[] }}>,
) => () => {
  const perioder = getValues(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${PERMISJON_PERIODE_FIELD_ARRAY_NAME}`);
  const periodeMap = perioder
    .filter(({ periodeFom, periodeTom }) => periodeFom !== '' && periodeTom !== '')
    .map(({ periodeFom, periodeTom }) => [periodeFom, periodeTom]);
  return dateRangesNotOverlapping(periodeMap);
};

const getValiderFomOgTomVerdi = (
  getValues: UseFormGetValues<{ [TIDSROM_PERMISJON_FORM_NAME_PREFIX]: { [PERMISJON_PERIODE_FIELD_ARRAY_NAME]: FormValues[] }}>,
  index: number,
  erFør: boolean,
) => () => {
  const fomVerdi = getValues(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${PERMISJON_PERIODE_FIELD_ARRAY_NAME}.${index}.periodeFom`);
  const tomVerdi = getValues(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${PERMISJON_PERIODE_FIELD_ARRAY_NAME}.${index}.periodeTom`);
  if (!tomVerdi || !fomVerdi) {
    return null;
  }

  return erFør ? dateBeforeOrEqual(tomVerdi)(fomVerdi) : dateAfterOrEqual(fomVerdi)(tomVerdi);
};

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

  const {
    control, getValues, trigger, watch, formState: { isSubmitted },
  } = formHooks.useFormContext<{ [TIDSROM_PERMISJON_FORM_NAME_PREFIX]: {
    [PERMISJON_PERIODE_FIELD_ARRAY_NAME]: FormValues[]
  }}>();

  const { fields, remove, append } = formHooks.useFieldArray({
    control,
    name: `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${PERMISJON_PERIODE_FIELD_ARRAY_NAME}`,
  });

  useEffect(() => {
    if (fields.length === 0) {
      // @ts-ignore Fiks
      append({});
    }
  }, []);

  return (
    <PeriodFieldArray
      readOnly={readOnly}
      fields={fields}
      bodyText={intl.formatMessage({ id: 'Registrering.Permisjon.nyPeriode' })}
      emptyPeriodTemplate={{}}
      append={append}
      remove={remove}
    >
      {(field, index) => {
        const erForsteRad = (index === 0);

        const periode = watch(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${PERMISJON_PERIODE_FIELD_ARRAY_NAME}.${index}`);

        const periodeFomForTidlig = erPeriodeFormFør01012019(periode.periodeFom);
        const visEllerSkulOverskriftStyle = erForsteRad ? styles.visOverskrift : styles.skjulOverskrift;

        const skalDisableMorsAktivitet = PERIODS_WITH_NO_MORS_AKTIVITET.includes(periode.periodeType) || periode.periodeType === '';

        const namePart1 = `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${PERMISJON_PERIODE_FIELD_ARRAY_NAME}.${index}`;
        return (
          <div key={field.id}>
            <FlexContainer>
              <FlexRow wrap>
                <FlexColumn className={styles.selectFieldWidth}>
                  <SelectField
                    readOnly={readOnly}
                    name={`${namePart1}.periodeType`}
                    label={getLabel(erForsteRad, intl.formatMessage({ id: 'Registrering.Permisjon.periodeType' }))}
                    selectValues={mapPeriodeTyper(periodeTyper)}
                    validate={[required]}
                  />
                </FlexColumn>
                <FlexColumn>
                  <Datepicker
                    isReadOnly={readOnly}
                    name={`${namePart1}.periodeFom`}
                    label={getLabel(erForsteRad, intl.formatMessage({ id: 'Registrering.Permisjon.periodeFom' }))}
                    validate={[
                      required,
                      hasValidDate,
                      getValiderFomOgTomVerdi(getValues, index, true),
                      getOverlappingValidator(getValues),
                    ]}
                    onChange={() => (isSubmitted ? trigger() : undefined)}
                  />
                </FlexColumn>
                <FlexColumn>
                  <Datepicker
                    isReadOnly={readOnly}
                    name={`${namePart1}.periodeTom`}
                    label={getLabel(erForsteRad, intl.formatMessage({ id: 'Registrering.Permisjon.periodeTom' }))}
                    validate={[
                      required,
                      hasValidDate,
                      getValiderFomOgTomVerdi(getValues, index, false),
                      getOverlappingValidator(getValues),
                    ]}
                    onChange={() => (isSubmitted ? trigger() : undefined)}
                  />
                </FlexColumn>
                {!sokerErMor && (
                  <FlexColumn>
                    <SelectField
                      readOnly={readOnly}
                      disabled={skalDisableMorsAktivitet}
                      name={`${namePart1}.morsAktivitet`}
                      label={getLabel(erForsteRad, intl.formatMessage({ id: 'Registrering.Permisjon.Fellesperiode.morsAktivitet' }))}
                      selectValues={mapAktiviteter(morsAktivitetTyper)}
                      hideValueOnDisable
                    />
                  </FlexColumn>
                )}
                <FlexColumn className={styles.smalHeader}>
                  <Label size="small" className={visEllerSkulOverskriftStyle}>
                    <FormattedMessage id="Registrering.Permisjon.Flerbarnsdager" />
                  </Label>
                  <CheckboxField
                    readOnly={readOnly}
                    name={`${namePart1}.flerbarnsdager`}
                    label=" "
                  />
                </FlexColumn>
                <FlexColumn className={styles.smalHeader}>
                  <Label size="small" className={visEllerSkulOverskriftStyle}>
                    <FormattedMessage id="Registrering.Permisjon.HarSamtidigUttak" />
                  </Label>
                  <CheckboxField
                    readOnly={readOnly}
                    name={`${namePart1}.harSamtidigUttak`}
                    label=" "
                  />
                </FlexColumn>
                {periode.harSamtidigUttak && (
                  <FlexColumn className={erForsteRad ? '' : styles.alignSamtidigUttak}>
                    <InputField
                      name={`${namePart1}.samtidigUttaksprosent`}
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
                <>
                  <FlexRow wrap>
                    <Alert size="small" variant="warning">
                      <FormattedMessage id="Registrering.Permisjon.PeriodeFomForTidlig" />
                    </Alert>
                  </FlexRow>
                  <VerticalSpacer sixteenPx />
                </>
              )}
            </FlexContainer>
            <VerticalSpacer eightPx />
          </div>
        );
      }}
    </PeriodFieldArray>
  );
};

RenderPermisjonPeriodeFieldArray.transformValues = (values: FormValues[]) => values.map((value) => {
  if (PERIODS_WITH_NO_MORS_AKTIVITET.includes(value.periodeType)) {
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
