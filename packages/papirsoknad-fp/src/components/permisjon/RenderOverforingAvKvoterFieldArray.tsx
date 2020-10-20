import React, { FunctionComponent, ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';
import { FieldArrayFieldsProps, FieldArrayMetaProps } from 'redux-form';

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

interface OwnProps {
  fields: FieldArrayFieldsProps<any>;
  meta: FieldArrayMetaProps;
  selectValues: ReactNode[];
  readOnly: boolean;
}

/**
 *  RenderOverforingAvKvoterFieldArray
 *
 * Presentasjonskomponent: Viser inputfelter for dato for bestemmelse av overføring.
 * Komponenten må rendres som komponenten til et FieldArray.
 */
export const RenderOverforingAvKvoterFieldArray: FunctionComponent<OwnProps> = ({
  fields,
  meta,
  selectValues,
  readOnly,
}) => (
  <PeriodFieldArray
    fields={fields}
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
              validate={[required]}
              readOnly={readOnly}
            />
          </FlexColumn>
          <>
            <FlexColumn>
              <DatepickerField
                readOnly={readOnly}
                name={`${periodeElementFieldId}.periodeFom`}
                validate={[required, hasValidDate]}
                label={index === 0 ? <FormattedMessage id="Registrering.Permisjon.OverforingAvKvote.fomDato" /> : ''}
              />
            </FlexColumn>
            <FlexColumn>
              <DatepickerField
                readOnly={readOnly}
                name={`${periodeElementFieldId}.periodeTom`}
                validate={[required, hasValidDate]}
                label={index === 0 ? <FormattedMessage id="Registrering.Permisjon.OverforingAvKvote.tomDato" /> : ''}
              />
            </FlexColumn>
            <FlexColumn>
              {getRemoveButton()}
            </FlexColumn>
          </>
        </FlexRow>
      </FlexContainer>
    )}
  </PeriodFieldArray>
);

export default RenderOverforingAvKvoterFieldArray;
