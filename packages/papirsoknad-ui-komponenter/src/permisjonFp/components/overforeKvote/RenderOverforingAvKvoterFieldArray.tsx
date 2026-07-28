import { type ReactElement, useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { RhfDatepicker, RhfFieldArray, RhfSelect } from '@navikt/ft-form-hooks';
import { hasValidDate, required } from '@navikt/ft-form-validators';

import type { AlleKodeverk, KodeverkMedNavn, OverføringÅrsak, OverføringsperiodeDto } from '@navikt/fp-types';

import { FieldArrayRow } from '../../../felles/FieldArrayRow';
import { OVERFØRING_PERIODE_FIELD_ARRAY_NAME, TIDSROM_PERMISJON_FORM_NAME_PREFIX } from '../../constants';
import type { PermisjonFormValues } from '../../types';
import { getOverlappingValidator, getValiderFørEllerEtter } from '../permisjonValidering';

const FA_PREFIX = `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${OVERFØRING_PERIODE_FIELD_ARRAY_NAME}`;
const getPrefix = (index: number) => `${FA_PREFIX}.${index}` as const;

const defaultOverforingPeriode: OverføringsperiodeDto = {
  periodeFom: '',
  periodeTom: '',
  overforingArsak: '' as unknown as OverføringsperiodeDto['overforingArsak'],
};

interface Props {
  readOnly: boolean;
  søkerErMor: boolean;
  alleKodeverk: AlleKodeverk;
  erEndringssøknad: boolean;
}

/**
 * RenderOverforingAvKvoterFieldArray
 *
 * Viser inputfelter for dato for bestemmelse av overføring.
 */
export const RenderOverforingAvKvoterFieldArray = ({ søkerErMor, alleKodeverk, readOnly, erEndringssøknad }: Props) => {
  const intl = useIntl();
  const overføringÅrsaker = alleKodeverk['OverføringÅrsak'];

  const {
    control,
    getValues,
    trigger,
    formState: { isSubmitted },
  } = useFormContext<PermisjonFormValues>();

  const { fields, remove, append } = useFieldArray({
    control,
    name: FA_PREFIX,
  });

  useEffect(() => {
    if (fields.length === 0) {
      append(defaultOverforingPeriode);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- legg berre til ein tom rad ved montering; fields.length skal ikkje trigge effekten på nytt
  }, []);

  return (
    <RhfFieldArray
      fields={fields}
      emptyTemplate={defaultOverforingPeriode}
      addButtonText={intl.formatMessage({ id: 'Registrering.Permisjon.nyPeriode' })}
      readOnly={readOnly}
      append={append}
      remove={remove}
    >
      {(field, index) => (
        <FieldArrayRow key={field.id} readOnly={readOnly} remove={remove} index={index}>
          <RhfSelect
            name={`${getPrefix(index)}.overforingArsak`}
            control={control}
            label={intl.formatMessage({ id: 'Registrering.Permisjon.OverforingAvKvote.Arsak.AngiArsak' })}
            selectValues={mapOverføringÅrsaker(overføringÅrsaker, søkerErMor, erEndringssøknad, intl)}
            validate={[required]}
            readOnly={readOnly}
          />

          <RhfDatepicker
            name={`${getPrefix(index)}.periodeFom`}
            control={control}
            readOnly={readOnly}
            validate={[
              required,
              hasValidDate,
              getValiderFørEllerEtter(getValues, getPrefix(index), 'periodeFom'),
              getOverlappingValidator(getValues, FA_PREFIX),
            ]}
            label={<FormattedMessage id="Registrering.Permisjon.OverforingAvKvote.fomDato" />}
            onChange={() => (isSubmitted ? trigger() : undefined)}
          />

          <RhfDatepicker
            name={`${getPrefix(index)}.periodeTom`}
            control={control}
            readOnly={readOnly}
            validate={[
              required,
              hasValidDate,
              getValiderFørEllerEtter(getValues, getPrefix(index), 'periodeTom'),
              getOverlappingValidator(getValues, FA_PREFIX),
            ]}
            label={<FormattedMessage id="Registrering.Permisjon.OverforingAvKvote.tomDato" />}
            onChange={() => (isSubmitted ? trigger() : undefined)}
          />
        </FieldArrayRow>
      )}
    </RhfFieldArray>
  );
};

const getText = (intl: IntlShape, kode: OverføringÅrsak, navn: string): string => {
  if (kode === 'INSTITUSJONSOPPHOLD_ANNEN_FORELDER') {
    return intl.formatMessage({ id: 'Registrering.Permisjon.OverforingAvKvote.Arsak.MorErInnlagt' });
  }
  if (kode === 'SYKDOM_ANNEN_FORELDER') {
    return intl.formatMessage({ id: 'Registrering.Permisjon.OverforingAvKvote.Arsak.MorErSyk' });
  }
  return navn;
};

const mapOverføringÅrsaker = (
  arsaker: KodeverkMedNavn<'OverføringÅrsak'>[],
  søkerErMor: boolean,
  erEndringssøknad: boolean,
  intl: IntlShape,
): ReactElement[] =>
  arsaker
    .filter(({ kode }) => erEndringssøknad || (kode !== 'ALENEOMSORG' && kode !== 'IKKE_RETT_ANNEN_FORELDER'))
    .map(({ kode, navn }) =>
      søkerErMor ? (
        <option value={kode} key={kode}>
          {navn}
        </option>
      ) : (
        <option value={kode} key={kode}>
          {getText(intl, kode, navn)}
        </option>
      ),
    );
