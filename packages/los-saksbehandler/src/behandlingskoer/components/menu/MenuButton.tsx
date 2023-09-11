import React, { ReactNode, FunctionComponent } from 'react';
import { Detail } from '@navikt/ds-react';

import styles from './menuButton.module.css';

interface OwnProps {
  onClick: () => void;
  children: ReactNode;
  ref?: any;
}

/**
 * MenuButton
 *
 * Presentasjonskomponent. Lager lenker i behandlingsmeny
 */
const MenuButton: FunctionComponent<OwnProps> = React.forwardRef(({ onClick, children }, ref: any) => (
  <button ref={ref} className={styles.button} onClick={onClick} type="button">
    <Detail>{children}</Detail>
  </button>
));

export default MenuButton;
