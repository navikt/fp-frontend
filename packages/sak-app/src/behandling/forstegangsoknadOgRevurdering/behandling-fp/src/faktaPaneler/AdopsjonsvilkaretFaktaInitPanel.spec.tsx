import React from 'react';
import { shallow } from 'enzyme';

import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import AdopsjonFaktaIndex from '@fpsak-frontend/fakta-adopsjon';
import { FaktaDefaultInitPanel, FaktaDefaultInitPanelProps, FaktaPanelInitProps } from '@fpsak-frontend/behandling-felles';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import { Fagsak, Vilkar } from '@fpsak-frontend/types';

import AdopsjonsvilkaretFaktaInitPanel from './AdopsjonsvilkaretFaktaInitPanel';

type INIT_DATA = {
  vilkar: Vilkar[];
}

describe('<AdopsjonsvilkaretFaktaInitPanel>', () => {
  it('skal rendre komponent', () => {
    const fagsak = {
      fagsakYtelseType: fagsakYtelseType.FORELDREPENGER,
    } as Fagsak;

    const wrapper = shallow(<AdopsjonsvilkaretFaktaInitPanel
      valgtFaktaSteg="default"
      registrerFaktaPanel={() => {}}
      fagsak={fagsak}
    />);

    const panel = wrapper.find<FaktaDefaultInitPanelProps<INIT_DATA, any> & FaktaPanelInitProps>(FaktaDefaultInitPanel);

    const adopsjonsVilkar = [{
      vilkarType: vilkarType.ADOPSJONSVILKARET,
    } as Vilkar];
    const annetVilkar = [{
      vilkarType: vilkarType.FODSELSVILKARET_FAR,
    } as Vilkar];

    expect(panel.props().skalPanelVisesIMeny({ vilkar: adopsjonsVilkar })).toBe(true);
    expect(panel.props().skalPanelVisesIMeny({ vilkar: annetVilkar })).toBe(false);
    expect(panel.props().renderPanel({}).type).toEqual(AdopsjonFaktaIndex);
  });
});
