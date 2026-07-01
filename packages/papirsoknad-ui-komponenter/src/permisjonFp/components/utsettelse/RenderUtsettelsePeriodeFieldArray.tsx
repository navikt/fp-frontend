import { type ReactElement, useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { RhfDatepicker, RhfFieldArray, RhfSelect } from '@navikt/ft-form-hooks';
import { hasValidDate, required } from '@navikt/ft-form-validators';

import { type AlleKodeverk, type KodeverkMedNavn, type UtsettelseDto } from '@navikt/fp-types';

import { FieldArrayRow } from '../../../felles/FieldArrayRow';
import { TIDSROM_PERMISJON_FORM_NAME_PREFIX, UTSETTELSE_PERIODE_FIELD_ARRAY_NAME } from '../../constants';
import type { PermisjonFormValues } from '../../types';
import { getOverlappingValidator, getValiderFørEllerEtter } from '../permisjonValidering';
import { mapMorsAktiviteter, mapUttakPeriodeTyper, PERIODS_WITH_NO_MORS_AKTIVITET } from '../selectUtils';

const defaultUtsettelsePeriode: UtsettelseDto = {
  periodeFom: '',
  periodeTom: '',
  arsakForUtsettelse: undefined,
};

const FA_PREFIX = `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${UTSETTELSE_PERIODE_FIELD_ARRAY_NAME}`;
const getPrefix = (index: number) => `${FA_PREFIX}.${index}` as const;

const mapTyper = (typer: KodeverkMedNavn<'UtsettelseÅrsak'>[]): ReactElement[] =>
  typer.map(({ kode, navn }) => (
    <option value={kode} key={kode}>
      {navn}
    </option>
  ));

interface Props {
  alleKodeverk: AlleKodeverk;
  readOnly: boolean;
  søkerErMor: boolean;
}

/**
 * RenderUtsettelsePeriodeFieldArray
 *
 * Viser inputfelter for dato for bestemmelse av utsettelseperiode.
 */
export const RenderUtsettelsePeriodeFieldArray = ({ alleKodeverk, readOnly, søkerErMor }: Props) => {
  const intl = useIntl();
  const utsettelseReasons = alleKodeverk['UtsettelseÅrsak'];
  const periodeTyper = alleKodeverk['UttakPeriodeType'];

  const morsAktivitetTyper = alleKodeverk['MorsAktivitet'];

  const {
    control,
    getValues,
    trigger,
    watch,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps -- legg berre til ein tom rad ved montering; fields.length skal ikkje trigge effekten på nytt
  }, []);

  const triggerValidationOnChange = () => (isSubmitted ? trigger() : undefined);

  return (
    <RhfFieldArray
      fields={fields}
      emptyTemplate={defaultUtsettelsePeriode}
      addButtonText={intl.formatMessage({ id: 'Registrering.Permisjon.nyPeriode' })}
      readOnly={readOnly}
      append={append}
      remove={remove}
    >
      {(field, index) => {
        const periodeForUtsettelse = watch(`${getPrefix(index)}.periodeForUtsettelse`);

        return (
          <FieldArrayRow key={field.id} readOnly={readOnly} remove={remove} index={index}>
            <RhfSelect
              name={`${getPrefix(index)}.periodeForUtsettelse`}
              control={control}
              label={intl.formatMessage({ id: 'Registrering.Permisjon.Utsettelse.Periode' })}
              selectValues={mapUttakPeriodeTyper(periodeTyper)}
              validate={[required]}
            />

            <RhfDatepicker
              name={`${getPrefix(index)}.periodeFom`}
              control={control}
              label={intl.formatMessage({ id: 'Registrering.Permisjon.periodeFom' })}
              validate={[
                required,
                hasValidDate,
                getValiderFørEllerEtter(getValues, getPrefix(index), 'periodeFom'),
                getOverlappingValidator(getValues, FA_PREFIX),
              ]}
              onChange={triggerValidationOnChange}
            />

            <RhfDatepicker
              name={`${getPrefix(index)}.periodeTom`}
              control={control}
              label={intl.formatMessage({ id: 'Registrering.Permisjon.periodeTom' })}
              validate={[
                required,
                hasValidDate,
                getValiderFørEllerEtter(getValues, getPrefix(index), 'periodeTom'),
                getOverlappingValidator(getValues, FA_PREFIX),
              ]}
              onChange={triggerValidationOnChange}
            />

            <RhfSelect
              name={`${getPrefix(index)}.arsakForUtsettelse`}
              control={control}
              label={intl.formatMessage({ id: 'Registrering.Permisjon.Utsettelse.Arsak' })}
              selectValues={mapTyper(utsettelseReasons)}
              validate={[required]}
              onChange={triggerValidationOnChange}
            />

            {!søkerErMor && periodeForUtsettelse && !PERIODS_WITH_NO_MORS_AKTIVITET.has(periodeForUtsettelse) && (
              <RhfSelect
                name={`${getPrefix(index)}.morsAktivitet`}
                control={control}
                readOnly={readOnly}
                label={intl.formatMessage({ id: 'Registrering.Permisjon.MorsAktivitet' })}
                selectValues={mapMorsAktiviteter(morsAktivitetTyper)}
                hideValueOnDisable
                validate={[required]}
              />
            )}
          </FieldArrayRow>
        );
      }}
    </RhfFieldArray>
  );
};
