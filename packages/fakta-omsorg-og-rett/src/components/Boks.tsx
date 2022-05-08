import React, {
  FunctionComponent, ReactElement,
} from 'react';
import classnames from 'classnames/bind';

import styles from './boks.less';

const classNames = classnames.bind(styles);

interface OwnProps {
  harBorderTop: boolean;
  children: ReactElement | ReactElement[];
}

const Boks: FunctionComponent<OwnProps> = ({
  harBorderTop,
  children,
}) => (
  <div className={classNames(styles.boks, {
    harBorderTop,
  })}
  >
    {children}
  </div>
);

export default Boks;
