import React from 'react';
import { shallow } from 'enzyme';

import { InngangsvilkarDefaultInitPanel, InngangsvilkarDefaultInitPanelProps, OverstyringPanelDef } from '@fpsak-frontend/behandling-felles-ny';
import { AksessRettigheter, Aksjonspunkt, Vilkar } from '@fpsak-frontend/types';

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

    const panel = wrapper.find<InngangsvilkarDefaultInitPanelProps<INIT_DATA, any>>(InngangsvilkarDefaultInitPanel);

    const erOverstyrt = false;
    const toggleOverstyring = () => {};

    const aksjonspunkter = [];

    const innerElement = panel.renderProp('renderPanel')({
      aksjonspunkter,
    }, erOverstyrt, toggleOverstyring);

    expect(innerElement.find(OverstyringPanelDef)).toHaveLength(1);
  });
});
