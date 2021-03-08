import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import AktivitetskravFaktaIndex from '@fpsak-frontend/fakta-aktivitetskrav';
import { Aksjonspunkt, UttakKontrollerAktivitetskrav } from '@fpsak-frontend/types';
import { FaktaPanelInitProps, FaktaVanligOppforselInitPanel } from '@fpsak-frontend/behandling-felles-ny';

import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import getPackageIntl from '../../i18n/getPackageIntl';
import { FpBehandlingApiKeys, restApiFpHooks } from '../data/fpBehandlingApi';

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
  <FaktaVanligOppforselInitPanel<EndepunktInitData>
    {...props}
    useMultipleRestApi={restApiFpHooks.useMultipleRestApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={faktaPanelCodes.AKTIVITETSKRAV}
    faktaPanelTekst={getPackageIntl().formatMessage({ id: 'AktivitetskravInfoPanel.FaktaAktivitetskrav' })}
    skalVisesFn={(initData) => !!initData?.uttakKontrollerAktivitetskrav}
    render={(data) => <AktivitetskravFaktaIndex {...data} />}
  />
);

export default AktivitetskravFaktaInitPanel;
