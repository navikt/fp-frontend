import React, { FunctionComponent } from 'react';
import { Normaltekst, Undertekst } from 'nav-frontend-typografi';

import {
  EditedIcon, FlexColumn, FlexContainer, FlexRow,
} from '@fpsak-frontend/shared-components';

import Label from './Label';
import LabelType from './LabelType';

import styles from './readOnlyField.less';

export interface ReadOnlyFieldProps {
  label?: LabelType;
  input: { value: string | number };
  isEdited?: boolean;
  type?: string;
  renderReadOnlyValue?: (value: any) => any;
  alignRightCenterOnReadOnly?: boolean;
  endrettekst?: React.ReactNode;
}

const hasValue = (value: string | number): boolean => value !== undefined && value !== null && value !== '';

export const ReadOnlyField: FunctionComponent<ReadOnlyFieldProps> = ({
  label,
  input,
  isEdited = false,
  type,
  alignRightCenterOnReadOnly = false,
  endrettekst,
}): JSX.Element => {
  if (!hasValue(input.value)) {
    return null;
  }

  return (
    <div className={styles.readOnlyContainer}>
      <Label input={label} readOnly />
      <div className={type === 'textarea' ? styles.textarea : ''}>
        <Normaltekst className={alignRightCenterOnReadOnly ? styles.readOnlyContentCenter : styles.readOnlyContent}>
          {input.value}
          {isEdited && <EditedIcon className={styles.space} />}
        </Normaltekst>
      </div>
      {endrettekst && (
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <EditedIcon />
            </FlexColumn>
            <FlexColumn className={styles.endretAvContent}>
              <Undertekst>
                {endrettekst}
              </Undertekst>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
      )}
    </div>
  );
};

export default ReadOnlyField;
