import React from 'react';
import { shallow } from 'enzyme';

import TilbakekrevingProsessIndex from '@fpsak-frontend/prosess-tilbakekreving';
import { ProsessDefaultInitPanel, ProsessDefaultInitPanelProps } from '@fpsak-frontend/behandling-felles';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import navBrukerKjonn from '@fpsak-frontend/kodeverk/src/navBrukerKjonn';
import {
  Aksjonspunkt, AlleKodeverkTilbakekreving, Behandling, StandardProsessPanelProps,
} from '@fpsak-frontend/types';

import { requestTilbakekrevingApi, TilbakekrevingBehandlingApiKeys } from '../data/tilbakekrevingBehandlingApi';
import TilbakekrevingProsessStegInitPanel from './TilbakekrevingProsessStegInitPanel';

type INIT_DATA = {
  aksjonspunkter: Aksjonspunkt[];
}

const behandling = {
  uuid: 'test-uuid',
  versjon: 1,
} as Behandling;

describe('<TilbakekrevingProsessStegInitPanel>', () => {
  it('skal rendre komponent', () => {
    requestTilbakekrevingApi.mock(TilbakekrevingBehandlingApiKeys.BEREGNE_BELØP.name);

    const wrapper = shallow(<TilbakekrevingProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      fagsakKjønn={{
        kode: navBrukerKjonn.KVINNE,
        kodeverk: '',
      }}
      fptilbakeKodeverk={{} as AlleKodeverkTilbakekreving}
      behandling={behandling}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any>>(ProsessDefaultInitPanel);

    expect(panel.props().skalPanelVisesIMeny({} as StandardProsessPanelProps, RestApiState.SUCCESS)).toBe(true);

    expect(panel.props().renderPanel({}, { aksjonspunkter: [] }).type).toEqual(TilbakekrevingProsessIndex);
  });
});
