import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import AktivitetskravFaktaIndex from '@fpsak-frontend/fakta-aktivitetskrav';
import { Aksjonspunkt, UttakKontrollerAktivitetskrav } from '@fpsak-frontend/types';

import { FaktaPanelCode } from '@fpsak-frontend/konstanter';

import FaktaPanelInitProps from '../../../felles/typer/faktaPanelInitProps';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';
import FaktaDefaultInitPanel from '../../../felles/fakta/FaktaDefaultInitPanel';
import { FpBehandlingApiKeys } from '../data/fpBehandlingApi';

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.KONTROLLER_AKTIVITETSKRAV];

const ENDEPUNKTER_INIT_DATA = [BehandlingFellesApiKeys.AKSJONSPUNKTER, FpBehandlingApiKeys.UTTAK_KONTROLLER_AKTIVITETSKRAV];
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
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.AKTIVITETSKRAV}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'AktivitetskravInfoPanel.FaktaAktivitetskrav' })}
    skalPanelVisesIMeny={(initData) => !!initData?.uttakKontrollerAktivitetskrav}
    renderPanel={(data) => (
      <AktivitetskravFaktaIndex
        // @ts-ignore Eg trur denne feilar grunna feil i typescript-pakka. Sjekk på eit seinare tidspunkt om denne er retta
        {...data}
      />
    )}
  />
);

export default AktivitetskravFaktaInitPanel;
