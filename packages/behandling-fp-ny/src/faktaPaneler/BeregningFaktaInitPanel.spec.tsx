import React from 'react';
import { shallow } from 'enzyme';

import BeregningFaktaIndex from '@fpsak-frontend/fakta-beregning';
import { FaktaDefaultInitPanel, FaktaDefaultInitPanelProps } from '@fpsak-frontend/behandling-felles-ny';
import { AksessRettigheter, Beregningsgrunnlag } from '@fpsak-frontend/types';

import BeregningFaktaInitPanel from './BeregningFaktaInitPanel';

type INIT_DATA = {
  beregningsgrunnlag: Beregningsgrunnlag;
}

describe('<BeregningFaktaInitPanel>', () => {
  it('skal rendre komponent', () => {
    const wrapper = shallow(<BeregningFaktaInitPanel
      valgtFaktaSteg="default"
      registrerFaktaPanel={() => {}}
      arbeidsgiverOpplysningerPerId={{}}
      rettigheter={{
        kanOverstyreAccess: {
          isEnabled: true,
        },
      } as AksessRettigheter}
    />);

    const panel = wrapper.find<FaktaDefaultInitPanelProps<INIT_DATA, any>>(FaktaDefaultInitPanel);

    const beregningsgrunnlag = {} as Beregningsgrunnlag;

    expect(panel.props().skalPanelVisesIMeny({ beregningsgrunnlag })).toBe(true);
    expect(panel.props().skalPanelVisesIMeny({})).toBe(false);
    expect(panel.props().renderPanel({}).type).toEqual(BeregningFaktaIndex);
  });
});
