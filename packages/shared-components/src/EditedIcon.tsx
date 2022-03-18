import React, { FunctionComponent } from 'react';
import classnames from 'classnames/bind';

import endretFelt from '@fpsak-frontend/assets/images/endret_felt.svg';
import { Image } from '@navikt/fp-react-components';

import styles from './editedIcon.less';

const classNames = classnames.bind(styles);

interface OwnProps {
  className?: string;
}

/*
 * EditedIcon
 *
 * Komponent/Ikon som viser om noe i GUI er endret.
 */

const EditedIcon: FunctionComponent<OwnProps> = ({
  className = '',
}) => (
  <span className={classNames('editedIcon', className)}>
    <Image
      src={endretFelt}
      alt="Saksbehandler har endret feltets verdi"
      tooltip="Saksbehandler har endret feltets verdi"
    />
  </span>
);

export default EditedIcon;
