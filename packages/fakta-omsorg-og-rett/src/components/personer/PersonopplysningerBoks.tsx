import React, {
  FunctionComponent, ReactElement,
} from 'react';
import classnames from 'classnames/bind';

import styles from './personopplysningerBoks.less';

const classNames = classnames.bind(styles);

interface OwnProps {
  harBorderTop: boolean;
  children: ReactElement | ReactElement[];
}

const PersonopplysningerBoks: FunctionComponent<OwnProps> = ({
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

export default PersonopplysningerBoks;
