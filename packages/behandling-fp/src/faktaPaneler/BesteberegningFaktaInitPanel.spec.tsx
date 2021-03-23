import React from 'react';
import { shallow } from 'enzyme';

import BesteberegningFaktaIndex from '@fpsak-frontend/fakta-besteberegning';
import { FaktaDefaultInitPanel, FaktaDefaultInitPanelProps } from '@fpsak-frontend/behandling-felles';
import { Beregningsgrunnlag } from '@fpsak-frontend/types';

import BesteberegningFaktaInitPanel from './BesteberegningFaktaInitPanel';

type INIT_DATA = {
  beregningsgrunnlag: Beregningsgrunnlag;
}

describe('<BesteberegningFaktaInitPanel>', () => {
  it('skal rendre komponent', () => {
    const wrapper = shallow(<BesteberegningFaktaInitPanel
      valgtFaktaSteg="default"
      registrerFaktaPanel={() => {}}
      arbeidsgiverOpplysningerPerId={{}}
    />);

    const panel = wrapper.find<FaktaDefaultInitPanelProps<INIT_DATA, any>>(FaktaDefaultInitPanel);

    const beregningsgrunnlag = {
      ytelsesspesifiktGrunnlag: {
        besteberegninggrunnlag: {},
      },
    } as Beregningsgrunnlag;

    expect(panel.props().skalPanelVisesIMeny({ beregningsgrunnlag })).toBe(true);
    expect(panel.props().skalPanelVisesIMeny({})).toBe(false);
    expect(panel.props().renderPanel({}).type).toEqual(BesteberegningFaktaIndex);
  });
});
