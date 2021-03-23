import React from 'react';
import { shallow } from 'enzyme';

import AdopsjonFaktaIndex from '@fpsak-frontend/fakta-adopsjon';
import { FaktaDefaultInitPanel, FaktaDefaultInitPanelProps } from '@fpsak-frontend/behandling-felles';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import { Vilkar } from '@fpsak-frontend/types';

import AdopsjonsvilkaretFaktaInitPanel from './AdopsjonsvilkaretFaktaInitPanel';

type INIT_DATA = {
  vilkar: Vilkar[];
}

describe('<AdopsjonsvilkaretFaktaInitPanel>', () => {
  it('skal rendre komponent', () => {
    const wrapper = shallow(<AdopsjonsvilkaretFaktaInitPanel
      valgtFaktaSteg="default"
      registrerFaktaPanel={() => {}}
    />);

    const panel = wrapper.find<FaktaDefaultInitPanelProps<INIT_DATA, any>>(FaktaDefaultInitPanel);

    const adopsjonsVilkar = [{
      vilkarType: {
        kode: vilkarType.ADOPSJONSVILKARET,
        kodeverk: '',
      },
    } as Vilkar];
    const annetVilkar = [{
      vilkarType: {
        kode: vilkarType.FODSELSVILKARET_FAR,
        kodeverk: '',
      },
    } as Vilkar];

    expect(panel.props().skalPanelVisesIMeny({ vilkar: adopsjonsVilkar })).toBe(true);
    expect(panel.props().skalPanelVisesIMeny({ vilkar: annetVilkar })).toBe(false);
    expect(panel.props().renderPanel({}).type).toEqual(AdopsjonFaktaIndex);
  });
});
