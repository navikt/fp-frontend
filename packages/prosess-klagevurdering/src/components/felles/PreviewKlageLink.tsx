import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';

import klageVurderingType from '@fpsak-frontend/kodeverk/src/klageVurdering';
import dokumentMalType from '@fpsak-frontend/kodeverk/src/dokumentMalType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { Kodeverk } from '@fpsak-frontend/types';

import styles from './previewKlageLink.less';

const getBrevKode = (klageVurdering: Kodeverk, klageVurdertAvKa: boolean): string | null => {
  switch (klageVurdering.kode) {
    case klageVurderingType.STADFESTE_YTELSESVEDTAK:
      return klageVurdertAvKa ? dokumentMalType.KLAGE_STADFESTET : dokumentMalType.KLAGE_OVERSENDT_KLAGEINSTANS;
    case klageVurderingType.OPPHEVE_YTELSESVEDTAK:
      return dokumentMalType.KLAGE_YTELSESVEDTAK_OPPHEVET;
    case klageVurderingType.HJEMSENDE_UTEN_Å_OPPHEVE:
      return dokumentMalType.KLAGE_YTELSESVEDTAK_OPPHEVET;
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
}

const getBrevData = (klageVurdering: Kodeverk, aksjonspunktCode: string, fritekstTilBrev?: string): BrevData => {
  const klageVurdertAv = aksjonspunktCode === aksjonspunktCodes.BEHANDLE_KLAGE_NK ? 'NK' : 'NFP';
  return {
    fritekst: fritekstTilBrev || '',
    dokumentMal: getBrevKode(klageVurdering, klageVurdertAv === 'NK'),
    erOpphevetKlage: klageVurdering.kode === klageVurderingType.OPPHEVE_YTELSESVEDTAK,
  };
};

interface OwnProps {
  previewCallback: (data: BrevData) => Promise<any>;
  aksjonspunktCode: string;
  fritekstTilBrev?: string;
  klageVurdering?: Kodeverk;
}

const PreviewKlageLink: FunctionComponent<OwnProps> = ({
  previewCallback,
  fritekstTilBrev,
  klageVurdering,
  aksjonspunktCode,
}) => {
  const previewMessage = (e: React.MouseEvent | React.KeyboardEvent): void => {
    previewCallback(getBrevData(klageVurdering, aksjonspunktCode, fritekstTilBrev));
    e.preventDefault();
  };
  return (
    <a
      href=""
      onClick={(e) => { previewMessage(e); }}
      onKeyDown={(e) => (e.key === 'Enter' ? previewMessage(e) : null)}
      className={classNames(styles.previewLink, 'lenke lenke--frittstaende')}
    >
      <FormattedMessage id="PreviewKlageLink.ForhandvisBrev" />
    </a>
  );
};

export default PreviewKlageLink;
