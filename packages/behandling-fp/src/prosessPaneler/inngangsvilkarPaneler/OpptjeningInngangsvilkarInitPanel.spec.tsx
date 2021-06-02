import React from 'react';
import { shallow } from 'enzyme';

import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import OpptjeningVilkarProsessIndex from '@fpsak-frontend/prosess-vilkar-opptjening';
import {
  InngangsvilkarDefaultInitPanel, InngangsvilkarDefaultInitPanelProps, OverstyringPanelDef, InngangsvilkarPanelInitProps,
} from '@fpsak-frontend/behandling-felles';
import { AksessRettigheter, Aksjonspunkt, Vilkar } from '@fpsak-frontend/types';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import OpptjeningInngangsvilkarInitPanel from './OpptjeningInngangsvilkarInitPanel';

type INIT_DATA = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

describe('<OpptjeningInngangsvilkarInitPanel>', () => {
  it('skal rendre overstyringspanel når det ikke finnes aksjonpunkt', () => {
    const wrapper = shallow(<OpptjeningInngangsvilkarInitPanel
      registrerInngangsvilkarPanel={() => {}}
      erPanelValgt
      harInngangsvilkarApentAksjonspunkt={false}
      behandlingVersjon={1}
      rettigheter={{
        kanOverstyreAccess: {
          isEnabled: true,
        },
      } as AksessRettigheter}
    />);

    const panel = wrapper.find<InngangsvilkarDefaultInitPanelProps<INIT_DATA, any> & InngangsvilkarPanelInitProps>(InngangsvilkarDefaultInitPanel);

    const erOverstyrt = false;
    const toggleOverstyring = () => {};

    const aksjonspunkter = [] as Aksjonspunkt[];

    const innerElement = panel.renderProp('renderPanel')({
      aksjonspunkter,
    }, erOverstyrt, toggleOverstyring);

    expect(innerElement.find(OverstyringPanelDef)).toHaveLength(1);
    expect(innerElement.find(OpptjeningVilkarProsessIndex)).toHaveLength(0);
  });

  it('skal rendre opptjeningspanel når det finnes aksjonpunkt', () => {
    const wrapper = shallow(<OpptjeningInngangsvilkarInitPanel
      registrerInngangsvilkarPanel={() => {}}
      erPanelValgt
      harInngangsvilkarApentAksjonspunkt={false}
      behandlingVersjon={1}
      rettigheter={{
        kanOverstyreAccess: {
          isEnabled: true,
        },
      } as AksessRettigheter}
    />);

    const panel = wrapper.find<InngangsvilkarDefaultInitPanelProps<INIT_DATA, any> & InngangsvilkarPanelInitProps>(InngangsvilkarDefaultInitPanel);

    const erOverstyrt = false;
    const toggleOverstyring = () => {};

    const vilkar = [{
      vilkarType: {
        kode: vilkarType.OPPTJENINGSPERIODE,
        kodeverk: '',
      },
      lovReferanse: 'test',
    } as Vilkar];
    const aksjonspunkter = [{
      definisjon: {
        kode: aksjonspunktCodes.VURDER_OPPTJENINGSVILKARET,
        kodeverk: '',
      },
    }] as Aksjonspunkt[];

    const innerElement = panel.renderProp('renderPanel')({
      aksjonspunkter,
      vilkar,
    }, erOverstyrt, toggleOverstyring);

    expect(innerElement.find(OverstyringPanelDef)).toHaveLength(0);
    expect(innerElement.find(OpptjeningVilkarProsessIndex)).toHaveLength(1);
  });
});
