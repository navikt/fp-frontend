import React from 'react';
import { shallow } from 'enzyme';

import UttakFaktaIndex from '@fpsak-frontend/fakta-uttak';
import { FaktaDefaultInitPanel, FaktaDefaultInitPanelProps } from '@fpsak-frontend/behandling-felles-ny';
import { AksessRettigheter, Personoversikt, Ytelsefordeling } from '@fpsak-frontend/types';

import UttakFaktaInitPanel from './UttakFaktaInitPanel';

type INIT_DATA = {
  ytelsefordeling: Ytelsefordeling;
}

describe('<UttakFaktaInitPanel>', () => {
  it('skal rendre komponent', () => {
    const wrapper = shallow(<UttakFaktaInitPanel
      valgtFaktaSteg="default"
      registrerFaktaPanel={() => {}}
      arbeidsgiverOpplysningerPerId={{}}
      rettigheter={{ kanOverstyreAccess: { isEnabled: true } } as AksessRettigheter}
      personoversikt={{} as Personoversikt}
    />);

    const panel = wrapper.find<FaktaDefaultInitPanelProps<INIT_DATA, any>>(FaktaDefaultInitPanel);

    const ytelsefordelingSkalVises = {
      endringsdato: '2020-01-01',
    } as Ytelsefordeling;
    const ytelsefordelingSkalIkkeVises = {
      endringsdato: undefined,
    } as Ytelsefordeling;

    expect(panel.props().skalPanelVisesIMeny({ ytelsefordeling: ytelsefordelingSkalVises })).toBe(true);
    expect(panel.props().skalPanelVisesIMeny({ ytelsefordeling: ytelsefordelingSkalIkkeVises })).toBe(false);
    expect(panel.props().renderPanel({}).type).toEqual(UttakFaktaIndex);
  });
});
