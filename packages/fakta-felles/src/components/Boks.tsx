import React, { FunctionComponent, ReactElement } from 'react';
import classnames from 'classnames/bind';

import styles from './boks.module.css';

const classNames = classnames.bind(styles);

interface Props {
  harBorderTop: boolean;
  children: ReactElement | ReactElement[];
}

export const Boks: FunctionComponent<Props> = ({ harBorderTop, children }) => (
  <div
    className={classNames(styles.boks, {
      harBorderTop,
    })}
  >
    {children}
  </div>
);
