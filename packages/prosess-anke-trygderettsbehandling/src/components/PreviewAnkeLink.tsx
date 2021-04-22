import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';

import dokumentMalType from '@fpsak-frontend/kodeverk/src/dokumentMalType';
import ankeVurderingType from '@fpsak-frontend/kodeverk/src/ankeVurdering';
import { Kodeverk } from '@fpsak-frontend/types';

import styles from './previewAnkeLink.less';

const getBrevKode = (ankeVurdering?: Kodeverk): string | null => {
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

export type BrevData = {
  fritekst: string;
  mottaker: string;
  dokumentMal?: string;
}

const getBrevData = (ankeVurdering?: Kodeverk, fritekstTilBrev?: string): BrevData => ({
  fritekst: fritekstTilBrev || '',
  mottaker: '',
  dokumentMal: getBrevKode(ankeVurdering),
});

interface OwnProps {
  previewCallback: (data: BrevData) => Promise<any>;
  aksjonspunktCode: string;
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
  if (readOnly) {
    return (
      <span
        className={classNames(styles.previewLinkDisabled)}
      >
        <FormattedMessage id="PreviewAnkeLink.ForhandvisBrev" />
      </span>
    );
  }
  const previewMessage = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    previewCallback(getBrevData(ankeVurdering, fritekstTilBrev));
  };
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
