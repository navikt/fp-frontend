import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';

import klageVurderingType from '@fpsak-frontend/kodeverk/src/klageVurdering';
import dokumentMalType from '@fpsak-frontend/kodeverk/src/dokumentMalType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import styles from './previewKlageLink.less';

const getBrevKode = (klageVurdering: string, klageVurdertAvKa: boolean) => {
  switch (klageVurdering) {
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

const getBrevData = (klageVurdering: string, aksjonspunktCode: string, fritekstTilBrev?: string) => {
  const klageVurdertAv = aksjonspunktCode === aksjonspunktCodes.BEHANDLE_KLAGE_NK ? 'NK' : 'NFP';
  const data = {
    fritekst: fritekstTilBrev || '',
    mottaker: '',
    dokumentMal: getBrevKode(klageVurdering, klageVurdertAv === 'NK'),
    klageVurdertAv,
    erOpphevetKlage: klageVurdering === klageVurderingType.OPPHEVE_YTELSESVEDTAK,
  };
  return data;
};

interface OwnProps {
  previewCallback: (data: any) => Promise<any>;
  aksjonspunktCode: string;
  fritekstTilBrev?: string;
  klageVurdering?: string;
}

const PreviewKlageLink: FunctionComponent<OwnProps> = ({
  previewCallback,
  fritekstTilBrev,
  klageVurdering,
  aksjonspunktCode,
}) => {
  const previewMessage = (e: any) => {
    previewCallback(getBrevData(klageVurdering, aksjonspunktCode, fritekstTilBrev));
    e.preventDefault();
  };
  return (
    <a
      href=""
      onClick={(e) => { previewMessage(e); }}
      onKeyDown={(e) => (e.keyCode === 13 ? previewMessage(e) : null)}
      className={classNames(styles.previewLink, 'lenke lenke--frittstaende')}
    >
      <FormattedMessage id="PreviewKlageLink.ForhandvisBrev" />
    </a>
  );
};

export default PreviewKlageLink;
