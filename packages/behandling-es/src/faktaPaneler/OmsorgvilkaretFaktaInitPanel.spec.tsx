import React from 'react';
import { shallow } from 'enzyme';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import OmsorgOgForeldreansvarFaktaIndex from '@fpsak-frontend/fakta-omsorg-og-foreldreansvar';
import { FaktaDefaultInitPanel, FaktaDefaultInitPanelProps } from '@fpsak-frontend/behandling-felles';
import { Aksjonspunkt, Personoversikt } from '@fpsak-frontend/types';

import OmsorgvilkaretFaktaInitPanel from './OmsorgvilkaretFaktaInitPanel';

type INIT_DATA = {
  aksjonspunkter: Aksjonspunkt[];
}

describe('<OmsorgvilkaretFaktaInitPanel>', () => {
  it('skal rendre komponent', () => {
    const wrapper = shallow(<OmsorgvilkaretFaktaInitPanel
      valgtFaktaSteg="default"
      registrerFaktaPanel={() => {}}
      personoversikt={{} as Personoversikt}
    />);

    const panel = wrapper.find<FaktaDefaultInitPanelProps<INIT_DATA, any>>(FaktaDefaultInitPanel);

    const aksjonspunkter = [{
      definisjon: {
        kode: aksjonspunktCodes.OMSORGSOVERTAKELSE,
        kodeverk: '',
      },
    }] as Aksjonspunkt[];

    expect(panel.props().skalPanelVisesIMeny({ aksjonspunkter })).toBe(true);
    expect(panel.props().skalPanelVisesIMeny({})).toBe(false);
    expect(panel.props().renderPanel({}).type).toEqual(OmsorgOgForeldreansvarFaktaIndex);
  });
});
