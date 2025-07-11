import { type ReactElement, useEffect } from 'react';
import { useFieldArray, useFormContext, type UseFormGetValues } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { PeriodFieldArray, RhfDatepicker, RhfSelect } from '@navikt/ft-form-hooks';
import {
  dateAfterOrEqual,
  dateBeforeOrEqual,
  dateRangesNotOverlapping,
  hasValidDate,
  required,
} from '@navikt/ft-form-validators';

import { OppholdArsakType } from '@navikt/fp-kodeverk';
import type { KodeverkMedNavn } from '@navikt/fp-types';

import { FieldArrayRow } from '../../../felles/FieldArrayRow';
import { OPPHOLD_PERIODE_FIELD_ARRAY_NAME, TIDSROM_PERMISJON_FORM_NAME_PREFIX } from '../../constants';
import type { OppholdPeriode, PermisjonFormValues } from '../../types';

const FA_PREFIX = `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${OPPHOLD_PERIODE_FIELD_ARRAY_NAME}`;
const getPrefix = (index: number) => `${FA_PREFIX}.${index}` as const;

const getOverlappingValidator = (getValues: UseFormGetValues<PermisjonFormValues>) => () => {
  const perioder = getValues(`${FA_PREFIX}`) ?? [];
  const periodeMap = perioder
    .filter(({ periodeFom, periodeTom }) => periodeFom !== '' && periodeTom !== '')
    .map(({ periodeFom, periodeTom }) => [periodeFom, periodeTom]);
  return periodeMap.length > 0 ? dateRangesNotOverlapping(periodeMap) : undefined;
};

const defaultOppholdPeriode: OppholdPeriode = {
  periodeFom: '',
  periodeTom: '',
  årsak: '',
};

const gyldigeÅrsaker = [
  OppholdArsakType.UTTAK_MØDREKVOTE_ANNEN_FORELDER,
  OppholdArsakType.UTTAK_FEDREKVOTE_ANNEN_FORELDER,
  OppholdArsakType.UTTAK_FELLESP_ANNEN_FORELDER,
  OppholdArsakType.UTTAK_FORELDREPENGER_ANNEN_FORELDER,
];

const mapTyper = (typer: KodeverkMedNavn<'OppholdÅrsak'>[]): ReactElement[] =>
  typer
    .filter(({ kode }) => gyldigeÅrsaker.some(ga => ga === kode))
    .map(({ kode, navn }) => (
      <option value={kode} key={kode}>
        {navn}
      </option>
    ));

interface Props {
  oppholdsReasons: KodeverkMedNavn<'OppholdÅrsak'>[];
  readOnly: boolean;
}

/**
 * RenderOppholdPeriodeFieldArray
 *
 * Viser inputfelter for dato for bestemmelse av oppholdsperiode.
 */
export const RenderOppholdPeriodeFieldArray = ({ oppholdsReasons, readOnly }: Props) => {
  const intl = useIntl();

  const {
    control,
    getValues,
    trigger,
    formState: { isSubmitted },
  } = useFormContext<PermisjonFormValues>();

  const { fields, remove, append } = useFieldArray({
    control,
    name: `${FA_PREFIX}`,
  });

  useEffect(() => {
    if (fields.length === 0) {
      append(defaultOppholdPeriode);
    }
  }, []);

  return (
    <PeriodFieldArray
      fields={fields}
      emptyPeriodTemplate={defaultOppholdPeriode}
      bodyText={intl.formatMessage({ id: 'Registrering.Permisjon.nyPeriode' })}
      readOnly={readOnly}
      append={append}
      remove={remove}
    >
      {(field, index) => (
        <FieldArrayRow key={field.id} readOnly={readOnly} remove={remove} index={index}>
          <RhfDatepicker
            name={`${getPrefix(index)}.periodeFom`}
            control={control}
            label={intl.formatMessage({ id: 'Registrering.Permisjon.periodeFom' })}
            validate={[
              required,
              hasValidDate,
              () => {
                const fomVerdi = getValues(`${getPrefix(index)}.periodeFom`);
                const tomVerdi = getValues(`${getPrefix(index)}.periodeTom`);
                return tomVerdi && fomVerdi ? dateBeforeOrEqual(tomVerdi)(fomVerdi) : null;
              },
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
              () => {
                const fomVerdi = getValues(`${getPrefix(index)}.periodeFom`);
                const tomVerdi = getValues(`${getPrefix(index)}.periodeTom`);
                return tomVerdi && fomVerdi ? dateAfterOrEqual(fomVerdi)(tomVerdi) : null;
              },
              getOverlappingValidator(getValues),
            ]}
            onChange={() => (isSubmitted ? trigger() : undefined)}
          />

          <div>
            <RhfSelect
              name={`${getPrefix(index)}.årsak`}
              control={control}
              label={intl.formatMessage({ id: 'Registrering.Permisjon.Opphold.Arsak' })}
              selectValues={mapTyper(oppholdsReasons)}
              validate={[required]}
            />
          </div>
        </FieldArrayRow>
      )}
    </PeriodFieldArray>
  );
};
