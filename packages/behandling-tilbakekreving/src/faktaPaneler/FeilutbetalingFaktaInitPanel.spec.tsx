import React from 'react';
import { shallow } from 'enzyme';

import FeilutbetalingFaktaIndex from '@fpsak-frontend/fakta-feilutbetaling';
import { FaktaDefaultInitPanel, FaktaDefaultInitPanelProps } from '@fpsak-frontend/behandling-felles';
import {
  Aksjonspunkt, AlleKodeverk, Fagsak, FeilutbetalingFakta,
} from '@fpsak-frontend/types';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';

import FeilutbetalingFaktaInitPanel from './FeilutbetalingFaktaInitPanel';

type INIT_DATA = {
  aksjonspunkter: Aksjonspunkt[];
  feilutbetalingFakta: FeilutbetalingFakta;
}

describe('<FeilutbetalingFaktaInitPanel>', () => {
  it('skal rendre komponent', () => {
    const wrapper = shallow(<FeilutbetalingFaktaInitPanel
      valgtFaktaSteg="default"
      registrerFaktaPanel={() => {}}
      fagsak={{ fagsakYtelseType: { kode: fagsakYtelseType.FORELDREPENGER, kodeverk: '' } } as Fagsak}
      fpsakKodeverk={{} as AlleKodeverk}
    />);

    const panel = wrapper.find<FaktaDefaultInitPanelProps<INIT_DATA, any>>(FaktaDefaultInitPanel);

    const feilutbetalingFakta = {};

    expect(panel.props().skalPanelVisesIMeny({ feilutbetalingFakta })).toBe(true);
    expect(panel.props().skalPanelVisesIMeny({})).toBe(false);
    expect(panel.props().renderPanel({}).type).toEqual(FeilutbetalingFaktaIndex);
  });
});
