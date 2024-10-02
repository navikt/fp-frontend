import React from 'react';
import classnames from 'classnames/bind';

import styles from './boks.module.css';

const classNames = classnames.bind(styles);

interface Props {
  harBorderTop?: boolean;
  harBorderLeft?: boolean;
  children: React.ReactNode;
}

export const Boks = ({ harBorderTop = false, harBorderLeft = true, children }: Props) => (
  <div
    className={classNames(styles.boks, {
      harBorderLeft,
      harBorderTop,
    })}
  >
    {children}
  </div>
);
