import React from 'react';
import { shallow } from 'enzyme';

import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import OpptjeningFaktaIndex from '@fpsak-frontend/fakta-opptjening';
import { FaktaDefaultInitPanel, FaktaDefaultInitPanelProps, FaktaPanelInitProps } from '@fpsak-frontend/behandling-felles';
import { Vilkar } from '@fpsak-frontend/types';

import OpptjeningsvilkaretFaktaInitPanel from './OpptjeningsvilkaretFaktaInitPanel';

type INIT_DATA = {
  vilkar: Vilkar[];
}

describe('<OpptjeningsvilkaretFaktaInitPanel>', () => {
  it('skal rendre komponent', () => {
    const wrapper = shallow(<OpptjeningsvilkaretFaktaInitPanel
      valgtFaktaSteg="default"
      registrerFaktaPanel={() => {}}
      arbeidsgiverOpplysningerPerId={{}}
    />);

    const panel = wrapper.find<FaktaDefaultInitPanelProps<INIT_DATA, any> & FaktaPanelInitProps>(FaktaDefaultInitPanel);

    const vilkarSkalVises = [{
      vilkarType: {
        kode: vilkarType.OPPTJENINGSVILKARET,
        kodeverk: '',
      },
    }, {
      vilkarType: {
        kode: vilkarType.MEDLEMSKAPSVILKARET,
        kodeverk: '',
      },
      vilkarStatus: {
        kode: vilkarUtfallType.OPPFYLT,
        kodeverk: '',
      },
    }] as Vilkar[];
    const vilkarSkalIkkeVises = [{
      vilkarType: {
        kode: vilkarType.OPPTJENINGSVILKARET,
        kodeverk: '',
      },
    }] as Vilkar[];

    expect(panel.props().skalPanelVisesIMeny({ vilkar: vilkarSkalVises })).toBe(true);
    expect(panel.props().skalPanelVisesIMeny({ vilkar: vilkarSkalIkkeVises })).toBe(false);
    expect(panel.props().renderPanel({}).type).toEqual(OpptjeningFaktaIndex);
  });
});
