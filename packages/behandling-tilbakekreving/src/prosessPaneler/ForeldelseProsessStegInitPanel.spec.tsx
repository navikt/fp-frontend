import React from 'react';
import { shallow } from 'enzyme';

import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import ForeldelseProsessIndex from '@fpsak-frontend/prosess-foreldelse';
import { ProsessDefaultInitPanel, ProsessDefaultInitPanelProps, ProsessPanelInitProps } from '@fpsak-frontend/behandling-felles';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import navBrukerKjonn from '@fpsak-frontend/kodeverk/src/navBrukerKjonn';
import {
  Aksjonspunkt, AlleKodeverkTilbakekreving, Behandling, FeilutbetalingPerioderWrapper, StandardProsessPanelProps,
} from '@fpsak-frontend/types';

import { requestTilbakekrevingApi, TilbakekrevingBehandlingApiKeys } from '../data/tilbakekrevingBehandlingApi';
import ForeldelseProsessStegInitPanel from './ForeldelseProsessStegInitPanel';

type INIT_DATA = {
  aksjonspunkter: Aksjonspunkt[];
  perioderForeldelse: FeilutbetalingPerioderWrapper;
}

describe('<ForeldelseProsessStegInitPanel>', () => {
  it('skal rendre komponent', () => {
    requestTilbakekrevingApi.mock(TilbakekrevingBehandlingApiKeys.BEREGNE_BELØP.name);

    const wrapper = shallow(<ForeldelseProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      fagsakKjønn={{
        kode: navBrukerKjonn.KVINNE,
        kodeverk: '',
      }}
      fptilbakeKodeverk={{} as AlleKodeverkTilbakekreving}
      behandling={{ versjon: 1 } as Behandling}
    />);

    const panel = wrapper.find<Required<ProsessDefaultInitPanelProps<INIT_DATA, any>> & ProsessPanelInitProps>(ProsessDefaultInitPanel);

    expect(panel.props().skalPanelVisesIMeny({} as StandardProsessPanelProps, RestApiState.SUCCESS)).toBe(true);

    const perioderForeldelse = {} as FeilutbetalingPerioderWrapper;

    expect(panel.props().hentOverstyrtStatus({}, {} as StandardProsessPanelProps)).toEqual(vilkarUtfallType.IKKE_VURDERT);
    // @ts-ignore
    expect(panel.props().hentOverstyrtStatus({ perioderForeldelse })).toEqual(vilkarUtfallType.OPPFYLT);

    expect(panel.props().renderPanel({}, { aksjonspunkter: [], perioderForeldelse: {} as FeilutbetalingPerioderWrapper }).type).toEqual(ForeldelseProsessIndex);
  });
});
