import React from 'react';
import { shallow } from 'enzyme';

import { ProsessDefaultInitPanel, ProsessDefaultInitPanelProps, OverstyringPanelDef } from '@fpsak-frontend/behandling-felles';
import {
  AksessRettigheter, Aksjonspunkt, StandardProsessPanelProps, Vilkar,
} from '@fpsak-frontend/types';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import FortsattMedlemskapProsessStegInitPanel from './FortsattMedlemskapProsessStegInitPanel';

type INIT_DATA = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

describe('<FortsattMedlemskapProsessStegInitPanel>', () => {
  it('skal rendre komponent', () => {
    const wrapper = shallow(<FortsattMedlemskapProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      rettigheter={{} as AksessRettigheter}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any>>(ProsessDefaultInitPanel);

    const vilkar = [{
      vilkarType: {
        kode: vilkarType.MEDLEMSKAPSVILKÅRET_LØPENDE,
        kodeverk: '',
      },
    } as Vilkar];
    const aksjonspunkter = [{
      definisjon: {
        kode: aksjonspunktCodes.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR,
        kodeverk: '',
      },
    }] as Aksjonspunkt[];

    expect(panel.props().skalPanelVisesIMeny({
      aksjonspunkter,
      vilkar,
    } as StandardProsessPanelProps, RestApiState.SUCCESS)).toBe(true);
    expect(panel.props().skalPanelVisesIMeny({
      aksjonspunkter,
      vilkar: [],
    } as StandardProsessPanelProps, RestApiState.SUCCESS)).toBe(false);
    expect(panel.props().renderPanel({}).type).toEqual(OverstyringPanelDef);
  });
});
