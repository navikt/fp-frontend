import React from 'react';
import { shallow } from 'enzyme';

import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import ForeldelseProsessIndex from '@fpsak-frontend/prosess-foreldelse';
import { ProsessDefaultInitPanel, ProsessDefaultInitPanelProps } from '@fpsak-frontend/behandling-felles-ny';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import navBrukerKjonn from '@fpsak-frontend/kodeverk/src/navBrukerKjonn';
import { Aksjonspunkt, FeilutbetalingPerioderWrapper, StandardProsessPanelProps } from '@fpsak-frontend/types';

import { requestTilbakekrevingApi, TilbakekrevingBehandlingApiKeys } from '../data/tilbakekrevingBehandlingApi';
import ForeldelseProsessStegInitPanel from './ForeldelseProsessStegInitPanel';

type INIT_DATA = {
  aksjonspunkter: Aksjonspunkt[];
  perioderForeldelse: FeilutbetalingPerioderWrapper;
}

describe('<ForeldelseProsessStegInitPanel>', () => {
  it('skal rendre komponent', () => {
    requestTilbakekrevingApi.mock(TilbakekrevingBehandlingApiKeys.BEREGNE_BELØP);

    const wrapper = shallow(<ForeldelseProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      fagsakKjønn={{
        kode: navBrukerKjonn.KVINNE,
        kodeverk: '',
      }}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any>>(ProsessDefaultInitPanel);

    expect(panel.props().skalPanelVisesIMeny({} as StandardProsessPanelProps, RestApiState.SUCCESS)).toBe(true);

    const perioderForeldelse = {} as FeilutbetalingPerioderWrapper;

    expect(panel.props().hentOverstyrtStatus({} as StandardProsessPanelProps)).toEqual(vilkarUtfallType.IKKE_VURDERT);
    // @ts-ignore
    expect(panel.props().hentOverstyrtStatus({ perioderForeldelse })).toEqual(vilkarUtfallType.OPPFYLT);

    expect(panel.props().renderPanel({}).type).toEqual(ForeldelseProsessIndex);
  });
});
