import { type ReactElement, useEffect } from 'react';
import { useFieldArray, useFormContext, type UseFormGetValues } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Alert } from '@navikt/ds-react';
import { RhfCheckbox, RhfDatepicker, RhfFieldArray, RhfSelect, RhfTextField } from '@navikt/ft-form-hooks';
import {
  dateAfterOrEqual,
  dateBeforeOrEqual,
  dateRangesNotOverlapping,
  hasValidDate,
  hasValidDecimal,
  hasValidFodselsnummer,
  hasValidInteger,
  maxLengthOrFodselsnr,
  maxValue,
  required,
} from '@navikt/ft-form-validators';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { Arbeidskategori } from '@navikt/fp-kodeverk';
import type { KodeverkMedNavn } from '@navikt/fp-types';

import { FieldArrayRow } from '../../../felles/FieldArrayRow';
import { GRADERING_PERIODE_FIELD_ARRAY_NAME, TIDSROM_PERMISJON_FORM_NAME_PREFIX } from '../../constants';
import type { GraderingPeriode, PermisjonFormValues } from '../../types';
import { gyldigeUttakperioder } from '../fulltUttak/RenderPermisjonPeriodeFieldArray';

const maxLength9OrFodselsnr = maxLengthOrFodselsnr(9);

const FA_PREFIX = `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${GRADERING_PERIODE_FIELD_ARRAY_NAME}`;

const defaultGraderingPeriode: GraderingPeriode = {
  periodeFom: '',
  periodeTom: '',
  periodeForGradering: '',
  prosentandelArbeid: '',
  skalGraderes: false,
};

const gyldigArbeidskategori = [
  Arbeidskategori.ARBEIDSTAKER,
  Arbeidskategori.SELVSTENDIG_NAERINGSDRIVENDE,
  Arbeidskategori.FRILANSER,
];

const maxValue100 = maxValue(100);
interface Props {
  graderingKvoter: KodeverkMedNavn<'UttakPeriodeType'>[];
  readOnly: boolean;
  arbeidskategoriTyper: KodeverkMedNavn<'Arbeidskategori'>[];
}

/**
 * RenderGraderingPeriodeFieldArray
 *
 * Viser inputfelter for dato for bestemmelse av graderingperiode.
 */
