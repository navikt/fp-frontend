import React from 'react';
import { shallow } from 'enzyme';

import FodselVilkarProsessIndex from '@fpsak-frontend/prosess-vilkar-fodsel';
import {
  InngangsvilkarDefaultInitPanel, InngangsvilkarDefaultInitPanelProps, OverstyringPanelDef, InngangsvilkarPanelInitProps,
} from '@fpsak-frontend/behandling-felles';
import { AksessRettigheter, Aksjonspunkt, Vilkar } from '@fpsak-frontend/types';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';

import FodselInngangsvilkarInitPanel from './FodselInngangsvilkarInitPanel';

type INIT_DATA = {
  aksjonspunkter: Aksjonspunkt[];
}

describe('<FodselInngangsvilkarInitPanel>', () => {
  it('skal rendre overstyringspanel når det ikke finnes aksjonpunkt', () => {
    const wrapper = shallow(<FodselInngangsvilkarInitPanel
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

    const vilkar = [{
      vilkarType: {
        kode: vilkarType.FODSELSVILKARET_MOR,
        kodeverk: '',
      },
    }] as Vilkar[];

    const innerElement = panel.renderProp('renderPanel')({
      aksjonspunkter,
      vilkar,
    }, erOverstyrt, toggleOverstyring);

    expect(innerElement.find(OverstyringPanelDef)).toHaveLength(1);
    expect(innerElement.find(FodselVilkarProsessIndex)).toHaveLength(0);
  });

  it('skal rendre fødselspanel når det finnes aksjonpunkt', () => {
    const wrapper = shallow(<FodselInngangsvilkarInitPanel
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

    const aksjonspunkter = [{
      definisjon: {
        kode: aksjonspunktCodes.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
        kodeverk: '',
      },
    }] as Aksjonspunkt[];

    const vilkar = [{
      vilkarType: {
        kode: vilkarType.FODSELSVILKARET_MOR,
        kodeverk: '',
      },
    }] as Vilkar[];

    const innerElement = panel.renderProp('renderPanel')({
      aksjonspunkter,
      vilkar,
    }, erOverstyrt, toggleOverstyring);

    expect(innerElement.find(OverstyringPanelDef)).toHaveLength(0);
    expect(innerElement.find(FodselVilkarProsessIndex)).toHaveLength(1);
  });
});
