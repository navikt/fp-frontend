import React, {
  FunctionComponent,
} from 'react';

import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import OmsorgVilkarProsessIndex from '@fpsak-frontend/prosess-vilkar-omsorg';
import { Aksjonspunkt, Vilkar } from '@fpsak-frontend/types';
import { InngangsvilkarDefaultInitPanel, InngangsvilkarPanelInitProps } from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../../i18n/getPackageIntl';
import { EsBehandlingApiKeys, requestEsApi } from '../../data/esBehandlingApi';

const AKSJONSPUNKT_TEKST_PER_KODE = {
  [aksjonspunktCodes.MANUELL_VURDERING_AV_OMSORGSVILKARET]: 'ErOmsorgVilkaarOppfyltForm.Paragraf',
  [aksjonspunktCodes.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN]: 'ErOmsorgVilkaarOppfyltForm.Vurder',
  [aksjonspunktCodes.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN]: 'ErOmsorgVilkaarOppfyltForm.Vurder',
};

const hentAksjonspunktTekst = (aksjonspunkter: Aksjonspunkt[] = []): string => (aksjonspunkter.length > 0
  ? getPackageIntl().formatMessage({ id: AKSJONSPUNKT_TEKST_PER_KODE[aksjonspunkter[0].definisjon.kode] })
  : '');

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.MANUELL_VURDERING_AV_OMSORGSVILKARET,
  aksjonspunktCodes.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
  aksjonspunktCodes.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN,
];

const VILKAR_KODER = [
  vilkarType.OMSORGSVILKARET,
];

const ENDEPUNKTER_INIT_DATA = [EsBehandlingApiKeys.AKSJONSPUNKTER, EsBehandlingApiKeys.VILKAR];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

interface OwnProps {
  behandlingVersjon?: number;
}

const OmsorgInngangsvilkarInitPanel: FunctionComponent<OwnProps & InngangsvilkarPanelInitProps> = ({
  behandlingVersjon,
  ...props
}) => (
  <InngangsvilkarDefaultInitPanel<EndepunktInitData>
    {...props}
    behandlingVersjon={behandlingVersjon}
    requestApi={requestEsApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    vilkarKoder={VILKAR_KODER}
    inngangsvilkarPanelKode="OMSORG"
    hentInngangsvilkarPanelTekst={(data) => hentAksjonspunktTekst(data.aksjonspunkter)}
    renderPanel={(data) => (
      <>
        <OmsorgVilkarProsessIndex {...data} />
        <VerticalSpacer thirtyTwoPx />
      </>
    )}
  />
);

export default OmsorgInngangsvilkarInitPanel;
