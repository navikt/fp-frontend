import { type ReactElement } from 'react';

import { classNames } from '@navikt/fp-utils';

import styles from './arbeidsforholdBoks.module.css';

interface Props {
  harÅpentAksjonspunkt: boolean;
  harBorderTop: boolean;
  children: ReactElement | ReactElement[];
}

export const ArbeidsforholdBoks = ({ harÅpentAksjonspunkt, harBorderTop, children }: Props) => (
  <div
    className={classNames(
      styles['boks'],
      harÅpentAksjonspunkt && styles['aksjonspunkt'],
      harBorderTop && styles['harBorderTop'],
    )}
  >
    {children}
  </div>
);
