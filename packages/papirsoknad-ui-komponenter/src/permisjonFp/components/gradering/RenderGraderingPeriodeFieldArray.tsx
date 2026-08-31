import { type ReactElement, useEffect } from 'react';
import { useFieldArray, useFormContext, type UseFormGetValues } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Alert } from '@navikt/ds-react';
import { RhfCheckbox, RhfDatepicker, RhfFieldArray, RhfSelect, RhfTextField } from '@navikt/ft-form-hooks';
import {
  hasValidDate,
  hasValidDecimal,
  hasValidFodselsnummer,
  hasValidInteger,
  maxLengthOrFodselsnr,
  maxValue,
  minValue,
  required,
} from '@navikt/ft-form-validators';
import { ISO_DATE_FORMAT, removeSpacesFromNumber } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import type { AlleKodeverk, Arbeidskategori, KodeverkMedNavn, UttakPeriodeType } from '@navikt/fp-types';

import { FieldArrayRow } from '../../../felles/FieldArrayRow';
import { GRADERING_PERIODE_FIELD_ARRAY_NAME, TIDSROM_PERMISJON_FORM_NAME_PREFIX } from '../../constants';
import type { GraderingPeriode, PermisjonFormValues } from '../../types';
import { getOverlappingValidator, getValiderFørEllerEtter } from '../permisjonValidering';
import { mapUttakPeriodeTyper } from '../selectUtils';

const maxLength9OrFodselsnr = maxLengthOrFodselsnr(9);

const FA_PREFIX = `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${GRADERING_PERIODE_FIELD_ARRAY_NAME}`;

const defaultGraderingPeriode: GraderingPeriode = {
  periodeFom: '',
  periodeTom: '',
  periodeForGradering: '' as unknown as UttakPeriodeType,
  prosentandelArbeid: undefined,
  arbeidskategoriType: undefined,
  skalGraderes: false,
};

const gyldigArbeidskategori = new Set<Arbeidskategori>(['ARBEIDSTAKER', 'SELVSTENDIG_NÆRINGSDRIVENDE', 'FRILANSER']);

const minValue0 = minValue(0);
const maxValue100 = maxValue(100);

interface Props {
  alleKodeverk: AlleKodeverk;
  readOnly: boolean;
}

/**
 * RenderGraderingPeriodeFieldArray
 *
 * Viser inputfelter for dato for bestemmelse av graderingperiode.
 */
