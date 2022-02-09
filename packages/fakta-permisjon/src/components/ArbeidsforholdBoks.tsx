import React, {
  FunctionComponent, ReactElement,
} from 'react';
import classnames from 'classnames/bind';

import styles from './arbeidsforholdBoks.less';

const classNames = classnames.bind(styles);

interface OwnProps {
  harÅpentAksjonspunkt: boolean;
  children: ReactElement | ReactElement[];
}

const ArbeidsforholdBoks: FunctionComponent<OwnProps> = ({
  harÅpentAksjonspunkt,
  children,
}) => (
  <div className={classNames(styles.boks, {
    aksjonspunkt: harÅpentAksjonspunkt,
  })}
  >
    {children}
  </div>
);

export default ArbeidsforholdBoks;
