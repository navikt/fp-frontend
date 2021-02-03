import React from 'react';
import sinon from 'sinon';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme/build';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import {
  Beregningsgrunnlag, Vilkar, Behandling, Aksjonspunkt,
} from '@fpsak-frontend/types';
import BeregningFP from './BeregningFP';
import BeregningForm from './beregningForm/BeregningForm';
import GraderingUtenBGReadOnly from './gradering/GraderingUtenBGReadOnly';

const lagBeregningsgrunnlag = (ferdigstilt, beregnetPrAar, sammenligningSum, avvikPromille, gradering) => {
  const beregningsgrunnlag = {
    halvG: 30000,
    ledetekstBrutto: 'Brutto tekst',
    ledetekstAvkortet: 'Avkortet tekst',
    ledetekstRedusert: 'Redusert tekst',
    skjaeringstidspunktBeregning: '12.12.2017',
    årsinntektVisningstall: beregnetPrAar,
    andelerMedGraderingUtenBG: gradering,
    sammenligningsgrunnlag: {
      sammenligningsgrunnlagType: {
        kode: 'AT',
        kodeverk: 'test',
      },
      differanseBeregnet: null,
      avvikProsent: avvikPromille ? avvikPromille * 100 : null,
      rapportertPrAar: sammenligningSum,
      avvikPromille,
    },
    aktivitetStatus: [
      {
        kode: aktivitetStatus.KOMBINERT_AT_SN,
        kodeverk: 'test',
      },
    ],
    beregningsgrunnlagPeriode: [
      {
        dagsats: ferdigstilt ? 1500 : undefined,
      },
    ],
  } as Beregningsgrunnlag;
  return beregningsgrunnlag;
};

const vilkar = [{
  vilkarType: {
    kode: 'FP_VK_41',
  },
  vilkarStatus: {
    kode: vilkarUtfallType.OPPFYLT,
  },
}];

const graderingAP = [{
  erAktivt: true,
  definisjon: {
    kode: '5050',
    kodeverk: 'Fastsett varig brutto beregning ATFL',
  },
  toTrinnsBehandling: false,
  status: {
    kode: 'OPPR',
    kodeverk: 'Opprettet',
  },
  begrunnelse: 'begrunnelse arbeidstaker/frilans',
  vilkarType: null,
  kanLoses: true,
} as Aksjonspunkt];

const gjeldendeAksjonspunkter = [{
  definisjon: { kode: '5038' }, status: { kode: 'OPPR' }, erAktivt: true, toTrinnsBehandling: false,
} as Aksjonspunkt];

const behandling = {
  id: 1,
  versjon: 1,
  venteArsakKode: '-',
  sprakkode: {
    kode: 'NB',
    kodeverk: 'Språkode',
  },
};

describe('<BeregningFP>', () => {
  it('skal teste at BeregningForm får korrekte props fra BeregningFP med beregnetAvvikPromille lik NULL', () => {
    const wrapper = shallow(<BeregningFP
      readOnly={false}
      submitCallback={sinon.spy}
      beregningsgrunnlag={lagBeregningsgrunnlag(true, 100000, 100000, null, null)}
      vilkar={vilkar as Vilkar[]}
      behandling={behandling as Behandling}
      alleKodeverk={{}}
      aksjonspunkter={gjeldendeAksjonspunkter}
      readOnlySubmitButton
      arbeidsgiverOpplysningerPerId={{}}
    />);
    const beregningForm = wrapper.find(BeregningForm);
    expect(beregningForm.props().readOnly).toBe(false);
    expect(beregningForm.props().gjeldendeAksjonspunkter).toEqual(gjeldendeAksjonspunkter);
    expect(beregningForm.props().relevanteStatuser.isArbeidstaker).toEqual(true);
    expect(beregningForm.props().relevanteStatuser.isSelvstendigNaeringsdrivende).toEqual(true);
    expect(beregningForm.props().relevanteStatuser.isKombinasjonsstatus).toEqual(true);
    expect(beregningForm.props().relevanteStatuser.skalViseBeregningsgrunnlag).toEqual(true);
    expect(beregningForm.props().submitCallback).toBe(sinon.spy);
  });
  it('skal teste visning av komponenter når beregningsgrunnlag er lik null', () => {
    const wrapper = shallow(<BeregningFP
      readOnly={false}
      submitCallback={sinon.spy}
      beregningsgrunnlag={null}
      vilkar={vilkar as Vilkar[]}
      behandling={behandling as Behandling}
      alleKodeverk={{}}
      aksjonspunkter={gjeldendeAksjonspunkter}
      readOnlySubmitButton
      arbeidsgiverOpplysningerPerId={{}}
    />);
    const beregningForm = wrapper.find(BeregningForm);
    expect(beregningForm).toHaveLength(0);
    const messages = wrapper.find(FormattedMessage);
    expect(messages).toHaveLength(3);
    expect(messages.get(0).props.id).toBe('Beregningsgrunnlag.Title');
    expect(messages.get(1).props.id).toBe('Beregningsgrunnlag.HarIkkeBeregningsregler');
    expect(messages.get(2).props.id).toBe('Beregningsgrunnlag.SakTilInfo');
  });
  it('skal teste visning av komponenter når beregningsgrunnlag ikke er null', () => {
    const wrapper = shallow(<BeregningFP
      readOnly={false}
      submitCallback={sinon.spy}
      alleKodeverk={{}}
      beregningsgrunnlag={lagBeregningsgrunnlag(true, 250000, 250000, undefined, null) as Beregningsgrunnlag}
      vilkar={vilkar as Vilkar[]}
      behandling={behandling as Behandling}
      aksjonspunkter={gjeldendeAksjonspunkter}
      readOnlySubmitButton
      arbeidsgiverOpplysningerPerId={{}}
    />);
    const beregningForm = wrapper.find(BeregningForm);
    expect(beregningForm).toHaveLength(1);
    const messages = wrapper.find(FormattedMessage);
    expect(messages).toHaveLength(0);
  });
  it('skal teste at GraderingUtenBG vises når sokerHarGraderingPaaAndelUtenBG er true', () => {
    const wrapper = shallow(<BeregningFP
      readOnly={false}
      submitCallback={sinon.spy}
      beregningsgrunnlag={lagBeregningsgrunnlag(true, 250000, 250000, undefined, [{ test: 'test' }]) as Beregningsgrunnlag}
      vilkar={vilkar as Vilkar[]}
      behandling={behandling as Behandling}
      aksjonspunkter={graderingAP}
      alleKodeverk={{}}
      readOnlySubmitButton
      arbeidsgiverOpplysningerPerId={{}}
    />);
    const graderingUtenBG = wrapper.find(GraderingUtenBGReadOnly);
    expect(graderingUtenBG).toHaveLength(1);
  });
  it('skal teste at GraderingUtenBG ikke vises når sokerHarGraderingPaaAndelUtenBG er false', () => {
    const wrapper = shallow(<BeregningFP
      readOnly={false}
      submitCallback={sinon.spy}
      beregningsgrunnlag={lagBeregningsgrunnlag(true, 250000, 250000, undefined, null) as Beregningsgrunnlag}
      vilkar={vilkar as Vilkar[]}
      behandling={behandling as Behandling}
      aksjonspunkter={gjeldendeAksjonspunkter}
      alleKodeverk={{}}
      readOnlySubmitButton
      arbeidsgiverOpplysningerPerId={{}}
    />);
    const graderingUtenBG = wrapper.find(GraderingUtenBGReadOnly);
    expect(graderingUtenBG).toHaveLength(0);
  });
});
