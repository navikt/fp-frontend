import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';
import {
  Datepicker, SelectField, PeriodFieldArray, formHooks,
} from '@navikt/ft-form-hooks';
import { required, hasValidDate } from '@navikt/ft-form-validators';

export const TIDSROM_PERMISJON_FORM_NAME_PREFIX = 'tidsromPermisjon';
export const OVERFORING_PERIODE_FIELD_ARRAY_NAME = 'overforingsperioder';

type Periode = {
  periodeFom: string;
  periodeTom: string;
  overforingArsak: string;
}

export type FormValues = Periode[];

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
export const RenderOverforingAvKvoterFieldArray: FunctionComponent<OwnProps> = ({
  selectValues,
  readOnly,
}) => {
  const intl = useIntl();

  const { control } = formHooks.useFormContext<{ [TIDSROM_PERMISJON_FORM_NAME_PREFIX]: {
    [OVERFORING_PERIODE_FIELD_ARRAY_NAME]: FormValues
  }}>();

  const { fields, remove, append } = formHooks.useFieldArray({
    control,
    name: `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${OVERFORING_PERIODE_FIELD_ARRAY_NAME}`,
  });

  return (
    <PeriodFieldArray
      fields={fields}
      emptyPeriodTemplate={defaultOverforingPeriode}
      bodyText={intl.formatMessage({ id: 'Registrering.Permisjon.Utsettelse.LeggTilPeriode' })}
      readOnly={readOnly}
      append={append}
      remove={remove}
    >
      {(periodeElementFieldId, index, getRemoveButton) => (
        <FlexContainer wrap key={periodeElementFieldId}>
          <FlexRow>
            <FlexColumn>
              <SelectField
                name={`${periodeElementFieldId}.overforingArsak`}
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
                  name={`${periodeElementFieldId}.periodeFom`}
                  validate={[required, hasValidDate]}
                  label={index === 0 ? <FormattedMessage id="Registrering.Permisjon.OverforingAvKvote.fomDato" /> : ''}
                />
              </FlexColumn>
              <FlexColumn>
                <Datepicker
                  isReadOnly={readOnly}
                  name={`${periodeElementFieldId}.periodeTom`}
                  validate={[required, hasValidDate]}
                  label={index === 0 ? <FormattedMessage id="Registrering.Permisjon.OverforingAvKvote.tomDato" /> : ''}
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
