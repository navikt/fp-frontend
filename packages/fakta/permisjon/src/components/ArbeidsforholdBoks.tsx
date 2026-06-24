import { type ReactElement } from 'react';

import styles from './arbeidsforholdBoks.module.css';

interface Props {
  harÅpentAksjonspunkt: boolean;
  harBorderTop: boolean;
  children: ReactElement | ReactElement[];
}

export const ArbeidsforholdBoks = ({ harÅpentAksjonspunkt, harBorderTop, children }: Props) => (
  <div
    className={[
      styles['boks'],
      harÅpentAksjonspunkt && styles['aksjonspunkt'],
      harBorderTop && styles['harBorderTop'],
    ]
      .filter(Boolean)
      .join(' ')}
  >
    {children}
  </div>
);
