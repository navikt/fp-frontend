import React, { FunctionComponent, useEffect } from 'react';
import { FieldArrayFieldsProps, FieldArrayMetaProps } from 'redux-form';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';

import { required, maxValue } from '@fpsak-frontend/utils';
import {
  FlexColumn, FlexContainer, FlexRow, PeriodFieldArray,
} from '@fpsak-frontend/shared-components';
import { DatepickerField, InputField, SelectField } from '@fpsak-frontend/form';
import tilretteleggingType from '@fpsak-frontend/kodeverk/src/tilretteleggingType';

import styles from './behovForTilrettteleggingFieldArray.less';

const maxValue3 = maxValue(100);

const defaultTilrettelegging = {
  tilretteleggingType: '',
  dato: '',
  stillingsprosent: '',
};

interface OwnProps {
  fields: FieldArrayFieldsProps<any>;
  meta: FieldArrayMetaProps;
  readOnly: boolean;
}

/**
 * BehovForTilrettteleggingFieldArray
 *
 * Viser inputfelter for tilrettelegging av arbeidsforhold for selvstendig næringsdrivende eller frilans.
 */
const BehovForTilrettteleggingFieldArray: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  intl,
  fields,
  meta,
  readOnly,
}) => {
  useEffect(() => {
    if (fields.length === 0) {
      fields.push(defaultTilrettelegging);
    }
  }, []);
  return (
    <PeriodFieldArray
      fields={fields}
      meta={meta}
      emptyPeriodTemplate={defaultTilrettelegging}
      textCode="BehovForTilrettteleggingFieldArray.LeggTilTilretteleggingsbehov"
      readOnly={readOnly}
    >
      {(tilretteleggingFieldId, index, getRemoveButton) => (
        <Row key={tilretteleggingFieldId} className={index !== (fields.length - 1) ? styles.notLastRow : ''}>
          <Column xs="12">
            <FlexContainer>
              <FlexRow>
                <FlexColumn>
                  <SelectField
                    readOnly={readOnly}
                    name={`${tilretteleggingFieldId}.tilretteleggingType`}
                    label={index === 0 ? { id: 'BehovForTilrettteleggingFieldArray.BehovForTilrettelegging' } : ''}
                    validate={[required]}
                    selectValues={[
                      <option value={tilretteleggingType.HEL_TILRETTELEGGING} key={tilretteleggingType.HEL_TILRETTELEGGING}>
                        {intl.formatMessage({ id: 'BehovForTilrettteleggingFieldArray.KanGjennomfores' })}
                      </option>,
                      <option value={tilretteleggingType.DELVIS_TILRETTELEGGING} key={tilretteleggingType.DELVIS_TILRETTELEGGING}>
                        {intl.formatMessage({ id: 'BehovForTilrettteleggingFieldArray.RedusertArbeid' })}
                      </option>,
                      <option value={tilretteleggingType.INGEN_TILRETTELEGGING} key={tilretteleggingType.INGEN_TILRETTELEGGING}>
                        {intl.formatMessage({ id: 'BehovForTilrettteleggingFieldArray.KanIkkeGjennomfores' })}
                      </option>,
                    ]}
                    bredde="xxl"
                  />
                </FlexColumn>
                <FlexColumn>
                  <DatepickerField
                    readOnly={readOnly}
                    name={`${tilretteleggingFieldId}.dato`}
                    label={index === 0 ? { id: 'BehovForTilrettteleggingFieldArray.FraDato' } : ''}
                    validate={[required]}
                  />
                </FlexColumn>
                <FlexColumn>
                  <InputField
                    readOnly={readOnly}
                    name={`${tilretteleggingFieldId}.stillingsprosent`}
                    label={index === 0 ? { id: 'BehovForTilrettteleggingFieldArray.Stillingsprosent' } : ''}
                    bredde="XXL"
                    validate={[required, maxValue3]}
                    maxLength={99}
                  />
                </FlexColumn>
                <FlexColumn>
                  {getRemoveButton()}
                </FlexColumn>
              </FlexRow>
            </FlexContainer>
          </Column>
        </Row>
      )}
    </PeriodFieldArray>
  );
};

export default injectIntl(BehovForTilrettteleggingFieldArray);
