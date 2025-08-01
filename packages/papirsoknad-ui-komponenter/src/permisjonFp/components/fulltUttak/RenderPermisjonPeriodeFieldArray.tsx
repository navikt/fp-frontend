import { type ReactElement, useEffect } from 'react';
import { useFieldArray, useFormContext, type UseFormGetValues } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Alert } from '@navikt/ds-react';
import { PeriodFieldArray, RhfCheckbox, RhfDatepicker, RhfSelect, RhfTextField } from '@navikt/ft-form-hooks';
import {
  dateAfterOrEqual,
  dateBeforeOrEqual,
  dateRangesNotOverlapping,
  hasValidDate,
  hasValidDecimal,
  maxValue,
  required,
} from '@navikt/ft-form-validators';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { UttakPeriodeType } from '@navikt/fp-kodeverk';
import type { AlleKodeverk, KodeverkMedNavn } from '@navikt/fp-types';

import { FieldArrayRow } from '../../../felles/FieldArrayRow';
import { PERMISJON_PERIODE_FIELD_ARRAY_NAME, TIDSROM_PERMISJON_FORM_NAME_PREFIX } from '../../constants';
import type { PermisjonFormValues, PermisjonPeriode } from '../../types';

const FA_PREFIX = `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${PERMISJON_PERIODE_FIELD_ARRAY_NAME}`;
const getPrefix = (index: number) => `${FA_PREFIX}.${index}` as const;

const maxValue100 = maxValue(100);

export const gyldigeUttakperioder = [
  UttakPeriodeType.FELLESPERIODE,
  UttakPeriodeType.FEDREKVOTE,
  UttakPeriodeType.FORELDREPENGER_FOR_FODSEL,
  UttakPeriodeType.FORELDREPENGER,
  UttakPeriodeType.MODREKVOTE,
];

const PERIODS_WITH_NO_MORS_AKTIVITET = [
  UttakPeriodeType.FEDREKVOTE,
  UttakPeriodeType.FORELDREPENGER_FOR_FODSEL,
  UttakPeriodeType.MODREKVOTE,
];

interface Props {
  readOnly: boolean;
  sokerErMor: boolean;
  alleKodeverk: AlleKodeverk;
}

/**
 * RenderPermisjonPeriodeFieldArray
 *
 * Viser inputfelter for dato for bestemmelse av perioder med permijon.
 */
export const RenderPermisjonPeriodeFieldArray = ({ sokerErMor, readOnly, alleKodeverk }: Props) => {
  const intl = useIntl();

  const periodeTyper = alleKodeverk['UttakPeriodeType'];
  const morsAktivitetTyper = alleKodeverk['MorsAktivitet'];

  //@ts-expect-error Dette bør fjernast. '-' er gammalt rask
  if (morsAktivitetTyper.filter(({ kode }) => kode === '-').length === 0) {
    //@ts-expect-error Dette bør fjernast. '-' er gammalt rask
    morsAktivitetTyper.unshift({ kode: '-', navn: '', kodeverk: '' });
  }

  const {
    control,
    getValues,
    trigger,
    watch,
    formState: { isSubmitted },
  } = useFormContext<PermisjonFormValues>();

  const { fields, remove, append } = useFieldArray({
    control,
    name: FA_PREFIX,
  });

  useEffect(() => {
    if (fields.length === 0) {
      // @ts-expect-error Fiks
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
        const erForsteRad = index === 0;

        const periode = watch(getPrefix(index));

        const periodeFomForTidlig = erPeriodeFormFør01012019(periode.periodeFom);

        const skalDisableMorsAktivitet =
          PERIODS_WITH_NO_MORS_AKTIVITET.some(pma => pma === periode.periodeType) || periode.periodeType === '';

        return (
          <FieldArrayRow key={field.id} readOnly={readOnly} remove={remove} index={index}>
            <div>
              <RhfSelect
                name={`${getPrefix(index)}.periodeType`}
                control={control}
                readOnly={readOnly}
                label={getLabel(erForsteRad, intl.formatMessage({ id: 'Registrering.Permisjon.periodeType' }))}
                selectValues={mapPeriodeTyper(periodeTyper)}
                validate={[required]}
              />
            </div>
            <RhfDatepicker
              isReadOnly={readOnly}
              control={control}
              name={`${getPrefix(index)}.periodeFom`}
              label={getLabel(erForsteRad, intl.formatMessage({ id: 'Registrering.Permisjon.periodeFom' }))}
              validate={[
                required,
                hasValidDate,
                getValiderFomOgTomVerdi(getValues, index, true),
                getOverlappingValidator(getValues),
              ]}
              onChange={() => (isSubmitted ? trigger() : undefined)}
            />
            <RhfDatepicker
              isReadOnly={readOnly}
              control={control}
              name={`${getPrefix(index)}.periodeTom`}
              label={getLabel(erForsteRad, intl.formatMessage({ id: 'Registrering.Permisjon.periodeTom' }))}
              validate={[
                required,
                hasValidDate,
                getValiderFomOgTomVerdi(getValues, index, false),
                getOverlappingValidator(getValues),
              ]}
              onChange={() => (isSubmitted ? trigger() : undefined)}
            />
            {!sokerErMor && (
              <RhfSelect
                name={`${getPrefix(index)}.morsAktivitet`}
                control={control}
                readOnly={readOnly}
                disabled={skalDisableMorsAktivitet}
                label={getLabel(
                  erForsteRad,
                  intl.formatMessage({ id: 'Registrering.Permisjon.Fellesperiode.morsAktivitet' }),
                )}
                selectValues={mapAktiviteter(morsAktivitetTyper)}
                hideValueOnDisable
              />
            )}

            <RhfCheckbox
              name={`${getPrefix(index)}.flerbarnsdager`}
              control={control}
              readOnly={readOnly}
              label={<FormattedMessage id="Registrering.Permisjon.Flerbarnsdager" />}
            />
            <RhfCheckbox
              name={`${getPrefix(index)}.harSamtidigUttak`}
              control={control}
              readOnly={readOnly}
              label={<FormattedMessage id="Registrering.Permisjon.HarSamtidigUttak" />}
            />

            {periode.harSamtidigUttak && (
              <RhfTextField
                name={`${getPrefix(index)}.samtidigUttaksprosent`}
                control={control}
                validate={[hasValidDecimal, maxValue100]}
                label={intl.formatMessage({ id: 'Registrering.Permisjon.SamtidigUttaksprosent' })}
                normalizeOnBlur={value => (Number.isNaN(value) ? value : parseFloat(value.toString()).toFixed(2))}
              />
            )}

            {periodeFomForTidlig && (
              <Alert size="small" variant="warning">
                <FormattedMessage id="Registrering.Permisjon.PeriodeFomForTidlig" />
              </Alert>
            )}
          </FieldArrayRow>
        );
      }}
    </PeriodFieldArray>
  );
};

