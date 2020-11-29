import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';

import dokumentMalType from '@fpsak-frontend/kodeverk/src/dokumentMalType';
import ankeVurderingType from '@fpsak-frontend/kodeverk/src/ankeVurdering';
import { Kodeverk } from '@fpsak-frontend/types';

import styles from './previewAnkeLink.less';

const getBrevKode = (ankeVurdering?: Kodeverk) => {
  switch (ankeVurdering.kode) {
    case ankeVurderingType.ANKE_OMGJOER:
      return dokumentMalType.ANKE_VEDTAK_OMGJORING;
    case ankeVurderingType.ANKE_OPPHEVE_OG_HJEMSENDE:
      return dokumentMalType.ANKE_BESLUTNING_OM_OPPHEVING;
    case ankeVurderingType.ANKE_HJEMSENDE_UTEN_OPPHEV:
      return dokumentMalType.ANKE_BESLUTNING_OM_OPPHEVING;
    default:
      return null;
  }
};

const getBrevData = (ankeVurdering?: Kodeverk, fritekstTilBrev?: string) => {
  const data = {
    fritekst: fritekstTilBrev || '',
    mottaker: '',
    dokumentMal: getBrevKode(ankeVurdering),
  };
  return data;
};

interface OwnProps {
  previewCallback: (data: any) => Promise<any>;
  fritekstTilBrev?: string;
  ankeVurdering?: Kodeverk;
  readOnly?: boolean;
}

const PreviewAnkeLink: FunctionComponent<OwnProps> = ({
  previewCallback,
  fritekstTilBrev,
  ankeVurdering,
  readOnly = false,
}) => {
  const previewMessage = (e: any) => {
    e.preventDefault();
    previewCallback(getBrevData(ankeVurdering, fritekstTilBrev));
  };
  if (readOnly) {
    return (
      <span
        className={classNames(styles.previewLinkDisabled)}
      >
        <FormattedMessage id="PreviewAnkeLink.ForhandvisBrev" />
      </span>
    );
  }
  return (
    <a
      href=""
      onClick={(e) => { previewMessage(e); }}
      onKeyDown={(e) => (e.keyCode === 13 ? previewMessage(e) : null)}
      className={classNames(styles.previewLink, 'lenke lenke--frittstaende')}
    >
      <FormattedMessage id="PreviewAnkeLink.ForhandvisBrev" />
    </a>
  );
};

export default PreviewAnkeLink;
