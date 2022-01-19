import { Beregningsgrunnlag } from '@fpsak-frontend/types';

export const bgUtenDelvisRefusjon = {
  skjaeringstidspunktBeregning: '2020-05-15',
  dekningsgrad: null,
  grunnbeløp: null,
  erOverstyrtInntekt: null,
  skjæringstidspunkt: '2020-05-15',
  beregningsgrunnlagPeriode: [],
  refusjonTilVurdering: {
    andeler: [
      {
        aktivitetStatus: 'AT',
        tidligereUtbetalinger: [
          {
            fom: '2020-05-15',
            tom: '9999-12-31',
            erTildeltRefusjon: false,
          },
        ],
        nyttRefusjonskravFom: '2020-06-01',
        tidligsteMuligeRefusjonsdato: '2020-06-01',
        skalKunneFastsetteDelvisRefusjon: false,
        arbeidsgiver: {
          arbeidsgiverAktørId: '999999998',
        },
      },
    ],
  },
} as Beregningsgrunnlag;

export const bgMedDelvisRefusjon = {
  skjaeringstidspunktBeregning: '2020-06-01',
  skjæringstidspunkt: '2020-06-01',
  dekningsgrad: null,
  grunnbeløp: null,
  erOverstyrtInntekt: null,
  beregningsgrunnlagPeriode: [],
  refusjonTilVurdering: {
    andeler: [
      {
        aktivitetStatus: 'AT',
        tidligereUtbetalinger: [
          {
            fom: '2020-05-15',
            tom: '9999-12-31',
            erTildeltRefusjon: true,
          },
        ],
        nyttRefusjonskravFom: '2020-06-01',
        tidligsteMuligeRefusjonsdato: '2020-06-01',
        skalKunneFastsetteDelvisRefusjon: true,
        maksTillattDelvisRefusjonPrMnd: 12000,
        arbeidsgiver: {
          arbeidsgiverOrgnr: '999999999',
        },
      },
    ],
  },
} as Beregningsgrunnlag;

export const aksjonspunkt = [
  {
    definisjon: '5059',
    status: 'OPPR',
    toTrinnsBehandling: true,
    aksjonspunktType: 'MANU',
    kanLoses: true,
    erAktivt: true,
  }];