RenderPermisjonPeriodeFieldArray.transformValues = (values: PermisjonPeriode[]) =>
  values.map(value => {
    if (PERIODS_WITH_NO_MORS_AKTIVITET.some(pma => pma === value.periodeType)) {
      return {
        periodeType: value.periodeType,
        periodeFom: value.periodeFom,
        periodeTom: value.periodeTom,
        flerbarnsdager: value.flerbarnsdager ?? false,
        harSamtidigUttak: value.harSamtidigUttak ?? false,
        samtidigUttaksprosent: value.samtidigUttaksprosent,
      };
    }
    return {
      periodeType: value.periodeType,
      periodeFom: value.periodeFom,
      periodeTom: value.periodeTom,
      morsAktivitet: value.morsAktivitet,
      flerbarnsdager: value.flerbarnsdager ?? false,
      harSamtidigUttak: value.harSamtidigUttak ?? false,
      samtidigUttaksprosent: value.samtidigUttaksprosent,
    };
  });

const mapPeriodeTyper = (typer: KodeverkMedNavn<'UttakPeriodeType'>[]): ReactElement[] =>
  typer
    .filter(({ kode }) => gyldigeUttakperioder.some(gu => gu === kode))
    .map(({ kode, navn }) => (
      <option value={kode} key={kode}>
        {navn}
      </option>
    ));

const mapAktiviteter = (aktiviteter: KodeverkMedNavn<'MorsAktivitet'>[]): ReactElement[] =>
  aktiviteter.map(({ kode, navn }) => (
    <option value={kode} key={kode}>
      {navn}
    </option>
  ));

const getLabel = (erForsteRad: boolean, text: string): string => (erForsteRad ? text : '');

const erPeriodeFormFør01012019 = (periodeFom: string | undefined): boolean =>
  !!periodeFom && dayjs(periodeFom, ISO_DATE_FORMAT).isBefore(dayjs('2019-01-01'));

const getOverlappingValidator = (getValues: UseFormGetValues<PermisjonFormValues>) => () => {
  const perioder = getValues(FA_PREFIX) ?? [];
  const periodeMap = perioder
    .filter(({ periodeFom, periodeTom }) => periodeFom !== '' && periodeTom !== '')
    .map(({ periodeFom, periodeTom }) => [periodeFom, periodeTom]);
  return dateRangesNotOverlapping(periodeMap);
};

const getValiderFomOgTomVerdi =
  (getValues: UseFormGetValues<PermisjonFormValues>, index: number, erFør: boolean) => () => {
    const fomVerdi = getValues(`${getPrefix(index)}.periodeFom`);
    const tomVerdi = getValues(`${getPrefix(index)}.periodeTom`);
    if (!tomVerdi || !fomVerdi) {
      return null;
    }

    return erFør ? dateBeforeOrEqual(tomVerdi)(fomVerdi) : dateAfterOrEqual(fomVerdi)(tomVerdi);
  };
