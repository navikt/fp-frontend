import React, { PureComponent } from 'react';
import { Column, Row } from 'nav-frontend-grid';
import { FieldArrayFieldsProps, FieldArrayMetaProps } from 'redux-form';
import { FlexColumn, FlexRow } from '@navikt/fp-react-components';

import { PeriodpickerField, PeriodFieldArray } from '@fpsak-frontend/form';
import {
  dateRangesNotOverlapping, hasValidDate, required,
} from '@fpsak-frontend/utils';

import styles from './dokumentertePerioderPeriodePicker.less';

const periode = {
  fom: '',
  tom: '',
};

interface OwnProps {
  fields: FieldArrayFieldsProps<{ fom: string; tom: string }>;
  meta: FieldArrayMetaProps;
  fraDato: string;
  tilDato: string;
  readOnly: boolean;
}

class DokumentertePerioderPeriodePicker extends PureComponent<OwnProps> {
  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount() {
    const { fields, fraDato, tilDato } = this.props;
    if (fields.length === 0) {
      fields.push({ fom: fraDato, tom: tilDato });
    }
  }

  render() {
    const { fields, readOnly } = this.props;
    return (
      <PeriodFieldArray fields={fields} emptyPeriodTemplate={periode} shouldShowAddButton={!readOnly} readOnly={readOnly}>
        {(fieldId, index, getRemoveButton) => (
          <Row key={fieldId}>
            <Column xs="12" className={index !== (fields.length - 1) ? styles.notLastRow : ''}>
              <FlexColumn>
                <FlexRow>
                  <FlexColumn>
                    <PeriodpickerField
                      names={[`${fieldId}.fom`, `${fieldId}.tom`]}
                      label={index === 0 ? { id: 'UttakInfoPanel.AvklartPeriode' } : ''}
                      validate={[required, hasValidDate, dateRangesNotOverlapping]}
                      readOnly={readOnly}
                    />
                  </FlexColumn>
                  <FlexColumn>
                    {getRemoveButton()}
                  </FlexColumn>
                </FlexRow>
              </FlexColumn>
            </Column>
          </Row>
        )}
      </PeriodFieldArray>
    );
  }
}

export default DokumentertePerioderPeriodePicker;
