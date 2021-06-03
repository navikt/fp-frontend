import React from 'react';
import { shallow } from 'enzyme';

import FodselFaktaIndex from '@fpsak-frontend/fakta-fodsel';
import { FaktaDefaultInitPanel, FaktaDefaultInitPanelProps, FaktaPanelInitProps } from '@fpsak-frontend/behandling-felles';
import { Vilkar } from '@fpsak-frontend/types';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';

import FodselvilkaretFaktaInitPanel from './FodselvilkaretFaktaInitPanel';

type INIT_DATA = {
  vilkar: Vilkar[];
}

describe('<FodselvilkaretFaktaInitPanel>', () => {
  it('skal rendre komponent', () => {
    const wrapper = shallow(<FodselvilkaretFaktaInitPanel
      valgtFaktaSteg="default"
      registrerFaktaPanel={() => {}}
    />);

    const panel = wrapper.find<FaktaDefaultInitPanelProps<INIT_DATA, any> & FaktaPanelInitProps>(FaktaDefaultInitPanel);

    const fodselVilkar = [{
      vilkarType: {
        kode: vilkarType.FODSELSVILKARET_FAR,
        kodeverk: '',
      },
    } as Vilkar];
    const annetVilkar = [{
      vilkarType: {
        kode: vilkarType.ADOPSJONSVILKARET,
        kodeverk: '',
      },
    } as Vilkar];

    expect(panel.props().skalPanelVisesIMeny({ vilkar: fodselVilkar })).toBe(true);
    expect(panel.props().skalPanelVisesIMeny({ vilkar: annetVilkar })).toBe(false);
    expect(panel.props().renderPanel({}).type).toEqual(FodselFaktaIndex);
  });
});
