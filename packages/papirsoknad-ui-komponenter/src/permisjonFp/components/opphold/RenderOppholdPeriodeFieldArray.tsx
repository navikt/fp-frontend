import { type ReactElement, useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { RhfDatepicker, RhfFieldArray, RhfSelect } from '@navikt/ft-form-hooks';
import { hasValidDate, required } from '@navikt/ft-form-validators';

import type { AlleKodeverk, KodeverkMedNavn, OppholdÅrsakType, OppholdDto } from '@navikt/fp-types';

import { FieldArrayRow } from '../../../felles/FieldArrayRow';
import { OPPHOLD_PERIODE_FIELD_ARRAY_NAME, TIDSROM_PERMISJON_FORM_NAME_PREFIX } from '../../constants';
import type { PermisjonFormValues } from '../../types';
import { getOverlappingValidator, getValiderFørEllerEtter } from '../permisjonValidering';

const FA_PREFIX = `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${OPPHOLD_PERIODE_FIELD_ARRAY_NAME}`;
const getPrefix = (index: number) => `${FA_PREFIX}.${index}` as const;

const defaultOppholdPeriode: OppholdDto = {
  periodeFom: '',
  periodeTom: '',
  årsak: undefined as unknown as OppholdDto['årsak'],
};

const gyldigeÅrsaker = new Set<OppholdÅrsakType>([
  'UTTAK_MØDREKVOTE_ANNEN_FORELDER',
  'UTTAK_FEDREKVOTE_ANNEN_FORELDER',
  'UTTAK_FELLESP_ANNEN_FORELDER',
  'UTTAK_FORELDREPENGER_ANNEN_FORELDER',
]);

const mapOppholdÅrsaker = (oppholdÅrsaker: KodeverkMedNavn<'OppholdÅrsak'>[]): ReactElement[] =>
  oppholdÅrsaker
    .filter(({ kode }) => gyldigeÅrsaker.has(kode))
    .map(({ kode, navn }) => (
      <option value={kode} key={kode}>
        {navn}
      </option>
    ));

interface Props {
  alleKodeverk: AlleKodeverk;
  readOnly: boolean;
}

/**
 * RenderOppholdPeriodeFieldArray
 *
 * Viser inputfelter for dato for bestemmelse av oppholdsperiode.
 */
export const RenderOppholdPeriodeFieldArray = ({ alleKodeverk, readOnly }: Props) => {
  const intl = useIntl();

  const oppholdÅrsaker = alleKodeverk['OppholdÅrsak'];

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
    // eslint-disable-next-line react-hooks/exhaustive-deps -- legg berre til ein tom rad ved montering; fields.length skal ikkje trigge effekten på nytt
  }, []);

  return (
    <RhfFieldArray
      fields={fields}
      emptyTemplate={defaultOppholdPeriode}
      addButtonText={intl.formatMessage({ id: 'Registrering.Permisjon.nyPeriode' })}
      readOnly={readOnly}
      append={append}
      remove={remove}
    >
      {(field, index) => (
        <FieldArrayRow key={field.id} readOnly={readOnly} remove={remove} index={index}>
          <RhfSelect
            name={`${getPrefix(index)}.årsak`}
            control={control}
            label={intl.formatMessage({ id: 'Registrering.Permisjon.Opphold.Arsak' })}
            selectValues={mapOppholdÅrsaker(oppholdÅrsaker)}
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
            onChange={() => (isSubmitted ? trigger() : undefined)}
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
            onChange={() => (isSubmitted ? trigger() : undefined)}
          />
        </FieldArrayRow>
      )}
    </RhfFieldArray>
  );
};
