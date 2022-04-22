import React from 'react';
import { shallow } from 'enzyme';

import { ProsessDefaultInitPanel, ProsessDefaultInitPanelProps, ProsessPanelInitProps } from '@fpsak-frontend/behandling-felles';
import { Behandling, StandardProsessPanelProps } from '@fpsak-frontend/types';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';

import BeregningsgrunnlagProsessStegInitPanel from './BeregningsgrunnlagProsessStegInitPanel';

describe('<BeregningsgrunnlagProsessStegInitPanel>', () => {
  const behandling = {
    uuid: '1',
    versjon: 1,
  } as Behandling;

  it('skal rendre komponent', () => {
    const wrapper = shallow(<BeregningsgrunnlagProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      arbeidsgiverOpplysningerPerId={{}}
      behandling={behandling}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<any, any> & ProsessPanelInitProps>(ProsessDefaultInitPanel);

    expect(panel.props().skalPanelVisesIMeny({} as StandardProsessPanelProps, RestApiState.SUCCESS)).toBe(true);
    expect(panel.props().skalPanelVisesIMeny({} as StandardProsessPanelProps, RestApiState.LOADING)).toBe(false);
    // expect(panel.props().renderPanel({}, {}).type).toEqual(BeregningsgrunnlagProsessIndex);
  });
});
