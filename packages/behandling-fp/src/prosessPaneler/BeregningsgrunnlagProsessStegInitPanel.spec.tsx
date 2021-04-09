import React from 'react';
import { shallow } from 'enzyme';

import BeregningsgrunnlagProsessIndex from '@fpsak-frontend/prosess-beregningsgrunnlag';
import { ProsessDefaultInitPanel, ProsessDefaultInitPanelProps } from '@fpsak-frontend/behandling-felles';
import { StandardProsessPanelProps } from '@fpsak-frontend/types';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';

import BeregningsgrunnlagProsessStegInitPanel from './BeregningsgrunnlagProsessStegInitPanel';

describe('<BeregningsgrunnlagProsessStegInitPanel>', () => {
  it('skal rendre komponent', () => {
    const wrapper = shallow(<BeregningsgrunnlagProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      arbeidsgiverOpplysningerPerId={{}}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<any, any>>(ProsessDefaultInitPanel);

    expect(panel.props().skalPanelVisesIMeny({} as StandardProsessPanelProps, RestApiState.SUCCESS)).toBe(true);
    expect(panel.props().skalPanelVisesIMeny({} as StandardProsessPanelProps, RestApiState.LOADING)).toBe(false);
    expect(panel.props().renderPanel({}).type).toEqual(BeregningsgrunnlagProsessIndex);
  });
});
