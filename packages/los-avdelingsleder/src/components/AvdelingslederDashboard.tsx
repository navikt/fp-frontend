import React, { FunctionComponent } from 'react';

import styles from './avdelingslederDashboard.module.css';

type OwnProps = Readonly<{
  children: any;
}>;

/**
 * AvdelingslederDashboard
 */
const AvdelingslederDashboard: FunctionComponent<OwnProps> = ({
  children,
}) => (
  <div className={styles.container}>
    {children}
  </div>
);

export default AvdelingslederDashboard;
