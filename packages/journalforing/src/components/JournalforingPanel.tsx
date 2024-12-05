import React from 'react';

import styles from './journalforingPanel.module.css';

type Props = Readonly<{
  children: any;
}>;

/**
 * JournalforingPanel - Wrapperkomponent som holder på alle paneler i journalføringspanelet.
 * Children vil her være alle paneler i pakken journalforing utenom JournalforingIndex
 */
export const JournalforingPanel = ({ children }: Props) => <div className={styles.container}>{children}</div>;
