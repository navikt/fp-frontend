import React, { FunctionComponent } from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import { EditedIcon } from '@navikt/fp-react-components';

import Label, { LabelType } from './Label';

import styles from './readOnlyField.less';

const hasValue = (value: any): boolean => value !== undefined && value !== null && value !== '';

interface OwnProps {
  label?: LabelType;
  isEdited?: boolean;
  value?: string;
  type?: string;
}

export const ReadOnlyField: FunctionComponent<OwnProps> = ({
  label,
  value,
  isEdited,
  type,
}) => {
  if (!hasValue(value)) {
    return null;
  }
  return (
    <div className={styles.readOnlyContainer}>
      <Label input={label} readOnly />
      <div className={type === 'textarea' ? styles.textarea : ''}>
        <Normaltekst className={styles.readOnlyContent}>
          {value}
          {isEdited && <EditedIcon className={styles.space} />}
        </Normaltekst>
      </div>
    </div>
  );
};

ReadOnlyField.defaultProps = {
  isEdited: false,
};

export default ReadOnlyField;
