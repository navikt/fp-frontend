import React, { FunctionComponent } from 'react';
import { Normaltekst, Undertekst } from 'nav-frontend-typografi';
import { FlexColumn, FlexContainer, FlexRow } from '@fpsak-frontend/shared-components';
import Label from '@fpsak-frontend/form/src/Label';
import EditedIcon from './EditedIcon';
import styles from './readOnlyField.less';

type labelPropType = {
  id: string;
  args: any;
};

const hasValue = (value) => value !== undefined && value !== null && value !== '';

type OwnProps = {
    label?: React.ReactNode | labelPropType;
    input: {
        value?: string | number;
    };
    endrettekst?: React.ReactNode;
};

export const ReadOnlyField:FunctionComponent<OwnProps> = ({ label, input, endrettekst }) => {
  if (!hasValue(input.value)) {
    return null;
  }
  return (
    <div className={styles.readOnlyContainer}>
      <Label typographyElement={Normaltekst} input={label} readOnly />
      <Normaltekst className={styles.readOnlyContent}>
        {input.value}
      </Normaltekst>
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

ReadOnlyField.defaultProps = {
  label: undefined,
  endrettekst: undefined,
};

export default ReadOnlyField;
