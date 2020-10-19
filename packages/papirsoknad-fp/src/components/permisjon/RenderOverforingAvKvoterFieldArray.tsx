import React from 'react';
import { FormattedMessage } from 'react-intl';
import {
  FlexColumn, FlexContainer, FlexRow, PeriodFieldArray,
} from '@fpsak-frontend/shared-components';
import { DatepickerField, SelectField } from '@fpsak-frontend/form';
import { required, hasValidDate } from '@fpsak-frontend/utils';

const defaultOverforingPeriode = {
  periodeFom: '',
  periodeTom: '',
  overforingArsak: '',
};

type Props = {
    fields: {};
    selectValues: {}[];
    meta: {};
    readOnly: boolean;
};

/**
 *  RenderOverforingAvKvoterFieldArray
 *
 * Presentasjonskomponent: Viser inputfelter for dato for bestemmelse av overføring.
 * Komponenten må rendres som komponenten til et FieldArray.
 */
export const RenderOverforingAvKvoterFieldArray = ({
  fields, selectValues, meta, readOnly,
}: Props) => (
  <PeriodFieldArray
    // @ts-expect-error ts-migrate(2740) FIXME: Type '{}' is missing the following properties from... Remove this comment to see the full error message
    fields={fields}
    // @ts-expect-error ts-migrate(2740) FIXME: Type '{}' is missing the following properties from... Remove this comment to see the full error message
    meta={meta}
    emptyPeriodTemplate={defaultOverforingPeriode}
    textCode="Registrering.Permisjon.Utsettelse.LeggTilPeriode"
    readOnly={readOnly}
  >
    {(periodeElementFieldId, index, getRemoveButton) => (
      <FlexContainer wrap key={periodeElementFieldId}>
        <FlexRow>
          <FlexColumn>
            <SelectField
              name={`${periodeElementFieldId}.overforingArsak`}
              bredde="xxl"
              label={index === 0 ? { id: 'Registrering.Permisjon.OverforingAvKvote.Arsak.AngiArsak' } : ''}
              selectValues={selectValues}
              // @ts-expect-error ts-migrate(2322) FIXME: Type 'undefined' is not assignable to type '({ id:... Remove this comment to see the full error message
              validate={[required]}
              readOnly={readOnly}
            />
          </FlexColumn>
          <>
            <FlexColumn>
              <DatepickerField
                readOnly={readOnly}
                name={`${periodeElementFieldId}.periodeFom`}
                // @ts-expect-error ts-migrate(2322) FIXME: Type 'undefined' is not assignable to type '({ id:... Remove this comment to see the full error message
                validate={[required, hasValidDate]}
                label={index === 0 ? <FormattedMessage id="Registrering.Permisjon.OverforingAvKvote.fomDato" /> : ''}
              />
            </FlexColumn>
            <FlexColumn>
              <DatepickerField
                readOnly={readOnly}
                name={`${periodeElementFieldId}.periodeTom`}
                // @ts-expect-error ts-migrate(2322) FIXME: Type '(value: any) => { id: string; }[] | undefine... Remove this comment to see the full error message
                validate={[required, hasValidDate]}
                label={index === 0 ? <FormattedMessage id="Registrering.Permisjon.OverforingAvKvote.tomDato" /> : ''}
              />
            </FlexColumn>
            <FlexColumn>
              {/* @ts-expect-error ts-migrate(2722) FIXME: Cannot invoke an object which is possibly 'undefin... Remove this comment to see the full error message */}
              {getRemoveButton()}
            </FlexColumn>
          </>
        </FlexRow>
      </FlexContainer>
    )}
  </PeriodFieldArray>
);

export default RenderOverforingAvKvoterFieldArray;
