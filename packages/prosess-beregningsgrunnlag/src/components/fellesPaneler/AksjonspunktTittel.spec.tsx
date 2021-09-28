import React from 'react';
import { shallow } from 'enzyme';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { AksjonspunktHelpTextHTML } from '@fpsak-frontend/shared-components';
import { Beregningsgrunnlag, SammenligningsgrunlagProp } from '@fpsak-frontend/types';
import { FormattedMessage } from 'react-intl';
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
    erNyIArbeidslivet: true,
    aktivitetStatus: {
      kode: 'SN',
      kodeverk: 'AKTIVITET_STATUS',
    },
  }],
  andelerLagtTilManueltIForrige: [],
});
const lagBG = (avvikPromille?: number): Beregningsgrunnlag => ({
  beregningsgrunnlagPeriode: [lagPeriode()],
  skjaeringstidspunktBeregning: null,
  dekningsgrad: null,
  grunnbeløp: null,
  erOverstyrtInntekt: false,
  sammenligningsgrunnlagPrStatus: avvikPromille ? [{
    sammenligningsgrunnlagFom: '2018-09-01',
    sammenligningsgrunnlagTom: '2019-10-31',
    avvikProsent: 27.5,
    sammenligningsgrunnlagType: {
      kode: 'SAMMENLIGNING_AT',
      kodeverk: 'test',
    },
    differanseBeregnet: 12100,
    avvikPromille,
  } as SammenligningsgrunlagProp] : null,
} as Beregningsgrunnlag);

const lagAP = (kode: string) => ({
  definisjon: {
    kode,
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
});

describe('<AksjonspunktTittel>', () => {
  it('skal teste at AksjonspunktHjelp rendrer korrekt ved atfl avvik', () => {
    const bg = lagBG(0);
    const wrapper = shallow(<AksjonspunktTittel
      aksjonspunkter={[lagAP(aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS)]}
      beregningsgrunnlag={bg}
    />);
    const aksjonspunktHelpTextHTML = wrapper.find(AksjonspunktHelpTextHTML);
    expect(aksjonspunktHelpTextHTML.length).toBe(1);
  });
  it('skal teste at AksjonspunktHjelp rendrer korrekt ny i arbeidslivet og næringsdrivende', () => {
    const bg = lagBG();
    const wrapper = shallow(<AksjonspunktTittel
      aksjonspunkter={[lagAP(aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET)]}
      beregningsgrunnlag={bg}
    />);
    const aksjonspunktHelpTextHTML = wrapper.find(AksjonspunktHelpTextHTML);
    expect(aksjonspunktHelpTextHTML.length).toBe(1);
    const formattedMessage = aksjonspunktHelpTextHTML.find(FormattedMessage);
    expect(formattedMessage.prop('id')).toEqual('Beregningsgrunnlag.Helptext.NyIArbeidslivetSN2');
  });
});
