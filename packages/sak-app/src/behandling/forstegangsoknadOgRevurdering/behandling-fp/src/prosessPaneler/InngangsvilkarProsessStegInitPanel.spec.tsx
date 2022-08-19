import React from 'react';
import { shallow } from 'enzyme';

import { InngangsvilkarDefaultInitWrapper } from '@fpsak-frontend/behandling-felles';
import { AksessRettigheter, Behandling } from '@fpsak-frontend/types';

import InngangsvilkarProsessStegInitPanel from './InngangsvilkarProsessStegInitPanel';

describe('<InngangsvilkarProsessStegInitPanel>', () => {
  it('skal rendre komponent', () => {
    const wrapper = shallow(<InngangsvilkarProsessStegInitPanel
      behandling={{ uuid: '1' } as Behandling}
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      oppdaterProsessStegOgFaktaPanelIUrl={() => {}}
      rettigheter={{} as AksessRettigheter}
    />);

    const panel = wrapper.find(InngangsvilkarDefaultInitWrapper);

    expect(panel).toHaveLength(1);
  });
});
