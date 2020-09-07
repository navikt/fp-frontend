import React, { ReactNode, FunctionComponent } from 'react';
import classnames from 'classnames/bind';
import Panel from 'nav-frontend-paneler';

import styles from './borderBox.less';

const classNames = classnames.bind(styles);

interface OwnProps {
  error?: boolean;
  className?: string;
  children?: ReactNode | ReactNode[];
}

/*
 * BorderBox
 *
 * Valideringskomponent. Visar en box kring noe som skall fikses.
 */
const BorderBox: FunctionComponent<OwnProps> = ({
  error = false,
  className,
  children,
}) => <Panel border className={classNames('borderbox', { error }, className)}>{children}</Panel>;

export default BorderBox;
