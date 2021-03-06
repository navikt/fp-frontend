import React from 'react';
import { RefusjonTilVurderingAndel } from '@fpsak-frontend/types';
import { shallow } from 'enzyme';
import { VurderEndringRefusjonRadImpl } from './VurderEndringRefusjonRad';

const lagAndel = (skalKunneFastsetteDelvisRefusjon: boolean, agOrgnr: string, arbId?: string, dato?: string) => ({
  aktivitetStatus: {
    kode: 'AT',
    kodeverk: 'test',
  },
  nyttRefusjonskravFom: dato,
  arbeidsgiver: {
    arbeidsgiverOrgnr: agOrgnr,
  },
  tidligsteMuligeRefusjonsdato: '2020-01-01',
  internArbeidsforholdRef: arbId,
  tidligereUtbetalinger: [],
  skalKunneFastsetteDelvisRefusjon,
});

const agOpplysninger = {
  999999999: {
    identifikator: '999999999',
    navn: 'Biri bakeri og saueoppdrett',
    erPrivatPerson: false,
  },
};

describe('<VurderEndringRefusjonRad>', () => {
  it('Skal vise inputboks hvis man skal kunne fastsette delvis refusjon og valgt dato ikke er likt stp', () => {
    const andel = lagAndel(true, '999999999', undefined, '2020-01-01') as RefusjonTilVurderingAndel;
    const stp = '2020-01-01';
    const wrapper = shallow(<VurderEndringRefusjonRadImpl
      erAksjonspunktÅpent
      readOnly={false}
      refusjonAndel={andel}
      valgtDatoErLikSTP={false}
      skjæringstidspunkt={stp}
      arbeidsgiverOpplysningerPerId={agOpplysninger}
      formName="test"
    />);

    const datepicker = wrapper.find('DatepickerField');
    expect(datepicker).toHaveLength(1);
    const inputfield = wrapper.find('InputField');
    expect(inputfield).toHaveLength(1);
  });

  it('Skal ikke vise inputboks hvis man skal kunne fastsette delvis refusjon og valgt dato er likt stp', () => {
    const andel = lagAndel(true, '999999999', undefined, '2020-01-01') as RefusjonTilVurderingAndel;
    const stp = '2020-01-01';
    const wrapper = shallow(<VurderEndringRefusjonRadImpl
      erAksjonspunktÅpent
      readOnly={false}
      refusjonAndel={andel}
      valgtDatoErLikSTP
      skjæringstidspunkt={stp}
      arbeidsgiverOpplysningerPerId={agOpplysninger}
      formName="test"
    />);

    const datepicker = wrapper.find('DatepickerField');
    expect(datepicker).toHaveLength(1);
    const inputfield = wrapper.find('InputField');
    expect(inputfield).toHaveLength(0);
  });
});
