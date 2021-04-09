import React from 'react';
import { shallow } from 'enzyme';

import MedlemskapFaktaIndex from '@fpsak-frontend/fakta-medlemskap';
import { FaktaDefaultInitPanel, FaktaDefaultInitPanelProps } from '@fpsak-frontend/behandling-felles';
import { AksessRettigheter, Soknad } from '@fpsak-frontend/types';

import MedlemskapsvilkaretFaktaInitPanel from './MedlemskapsvilkaretFaktaInitPanel';

type INIT_DATA = {
  soknad: Soknad;
}

describe('<MedlemskapsvilkaretFaktaInitPanel>', () => {
  it('skal rendre komponent', () => {
    const wrapper = shallow(<MedlemskapsvilkaretFaktaInitPanel
      valgtFaktaSteg="default"
      registrerFaktaPanel={() => {}}
      arbeidsgiverOpplysningerPerId={{}}
      rettigheter={{
        writeAccess: {
          isEnabled: true,
        },
      } as AksessRettigheter}
      hasFetchError={false}
    />);

    const panel = wrapper.find<FaktaDefaultInitPanelProps<INIT_DATA, any>>(FaktaDefaultInitPanel);

    const soknad = {} as Soknad;

    expect(panel.props().skalPanelVisesIMeny({ soknad })).toBe(true);
    expect(panel.props().skalPanelVisesIMeny({})).toBe(false);
    const rendretPanel = panel.props().renderPanel({
      behandling: {
        behandlingPaVent: false,
      },
    });
    expect(rendretPanel.type).toEqual(MedlemskapFaktaIndex);
    expect(rendretPanel.props.readOnlyForStartdatoForForeldrepenger).toBe(false);
  });
});
