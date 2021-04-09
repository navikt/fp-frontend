import React from 'react';
import { shallow } from 'enzyme';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import TilleggsopplysningerFaktaIndex from '@fpsak-frontend/fakta-tilleggsopplysninger';
import { FaktaDefaultInitPanel, FaktaDefaultInitPanelProps } from '@fpsak-frontend/behandling-felles';
import { Aksjonspunkt } from '@fpsak-frontend/types';

import TilleggsopplysningerFaktaInitPanel from './TilleggsopplysningerFaktaInitPanel';

type INIT_DATA = {
  aksjonspunkter: Aksjonspunkt[];
}

describe('<TilleggsopplysningerFaktaInitPanel>', () => {
  it('skal rendre komponent', () => {
    const wrapper = shallow(<TilleggsopplysningerFaktaInitPanel
      valgtFaktaSteg="default"
      registrerFaktaPanel={() => {}}
    />);

    const panel = wrapper.find<FaktaDefaultInitPanelProps<INIT_DATA, any>>(FaktaDefaultInitPanel);

    const aksjonspunkter = [{
      definisjon: {
        kode: aksjonspunktCodes.TILLEGGSOPPLYSNINGER,
        kodeverk: '',
      },
    }] as Aksjonspunkt[];

    expect(panel.props().skalPanelVisesIMeny({ aksjonspunkter })).toBe(true);
    expect(panel.props().skalPanelVisesIMeny({})).toBe(false);
    expect(panel.props().renderPanel({}).type).toEqual(TilleggsopplysningerFaktaIndex);
  });
});
