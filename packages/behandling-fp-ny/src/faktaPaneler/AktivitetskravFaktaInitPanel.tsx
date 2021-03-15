import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import AktivitetskravFaktaIndex from '@fpsak-frontend/fakta-aktivitetskrav';
import { Aksjonspunkt, UttakKontrollerAktivitetskrav } from '@fpsak-frontend/types';
import { FaktaPanelInitProps, FaktaDefaultInitPanel } from '@fpsak-frontend/behandling-felles-ny';

import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import getPackageIntl from '../../i18n/getPackageIntl';
import { FpBehandlingApiKeys, requestFpApi } from '../data/fpBehandlingApi';

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.KONTROLLER_AKTIVITETSKRAV];

const ENDEPUNKTER_INIT_DATA = [FpBehandlingApiKeys.AKSJONSPUNKTER, FpBehandlingApiKeys.UTTAK_KONTROLLER_AKTIVITETSKRAV];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  uttakKontrollerAktivitetskrav: UttakKontrollerAktivitetskrav[];
}

/**
 * AktivitetskravFaktaInitPanel
 */
const AktivitetskravFaktaInitPanel: FunctionComponent<FaktaPanelInitProps> = (props) => (
  <FaktaDefaultInitPanel<EndepunktInitData>
    {...props}
    requestApi={requestFpApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={faktaPanelCodes.AKTIVITETSKRAV}
    faktaPanelMenyTekst={getPackageIntl().formatMessage({ id: 'AktivitetskravInfoPanel.FaktaAktivitetskrav' })}
    skalPanelVisesIMeny={(initData) => !!initData?.uttakKontrollerAktivitetskrav}
    renderPanel={(data) => <AktivitetskravFaktaIndex {...data} />}
  />
);

export default AktivitetskravFaktaInitPanel;
