import React from 'react';
import { shallow } from 'enzyme';

import SokersOpplysningspliktVilkarProsessIndex from '@fpsak-frontend/prosess-vilkar-sokers-opplysningsplikt';
import { ProsessDefaultInitPanel, ProsessDefaultInitPanelProps } from '@fpsak-frontend/behandling-felles';
import {
  Aksjonspunkt, Behandling, StandardProsessPanelProps, Vilkar,
} from '@fpsak-frontend/types';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';

import OpplysningspliktProsessStegInitPanel from './OpplysningspliktProsessStegInitPanel';

type INIT_DATA = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

describe('<OpplysningspliktProsessStegInitPanel>', () => {
  it('skal rendre komponent', () => {
    const wrapper = shallow(<OpplysningspliktProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      arbeidsgiverOpplysningerPerId={{}}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any>>(ProsessDefaultInitPanel);

    const vilkar = [{
      vilkarType: {
        kode: vilkarType.SOKERSOPPLYSNINGSPLIKT,
        kodeverk: '',
      },
    } as Vilkar];
    const aksjonspunkter = [{
      definisjon: {
        kode: aksjonspunktCodes.SOKERS_OPPLYSNINGSPLIKT_MANU,
        kodeverk: '',
      },
    }] as Aksjonspunkt[];
    const behandling = {
      type: {
        kode: behandlingType.REVURDERING,
        kodeverk: '',
      },
    } as Behandling;

    expect(panel.props().skalPanelVisesIMeny({
      behandling,
      aksjonspunkter,
      vilkar,
    } as StandardProsessPanelProps, RestApiState.SUCCESS)).toBe(true);
    expect(panel.props().skalPanelVisesIMeny({
      behandling,
      aksjonspunkter: [],
      vilkar: [],
    } as StandardProsessPanelProps, RestApiState.SUCCESS)).toBe(false);
    expect(panel.props().renderPanel({}).type).toEqual(SokersOpplysningspliktVilkarProsessIndex);
  });
});
