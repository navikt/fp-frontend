import React, { FunctionComponent, useMemo } from 'react';
import classnames from 'classnames/bind';

import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { Aksjonspunkt } from '@fpsak-frontend/types';

import styles from './margMarkering.less';

const classNames = classnames.bind(styles);

interface OwnProps {
  aksjonspunkter: Aksjonspunkt[];
  isReadOnly: boolean;
  visAksjonspunktMarkering?: boolean;
  children: any;
}

const MargMarkering: FunctionComponent<OwnProps> = ({
  aksjonspunkter,
  isReadOnly,
  visAksjonspunktMarkering = true,
  children,
}) => {
  if (aksjonspunkter.length === 0) {
    return (
      <div className={styles.prosesspunkt}>
        {children}
      </div>
    );
  }

  const harApnentAksjonspunktSomKanLoses = useMemo(() => aksjonspunkter.some((ap) => isAksjonspunktOpen(ap.status.kode) && ap.kanLoses), [aksjonspunkter]);
  const visAksjonspunkt = visAksjonspunktMarkering && harApnentAksjonspunktSomKanLoses && !isReadOnly;

  return (
    <div className={classNames('prosesspunkt', { visAksjonspunkt })}>
      {children}
    </div>
  );
};

export default MargMarkering;
