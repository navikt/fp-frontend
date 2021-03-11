import React from 'react';
import { shallow } from 'enzyme';

import { InngangsvilkarDefaultProsessStegPanel } from '@fpsak-frontend/behandling-felles-ny';
import { AksessRettigheter } from '@fpsak-frontend/types';

import InngangsvilkarProsessStegInitPanel from './InngangsvilkarProsessStegInitPanel';

describe('<InngangsvilkarProsessStegInitPanel>', () => {
  it('skal rendre komponent', () => {
    const wrapper = shallow(<InngangsvilkarProsessStegInitPanel
      behandlingVersjon={1}
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      oppdaterProsessStegOgFaktaPanelIUrl={() => {}}
      rettigheter={{} as AksessRettigheter}
    />);

    const panel = wrapper.find(InngangsvilkarDefaultProsessStegPanel);

    expect(panel).toHaveLength(1);
  });
});
