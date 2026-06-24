import React from 'react';

import styles from './boks.module.css';

interface Props {
  harBorderTop?: boolean;
  harBorderLeft?: boolean;
  children: React.ReactNode;
}

export const Boks = ({ harBorderTop = false, harBorderLeft = true, children }: Props) => (
  <div
    className={[styles['boks'], harBorderLeft && styles['harBorderLeft'], harBorderTop && styles['harBorderTop']]
      .filter(Boolean)
      .join(' ')}
  >
    {children}
  </div>
);
