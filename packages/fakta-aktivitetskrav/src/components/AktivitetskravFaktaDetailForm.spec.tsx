import React from 'react';
import { shallow } from 'enzyme';

import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { RadioOption } from '@fpsak-frontend/form';

import { AktivitetskravFaktaDetailForm } from './AktivitetskravFaktaDetailForm';

describe('<AktivitetskravFaktaDetailForm>', () => {
  const aktivitetskravAvklaringer = [{
    kode: 'avklaring 1',
    navn: 'Dette er testavklaring 1',
    kodeverk: 'AVKLARING',
  }, {
    kode: 'avklaring 2',
    navn: 'Dette er testavklaring 2',
    kodeverk: 'AVKLARING',
  }];

  const morsAktiviteter = [{
    kode: 'mors aktivitet 1',
    navn: 'Dette er mors aktivitet 1',
    kodeverk: 'MORS_AKTIVITET',
  }];

  it('skal vise radioknapper for alle aktivtetskrav-avklaringer', () => {
    const valgtAktivitetskrav = {
      fom: '2021-01-01',
      tom: '2021-01-07',
      avklaring: {
        kode: 'avklaring 1',
        kodeverk: 'AVKLARING',
      },
      begrunnelse: 'Dette er en beskrivelse',
      morsAktivitet: {
        kode: 'mors aktivitet 1',
        kodeverk: 'MORS_AKTIVITET',
      },
      endret: false,
    };

    const wrapper = shallow(<AktivitetskravFaktaDetailForm
      {...reduxFormPropsMock}
      oppdaterAktivitetskrav={() => undefined}
      valgtAktivitetskrav={valgtAktivitetskrav}
      readOnly={false}
      aktivitetskravAvklaringer={aktivitetskravAvklaringer}
      morsAktiviteter={morsAktiviteter}
      avbrytEditeringAvAktivitetskrav={() => undefined}
      initialValues={valgtAktivitetskrav}
      onSubmit={() => undefined}
    />);

    const options = wrapper.find(RadioOption);
    expect(options).toHaveLength(2);
    expect(options.first().prop('label')).toEqual(aktivitetskravAvklaringer[0].navn);
    expect(options.last().prop('label')).toEqual(aktivitetskravAvklaringer[1].navn);
  });
});
