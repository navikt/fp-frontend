import React from 'react';
import { shallow } from 'enzyme';

import {
  ProsessDefaultInitPanel, ProsessDefaultInitPanelProps, OverstyringPanelDef, ProsessPanelInitProps,
} from '@fpsak-frontend/behandling-felles';
import {
  AksessRettigheter, Aksjonspunkt, Behandling, StandardProsessPanelProps, Vilkar,
} from '@fpsak-frontend/types';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import FortsattMedlemskapProsessStegInitPanel from './FortsattMedlemskapProsessStegInitPanel';

type INIT_DATA = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

const behandling = {
  uuid: 'test-uuid',
  versjon: 1,
} as Behandling;

describe('<FortsattMedlemskapProsessStegInitPanel>', () => {
  it('skal rendre komponent', () => {
    const wrapper = shallow(<FortsattMedlemskapProsessStegInitPanel
      behandling={behandling}
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      rettigheter={{} as AksessRettigheter}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any> & ProsessPanelInitProps>(ProsessDefaultInitPanel);

    const vilkar = [{
      vilkarType: vilkarType.MEDLEMSKAPSVILKÅRET_LØPENDE,
    } as Vilkar];
    const aksjonspunkter = [{
      definisjon: aksjonspunktCodes.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR,
    }] as Aksjonspunkt[];

    expect(panel.props().skalPanelVisesIMeny({
      aksjonspunkter,
      vilkar,
    } as StandardProsessPanelProps, RestApiState.SUCCESS)).toBe(true);
    expect(panel.props().skalPanelVisesIMeny({
      aksjonspunkter,
      vilkar: [] as Vilkar[],
    } as StandardProsessPanelProps, RestApiState.SUCCESS)).toBe(false);
    expect(panel.props().renderPanel({}, { aksjonspunkter: [], vilkar: [] }).type).toEqual(OverstyringPanelDef);
  });
});
