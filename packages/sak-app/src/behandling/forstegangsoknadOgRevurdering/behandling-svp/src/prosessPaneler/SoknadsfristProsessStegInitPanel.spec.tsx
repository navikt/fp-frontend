import React from 'react';
import { shallow } from 'enzyme';

import VurderSoknadsfristForeldrepengerIndex from '@fpsak-frontend/prosess-soknadsfrist';
import { ProsessDefaultInitPanel, ProsessDefaultInitPanelProps, ProsessPanelInitProps } from '@fpsak-frontend/behandling-felles';
import { Aksjonspunkt, Behandling, StandardProsessPanelProps } from '@fpsak-frontend/types';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import SoknadsfristProsessStegInitPanel from './SoknadsfristProsessStegInitPanel';

type INIT_DATA = {
  aksjonspunkter: Aksjonspunkt[];
}

const behandling = {
  uuid: 'test-uuid',
  versjon: 1,
} as Behandling;

describe('<SoknadsfristProsessStegInitPanel>', () => {
  it('skal rendre komponent', () => {
    const wrapper = shallow(<SoknadsfristProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      behandling={behandling}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any> & ProsessPanelInitProps>(ProsessDefaultInitPanel);

    const aksjonspunkter = [{
      definisjon: aksjonspunktCodes.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR,
    }] as Aksjonspunkt[];

    expect(panel.props().skalPanelVisesIMeny({
      aksjonspunkter,
    } as StandardProsessPanelProps, RestApiState.SUCCESS)).toBe(true);
    expect(panel.props().skalPanelVisesIMeny({} as StandardProsessPanelProps, RestApiState.SUCCESS)).toBe(false);
    expect(panel.props().renderPanel({}, { aksjonspunkter: [] }).type).toEqual(VurderSoknadsfristForeldrepengerIndex);
  });
});
