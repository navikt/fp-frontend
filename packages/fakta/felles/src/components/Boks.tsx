import React from 'react';

import { classNames } from '@navikt/fp-utils';

import styles from './boks.module.css';

interface Props {
  harBorderTop?: boolean;
  harBorderLeft?: boolean;
  children: React.ReactNode;
}

export const Boks = ({ harBorderTop = false, harBorderLeft = true, children }: Props) => (
  <div
    className={classNames(styles['boks'], harBorderLeft && styles['harBorderLeft'], harBorderTop && styles['harBorderTop'])}
  >
    {children}
  </div>
);
