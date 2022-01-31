import React from 'react';
import sinon from 'sinon';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme/build';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import {
  Aksjonspunkt,
  AlleKodeverk,
  Beregningsgrunnlag,
  BeregningsgrunnlagAndel,
  SammenligningsgrunlagProp,
  Vilkar,
} from '@fpsak-frontend/types';
import BeregningFP from './BeregningFP';
import BeregningForm from './beregningForm/BeregningForm';
import GraderingUtenBGReadOnly from './gradering/GraderingUtenBGReadOnly';

const lagBeregningsgrunnlag = (ferdigstilt: boolean,
  beregnetPrAar: number,
  sammenligningSum: number,
  avvikPromille: number,
  gradering: BeregningsgrunnlagAndel[]) => ({
  halvG: 30000,
  dekningsgrad: null,
  grunnbeløp: null,
  erOverstyrtInntekt: false,
  ledetekstBrutto: 'Brutto tekst',
  ledetekstAvkortet: 'Avkortet tekst',
  ledetekstRedusert: 'Redusert tekst',
  skjaeringstidspunktBeregning: '12.12.2017',
  årsinntektVisningstall: beregnetPrAar,
  andelerMedGraderingUtenBG: gradering,
  sammenligningsgrunnlag: {
    sammenligningsgrunnlagType: 'AT',
    differanseBeregnet: null,
    avvikProsent: avvikPromille ? avvikPromille * 100 : null,
    rapportertPrAar: sammenligningSum,
    avvikPromille,
  } as SammenligningsgrunlagProp,
  aktivitetStatus: [
    aktivitetStatus.KOMBINERT_AT_SN,
  ],
  beregningsgrunnlagPeriode: [
    {
      dagsats: ferdigstilt ? 1500 : undefined,
    },
  ],
} as Beregningsgrunnlag);

const vilkar = [{
  vilkarType: 'FP_VK_41',
  vilkarStatus: vilkarUtfallType.OPPFYLT,
}];

const graderingAP = [{
  erAktivt: true,
  definisjon: '5050',
  toTrinnsBehandling: false,
  status: 'OPPR',
  begrunnelse: 'begrunnelse arbeidstaker/frilans',
  vilkarType: null,
  kanLoses: true,
} as Aksjonspunkt];

const gjeldendeAksjonspunkter = [{
  definisjon: '5038', status: 'OPPR', erAktivt: true, toTrinnsBehandling: false,
} as Aksjonspunkt];

describe('<BeregningFP>', () => {
  it('skal teste at BeregningForm får korrekte props fra BeregningFP med beregnetAvvikPromille lik NULL', () => {
    const wrapper = shallow(<BeregningFP
      readOnly={false}
      submitCallback={sinon.spy}
      beregningsgrunnlag={lagBeregningsgrunnlag(true, 100000, 100000, null, null)}
      vilkar={vilkar as Vilkar[]}
      alleKodeverk={{} as AlleKodeverk}
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
      alleKodeverk={{} as AlleKodeverk}
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
      alleKodeverk={{} as AlleKodeverk}
      beregningsgrunnlag={lagBeregningsgrunnlag(true, 250000, 250000, undefined, null) as Beregningsgrunnlag}
      vilkar={vilkar as Vilkar[]}
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
      beregningsgrunnlag={lagBeregningsgrunnlag(true, 250000,
        250000, undefined,
        [{ aktivitetStatus: 'test' } as BeregningsgrunnlagAndel]) as Beregningsgrunnlag}
      vilkar={vilkar as Vilkar[]}
      aksjonspunkter={graderingAP}
      alleKodeverk={{} as AlleKodeverk}
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
      aksjonspunkter={gjeldendeAksjonspunkter}
      alleKodeverk={{} as AlleKodeverk}
      readOnlySubmitButton
      arbeidsgiverOpplysningerPerId={{}}
    />);
    const graderingUtenBG = wrapper.find(GraderingUtenBGReadOnly);
    expect(graderingUtenBG).toHaveLength(0);
  });
});
