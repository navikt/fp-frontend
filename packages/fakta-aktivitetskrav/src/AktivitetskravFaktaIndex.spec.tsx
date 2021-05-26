import React from 'react';
import { shallow } from 'enzyme';

import { AlleKodeverk, Behandling } from '@fpsak-frontend/types';

import AktivitetskravFaktaIndex from './AktivitetskravFaktaIndex';
import AktivitetskravFaktaForm from './components/AktivitetskravFaktaForm';

describe('<AktivitetskravFaktaIndex>', () => {
  it('skal sortere aktivitetskrav etter fom-dato', () => {
    const uttakKontrollerAktivitetskrav = [{
      fom: '2021-01-14',
      tom: '2021-01-20',
      endret: false,
    }, {
      fom: '2021-01-01',
      tom: '2021-01-07',
      endret: false,
    }, {
      fom: '2021-01-08',
      tom: '2021-01-13',
      endret: false,
    }];

    const wrapper = shallow(<AktivitetskravFaktaIndex
      behandling={{} as Behandling}
      harApneAksjonspunkter
      uttakKontrollerAktivitetskrav={uttakKontrollerAktivitetskrav}
      submitCallback={() => undefined}
      alleKodeverk={{} as AlleKodeverk}
      alleMerknaderFraBeslutter={{}}
      readOnly={false}
      submittable
      aksjonspunkter={[]}
      setFormData={() => undefined}
    />);

    expect(wrapper.find(AktivitetskravFaktaForm).prop('sorterteAktivitetskrav')).toEqual([{
      fom: '2021-01-01',
      tom: '2021-01-07',
      endret: false,
    }, {
      fom: '2021-01-08',
      tom: '2021-01-13',
      endret: false,
    }, {
      fom: '2021-01-14',
      tom: '2021-01-20',
      endret: false,
    }]);
  });
});
