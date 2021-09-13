import React, { FunctionComponent } from 'react';
import { Normaltekst } from 'nav-frontend-typografi';

import { EditedIcon } from '@fpsak-frontend/shared-components';
import Label, { LabelType } from './Label';

import styles from './readOnlyField.less';

const hasValue = (value: any): boolean => value !== undefined && value !== null && value !== '';

interface OwnProps {
  label?: LabelType;
  isEdited?: boolean;
  input: {
    value?: string;
  };
}

export const ReadOnlyField: FunctionComponent<OwnProps> = ({
  label,
  input,
  isEdited,
}) => {
  if (!hasValue(input.value)) {
    return null;
  }
  return (
    <div className={styles.readOnlyContainer}>
      <Label input={label} readOnly />
      <Normaltekst className={styles.readOnlyContent}>
        {input.value}
        {isEdited && <EditedIcon />}
      </Normaltekst>
    </div>
  );
};

ReadOnlyField.defaultProps = {
  isEdited: false,
};

export default ReadOnlyField;
