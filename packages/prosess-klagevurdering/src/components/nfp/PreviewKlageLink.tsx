import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';

import { dokumentMalType, klageVurdering as klageVurderingType } from '@navikt/fp-kodeverk';

import styles from './previewKlageLink.module.css';

const getBrevKode = (klageVurdering: string, klageVurdertAvKa: boolean): string | null => {
  switch (klageVurdering) {
    case klageVurderingType.STADFESTE_YTELSESVEDTAK:
      return klageVurdertAvKa ? dokumentMalType.KLAGE_STADFESTET : dokumentMalType.KLAGE_OVERSENDT;
    case klageVurderingType.OPPHEVE_YTELSESVEDTAK:
      return dokumentMalType.KLAGE_HJEMSENDT;
    case klageVurderingType.HJEMSENDE_UTEN_Å_OPPHEVE:
      return dokumentMalType.KLAGE_HJEMSENDT;
    case klageVurderingType.MEDHOLD_I_KLAGE:
      return dokumentMalType.KLAGE_OMGJORING;
    default:
      return null;
  }
};

export type BrevData = {
  fritekst: string;
  dokumentMal?: string;
  erOpphevetKlage: boolean;
};

const getBrevData = (klageVurdering: string, fritekstTilBrev?: string): BrevData => ({
  fritekst: fritekstTilBrev || '',
  dokumentMal: getBrevKode(klageVurdering, false),
  erOpphevetKlage: klageVurdering === klageVurderingType.OPPHEVE_YTELSESVEDTAK,
});

interface OwnProps {
  previewCallback: (data: BrevData) => Promise<any>;
  fritekstTilBrev?: string;
  klageVurdering?: string;
}

const PreviewKlageLink: FunctionComponent<OwnProps> = ({ previewCallback, fritekstTilBrev, klageVurdering }) => {
  const previewMessage = (e: React.MouseEvent | React.KeyboardEvent): void => {
    previewCallback(getBrevData(klageVurdering, fritekstTilBrev));
    e.preventDefault();
  };
  return (
    <a
      href=""
      onClick={e => {
        previewMessage(e);
      }}
      onKeyDown={e => (e.key === 'Enter' ? previewMessage(e) : null)}
      className={classNames(styles.previewLink, 'lenke lenke--frittstaende')}
    >
      <FormattedMessage id="PreviewKlageLink.ForhandvisBrev" />
    </a>
  );
};

export default PreviewKlageLink;
