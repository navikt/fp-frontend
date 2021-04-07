import React, { FunctionComponent } from 'react';
import classnames from 'classnames/bind';
import endretFelt from '@fpsak-frontend/assets/images/endret_felt.svg';
import { createIntl } from '@fpsak-frontend/utils';

import Image from './Image';

import messages from '../i18n/nb_NO.json';
import styles from './editedIcon.less';

const classNames = classnames.bind(styles);

const intl = createIntl(messages);

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
      alt={intl.formatMessage({ id: 'Behandling.EditedField' })}
      tooltip={intl.formatMessage({ id: 'Behandling.EditedField' })}
    />
  </span>
);

export default EditedIcon;
