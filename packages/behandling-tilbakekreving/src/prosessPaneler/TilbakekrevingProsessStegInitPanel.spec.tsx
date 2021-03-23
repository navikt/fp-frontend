import React from 'react';
import { shallow } from 'enzyme';

import TilbakekrevingProsessIndex from '@fpsak-frontend/prosess-tilbakekreving';
import { ProsessDefaultInitPanel, ProsessDefaultInitPanelProps } from '@fpsak-frontend/behandling-felles';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import navBrukerKjonn from '@fpsak-frontend/kodeverk/src/navBrukerKjonn';
import { Aksjonspunkt, StandardProsessPanelProps } from '@fpsak-frontend/types';

import { requestTilbakekrevingApi, TilbakekrevingBehandlingApiKeys } from '../data/tilbakekrevingBehandlingApi';
import TilbakekrevingProsessStegInitPanel from './TilbakekrevingProsessStegInitPanel';

type INIT_DATA = {
  aksjonspunkter: Aksjonspunkt[];
}

describe('<TilbakekrevingProsessStegInitPanel>', () => {
  it('skal rendre komponent', () => {
    requestTilbakekrevingApi.mock(TilbakekrevingBehandlingApiKeys.BEREGNE_BELØP);

    const wrapper = shallow(<TilbakekrevingProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      fagsakKjønn={{
        kode: navBrukerKjonn.KVINNE,
        kodeverk: '',
      }}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any>>(ProsessDefaultInitPanel);

    expect(panel.props().skalPanelVisesIMeny({} as StandardProsessPanelProps, RestApiState.SUCCESS)).toBe(true);

    expect(panel.props().renderPanel({}).type).toEqual(TilbakekrevingProsessIndex);
  });
});
