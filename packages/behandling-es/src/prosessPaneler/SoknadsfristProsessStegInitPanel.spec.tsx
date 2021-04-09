import React from 'react';
import { shallow } from 'enzyme';

import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import SoknadsfristVilkarProsessIndex from '@fpsak-frontend/prosess-vilkar-soknadsfrist';
import { ProsessDefaultInitPanel, ProsessDefaultInitPanelProps, OverstyringPanelDef } from '@fpsak-frontend/behandling-felles';
import {
  AksessRettigheter, Aksjonspunkt, StandardProsessPanelProps, Vilkar,
} from '@fpsak-frontend/types';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import SoknadsfristProsessStegInitPanel from './SoknadsfristProsessStegInitPanel';

type INIT_DATA = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

describe('<SoknadsfristProsessStegInitPanel>', () => {
  it('skal rendre overstyringskomponent når en ikke har aksjonspunkt', () => {
    const wrapper = shallow(<SoknadsfristProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      rettigheter={{} as AksessRettigheter}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any>>(ProsessDefaultInitPanel);

    const aksjonspunkter = [];

    const vilkar = [{
      vilkarType: {
        kode: vilkarType.SOKNADFRISTVILKARET,
        kodeverk: '',
      },
    }] as Vilkar[];

    expect(panel.props().skalPanelVisesIMeny({ aksjonspunkter, vilkar } as StandardProsessPanelProps, RestApiState.SUCCESS)).toBe(true);

    const innerElement = panel.renderProp('renderPanel')({ aksjonspunkter, vilkar });
    expect(innerElement.find(OverstyringPanelDef)).toHaveLength(1);
    expect(innerElement.find(SoknadsfristVilkarProsessIndex)).toHaveLength(0);
  });

  it('skal rendre søknadsfrist-komponent når en har aksjonspunkt', () => {
    const wrapper = shallow(<SoknadsfristProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      rettigheter={{} as AksessRettigheter}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any>>(ProsessDefaultInitPanel);

    const aksjonspunkter = [{
      definisjon: {
        kode: aksjonspunktCodes.SOKNADSFRISTVILKARET,
        kodeverk: '',
      },
    }] as Aksjonspunkt[];

    const innerElement = panel.renderProp('renderPanel')({ aksjonspunkter });
    expect(innerElement.find(OverstyringPanelDef)).toHaveLength(0);
    expect(innerElement.find(SoknadsfristVilkarProsessIndex)).toHaveLength(1);
  });
});
