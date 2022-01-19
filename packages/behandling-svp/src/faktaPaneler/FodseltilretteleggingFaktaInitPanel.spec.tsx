import React from 'react';
import { shallow } from 'enzyme';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import FodselOgTilretteleggingFaktaIndex from '@fpsak-frontend/fakta-fodsel-og-tilrettelegging';
import { FaktaDefaultInitPanel, FaktaDefaultInitPanelProps, FaktaPanelInitProps } from '@fpsak-frontend/behandling-felles';
import { AksessRettigheter, Aksjonspunkt } from '@fpsak-frontend/types';

import FodseltilretteleggingFaktaInitPanel from './FodseltilretteleggingFaktaInitPanel';

type INIT_DATA = {
  aksjonspunkter: Aksjonspunkt[];
}

describe('<FodseltilretteleggingFaktaInitPanel>', () => {
  it('skal rendre komponent', () => {
    const wrapper = shallow(<FodseltilretteleggingFaktaInitPanel
      valgtFaktaSteg="default"
      registrerFaktaPanel={() => {}}
      arbeidsgiverOpplysningerPerId={{}}
      rettigheter={{
        kanOverstyreAccess: {
          isEnabled: true,
        },
      } as AksessRettigheter}
    />);

    const panel = wrapper.find<FaktaDefaultInitPanelProps<INIT_DATA, any> & FaktaPanelInitProps>(FaktaDefaultInitPanel);

    const aksjonspunkter = [{
      definisjon: aksjonspunktCodes.FODSELTILRETTELEGGING,
    }] as Aksjonspunkt[];

    expect(panel.props().skalPanelVisesIMeny({ aksjonspunkter })).toBe(true);
    expect(panel.props().skalPanelVisesIMeny({ aksjonspunkter: [] })).toBe(false);
    const rendretPanel = panel.props().renderPanel({
      behandling: {
        behandlingPaVent: false,
      },
    });
    expect(rendretPanel.type).toEqual(FodselOgTilretteleggingFaktaIndex);
  });
});
