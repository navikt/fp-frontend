import React from 'react';
import { shallow } from 'enzyme';

import YtelserFaktaIndex from '@fpsak-frontend/fakta-ytelser';
import { FaktaDefaultInitPanel, FaktaDefaultInitPanelProps } from '@fpsak-frontend/behandling-felles';
import { InntektArbeidYtelse } from '@fpsak-frontend/types';

import YtelserFaktaInitPanel from './YtelserFaktaInitPanel';

type INIT_DATA = {
  inntektArbeidYtelse: InntektArbeidYtelse;
}

describe('<YtelserFaktaInitPanel>', () => {
  it('skal rendre komponent', () => {
    const wrapper = shallow(<YtelserFaktaInitPanel
      valgtFaktaSteg="default"
      registrerFaktaPanel={() => {}}
    />);

    const panel = wrapper.find<FaktaDefaultInitPanelProps<INIT_DATA, any>>(FaktaDefaultInitPanel);

    const inntektArbeidYtelse = {
      relatertTilgrensendeYtelserForSoker: [{}],
    } as InntektArbeidYtelse;

    expect(panel.props().skalPanelVisesIMeny({ inntektArbeidYtelse })).toBe(true);
    expect(panel.props().skalPanelVisesIMeny({})).toBe(false);
    expect(panel.props().renderPanel({}).type).toEqual(YtelserFaktaIndex);
  });
});
