import React, { FunctionComponent } from 'react';

import styles from './journalforingPanel.less';

type OwnProps = Readonly<{
  children: any;
}>;

/**
 * JournalforingPanel
 */
const JournalforingPanel: FunctionComponent<OwnProps> = ({
  children,
}) => (
  <div className={styles.container}>
    {children}
  </div>
);

export default JournalforingPanel;
