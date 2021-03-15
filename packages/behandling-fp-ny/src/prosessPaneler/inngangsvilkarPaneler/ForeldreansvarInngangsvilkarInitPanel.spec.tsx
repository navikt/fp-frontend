import React from 'react';
import { shallow } from 'enzyme';

import ForeldreansvarVilkarProsessIndex from '@fpsak-frontend/prosess-vilkar-foreldreansvar';
import { InngangsvilkarDefaultInitPanel, InngangsvilkarDefaultInitPanelProps } from '@fpsak-frontend/behandling-felles-ny';
import { Aksjonspunkt, Vilkar } from '@fpsak-frontend/types';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';

import ForeldreansvarInngangsvilkarInitPanel from './ForeldreansvarInngangsvilkarInitPanel';

type INIT_DATA = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

describe('<ForeldreansvarInngangsvilkarInitPanel>', () => {
  it('skal rendre overstyringspanel når det ikke finnes aksjonpunkt', () => {
    const wrapper = shallow(<ForeldreansvarInngangsvilkarInitPanel
      registrerInngangsvilkarPanel={() => {}}
      erPanelValgt
      harInngangsvilkarApentAksjonspunkt={false}
      behandlingVersjon={1}
    />);

    const panel = wrapper.find<InngangsvilkarDefaultInitPanelProps<INIT_DATA, any>>(InngangsvilkarDefaultInitPanel);

    const erOverstyrt = false;
    const toggleOverstyring = () => {};

    const vilkar = [{
      vilkarType: {
        kode: vilkarType.FORELDREANSVARSVILKARET_2_LEDD,
        kodeverk: '',
      },
    } as Vilkar];

    const innerElement = panel.renderProp('renderPanel')({ vilkar }, erOverstyrt, toggleOverstyring);

    const indexPanel = innerElement.find(ForeldreansvarVilkarProsessIndex);
    expect(indexPanel).toHaveLength(1);
    expect(indexPanel.props().isForeldreansvar2Ledd).toBe(true);
  });
});
