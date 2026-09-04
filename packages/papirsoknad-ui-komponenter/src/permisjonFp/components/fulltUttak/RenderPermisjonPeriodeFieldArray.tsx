import { useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Alert } from '@navikt/ds-react';
import { RhfCheckbox, RhfDatepicker, RhfFieldArray, RhfSelect, RhfTextField } from '@navikt/ft-form-hooks';
import { hasValidDate, hasValidDecimal, maxValue, minValue, required } from '@navikt/ft-form-validators';
import { ISO_DATE_FORMAT, removeSpacesFromNumber } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import type { AlleKodeverk, PermisjonPeriodeDto } from '@navikt/fp-types';

import { FieldArrayRow } from '../../../felles/FieldArrayRow';
import { PERMISJON_PERIODE_FIELD_ARRAY_NAME, TIDSROM_PERMISJON_FORM_NAME_PREFIX } from '../../constants';
import type { PermisjonFormValues } from '../../types';
import { getOverlappingValidator, getValiderFørEllerEtter } from '../permisjonValidering';
import { mapMorsAktiviteter, mapUttakPeriodeTyper, PERIODS_WITH_NO_MORS_AKTIVITET } from '../selectUtils';

const FA_PREFIX = `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${PERMISJON_PERIODE_FIELD_ARRAY_NAME}`;
const getPrefix = (index: number) => `${FA_PREFIX}.${index}` as const;

const defaultPermisjonPeriode: PermisjonPeriodeDto = {
  periodeFom: '',
  periodeTom: '',
};

const minValue0 = minValue(0);
const maxValue100 = maxValue(100);

interface Props {
  readOnly: boolean;
  søkerErMor: boolean;
  alleKodeverk: AlleKodeverk;
}

/**
 * RenderPermisjonPeriodeFieldArray
 *
 * Viser inputfelter for dato for bestemmelse av perioder med permijon.
 */
export const RenderPermisjonPeriodeFieldArray = ({ søkerErMor, readOnly, alleKodeverk }: Props) => {
  const intl = useIntl();

  const uttakPeriodeTyper = alleKodeverk['UttakPeriodeType'];
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
    name: FA_PREFIX,
  });

  useEffect(() => {
    if (fields.length === 0) {
      append(defaultPermisjonPeriode);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- legg berre til ein tom rad ved montering; fields.length skal ikkje trigge effekten på nytt
  }, []);

  return (
    <RhfFieldArray
      readOnly={readOnly}
      fields={fields}
      addButtonText={intl.formatMessage({ id: 'Registrering.Permisjon.nyPeriode' })}
      emptyTemplate={defaultPermisjonPeriode}
      append={append}
      remove={remove}
    >
      {(field, index) => {
        const periode = watch(getPrefix(index));

        return (
          <FieldArrayRow key={field.id} readOnly={readOnly} remove={remove} index={index}>
            <RhfSelect
              name={`${getPrefix(index)}.periodeType`}
              control={control}
              readOnly={readOnly}
              label={<FormattedMessage id="Registrering.Permisjon.periodeType" />}
              selectValues={mapUttakPeriodeTyper(uttakPeriodeTyper)}
              validate={[required]}
            />

            <RhfDatepicker
              readOnly={readOnly}
              control={control}
              name={`${getPrefix(index)}.periodeFom`}
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
              readOnly={readOnly}
              control={control}
              name={`${getPrefix(index)}.periodeTom`}
              label={<FormattedMessage id="Registrering.Permisjon.periodeTom" />}
              validate={[
                required,
                hasValidDate,
                getValiderFørEllerEtter(getValues, getPrefix(index), 'periodeTom'),
                getOverlappingValidator(getValues, FA_PREFIX),
              ]}
              onChange={() => (isSubmitted ? trigger() : undefined)}
            />

            {!søkerErMor && periode?.periodeType && !PERIODS_WITH_NO_MORS_AKTIVITET.has(periode.periodeType) && (
              <RhfSelect
                name={`${getPrefix(index)}.morsAktivitet`}
                control={control}
                readOnly={readOnly}
                label={<FormattedMessage id="Registrering.Permisjon.MorsAktivitet" />}
                selectValues={mapMorsAktiviteter(morsAktivitetTyper)}
                validate={[required]}
              />
            )}

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
              readOnly={readOnly}
              label={<FormattedMessage id="Registrering.Permisjon.HarSamtidigUttak" />}
              className="mt-7"
            />

            {periode?.harSamtidigUttak && (
              <RhfTextField
                name={`${getPrefix(index)}.samtidigUttaksprosent`}
                control={control}
                validate={[hasValidDecimal, minValue0, maxValue100]}
                label={<FormattedMessage id="Registrering.Permisjon.SamtidigUttaksprosent" />}
                normalizeOnBlur={value => removeSpacesFromNumber(value)}
              />
            )}

            {erPeriodeFormFør01012019(periode?.periodeFom) && (
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

const erPeriodeFormFør01012019 = (periodeFom: string | undefined): boolean =>
  !!periodeFom && dayjs(periodeFom, ISO_DATE_FORMAT).isBefore(dayjs('2019-01-01'));
