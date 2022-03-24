import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';

import dokumentMalType from '@fpsak-frontend/kodeverk/src/dokumentMalType';
import ankeVurderingType from '@fpsak-frontend/kodeverk/src/ankeVurdering';

import styles from './previewAnkeLink.less';

const getBrevKode = (ankeVurdering: string): string | null => {
  switch (ankeVurdering) {
    case ankeVurderingType.ANKE_OMGJOER:
      return dokumentMalType.ANKE_OMGJORT;
    case ankeVurderingType.ANKE_OPPHEVE_OG_HJEMSENDE:
      return dokumentMalType.ANKE_OPPHEVET;
    case ankeVurderingType.ANKE_HJEMSENDE_UTEN_OPPHEV:
      return dokumentMalType.ANKE_OPPHEVET;
    default:
      return null;
  }
};

export type BrevData = {
  fritekst: string;
  mottaker: string;
  dokumentMal?: string;
}

const getBrevData = (ankeVurdering: string, fritekstTilBrev?: string): BrevData => ({
  fritekst: fritekstTilBrev || '',
  mottaker: '',
  dokumentMal: getBrevKode(ankeVurdering),
});

interface OwnProps {
  previewCallback: (data: BrevData) => Promise<any>;
  fritekstTilBrev?: string;
  ankeVurdering?: string;
  readOnly?: boolean;
}

const PreviewAnkeLink: FunctionComponent<OwnProps> = ({
  previewCallback,
  fritekstTilBrev,
  ankeVurdering,
  readOnly,
}) => {
  const previewMessage = (e: React.MouseEvent | React.KeyboardEvent): void => {
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
      onKeyDown={(e) => (e.key === 'Enter' ? previewMessage(e) : null)}
      className={classNames(styles.previewLink, 'lenke lenke--frittstaende')}
    >
      <FormattedMessage id="PreviewAnkeLink.ForhandvisBrev" />
    </a>
  );
};

PreviewAnkeLink.defaultProps = {
  readOnly: false,
};

export default PreviewAnkeLink;
