import React from 'react';
import { shallow } from 'enzyme';
import { Normaltekst } from 'nav-frontend-typografi';
import { FormattedMessage } from 'react-intl';
import faktaOmBeregningTilfelle from '@fpsak-frontend/kodeverk/src/faktaOmBeregningTilfelle';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import inntektskategorier from '@fpsak-frontend/kodeverk/src/inntektskategorier';
import { FaktaOmBeregning, BeregningsgrunnlagArbeidsforhold, Beregningsgrunnlag } from '@fpsak-frontend/types';
import { ATFLSammeOrgTekst, transformValuesForATFLISammeOrg } from './ATFLSammeOrg';

describe('<ATFLSammeOrg>', () => {
  it('skal ikke vise tekst når man ikke har tilfelle', () => {
    const wrapper = shallow(<ATFLSammeOrgTekst
      beregningsgrunnlag={{
        faktaOmBeregning: {
          faktaOmBeregningTilfeller: [faktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE],
          andelerForFaktaOmBeregning: [],
        },
      } as Beregningsgrunnlag}
      manglerInntektsmelding
    />);
    expect(wrapper.find(Normaltekst).length).toBe(0);
  });

  it('skal vise tekst når man har tilfelle uten inntektsmelding', () => {
    const beregningsgrunnlag = {
      faktaOmBeregning: {
        faktaOmBeregningTilfeller:
      [faktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE,
        faktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON],
        andelerForFaktaOmBeregning: [],
      },
    };
    const wrapper = shallow(<ATFLSammeOrgTekst
      beregningsgrunnlag={beregningsgrunnlag as Beregningsgrunnlag}
      manglerInntektsmelding
    />);
    const msg = wrapper.find(FormattedMessage);
    expect(msg.length).toBe(1);
    expect(msg.prop('id')).toBe('BeregningInfoPanel.VurderOgFastsettATFL.ATFLSammeOrgUtenIM');
  });

  it('skal vise tekst når man har tilfelle med inntektsmelding', () => {
    const beregningsgrunnlag = {
      faktaOmBeregning: {
        faktaOmBeregningTilfeller:
          [faktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE,
            faktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON],
        andelerForFaktaOmBeregning: [],
      },
    };
    const wrapper = shallow(<ATFLSammeOrgTekst
      beregningsgrunnlag={beregningsgrunnlag as Beregningsgrunnlag}
      manglerInntektsmelding={false}
    />);
    const msg = wrapper.find(FormattedMessage);
    expect(msg.length).toBe(1);
    expect(msg.prop('id')).toBe('BeregningInfoPanel.VurderOgFastsettATFL.ATFLSammeOrg');
  });

  const arbeidsforhold = {
    arbeidsgiverNavn: 'bedrift',
    arbeidsgiverId: '123',
    arbeidsforholdId: 'abc',
    startdato: '2018-01-01',
  } as BeregningsgrunnlagArbeidsforhold;

  const faktaOmBeregningFrilansAndel = {
    andelsnr: 1,
    arbeidsforhold: null,
    inntektskategori: inntektskategorier.FRILANSER,
    aktivitetStatus: aktivitetStatus.FRILANSER,
    lagtTilAvSaksbehandler: false,
    andelIArbeid: [],
  };

  const faktaOmBeregningATAndel = {
    andelsnr: 2,
    arbeidsforhold,
    inntektskategori: inntektskategorier.ARBEIDSTAKER,
    aktivitetStatus: aktivitetStatus.ARBEIDSTAKER,
    lagtTilAvSaksbehandler: false,
    andelIArbeid: [],
  };

  const frilansAndelInntekt = {
    andelsnr: 1,
    fastsattBelop: 10000,
    inntektskategori: inntektskategorier.FRILANSER,
    nyAndel: false,
    lagtTilAvSaksbehandler: false,
    aktivitetStatus: aktivitetStatus.FRILANSER,
  };

  const arbeidstakerInntekt = {
    andelsnr: 2,
    fastsattBelop: 20000,
    inntektskategori: inntektskategorier.ARBEIDSTAKER,
    nyAndel: false,
    lagtTilAvSaksbehandler: false,
    aktivitetStatus: aktivitetStatus.ARBEIDSTAKER,
  };

  const inntektVerdier = [frilansAndelInntekt, arbeidstakerInntekt];

  it('skal ikkje transform values uten tilfelle', () => {
    const faktaOmBeregning = {
      andelerForFaktaOmBeregning: [],
      faktaOmBeregningTilfeller: [faktaOmBeregningTilfelle.VURDER_LONNSENDRING],
      arbeidstakerOgFrilanserISammeOrganisasjonListe: [{ ...faktaOmBeregningATAndel, inntektPrMnd: 10000 }],
      frilansAndel: faktaOmBeregningFrilansAndel,
    };

    const transformed = transformValuesForATFLISammeOrg(inntektVerdier, faktaOmBeregning as FaktaOmBeregning, []);
    expect(transformed.faktaOmBeregningTilfeller.length).toBe(0);
  });

  it('skal transform values', () => {
    const faktaOmBeregning = {
      andelerForFaktaOmBeregning: [],
      faktaOmBeregningTilfeller: [faktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON],
      arbeidstakerOgFrilanserISammeOrganisasjonListe: [{ ...faktaOmBeregningATAndel, inntektPrMnd: 10000 }],
      frilansAndel: faktaOmBeregningFrilansAndel,
    };

    const fastsatteAndeler = [];
    const transformed = transformValuesForATFLISammeOrg(inntektVerdier, faktaOmBeregning as FaktaOmBeregning, fastsatteAndeler);
    expect(transformed.faktaOmBeregningTilfeller.length).toBe(1);
    expect(transformed.faktaOmBeregningTilfeller.includes(faktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON)).toBe(true);
    expect(transformed.vurderATogFLiSammeOrganisasjon.vurderATogFLiSammeOrganisasjonAndelListe.length).toBe(2);
    expect(transformed.vurderATogFLiSammeOrganisasjon.vurderATogFLiSammeOrganisasjonAndelListe[1].andelsnr).toBe(1);
    expect(transformed.vurderATogFLiSammeOrganisasjon.vurderATogFLiSammeOrganisasjonAndelListe[1].arbeidsinntekt).toBe(10000);
    expect(transformed.vurderATogFLiSammeOrganisasjon.vurderATogFLiSammeOrganisasjonAndelListe[0].andelsnr).toBe(2);
    expect(transformed.vurderATogFLiSammeOrganisasjon.vurderATogFLiSammeOrganisasjonAndelListe[0].arbeidsinntekt).toBe(20000);
    expect(fastsatteAndeler.length).toBe(2);
    expect(fastsatteAndeler.includes(1)).toBe(true);
    expect(fastsatteAndeler.includes(2)).toBe(true);
  });

  it('skal ikkje transform values når andelsnr har blitt submittet fra før', () => {
    const faktaOmBeregning = {
      andelerForFaktaOmBeregning: [],
      faktaOmBeregningTilfeller: [faktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON],
      arbeidstakerOgFrilanserISammeOrganisasjonListe: [{ ...faktaOmBeregningATAndel, inntektPrMnd: 10000 }],
      frilansAndel: faktaOmBeregningFrilansAndel,
    };

    const fastsatteAndeler = [1];
    const transformed = transformValuesForATFLISammeOrg(inntektVerdier, faktaOmBeregning as FaktaOmBeregning, fastsatteAndeler);
    expect(transformed.faktaOmBeregningTilfeller.length).toBe(1);
    expect(transformed.faktaOmBeregningTilfeller.includes(faktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON)).toBe(true);
    expect(transformed.vurderATogFLiSammeOrganisasjon.vurderATogFLiSammeOrganisasjonAndelListe.length).toBe(1);
    expect(transformed.vurderATogFLiSammeOrganisasjon.vurderATogFLiSammeOrganisasjonAndelListe[0].andelsnr).toBe(2);
    expect(transformed.vurderATogFLiSammeOrganisasjon.vurderATogFLiSammeOrganisasjonAndelListe[0].arbeidsinntekt).toBe(20000);
    expect(fastsatteAndeler.length).toBe(2);
    expect(fastsatteAndeler.includes(1)).toBe(true);
    expect(fastsatteAndeler.includes(2)).toBe(true);
  });
});
