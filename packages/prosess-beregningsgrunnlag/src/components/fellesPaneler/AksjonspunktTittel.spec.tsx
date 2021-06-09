import React from 'react';
import { shallow } from 'enzyme';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { AksjonspunktHelpTextHTML } from '@fpsak-frontend/shared-components';
import AksjonspunktTittel from './AksjonspunktTittel';

const lagPeriode = () => ({
  beregningsgrunnlagPeriodeFom: '2019-09-16',
  beregningsgrunnlagPeriodeTom: undefined,
  beregnetPrAar: 360000,
  bruttoPrAar: 360000,
  bruttoInkludertBortfaltNaturalytelsePrAar: 360000,
  avkortetPrAar: 360000,
  redusertPrAar: 360000,
  beregningsgrunnlagPrStatusOgAndel: [{
    aktivitetStatus: {
      kode: 'AT',
      kodeverk: 'AKTIVITET_STATUS',
    },
  }],
  andelerLagtTilManueltIForrige: [],
});
const lagBG = (avvikPromille) => ({
  beregningsgrunnlagPeriode: [lagPeriode()],
  sammenligningsgrunnlagPrStatus: [{
    sammenligningsgrunnlagFom: '2018-09-01',
    sammenligningsgrunnlagTom: '2019-10-31',
    avvikProsent: 27.5,
    sammenligningsgrunnlagType: {
      kode: 'SAMMENLIGNING_AT',
      kodeverk: 'test',
    },
    differanseBeregnet: 12100,
    avvikPromille,
  }],
});

const apATFLAvvik = {
  definisjon: {
    kode: aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
    kodeverk: 'test',
    navn: 'apNavn2',
  },
  status: {
    kode: 'OPPR',
    kodeverk: 'test',
    navn: 'statusNavn2',
  },
  kanLoses: true,
  erAktivt: true,
};

describe('<AksjonspunktTittel>', () => {
  it('skal teste at AksjonspunktHjelp rendrer korrekt ved atfl avvik', () => {
    const bg = lagBG(0);
    const wrapper = shallow(<AksjonspunktTittel
      aksjonspunkter={[apATFLAvvik]}
      beregningsgrunnlag={bg}
    />);
    const aksjonspunktHelpTextHTML = wrapper.find(AksjonspunktHelpTextHTML);
    expect(aksjonspunktHelpTextHTML.length).toBe(1);
  });
});
