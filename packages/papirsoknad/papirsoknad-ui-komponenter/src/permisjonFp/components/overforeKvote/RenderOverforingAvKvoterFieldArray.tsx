import { type ReactElement, useEffect } from 'react';
import { useFieldArray, useFormContext, type UseFormGetValues } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Datepicker, PeriodFieldArray, SelectField } from '@navikt/ft-form-hooks';
import {
  dateAfterOrEqual,
  dateBeforeOrEqual,
  dateRangesNotOverlapping,
  hasValidDate,
  required,
} from '@navikt/ft-form-validators';

import { FieldArrayRow } from '../../../felles/FieldArrayRow';
import { OVERFORING_PERIODE_FIELD_ARRAY_NAME, TIDSROM_PERMISJON_FORM_NAME_PREFIX } from '../../constants';
import type { OverforingPeriode, PermisjonFormValues } from '../../types';

const FA_PREFIX = `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${OVERFORING_PERIODE_FIELD_ARRAY_NAME}`;
const getPrefix = (index: number) => `${FA_PREFIX}.${index}` as const;

const getOverlappingValidator = (getValues: UseFormGetValues<PermisjonFormValues>) => () => {
  const perioder = getValues(FA_PREFIX) || [];
  const periodeMap = perioder
    .filter(({ periodeFom, periodeTom }) => periodeFom !== '' && periodeTom !== '')
    .map(({ periodeFom, periodeTom }) => [periodeFom, periodeTom]);
  return periodeMap.length > 0 ? dateRangesNotOverlapping(periodeMap) : undefined;
};

const defaultOverforingPeriode: OverforingPeriode = {
  periodeFom: '',
  periodeTom: '',
  overforingArsak: '',
};

interface Props {
  selectValues: ReactElement[];
  readOnly: boolean;
}

/**
 * RenderOverforingAvKvoterFieldArray
 *
 * Viser inputfelter for dato for bestemmelse av overføring.
 */
export const RenderOverforingAvKvoterFieldArray = ({ selectValues, readOnly }: Props) => {
  const intl = useIntl();

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
  }, []);

  return (
    <PeriodFieldArray
      fields={fields}
      emptyPeriodTemplate={defaultOverforingPeriode}
      bodyText={intl.formatMessage({ id: 'Registrering.Permisjon.nyPeriode' })}
      readOnly={readOnly}
      append={append}
      remove={remove}
    >
      {(field, index) => (
        <FieldArrayRow key={field.id} readOnly={readOnly} remove={remove} index={index}>
          <div>
            <SelectField
              name={`${getPrefix(index)}.overforingArsak`}
              label={intl.formatMessage({ id: 'Registrering.Permisjon.OverforingAvKvote.Arsak.AngiArsak' })}
              selectValues={selectValues}
              validate={[required]}
              readOnly={readOnly}
            />
          </div>

          <Datepicker
            isReadOnly={readOnly}
            name={`${getPrefix(index)}.periodeFom`}
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
            label={<FormattedMessage id="Registrering.Permisjon.OverforingAvKvote.fomDato" />}
            onChange={() => (isSubmitted ? trigger() : undefined)}
          />

          <Datepicker
            isReadOnly={readOnly}
            name={`${getPrefix(index)}.periodeTom`}
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
            label={<FormattedMessage id="Registrering.Permisjon.OverforingAvKvote.tomDato" />}
            onChange={() => (isSubmitted ? trigger() : undefined)}
          />
        </FieldArrayRow>
      )}
    </PeriodFieldArray>
  );
};
