import React from 'react';
import { shallow } from 'enzyme';

import VurderSoknadsfristForeldrepengerIndex from '@fpsak-frontend/prosess-soknadsfrist';
import { ProsessDefaultInitPanel, ProsessDefaultInitPanelProps } from '@fpsak-frontend/behandling-felles-ny';
import { Aksjonspunkt, StandardProsessPanelProps } from '@fpsak-frontend/types';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import SoknadsfristProsessStegInitPanel from './SoknadsfristProsessStegInitPanel';

type INIT_DATA = {
  aksjonspunkter: Aksjonspunkt[];
}

describe('<SoknadsfristProsessStegInitPanel>', () => {
  it('skal rendre komponent', () => {
    const wrapper = shallow(<SoknadsfristProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any>>(ProsessDefaultInitPanel);

    const aksjonspunkter = [{
      definisjon: {
        kode: aksjonspunktCodes.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR,
        kodeverk: '',
      },
    }] as Aksjonspunkt[];

    expect(panel.props().skalPanelVisesIMeny({
      aksjonspunkter,
    } as StandardProsessPanelProps, RestApiState.SUCCESS)).toBe(true);
    expect(panel.props().skalPanelVisesIMeny({} as StandardProsessPanelProps, RestApiState.SUCCESS)).toBe(false);
    expect(panel.props().renderPanel({}).type).toEqual(VurderSoknadsfristForeldrepengerIndex);
  });
});
