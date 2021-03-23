import React from 'react';
import { shallow } from 'enzyme';

import OmsorgVilkarProsessIndex from '@fpsak-frontend/prosess-vilkar-omsorg';
import { InngangsvilkarDefaultInitPanel, InngangsvilkarDefaultInitPanelProps } from '@fpsak-frontend/behandling-felles';
import { Aksjonspunkt, Vilkar } from '@fpsak-frontend/types';

import OmsorgInngangsvilkarInitPanel from './OmsorgInngangsvilkarInitPanel';

type INIT_DATA = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

describe('<OmsorgInngangsvilkarInitPanel>', () => {
  it('skal rendre overstyringspanel når det ikke finnes aksjonpunkt', () => {
    const wrapper = shallow(<OmsorgInngangsvilkarInitPanel
      registrerInngangsvilkarPanel={() => {}}
      erPanelValgt
      harInngangsvilkarApentAksjonspunkt={false}
      behandlingVersjon={1}
    />);

    const panel = wrapper.find<InngangsvilkarDefaultInitPanelProps<INIT_DATA, any>>(InngangsvilkarDefaultInitPanel);

    const erOverstyrt = false;
    const toggleOverstyring = () => {};

    const innerElement = panel.renderProp('renderPanel')({}, erOverstyrt, toggleOverstyring);

    expect(innerElement.find(OmsorgVilkarProsessIndex)).toHaveLength(1);
  });
});
