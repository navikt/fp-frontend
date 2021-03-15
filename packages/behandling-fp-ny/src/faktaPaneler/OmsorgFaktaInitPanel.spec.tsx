import React from 'react';
import { shallow } from 'enzyme';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import OmsorgFaktaIndex from '@fpsak-frontend/fakta-omsorg';
import { FaktaDefaultInitPanel, FaktaDefaultInitPanelProps } from '@fpsak-frontend/behandling-felles-ny';
import { Aksjonspunkt, Personoversikt } from '@fpsak-frontend/types';

import OmsorgFaktaInitPanel from './OmsorgFaktaInitPanel';

type INIT_DATA = {
  aksjonspunkter: Aksjonspunkt[];
}

describe('<OmsorgFaktaInitPanel>', () => {
  it('skal rendre komponent', () => {
    const wrapper = shallow(<OmsorgFaktaInitPanel
      valgtFaktaSteg="default"
      registrerFaktaPanel={() => {}}
      personoversikt={{} as Personoversikt}
    />);

    const panel = wrapper.find<FaktaDefaultInitPanelProps<INIT_DATA, any>>(FaktaDefaultInitPanel);

    const aksjonspunkter = [{
      definisjon: {
        kode: aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG,
        kodeverk: '',
      },
    }] as Aksjonspunkt[];

    expect(panel.props().skalPanelVisesIMeny({ aksjonspunkter })).toBe(true);
    expect(panel.props().skalPanelVisesIMeny({})).toBe(false);
    expect(panel.props().renderPanel({}).type).toEqual(OmsorgFaktaIndex);
  });
});
