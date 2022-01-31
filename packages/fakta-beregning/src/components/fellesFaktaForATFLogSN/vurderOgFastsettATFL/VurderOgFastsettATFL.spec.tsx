import React from 'react';
import { shallow } from 'enzyme';
import faktaOmBeregningTilfelle from '@fpsak-frontend/kodeverk/src/faktaOmBeregningTilfelle';
import aktivitetStatuser from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import inntektskategorier from '@fpsak-frontend/kodeverk/src/inntektskategorier';
import { AlleKodeverk, Beregningsgrunnlag, FaktaOmBeregning } from '@fpsak-frontend/types';
import VurderOgFastsettATFL, { skalFastsettInntektForArbeidstaker, skalFastsettInntektForFrilans } from './VurderOgFastsettATFL';
import { INNTEKT_FIELD_ARRAY_NAME } from '../BgFaktaUtils';
import VurderBesteberegningForm, { besteberegningField } from '../besteberegningFodendeKvinne/VurderBesteberegningForm';
import LonnsendringForm, { lonnsendringField } from './forms/LonnsendringForm';
import NyoppstartetFLForm, { erNyoppstartetFLField } from './forms/NyoppstartetFLForm';
import VurderMottarYtelseForm from './forms/VurderMottarYtelseForm';
import InntektstabellPanel from '../InntektstabellPanel';

const {
  VURDER_MOTTAR_YTELSE,
  VURDER_BESTEBEREGNING,
  VURDER_LONNSENDRING,
  VURDER_NYOPPSTARTET_FL,
  FASTSETT_MAANEDSINNTEKT_FL,
  FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING,
} = faktaOmBeregningTilfelle;

const lagBeregningsgrunnlag = (andeler) => ({
  beregningsgrunnlagPeriode: [
    {
      beregningsgrunnlagPrStatusOgAndel: andeler.map((andel) => (
        {
          andelsnr: andel.andelsnr,
          aktivitetStatus: andel.aktivitetStatus,
          inntektskategori: andel.inntektskategori,
          erNyoppstartet: andel.erNyoppstartet,
        }
      )),
    },
  ],
} as Beregningsgrunnlag);

const lagFaktaOmBeregning = (tilfeller, arbeidsforholdMedLønnsendringUtenIM,
  arbeidstakerOgFrilanserISammeOrganisasjonListe,
  vurderMottarYtelse = {}) => ({
  faktaOmBeregningTilfeller: tilfeller,
  vurderBesteberegning: {},
  arbeidsforholdMedLønnsendringUtenIM,
  arbeidstakerOgFrilanserISammeOrganisasjonListe,
  vurderMottarYtelse,
});

const lagAndel = (andelsnr, aktivitetStatus, inntektskategori) => (
  {
    andelsnr,
    aktivitetStatus,
    inntektskategori,
  }
);

const lagAndelValues = (andelsnr, fastsattBelop, inntektskategori, aktivitetStatus, lagtTilAvSaksbehandler = false,
  nyAndel = false, kanRedigereInntekt = true) => ({
  nyAndel, andelsnr, fastsattBelop, inntektskategori, aktivitetStatus, lagtTilAvSaksbehandler, kanRedigereInntekt,
});

