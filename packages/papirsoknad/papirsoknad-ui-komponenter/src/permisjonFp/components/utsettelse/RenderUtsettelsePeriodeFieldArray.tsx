import { type ReactElement, useCallback, useEffect } from 'react';
import { useFieldArray, useFormContext, type UseFormGetValues } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { Datepicker, PeriodFieldArray, SelectField } from '@navikt/ft-form-hooks';
import {
  dateAfterOrEqual,
  dateBeforeOrEqual,
  dateRangesNotOverlapping,
  hasValidDate,
  required,
} from '@navikt/ft-form-validators';

import type { KodeverkMedNavn } from '@navikt/fp-types';

import { FieldArrayRow } from '../../../felles/FieldArrayRow';
import { TIDSROM_PERMISJON_FORM_NAME_PREFIX, UTSETTELSE_PERIODE_FIELD_ARRAY_NAME } from '../../constants';
import type { PermisjonFormValues, UtsettelsPeriode } from '../../types';
import { gyldigeUttakperioder } from '../fulltUttak/RenderPermisjonPeriodeFieldArray';

const defaultUtsettelsePeriode: UtsettelsPeriode = {
  periodeFom: '',
  periodeTom: '',
  arsakForUtsettelse: '',
};

const FA_PREFIX = `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${UTSETTELSE_PERIODE_FIELD_ARRAY_NAME}`;
const getPrefix = (index: number) => `${FA_PREFIX}.${index}` as const;

const getOverlappingValidator = (getValues: UseFormGetValues<PermisjonFormValues>) => () => {
  const perioder = getValues(`${FA_PREFIX}`) || [];
  const periodeMap = perioder
    .filter(({ periodeFom, periodeTom }) => periodeFom !== '' && periodeTom !== '')
    .map(({ periodeFom, periodeTom }) => [periodeFom, periodeTom]);
  return periodeMap.length > 0 ? dateRangesNotOverlapping(periodeMap) : undefined;
};

const getValiderFomTomRekkefølge =
  (getValues: UseFormGetValues<PermisjonFormValues>, index: number, erFør: boolean) => () => {
    const prefix = `${getPrefix(index)}` as const;
    const fomVerdi = getValues(`${prefix}.periodeFom`);
    const tomVerdi = getValues(`${prefix}.periodeTom`);
    if (!tomVerdi && !fomVerdi) {
      return null;
    }
    return erFør ? dateBeforeOrEqual(tomVerdi)(fomVerdi) : dateAfterOrEqual(fomVerdi)(tomVerdi);
  };

const mapTyper = (typer: KodeverkMedNavn[]): ReactElement[] =>
  typer.map(({ kode, navn }) => (
    <option value={kode} key={kode}>
      {navn}
    </option>
  ));

const mapKvoter = (typer: KodeverkMedNavn[]): ReactElement[] =>
  typer
    .filter(({ kode }) => gyldigeUttakperioder.some(gup => gup === kode))
    .map(({ kode, navn }) => (
      <option value={kode} key={kode}>
        {navn}
      </option>
    ));

interface Props {
  utsettelseReasons: KodeverkMedNavn[];
  utsettelseKvoter: KodeverkMedNavn[];
  readOnly: boolean;
}

/**
 * RenderUtsettelsePeriodeFieldArray
 *
 * Viser inputfelter for dato for bestemmelse av utsettelseperiode.
 */
export const RenderUtsettelsePeriodeFieldArray = ({ utsettelseReasons, utsettelseKvoter, readOnly }: Props) => {
  const intl = useIntl();

  const {
    control,
    getValues,
    trigger,
    formState: { isSubmitted },
  } = useFormContext<PermisjonFormValues>();

  const { fields, remove, append } = useFieldArray({
    control,
    name: `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${UTSETTELSE_PERIODE_FIELD_ARRAY_NAME}`,
  });

  useEffect(() => {
    if (fields.length === 0) {
      append(defaultUtsettelsePeriode);
    }
  }, []);

  const triggerValidationOnChange = useCallback(() => (isSubmitted ? trigger() : undefined), [isSubmitted, trigger]);

  return (
    <PeriodFieldArray
      fields={fields}
      emptyPeriodTemplate={defaultUtsettelsePeriode}
      bodyText={intl.formatMessage({ id: 'Registrering.Permisjon.nyPeriode' })}
      readOnly={readOnly}
      append={append}
      remove={remove}
    >
      {(field, index) => (
        <FieldArrayRow key={field.id} readOnly={readOnly} remove={remove} index={index}>
          <SelectField
            name={`${getPrefix(index)}.periodeForUtsettelse`}
            label={intl.formatMessage({ id: 'Registrering.Permisjon.Utsettelse.Periode' })}
            selectValues={mapKvoter(utsettelseKvoter)}
            validate={[required]}
          />

          <Datepicker
            name={`${getPrefix(index)}.periodeFom`}
            label={intl.formatMessage({ id: 'Registrering.Permisjon.periodeFom' })}
            validate={[
              required,
              hasValidDate,
              getValiderFomTomRekkefølge(getValues, index, true),
              getOverlappingValidator(getValues),
            ]}
            onChange={triggerValidationOnChange}
          />

          <Datepicker
            name={`${getPrefix(index)}.periodeTom`}
            label={intl.formatMessage({ id: 'Registrering.Permisjon.periodeTom' })}
            validate={[
              required,
              hasValidDate,
              getValiderFomTomRekkefølge(getValues, index, false),
              getOverlappingValidator(getValues),
            ]}
            onChange={triggerValidationOnChange}
          />

          <SelectField
            name={`${getPrefix(index)}.arsakForUtsettelse`}
            label={intl.formatMessage({ id: 'Registrering.Permisjon.Utsettelse.Arsak' })}
            selectValues={mapTyper(utsettelseReasons)}
            validate={[required]}
            onChange={triggerValidationOnChange}
          />

          <SelectField
            label={intl.formatMessage({ id: 'Registrering.Permisjon.ArbeidskategoriLabel' })}
            name={`${getPrefix(index)}.erArbeidstaker`}
            selectValues={[
              <option value="true" key="true">
                {intl.formatMessage({ id: 'Registrering.Permisjon.ErArbeidstaker' })}
              </option>,
              <option value="false" key="false">
                {intl.formatMessage({ id: 'Registrering.Permisjon.ErIkkeArbeidstaker' })}
              </option>,
            ]}
            validate={[
              erArbeidstaker => {
                const typeArbeidRequired = getValues(`${getPrefix(index)}.arsakForUtsettelse`) === 'ARBEID';
                return typeArbeidRequired ? required(erArbeidstaker) : undefined;
              },
            ]}
          />
        </FieldArrayRow>
      )}
    </PeriodFieldArray>
  );
};
