import React from 'react';
import { shallow } from 'enzyme';

import ArbeidsforholdFaktaIndex from '@fpsak-frontend/fakta-arbeidsforhold';
import { FaktaDefaultInitPanel, FaktaDefaultInitPanelProps } from '@fpsak-frontend/behandling-felles';

import ArbeidsforholdFaktaInitPanel from './ArbeidsforholdFaktaInitPanel';

describe('<ArbeidsforholdFaktaInitPanel>', () => {
  it('skal rendre komponent', () => {
    const wrapper = shallow(<ArbeidsforholdFaktaInitPanel
      valgtFaktaSteg="default"
      registrerFaktaPanel={() => {}}
      arbeidsgiverOpplysningerPerId={{}}
    />);

    const panel = wrapper.find<FaktaDefaultInitPanelProps<any, any>>(FaktaDefaultInitPanel);

    expect(panel.props().skalPanelVisesIMeny({})).toBe(true);
    expect(panel.props().renderPanel({}).type).toEqual(ArbeidsforholdFaktaIndex);
  });
});
