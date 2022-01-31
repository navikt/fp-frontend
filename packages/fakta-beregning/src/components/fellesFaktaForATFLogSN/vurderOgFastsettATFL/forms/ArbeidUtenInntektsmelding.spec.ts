import organisasjonstyper from '@fpsak-frontend/kodeverk/src/organisasjonstype';
import faktaOmBeregningTilfelle from '@fpsak-frontend/kodeverk/src/faktaOmBeregningTilfelle';
import { Beregningsgrunnlag, BeregningsgrunnlagAndel } from '@fpsak-frontend/types';
import { lonnsendringField } from './LonnsendringForm';
import transformValues from './ArbeidUtenInntektsmelding';

describe('<ArbeidUtenInntektsmelding>', () => {
  it('skal ikke transform values uten tilfelle', () => {
    const inntektVerdier = [
      { andelsnr: 1, fastsattBelop: 100000 },
    ];
    const faktaOmBeregning = {
      andelerForFaktaOmBeregning: [],
      faktaOmBeregningTilfeller: [faktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE],
    };
    const transformed = transformValues({}, inntektVerdier, faktaOmBeregning, {} as Beregningsgrunnlag, []);
    expect(Object.keys(transformed)).toHaveLength(0);
  });

  it('skal ikke transform values når inntektverdier er null', () => {
    const faktaOmBeregning = {
      andelerForFaktaOmBeregning: [],
      faktaOmBeregningTilfeller: [faktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE,
        faktaOmBeregningTilfelle.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING],
    };
    const transformed = transformValues({}, null, faktaOmBeregning, {} as Beregningsgrunnlag, []);
    expect(Object.keys(transformed)).toHaveLength(0);
  });

  it('skal ikke transform values når andel allerede er fastsatt', () => {
    const faktaOmBeregning = {
      andelerForFaktaOmBeregning: [],
      faktaOmBeregningTilfeller: [faktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE,
        faktaOmBeregningTilfelle.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING],
    };
    const inntektVerdier = [
      { andelsnr: 1, fastsattBelop: 100000 },
    ];
    const bg = {
      beregningsgrunnlagPeriode: [
        {
          beregningsgrunnlagPrStatusOgAndel: [
            { andelsnr: 1, arbeidsforhold: { organisasjonstype: organisasjonstyper.KUNSTIG } } as BeregningsgrunnlagAndel,
          ],
        },
      ],
    };
    const fastsatteAndeler = [1];
    const transformed = transformValues({}, inntektVerdier, faktaOmBeregning, bg as Beregningsgrunnlag, fastsatteAndeler);
    expect(Object.keys(transformed)).toHaveLength(0);
  });

  it('skal transform values for kunstig arbeidsforhold', () => {
    const faktaOmBeregning = {
      andelerForFaktaOmBeregning: [],
      faktaOmBeregningTilfeller: [faktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE,
        faktaOmBeregningTilfelle.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING],
    };
    const inntektVerdier = [
      { andelsnr: 1, fastsattBelop: 10000, inntektskategori: 'ARBEIDSTAKER' },
    ];
    const bg = {
      beregningsgrunnlagPeriode: [
        {
          beregningsgrunnlagPrStatusOgAndel: [
            { andelsnr: 1, arbeidsforhold: { organisasjonstype: organisasjonstyper.KUNSTIG } } as BeregningsgrunnlagAndel,
          ],
        },
      ],
    };
    const fastsatteAndeler = [];
    const transformed = transformValues({}, inntektVerdier, faktaOmBeregning, bg as Beregningsgrunnlag, fastsatteAndeler);
    expect(transformed.faktaOmBeregningTilfeller[0]).toBe(
      faktaOmBeregningTilfelle.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING,
    );
    expect(transformed.fastsattUtenInntektsmelding.andelListe[0].andelsnr).toBe(1);
    expect(transformed.fastsattUtenInntektsmelding.andelListe[0].fastsattBeløp).toBe(10000);
    expect(transformed.fastsattUtenInntektsmelding.andelListe[0].inntektskategori).toBe('ARBEIDSTAKER');
    expect(fastsatteAndeler[0]).toBe(1);
  });

  it('skal teste at transformValues gir korrekt output når lønnsendring', () => {
    const values = {};
    values[lonnsendringField] = true;
    const inntektVerdier = [
      { fastsattBelop: 10000, andelsnr: 1 },
    ];
    const faktaOmBeregning = {
      andelerForFaktaOmBeregning: [],
      faktaOmBeregningTilfeller: [faktaOmBeregningTilfelle.VURDER_LONNSENDRING],
      arbeidsforholdMedLønnsendringUtenIM: [{ andelsnr: 1 }],
    };
    const bg = {
      beregningsgrunnlagPeriode: [
        {
          beregningsgrunnlagPrStatusOgAndel: [
            { andelsnr: 1, arbeidsforhold: {} } as BeregningsgrunnlagAndel,
          ],
        },
      ],
    };
    const transformedObject = transformValues(values, inntektVerdier, faktaOmBeregning, bg as Beregningsgrunnlag, []);
    expect(transformedObject.fastsattUtenInntektsmelding.andelListe.length).toBe(1);
    expect(transformedObject.fastsattUtenInntektsmelding.andelListe[0].andelsnr).toBe(1);
    expect(transformedObject.fastsattUtenInntektsmelding.andelListe[0].fastsattBeløp).toBe(10000);
  });

  it('skal ikkje submitte inntekt uten lønnsendring', () => {
    const values = { };
    values[lonnsendringField] = false;
    const inntektVerdier = [
      { fastsattBelop: null, andelsnr: 1 },
    ];
    const faktaOmBeregning = {
      andelerForFaktaOmBeregning: [],
      faktaOmBeregningTilfeller: [faktaOmBeregningTilfelle.VURDER_LONNSENDRING],
      arbeidsforholdMedLønnsendringUtenIM: [{ andelsnr: 1 }],
    };
    const bg = {
      beregningsgrunnlagPeriode: [
        {
          beregningsgrunnlagPrStatusOgAndel: [
            { andelsnr: 1, arbeidsforhold: {} } as BeregningsgrunnlagAndel,
          ],
        },
      ],
    };
    const transformedObject = transformValues(values, inntektVerdier, faktaOmBeregning, bg as Beregningsgrunnlag, []);
    expect(Object.keys(transformedObject)).toHaveLength(0);
  });

  it('skal transform values når ved avsluttet arbeidsforhold dagen før skjæringstidspunktet '
  + 'og et annet løpende i samme virksomhet der det er mottatt inntektsmelding', () => {
    const values = { };
    const inntektVerdier = [
      {
        fastsattBelop: 10000, andelsnr: 1, arbeidsgiverId: '2134567', arbeidsforholdId: null,
      },
    ];
    const faktaOmBeregning = {
      andelerForFaktaOmBeregning: [],
      faktaOmBeregningTilfeller: [faktaOmBeregningTilfelle.VURDER_LONNSENDRING],
      arbeidsforholdMedLønnsendringUtenIM: [{ andelsnr: 1 }],
    };
    const bg = {
      beregningsgrunnlagPeriode: [
        {
          beregningsgrunnlagPrStatusOgAndel: [
            { andelsnr: 1, aktivitetStatus: 'AT', arbeidsforhold: { arbeidsgiverIdent: '2134567', arbeidsforholdId: null } },
            {
              andelsnr: 2,
              aktivitetStatus: 'AT',
              arbeidsforhold: {
                arbeidsgiverIdent: '2134567',
                arbeidsforholdId: '8u328ru9h34',
              },
            },
          ],
        },
      ],
    };
    const transformedObject = transformValues(values, inntektVerdier, faktaOmBeregning, bg as Beregningsgrunnlag, []);
    expect(transformedObject.fastsattUtenInntektsmelding.andelListe.length).toBe(1);
    expect(transformedObject.fastsattUtenInntektsmelding.andelListe[0].andelsnr).toBe(1);
    expect(transformedObject.fastsattUtenInntektsmelding.andelListe[0].fastsattBeløp).toBe(10000);
  });
});
