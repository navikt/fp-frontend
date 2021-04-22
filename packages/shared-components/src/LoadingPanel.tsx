import React from 'react';
import NavFrontendSpinner from 'nav-frontend-spinner';

import styles from './loadingPanel.less';

/**
 * LoadingPanel
 *
 * Presentasjonskomponent. Viser lasteikon.
 */
const LoadingPanel = () => (
  <div className={styles.container}>
    <NavFrontendSpinner type="XL" />
  </div>
);

export default LoadingPanel;