describe('<VurderOgFastsettATFL>', () => {
  it('skal transform values om besteberegning', () => {
    const values = {};
    values[besteberegningField] = true;
    values[INNTEKT_FIELD_ARRAY_NAME] = [
      lagAndelValues(1, '10 000', inntektskategorier.ARBEIDSTAKER, aktivitetStatuser.ARBEIDSTAKER),
      lagAndelValues(undefined, '20 000', inntektskategorier.DAGPENGER, aktivitetStatuser.DAGPENGER, true, true),
    ];
    const andeler = [lagAndel(1, aktivitetStatuser.ARBEIDSTAKER, inntektskategorier.ARBEIDSTAKER)];
    const beregningsgrunnlag = lagBeregningsgrunnlag(andeler);
    const faktaOmBeregning = lagFaktaOmBeregning([VURDER_BESTEBEREGNING], undefined, undefined);
    const transformed = VurderOgFastsettATFL.transformValues(faktaOmBeregning as FaktaOmBeregning, beregningsgrunnlag)(values);
    expect(transformed.fakta.besteberegningAndeler.besteberegningAndelListe.length).toBe(1);
    expect(transformed.fakta.besteberegningAndeler.besteberegningAndelListe[0].andelsnr).toBe(1);
    expect(transformed.fakta.besteberegningAndeler.besteberegningAndelListe[0].fastsatteVerdier.fastsattBeløp).toBe(10000);
    expect(transformed.fakta.besteberegningAndeler.besteberegningAndelListe[0].fastsatteVerdier.inntektskategori).toBe('ARBEIDSTAKER');
    expect(transformed.fakta.besteberegningAndeler.nyDagpengeAndel.fastsatteVerdier.inntektskategori).toBe('DAGPENGER');
    expect(transformed.fakta.besteberegningAndeler.nyDagpengeAndel.fastsatteVerdier.fastsattBeløp).toBe(20000);
  });

  it('skal ikkje transform inntekt for nyoppstartetFL og lønnsendring når man har besteberegning', () => {
    const values = {};
    values[besteberegningField] = true;
    values[lonnsendringField] = true;
    values[erNyoppstartetFLField] = true;
    values[INNTEKT_FIELD_ARRAY_NAME] = [
      lagAndelValues(1, '10 000', inntektskategorier.ARBEIDSTAKER, aktivitetStatuser.ARBEIDSTAKER),
      lagAndelValues(2, '30 000', inntektskategorier.FRILANSER, aktivitetStatuser.FRILANSER),
      lagAndelValues(undefined, '20 000', inntektskategorier.DAGPENGER, aktivitetStatuser.DAGPENGER, true, true),
    ];
    const andelMedLonnsendring = lagAndel(1, aktivitetStatuser.ARBEIDSTAKER, inntektskategorier.ARBEIDSTAKER);
    const andeler = [
      andelMedLonnsendring,
      lagAndel(2, aktivitetStatuser.FRILANSER, inntektskategorier.FRILANSER),
    ];
    const beregningsgrunnlag = lagBeregningsgrunnlag(andeler);
    const faktaOmBeregning = lagFaktaOmBeregning([VURDER_BESTEBEREGNING,
      VURDER_NYOPPSTARTET_FL, VURDER_LONNSENDRING], [andelMedLonnsendring], undefined);
    const transformed = VurderOgFastsettATFL.transformValues(faktaOmBeregning as FaktaOmBeregning, beregningsgrunnlag)(values);
    expect(transformed.fakta.besteberegningAndeler.besteberegningAndelListe.length).toBe(2);
    expect(transformed.fakta.besteberegningAndeler.nyDagpengeAndel === null).toBe(false);
    expect(transformed.fakta.faktaOmBeregningTilfeller.length).toBe(4);
  });

  it('skal fastsette inntekt for nyoppstartetFL og arbeidstaker uten inntektsmelding med lønnendring', () => {
    const values = {};
    values[lonnsendringField] = true;
    values[erNyoppstartetFLField] = true;
    values[INNTEKT_FIELD_ARRAY_NAME] = [
      lagAndelValues(1, '10 000', inntektskategorier.ARBEIDSTAKER, aktivitetStatuser.ARBEIDSTAKER),
      lagAndelValues(2, '30 000', inntektskategorier.FRILANSER, aktivitetStatuser.FRILANSER),
      lagAndelValues(undefined, '20 000', inntektskategorier.DAGPENGER, aktivitetStatuser.DAGPENGER, true, true),
    ];
    const andelMedLonnsendring = lagAndel(1, aktivitetStatuser.ARBEIDSTAKER, inntektskategorier.ARBEIDSTAKER);
    const andeler = [
      andelMedLonnsendring,
      {
        ...lagAndel(2, aktivitetStatuser.FRILANSER, inntektskategorier.FRILANSER),
        erNyoppstartet: true,
      },
    ];
    const beregningsgrunnlag = lagBeregningsgrunnlag(andeler);
    const faktaOmBeregning = lagFaktaOmBeregning([VURDER_LONNSENDRING,
      VURDER_NYOPPSTARTET_FL], [andelMedLonnsendring], undefined);
    const transformed = VurderOgFastsettATFL.transformValues(faktaOmBeregning as FaktaOmBeregning, beregningsgrunnlag)(values).fakta;
    expect(transformed.fastsattUtenInntektsmelding.andelListe.length).toBe(1);
    expect(transformed.fastsattUtenInntektsmelding.andelListe[0].andelsnr).toBe(1);
    expect(transformed.fastsattUtenInntektsmelding.andelListe[0].fastsattBeløp).toBe(10000);
    expect(transformed.fastsettMaanedsinntektFL.maanedsinntekt).toBe(30000);
    expect(transformed.faktaOmBeregningTilfeller.length).toBe(4);
    expect(transformed.faktaOmBeregningTilfeller.includes(VURDER_NYOPPSTARTET_FL)).toBe(true);
    expect(transformed.faktaOmBeregningTilfeller.includes(VURDER_LONNSENDRING)).toBe(true);
    expect(transformed.faktaOmBeregningTilfeller.includes(FASTSETT_MAANEDSINNTEKT_FL)).toBe(true);
    expect(transformed.faktaOmBeregningTilfeller.includes(FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING)).toBe(true);
  });

  it('skal vise komponent', () => {
    const tilfeller = [VURDER_BESTEBEREGNING, VURDER_LONNSENDRING,
      VURDER_MOTTAR_YTELSE, VURDER_NYOPPSTARTET_FL,
    ];
    const andelMedLonnsendring = lagAndel(1, aktivitetStatuser.ARBEIDSTAKER, inntektskategorier.ARBEIDSTAKER);
    const andeler = [
      andelMedLonnsendring,
      {
        ...lagAndel(2, aktivitetStatuser.FRILANSER, inntektskategorier.FRILANSER),
        erNyoppstartet: true,
      },
    ];
    const beregningsgrunnlag = lagBeregningsgrunnlag(andeler);
    const wrapper = shallow(<VurderOgFastsettATFL.WrappedComponent
      readOnly={false}
      isAksjonspunktClosed={false}
      tilfeller={tilfeller}
      skalViseTabell={false}
      skalFastsetteAT
      skalFastsetteFL={false}
      skalHaBesteberegning={false}
      harKunstigArbeid={false}
      manglerInntektsmelding
      alleKodeverk={{} as AlleKodeverk}
      aksjonspunkter={[]}
      erOverstyrer={false}
      beregningsgrunnlag={beregningsgrunnlag}
      erOverstyrt={false}
      skalHaMilitær={null}
      arbeidsgiverOpplysningerPerId={{}}
    />);
    const inntektstabellPanel = wrapper.find(InntektstabellPanel);
    const lonnsendringForm = inntektstabellPanel.find(LonnsendringForm);
    expect(lonnsendringForm.length).toBe(1);

    const besteberegningForm = inntektstabellPanel.find(VurderBesteberegningForm);
    expect(besteberegningForm.length).toBe(1);

    const nyoppstartetFLForm = inntektstabellPanel.find(NyoppstartetFLForm);
    expect(nyoppstartetFLForm.length).toBe(1);

    const vurderMottarYtelseForm = inntektstabellPanel.find(VurderMottarYtelseForm);
    expect(vurderMottarYtelseForm.length).toBe(1);
  });

  it('skal returnere true for fastsetting av FL-inntekt når FL-inntekt skal fastsettes', () => {
    const values = {};
    values[INNTEKT_FIELD_ARRAY_NAME] = [
      lagAndelValues(1, 10000, inntektskategorier.FRILANSER, aktivitetStatuser.FRILANSER),
      lagAndelValues(2, 20000, inntektskategorier.ARBEIDSTAKER, aktivitetStatuser.ARBEIDSTAKER),
    ];
    const skalFastsetteInntektMock = (andel) => (andel.aktivitetStatus === aktivitetStatuser.FRILANSER);
    const skalFastsetteFL = skalFastsettInntektForFrilans.resultFunc(values, skalFastsetteInntektMock);
    expect(skalFastsetteFL).toBe(true);
  });

  it('skal returnere false for fastsetting av FL-inntekt når FL-inntekt ikkje skal fastsettes', () => {
    const values = {};
    values[INNTEKT_FIELD_ARRAY_NAME] = [
      lagAndelValues(1, 10000, inntektskategorier.FRILANSER, aktivitetStatuser.FRILANSER),
      lagAndelValues(2, 20000, inntektskategorier.ARBEIDSTAKER, aktivitetStatuser.ARBEIDSTAKER),
    ];
    const skalFastsetteInntektMock = (andel) => (andel.aktivitetStatus !== aktivitetStatuser.FRILANSER);
    const skalFastsetteFL = skalFastsettInntektForFrilans.resultFunc(values, skalFastsetteInntektMock);
    expect(skalFastsetteFL).toBe(false);
  });

  it('skal returnere true for fastsetting av AT-inntekt når AT-inntekt skal fastsettes', () => {
    const values = {};
    values[INNTEKT_FIELD_ARRAY_NAME] = [
      lagAndelValues(1, 10000, inntektskategorier.FRILANSER, aktivitetStatuser.FRILANSER),
      lagAndelValues(2, 20000, inntektskategorier.ARBEIDSTAKER, aktivitetStatuser.ARBEIDSTAKER),
    ];
    const skalFastsetteInntektMock = (andel) => (andel.aktivitetStatus === aktivitetStatuser.ARBEIDSTAKER);
    const skalFastsetteAT = skalFastsettInntektForArbeidstaker.resultFunc(values, skalFastsetteInntektMock);
    expect(skalFastsetteAT).toBe(true);
  });

  it('skal returnere false for fastsetting av AT-inntekt når AT-inntekt ikkje skal fastsettes', () => {
    const values = {};
    values[INNTEKT_FIELD_ARRAY_NAME] = [
      lagAndelValues(1, 10000, inntektskategorier.FRILANSER, aktivitetStatuser.FRILANSER),
      lagAndelValues(2, 20000, inntektskategorier.ARBEIDSTAKER, aktivitetStatuser.ARBEIDSTAKER),
    ];
    const skalFastsetteInntektMock = (andel) => (andel.aktivitetStatus !== aktivitetStatuser.ARBEIDSTAKER);
    const skalFastsetteAT = skalFastsettInntektForArbeidstaker.resultFunc(values, skalFastsetteInntektMock);
    expect(skalFastsetteAT).toBe(false);
  });
});
