import React, { FunctionComponent } from 'react';
import { Column, Row } from 'nav-frontend-grid';

import styles from './dateContainer.less';

interface OwnProps {
  opptjeningFomDato: string;
  opptjeningTomDato: string;
}

const DateContainer: FunctionComponent<OwnProps> = ({
  opptjeningFomDato,
  opptjeningTomDato,
}) => (
  <div className={styles.dateContainer}>
    <div className={styles.dates}>
      <Row className={styles.dateContainer}>
        <Column xs="1" className={styles.startDateContainer} />
        <Column xs="9">
          <div>{opptjeningFomDato}</div>
        </Column>
        <Column xs="2">
          <div className={styles.endDate}>
            {opptjeningTomDato}
          </div>
        </Column>
      </Row>
    </div>
  </div>
);

export default DateContainer;
