import React from 'react';
import { shallow } from 'enzyme';

import SakenFaktaIndex from '@fpsak-frontend/fakta-saken';
import { FaktaDefaultInitPanel, FaktaDefaultInitPanelProps, FaktaPanelInitProps } from '@fpsak-frontend/behandling-felles';

import SakenFaktaInitPanel from './SakenFaktaInitPanel';

describe('<SakenFaktaInitPanel>', () => {
  it('skal rendre komponent', () => {
    const wrapper = shallow(<SakenFaktaInitPanel
      valgtFaktaSteg="default"
      registrerFaktaPanel={() => {}}
    />);

    const panel = wrapper.find<FaktaDefaultInitPanelProps<any, any> & FaktaPanelInitProps>(FaktaDefaultInitPanel);

    expect(panel.props().skalPanelVisesIMeny({})).toBe(true);
    expect(panel.props().renderPanel({}).type).toEqual(SakenFaktaIndex);
  });
});
