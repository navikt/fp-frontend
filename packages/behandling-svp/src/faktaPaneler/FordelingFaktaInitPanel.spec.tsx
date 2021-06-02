import React from 'react';
import { shallow } from 'enzyme';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import FordelBeregningsgrunnlagFaktaIndex from '@fpsak-frontend/fakta-fordel-beregningsgrunnlag';
import { FaktaDefaultInitPanel, FaktaDefaultInitPanelProps, FaktaPanelInitProps } from '@fpsak-frontend/behandling-felles';
import { Aksjonspunkt } from '@fpsak-frontend/types';

import FordelingFaktaInitPanel from './FordelingFaktaInitPanel';

type INIT_DATA = {
  aksjonspunkter: Aksjonspunkt[];
}

describe('<FordelingFaktaInitPanel>', () => {
  it('skal rendre komponent', () => {
    const wrapper = shallow(<FordelingFaktaInitPanel
      valgtFaktaSteg="default"
      registrerFaktaPanel={() => {}}
      arbeidsgiverOpplysningerPerId={{}}
    />);

    const panel = wrapper.find<FaktaDefaultInitPanelProps<INIT_DATA, any> & FaktaPanelInitProps>(FaktaDefaultInitPanel);

    const fordelingAp = [{
      definisjon: {
        kode: aksjonspunktCodes.FORDEL_BEREGNINGSGRUNNLAG,
        kodeverk: '',
      },
    } as Aksjonspunkt];
    const annetAp = [{
      definisjon: {
        kode: aksjonspunktCodes.ADOPSJONSDOKUMENTAJON,
        kodeverk: '',
      },
    } as Aksjonspunkt];

    expect(panel.props().skalPanelVisesIMeny({ aksjonspunkter: fordelingAp })).toBe(true);
    expect(panel.props().skalPanelVisesIMeny({ aksjonspunkter: annetAp })).toBe(false);
    expect(panel.props().renderPanel({}).type).toEqual(FordelBeregningsgrunnlagFaktaIndex);
  });
});
