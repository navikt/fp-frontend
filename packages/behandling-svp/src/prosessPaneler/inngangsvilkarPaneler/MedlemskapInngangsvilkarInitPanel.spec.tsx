import React from 'react';
import { shallow } from 'enzyme';

import {
  InngangsvilkarDefaultInitPanel, InngangsvilkarDefaultInitPanelProps, OverstyringPanelDef, InngangsvilkarPanelInitProps,
} from '@fpsak-frontend/behandling-felles';
import { AksessRettigheter, Aksjonspunkt, Vilkar } from '@fpsak-frontend/types';

import MedlemskapInngangsvilkarInitPanel from './MedlemskapInngangsvilkarInitPanel';

type INIT_DATA = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

describe('<MedlemskapInngangsvilkarInitPanel>', () => {
  it('skal rendre overstyringspanel når det ikke finnes aksjonpunkt', () => {
    const wrapper = shallow(<MedlemskapInngangsvilkarInitPanel
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

    const innerElement = panel.renderProp('renderPanel')({}, erOverstyrt, toggleOverstyring);

    expect(innerElement.find(OverstyringPanelDef)).toHaveLength(1);
  });
});
