import React from 'react';
import { shallow } from 'enzyme';

import AktivitetskravFaktaIndex from '@fpsak-frontend/fakta-aktivitetskrav';
import { FaktaDefaultInitPanel, FaktaDefaultInitPanelProps } from '@fpsak-frontend/behandling-felles';
import { UttakKontrollerAktivitetskrav } from '@fpsak-frontend/types';

import AktivitetskravFaktaInitPanel from './AktivitetskravFaktaInitPanel';

type INIT_DATA = {
  uttakKontrollerAktivitetskrav: UttakKontrollerAktivitetskrav[];
}

describe('<AktivitetskravFaktaInitPanel>', () => {
  it('skal rendre komponent', () => {
    const wrapper = shallow(<AktivitetskravFaktaInitPanel
      valgtFaktaSteg="default"
      registrerFaktaPanel={() => {}}
    />);

    const panel = wrapper.find<FaktaDefaultInitPanelProps<INIT_DATA, any>>(FaktaDefaultInitPanel);

    const uttakKontrollerAktivitetskrav = [{}] as UttakKontrollerAktivitetskrav[];

    expect(panel.props().skalPanelVisesIMeny({ uttakKontrollerAktivitetskrav })).toBe(true);
    expect(panel.props().skalPanelVisesIMeny({})).toBe(false);
    expect(panel.props().renderPanel({}).type).toEqual(AktivitetskravFaktaIndex);
  });
});
