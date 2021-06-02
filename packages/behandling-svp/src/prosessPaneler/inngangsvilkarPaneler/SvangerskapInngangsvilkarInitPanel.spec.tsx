import React from 'react';
import { shallow } from 'enzyme';

import SvangerskapVilkarProsessIndex from '@fpsak-frontend/prosess-vilkar-svangerskap';
import { InngangsvilkarDefaultInitPanel, InngangsvilkarDefaultInitPanelProps, InngangsvilkarPanelInitProps } from '@fpsak-frontend/behandling-felles';
import { Aksjonspunkt, Vilkar } from '@fpsak-frontend/types';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';

import SvangerskapInngangsvilkarInitPanel from './SvangerskapInngangsvilkarInitPanel';

type INIT_DATA = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

describe('<SvangerskapInngangsvilkarInitPanel>', () => {
  it('skal rendre svangerskapspanel når det finnes vilkår', () => {
    const wrapper = shallow(<SvangerskapInngangsvilkarInitPanel
      registrerInngangsvilkarPanel={() => {}}
      erPanelValgt
      harInngangsvilkarApentAksjonspunkt={false}
      behandlingVersjon={1}
    />);

    const panel = wrapper.find<InngangsvilkarDefaultInitPanelProps<INIT_DATA, any> & InngangsvilkarPanelInitProps>(InngangsvilkarDefaultInitPanel);

    const erOverstyrt = false;
    const toggleOverstyring = () => {};

    const vilkar = [{
      vilkarType: {
        kode: vilkarType.SVANGERSKAPVILKARET,
        kodeverk: '',
      },
    } as Vilkar];

    const innerElement = panel.renderProp('renderPanel')({ vilkar }, erOverstyrt, toggleOverstyring);

    const indexPanel = innerElement.find(SvangerskapVilkarProsessIndex);
    expect(indexPanel).toHaveLength(1);
  });
});
