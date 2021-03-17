import React from 'react';
import { shallow } from 'enzyme';

import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import BeregningsresultatProsessIndex from '@fpsak-frontend/prosess-beregningsresultat';
import { ProsessDefaultInitPanel, ProsessDefaultInitPanelProps } from '@fpsak-frontend/behandling-felles-ny';
import {
  AksessRettigheter, Aksjonspunkt, BeregningsresultatEs, StandardProsessPanelProps, Vilkar,
} from '@fpsak-frontend/types';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';

import BeregningProsessStegInitPanel from './BeregningProsessStegInitPanel';

type INIT_DATA = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

describe('<BeregningProsessStegInitPanel>', () => {
  it('skal rendre komponent', () => {
    const wrapper = shallow(<BeregningProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      rettigheter={{} as AksessRettigheter}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any>>(ProsessDefaultInitPanel);

    expect(panel.props().skalPanelVisesIMeny({} as StandardProsessPanelProps, RestApiState.SUCCESS)).toBe(true);

    const beregningresultatEngangsstonad = {} as BeregningsresultatEs;

    expect(panel.props().hentOverstyrtStatus({} as StandardProsessPanelProps)).toEqual(vilkarUtfallType.IKKE_VURDERT);
    // @ts-ignore fiks
    expect(panel.props().hentOverstyrtStatus({ beregningresultatEngangsstonad })).toEqual(vilkarUtfallType.OPPFYLT);

    expect(panel.props().renderPanel({}).type).toEqual(BeregningsresultatProsessIndex);
  });
});
