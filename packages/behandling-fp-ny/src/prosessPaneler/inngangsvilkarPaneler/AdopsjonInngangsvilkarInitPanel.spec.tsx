import React from 'react';
import { shallow } from 'enzyme';

import AdopsjonVilkarProsessIndex from '@fpsak-frontend/prosess-vilkar-adopsjon';
import { InngangsvilkarDefaultInitPanel, InngangsvilkarDefaultInitPanelProps, OverstyringPanelDef } from '@fpsak-frontend/behandling-felles-ny';
import { AksessRettigheter, Aksjonspunkt } from '@fpsak-frontend/types';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import AdopsjonInngangsvilkarInitPanel from './AdopsjonInngangsvilkarInitPanel';

type INIT_DATA = {
  aksjonspunkter: Aksjonspunkt[];
}

describe('<AdopsjonInngangsvilkarInitPanel>', () => {
  it('skal rendre overstyringspanel når det ikke finnes aksjonpunkt', () => {
    const wrapper = shallow(<AdopsjonInngangsvilkarInitPanel
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

    const panel = wrapper.find<InngangsvilkarDefaultInitPanelProps<INIT_DATA, any>>(InngangsvilkarDefaultInitPanel);

    const erOverstyrt = false;
    const toggleOverstyring = () => {};

    const aksjonspunkter = [];

    const innerElement = panel.renderProp('renderPanel')({
      aksjonspunkter,
    }, erOverstyrt, toggleOverstyring);

    expect(innerElement.find(OverstyringPanelDef)).toHaveLength(1);
    expect(innerElement.find(AdopsjonVilkarProsessIndex)).toHaveLength(0);
  });

  it('skal rendre adopsjonspanel når det finnes aksjonpunkt', () => {
    const wrapper = shallow(<AdopsjonInngangsvilkarInitPanel
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

    const panel = wrapper.find<InngangsvilkarDefaultInitPanelProps<INIT_DATA, any>>(InngangsvilkarDefaultInitPanel);

    const erOverstyrt = false;
    const toggleOverstyring = () => {};

    const aksjonspunkter = [{
      definisjon: {
        kode: aksjonspunktCodes.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
        kodeverk: '',
      },
    }] as Aksjonspunkt[];

    const innerElement = panel.renderProp('renderPanel')({
      aksjonspunkter,
    }, erOverstyrt, toggleOverstyring);

    expect(innerElement.find(OverstyringPanelDef)).toHaveLength(0);
    expect(innerElement.find(AdopsjonVilkarProsessIndex)).toHaveLength(1);
  });
});
