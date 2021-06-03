import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { FieldArrayFieldsProps, FieldArrayMetaProps } from 'redux-form';

import {
  FlexColumn, FlexContainer, FlexRow,
} from '@fpsak-frontend/shared-components';
import { DatepickerField, SelectField, PeriodFieldArray } from '@fpsak-frontend/form';
import { required, hasValidDate } from '@fpsak-frontend/utils';

const defaultOverforingPeriode = {
  periodeFom: '',
  periodeTom: '',
  overforingArsak: '',
};

interface OwnProps {
  fields: FieldArrayFieldsProps<any>;
  meta: FieldArrayMetaProps;
  selectValues: ReactElement[];
  readOnly: boolean;
}

/**
 *  RenderOverforingAvKvoterFieldArray
 *
 * Presentasjonskomponent: Viser inputfelter for dato for bestemmelse av overføring.
 * Komponenten må rendres som komponenten til et FieldArray.
 */
export const RenderOverforingAvKvoterFieldArray: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  intl,
  fields,
  meta,
  selectValues,
  readOnly,
}) => (
  <PeriodFieldArray
    fields={fields}
    meta={meta}
    emptyPeriodTemplate={defaultOverforingPeriode}
    bodyText={intl.formatMessage({ id: 'Registrering.Permisjon.Utsettelse.LeggTilPeriode' })}
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

export default injectIntl(RenderOverforingAvKvoterFieldArray);
