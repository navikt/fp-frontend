import React, { FunctionComponent, ReactElement, useEffect } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { UseFormGetValues } from 'react-hook-form';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';
import {
  Datepicker, SelectField, PeriodFieldArray, formHooks,
} from '@navikt/ft-form-hooks';
import {
  required, hasValidDate, dateRangesNotOverlapping, dateAfterOrEqual, dateBeforeOrEqual,
} from '@navikt/ft-form-validators';

export const TIDSROM_PERMISJON_FORM_NAME_PREFIX = 'tidsromPermisjon';
export const OVERFORING_PERIODE_FIELD_ARRAY_NAME = 'overforingsperioder';

type Periode = {
  periodeFom: string;
  periodeTom: string;
  overforingArsak: string;
}

export type FormValues = Periode[];

const getOverlappingValidator = (
  getValues: UseFormGetValues<{ [TIDSROM_PERMISJON_FORM_NAME_PREFIX]: { [OVERFORING_PERIODE_FIELD_ARRAY_NAME]: FormValues }}>,
) => () => {
  const perioder = getValues(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${OVERFORING_PERIODE_FIELD_ARRAY_NAME}`);
  const periodeMap = perioder
    .filter(({ periodeFom, periodeTom }) => periodeFom !== '' && periodeTom !== '')
    .map(({ periodeFom, periodeTom }) => [periodeFom, periodeTom]);
  return periodeMap.length > 0 ? dateRangesNotOverlapping(periodeMap) : undefined;
};

const defaultOverforingPeriode: Periode = {
  periodeFom: '',
  periodeTom: '',
  overforingArsak: '',
};

interface OwnProps {
  selectValues: ReactElement[];
  readOnly: boolean;
}

/**
 * RenderOverforingAvKvoterFieldArray
 *
 * Viser inputfelter for dato for bestemmelse av overføring.
 */
const RenderOverforingAvKvoterFieldArray: FunctionComponent<OwnProps> = ({
  selectValues,
  readOnly,
}) => {
  const intl = useIntl();

  const {
    control, getValues, trigger, formState: { isSubmitted },
  } = formHooks.useFormContext<{ [TIDSROM_PERMISJON_FORM_NAME_PREFIX]: {
    [OVERFORING_PERIODE_FIELD_ARRAY_NAME]: FormValues
  }}>();

  const { fields, remove, append } = formHooks.useFieldArray({
    control,
    name: `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${OVERFORING_PERIODE_FIELD_ARRAY_NAME}`,
  });

  useEffect(() => {
    if (fields.length === 0) {
      append(defaultOverforingPeriode);
    }
  }, []);

  const fieldArrayName = `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${OVERFORING_PERIODE_FIELD_ARRAY_NAME}`;
  return (
    <PeriodFieldArray
      fields={fields}
      emptyPeriodTemplate={defaultOverforingPeriode}
      bodyText={intl.formatMessage({ id: 'Registrering.Permisjon.Utsettelse.LeggTilPeriode' })}
      readOnly={readOnly}
      append={append}
      remove={remove}
    >
      {(field, index, getRemoveButton) => (
        <FlexContainer wrap key={field.id}>
          <FlexRow>
            <FlexColumn>
              <SelectField
                name={`${fieldArrayName}.${index}.overforingArsak`}
                bredde="xxl"
                label={index === 0 ? intl.formatMessage({ id: 'Registrering.Permisjon.OverforingAvKvote.Arsak.AngiArsak' }) : ''}
                selectValues={selectValues}
                validate={[required]}
                readOnly={readOnly}
              />
            </FlexColumn>
            <>
              <FlexColumn>
                <Datepicker
                  isReadOnly={readOnly}
                  name={`${fieldArrayName}.${index}.periodeFom`}
                  validate={[
                    required,
                    hasValidDate,
                    () => {
                      const fomVerdi = getValues(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${OVERFORING_PERIODE_FIELD_ARRAY_NAME}.${index}.periodeFom`);
                      const tomVerdi = getValues(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${OVERFORING_PERIODE_FIELD_ARRAY_NAME}.${index}.periodeTom`);
                      return tomVerdi && fomVerdi ? dateBeforeOrEqual(tomVerdi)(fomVerdi) : null;
                    },
                    getOverlappingValidator(getValues),
                  ]}
                  label={index === 0 ? <FormattedMessage id="Registrering.Permisjon.OverforingAvKvote.fomDato" /> : ''}
                  onChange={() => (isSubmitted ? trigger() : undefined)}
                />
              </FlexColumn>
              <FlexColumn>
                <Datepicker
                  isReadOnly={readOnly}
                  name={`${fieldArrayName}.${index}.periodeTom`}
                  validate={[
                    required,
                    hasValidDate,
                    () => {
                      const fomVerdi = getValues(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${OVERFORING_PERIODE_FIELD_ARRAY_NAME}.${index}.periodeFom`);
                      const tomVerdi = getValues(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${OVERFORING_PERIODE_FIELD_ARRAY_NAME}.${index}.periodeTom`);
                      return tomVerdi && fomVerdi ? dateAfterOrEqual(fomVerdi)(tomVerdi) : null;
                    },
                    getOverlappingValidator(getValues),
                  ]}
                  label={index === 0 ? <FormattedMessage id="Registrering.Permisjon.OverforingAvKvote.tomDato" /> : ''}
                  onChange={() => (isSubmitted ? trigger() : undefined)}
                />
              </FlexColumn>
              {getRemoveButton && (
                <FlexColumn>
                  {getRemoveButton()}
                </FlexColumn>
              )}
            </>
          </FlexRow>
        </FlexContainer>
      )}
    </PeriodFieldArray>
  );
};

export default RenderOverforingAvKvoterFieldArray;
