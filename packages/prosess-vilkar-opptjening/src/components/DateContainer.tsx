import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';
import React, { FunctionComponent } from 'react';

import styles from './dateContainer.less';

interface OwnProps {
  opptjeningFomDate: string;
  opptjeningTomDate: string;
}

const DateContainer: FunctionComponent<OwnProps> = ({
  opptjeningFomDate,
  opptjeningTomDate,
}) => (
  <FlexContainer>
    <FlexRow spaceBetween>
      <FlexColumn className={styles.leftMargin}>
        {opptjeningFomDate}
      </FlexColumn>
      <FlexColumn className={styles.rightMargin}>
        {opptjeningTomDate}
      </FlexColumn>
    </FlexRow>
  </FlexContainer>
);

export default DateContainer;