export const RenderGraderingPeriodeFieldArray = ({ graderingKvoter, readOnly, arbeidskategoriTyper }: Props) => {
  const intl = useIntl();

  const {
    watch,
    control,
    getValues,
    trigger,
    formState: { isSubmitted },
  } = useFormContext<PermisjonFormValues>();

  const { fields, remove, append } = useFieldArray({
    control,
    name: `${FA_PREFIX}`,
  });

  const graderingValues = watch(`${FA_PREFIX}`) ?? [];

  useEffect(() => {
    if (fields.length === 0) {
      append(defaultGraderingPeriode);
    }
  }, []);

  return (
    <RhfFieldArray
      fields={fields}
      emptyTemplate={defaultGraderingPeriode}
      addButtonText={intl.formatMessage({ id: 'Registrering.Permisjon.nyPeriode' })}
      readOnly={readOnly}
      remove={remove}
      append={append}
    >
      {(field, index) => {
        const { harSamtidigUttak, periodeFom } = graderingValues[index];
        const periodeFomForTidlig = periodeFom && dayjs(periodeFom, ISO_DATE_FORMAT).isBefore(dayjs('2019-01-01'));

        return (
          <FieldArrayRow key={field.id} readOnly={readOnly} remove={remove} index={index}>
            <RhfSelect
              name={`${getPrefix(index)}.periodeForGradering`}
              control={control}
              selectValues={mapKvoter(graderingKvoter)}
              label={intl.formatMessage({ id: 'Registrering.Permisjon.Gradering.Periode' })}
              validate={[required]}
            />

            <RhfDatepicker
              name={`${getPrefix(index)}.periodeFom`}
              control={control}
              label={intl.formatMessage({ id: 'Registrering.Permisjon.periodeFom' })}
              validate={[
                required,
                hasValidDate,
                getValiderFørEllerEtter(getValues, index, true),
                getOverlappingValidator(getValues),
              ]}
              onChange={() => (isSubmitted ? trigger() : undefined)}
            />

            <RhfDatepicker
              name={`${getPrefix(index)}.periodeTom`}
              control={control}
              label={intl.formatMessage({ id: 'Registrering.Permisjon.periodeTom' })}
              validate={[
                required,
                hasValidDate,
                getValiderFørEllerEtter(getValues, index, false),
                getOverlappingValidator(getValues),
              ]}
              onChange={() => (isSubmitted ? trigger() : undefined)}
            />
            <RhfTextField
              name={`${getPrefix(index)}.prosentandelArbeid`}
              control={control}
              label={<FormattedMessage id="Registrering.Permisjon.Gradering.Prosentandel" />}
              validate={[required, hasValidDecimal, maxValue100]}
              normalizeOnBlur={value => (Number.isNaN(value) ? value : Number.parseFloat(value.toString()).toFixed(2))}
            />

            <RhfTextField
              name={`${getPrefix(index)}.arbeidsgiverIdentifikator`}
              control={control}
              label={intl.formatMessage({ id: 'Registrering.Permisjon.Orgnr' })}
              validate={[
                getValiderArbeidsgiverIdNårRequired(getValues, index),
                hasValidInteger,
                validerAtArbeidsgiverIdErGyldig,
              ]}
            />
            <RhfSelect
              name={`${getPrefix(index)}.arbeidskategoriType`}
              control={control}
              label={intl.formatMessage({ id: 'Registrering.Permisjon.ArbeidskategoriLabel' })}
              selectValues={mapArbeidskategori(arbeidskategoriTyper)}
              validate={[required]}
              onChange={() => (isSubmitted ? trigger() : undefined)}
            />
            <div>
              <RhfCheckbox
                name={`${getPrefix(index)}.skalGraderes`}
                control={control}
                label={<FormattedMessage id="Registrering.Permisjon.Gradering.SkalGraderes" />}
              />
            </div>

            <div>
              <RhfCheckbox
                name={`${getPrefix(index)}.flerbarnsdager`}
                control={control}
                readOnly={readOnly}
                label={<FormattedMessage id="Registrering.Permisjon.Flerbarnsdager" />}
              />
            </div>
            <div>
              <RhfCheckbox
                name={`${getPrefix(index)}.harSamtidigUttak`}
                control={control}
                label={<FormattedMessage id="Registrering.Permisjon.HarSamtidigUttak" />}
              />
            </div>
            {harSamtidigUttak && (
              <RhfTextField
                name={`${getPrefix(index)}.samtidigUttaksprosent`}
                control={control}
                validate={[required, hasValidDecimal, maxValue100]}
                label={intl.formatMessage({ id: 'Registrering.Permisjon.SamtidigUttaksprosent' })}
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
    </RhfFieldArray>
  );
};
const getPrefix = (index: number) => `${FA_PREFIX}.${index}` as const;

const getOverlappingValidator = (getValues: UseFormGetValues<PermisjonFormValues>) => () => {
  const perioder = getValues(`${FA_PREFIX}`) ?? [];
  const periodeMap = perioder
    .filter(({ periodeFom, periodeTom }) => periodeFom !== '' && periodeTom !== '')
    .map(({ periodeFom, periodeTom }) => [periodeFom, periodeTom]);
  return periodeMap.length > 0 ? dateRangesNotOverlapping(periodeMap) : undefined;
};

const getValiderFørEllerEtter =
  (getValues: UseFormGetValues<PermisjonFormValues>, index: number, sjekkFør: boolean) => () => {
    const fomVerdi = getValues(`${getPrefix(index)}.periodeFom`);
    const tomVerdi = getValues(`${getPrefix(index)}.periodeTom`);

    if (!tomVerdi || !fomVerdi) {
      return null;
    }

    return sjekkFør ? dateBeforeOrEqual(tomVerdi)(fomVerdi) : dateAfterOrEqual(fomVerdi)(tomVerdi);
  };

const getValiderArbeidsgiverIdNårRequired =
  (getValues: UseFormGetValues<PermisjonFormValues>, index: number) => (arbeidsgiverIdentifikator: string) => {
    const arbeidsgiverIdentifikatorRequired =
      getValues(`${getPrefix(index)}.arbeidskategoriType`) === Arbeidskategori.ARBEIDSTAKER;
    return arbeidsgiverIdentifikatorRequired ? required(arbeidsgiverIdentifikator) : undefined;
  };

const validerAtArbeidsgiverIdErGyldig = (arbeidsgiverIdentifikator: string) => {
  if (!arbeidsgiverIdentifikator) {
    return undefined;
  }
  return arbeidsgiverIdentifikator.length === 11
    ? hasValidFodselsnummer(arbeidsgiverIdentifikator)
    : maxLength9OrFodselsnr(arbeidsgiverIdentifikator);
};

const mapKvoter = (typer: KodeverkMedNavn<'UttakPeriodeType'>[]): ReactElement[] =>
  typer
    .filter(({ kode }) => gyldigeUttakperioder.some(ga => ga === kode))
    .map(({ kode, navn }) => (
      <option value={kode} key={kode}>
        {navn}
      </option>
    ));

const mapArbeidskategori = (typer: KodeverkMedNavn<'Arbeidskategori'>[]): ReactElement[] =>
  typer
    .filter(({ kode }) => gyldigArbeidskategori.some(ga => ga === kode))
    .map(({ kode, navn }) => (
      <option value={kode} key={kode}>
        {navn}
      </option>
    ));
