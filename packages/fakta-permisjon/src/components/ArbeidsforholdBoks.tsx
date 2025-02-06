import { type ReactElement } from 'react';

import classnames from 'classnames/bind';

import styles from './arbeidsforholdBoks.module.css';

const classNames = classnames.bind(styles);

interface Props {
  harÅpentAksjonspunkt: boolean;
  harBorderTop: boolean;
  children: ReactElement | ReactElement[];
}

export const ArbeidsforholdBoks = ({ harÅpentAksjonspunkt, harBorderTop, children }: Props) => (
  <div
    className={classNames(styles.boks, {
      aksjonspunkt: harÅpentAksjonspunkt,
      harBorderTop,
    })}
  >
    {children}
  </div>
);
