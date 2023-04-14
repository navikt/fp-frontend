import React, { FunctionComponent } from 'react';

import styles from './journalforingPanel.module.css';

type OwnProps = Readonly<{
  children: any;
}>;

/**
 * JournalforingPanel - Wrapperkomponent som holder på alle paneler i journalføringspanelet.
 * Children vil her være alle paneler i pakken journalforing utenom JournalforingIndex
 */
const JournalforingPanel: FunctionComponent<OwnProps> = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default JournalforingPanel;