export const RenderGraderingPeriodeFieldArray = ({ alleKodeverk, readOnly }: Props) => {
  const intl = useIntl();

  const uttakPeriodeTyper = alleKodeverk['UttakPeriodeType'];
  const arbeidskategoriTyper = alleKodeverk['Arbeidskategori'];

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
    // eslint-disable-next-line react-hooks/exhaustive-deps -- legg berre til ein tom rad ved montering; fields.length skal ikkje trigge effekten på nytt
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
        const { harSamtidigUttak, periodeFom } = graderingValues[index] ?? {};
        const periodeFomForTidlig = periodeFom && dayjs(periodeFom, ISO_DATE_FORMAT).isBefore(dayjs('2019-01-01'));

        return (
          <FieldArrayRow key={field.id} readOnly={readOnly} remove={remove} index={index}>
            <RhfSelect
              name={`${getPrefix(index)}.periodeForGradering`}
              control={control}
              selectValues={mapUttakPeriodeTyper(uttakPeriodeTyper)}
              label={<FormattedMessage id="Registrering.Permisjon.Gradering.Periode" />}
              validate={[required]}
            />

            <RhfDatepicker
              name={`${getPrefix(index)}.periodeFom`}
              control={control}
              label={<FormattedMessage id="Registrering.Permisjon.periodeFom" />}
              validate={[
                required,
                hasValidDate,
                getValiderFørEllerEtter(getValues, getPrefix(index), 'periodeFom'),
                getOverlappingValidator(getValues, FA_PREFIX),
              ]}
              onChange={() => (isSubmitted ? trigger() : undefined)}
            />

            <RhfDatepicker
              name={`${getPrefix(index)}.periodeTom`}
              control={control}
              label={<FormattedMessage id="Registrering.Permisjon.periodeTom" />}
              validate={[
                required,
                hasValidDate,
                getValiderFørEllerEtter(getValues, getPrefix(index), 'periodeTom'),
                getOverlappingValidator(getValues, FA_PREFIX),
              ]}
              onChange={() => (isSubmitted ? trigger() : undefined)}
            />
            <RhfTextField
              name={`${getPrefix(index)}.prosentandelArbeid`}
              control={control}
              label={<FormattedMessage id="Registrering.Permisjon.Gradering.Prosentandel" />}
              validate={[required, hasValidDecimal, minValue0, maxValue100]}
              normalizeOnBlur={value => removeSpacesFromNumber(value)}
            />

            <RhfTextField
              name={`${getPrefix(index)}.arbeidsgiverIdentifikator`}
              control={control}
              label={<FormattedMessage id="Registrering.Permisjon.Orgnr" />}
              validate={[
                getValiderArbeidsgiverIdNårRequired(getValues, index),
                hasValidInteger,
                validerAtArbeidsgiverIdErGyldig,
              ]}
            />

            <RhfSelect
              name={`${getPrefix(index)}.arbeidskategoriType`}
              control={control}
              label={<FormattedMessage id="Registrering.Permisjon.ArbeidskategoriLabel" />}
              selectValues={mapArbeidskategori(arbeidskategoriTyper)}
              validate={[required]}
              onChange={() => (isSubmitted ? trigger() : undefined)}
            />

            <RhfCheckbox
              name={`${getPrefix(index)}.skalGraderes`}
              control={control}
              label={<FormattedMessage id="Registrering.Permisjon.Gradering.SkalGraderes" />}
              className="mt-7"
            />

            <RhfCheckbox
              name={`${getPrefix(index)}.flerbarnsdager`}
              control={control}
              readOnly={readOnly}
              label={<FormattedMessage id="Registrering.Permisjon.Flerbarnsdager" />}
              className="mt-7"
            />

            <RhfCheckbox
              name={`${getPrefix(index)}.harSamtidigUttak`}
              control={control}
              label={<FormattedMessage id="Registrering.Permisjon.HarSamtidigUttak" />}
              className="mt-7"
            />

            {harSamtidigUttak && (
              <RhfTextField
                name={`${getPrefix(index)}.samtidigUttaksprosent`}
                control={control}
                validate={[required, hasValidDecimal, minValue0, maxValue100]}
                label={<FormattedMessage id="Registrering.Permisjon.SamtidigUttaksprosent" />}
                normalizeOnBlur={value => removeSpacesFromNumber(value)}
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

const getValiderArbeidsgiverIdNårRequired =
  (getValues: UseFormGetValues<PermisjonFormValues>, index: number) => (arbeidsgiverIdentifikator: string) => {
    const arbeidsgiverIdentifikatorRequired = getValues(`${getPrefix(index)}.arbeidskategoriType`) === 'ARBEIDSTAKER';
    return arbeidsgiverIdentifikatorRequired ? required(arbeidsgiverIdentifikator) : undefined;
  };

const validerAtArbeidsgiverIdErGyldig = (arbeidsgiverIdentifikator: string) => {
  if (!arbeidsgiverIdentifikator) {
    return;
  }
  return arbeidsgiverIdentifikator.length === 11
    ? hasValidFodselsnummer(arbeidsgiverIdentifikator)
    : maxLength9OrFodselsnr(arbeidsgiverIdentifikator);
};

const mapArbeidskategori = (typer: KodeverkMedNavn<'Arbeidskategori'>[]): ReactElement[] =>
  typer
    .filter(({ kode }) => gyldigArbeidskategori.has(kode))
    .map(({ kode, navn }) => (
      <option value={kode} key={kode}>
        {navn}
      </option>
    ));
