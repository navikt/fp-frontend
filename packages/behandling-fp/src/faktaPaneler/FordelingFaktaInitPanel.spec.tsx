import React from 'react';
import { shallow } from 'enzyme';

import { FaktaFordelBeregningAksjonspunktCode } from '@navikt/ft-fakta-fordel-beregningsgrunnlag';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
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
      definisjon: FaktaFordelBeregningAksjonspunktCode.FORDEL_BEREGNINGSGRUNNLAG,
    } as Aksjonspunkt];
    const annetAp = [{
      definisjon: aksjonspunktCodes.ADOPSJONSDOKUMENTAJON,
    } as Aksjonspunkt];

    expect(panel.props().skalPanelVisesIMeny({ aksjonspunkter: fordelingAp })).toBe(true);
    expect(panel.props().skalPanelVisesIMeny({ aksjonspunkter: annetAp })).toBe(false);
    // expect(panel.props().renderPanel({}).type).toEqual(FordelBeregningsgrunnlagFaktaIndex);
  });
});
