// import PropTypes from 'prop-types';
// import Kodeverk from './kodeverkTsType';
//
// type beregningsgrunnlagArbeidsforholdProptype = Readonly<{
//     arbeidsgiverNavn?: string;
//     arbeidsgiverId?: string;
//     startdato?: string;
//     opphoersdato?: string;
//     arbeidsforholdId?: string;
//     arbeidsforholdType?: Kodeverk;
// }>;
//
// type faktaOmBeregningAndelPropType = {
//     arbeidsforhold?: beregningsgrunnlagArbeidsforholdProptype;
//     andelsnr?: number;
//     inntektskategori?: Kodeverk;
//     aktivitetStatus?: Kodeverk;
// };
//
// type faktaOmBeregningPropType = {
//     /*
//     (ts-migrate) TODO: Migrate the remaining prop types
//     ...beregningsgrunnlagArbeidsforholdProptype
//     */
//     beregningsgrunnlagArbeidsforhold?: {
//         erTidsbegrensetArbeidsforhold?: boolean;
//     }[];
//     frilansAndel?: faktaOmBeregningAndelPropType;
//     arbeidsforholdMedLønnsendringUtenIM?: faktaOmBeregningAndelPropType;
// };
//
// const faktaOmBeregningPropType: PropTypes.Requireable<faktaOmBeregningPropType> = PropTypes.shape({
//   beregningsgrunnlagArbeidsforhold: PropTypes.arrayOf(PropTypes.shape({
//     ...beregningsgrunnlagArbeidsforholdProptype,
//     erTidsbegrensetArbeidsforhold: PropTypes.bool,
//   })),
//   frilansAndel: faktaOmBeregningAndelPropType,
//   arbeidsforholdMedLønnsendringUtenIM: faktaOmBeregningAndelPropType,
// });
//
// type perioderMedGraderingEllerRefusjonPropType = {
//     erRefusjon?: boolean;
//     erGradering?: boolean;
//     fom?: string;
//     tom?: string;
// };
//
// const perioderMedGraderingEllerRefusjonPropType: PropTypes.Requireable<perioderMedGraderingEllerRefusjonPropType> = PropTypes.shape({
//   erRefusjon: PropTypes.bool,
//   erGradering: PropTypes.bool,
//   fom: PropTypes.string,
//   tom: PropTypes.string,
// });
//
// type arbeidsforholdTilFordelingPropType = {
//     aktørId?: number;
//     arbeidsforholdId?: string;
//     arbeidsforholdType?: Kodeverk;
//     arbeidsgiverId?: string;
//     arbeidsgiverNavn?: string;
//     belopFraInntektsmeldingPrMnd?: number;
//     eksternArbeidsforholdId?: string;
//     naturalytelseBortfaltPrÅr?: number;
//     naturalytelseTilkommetPrÅr?: number;
//     opphoersdato?: number;
//     organisasjonstype?: Kodeverk;
//     perioderMedGraderingEllerRefusjon?: perioderMedGraderingEllerRefusjonPropType[];
//     permisjon?: {
//         permisjonFom?: string;
//         permisjonTom?: string;
//     };
//     refusjonPrAar?: number;
//     startdato?: string;
// };
//
// const arbeidsforholdTilFordelingPropType: PropTypes.Requireable<arbeidsforholdTilFordelingPropType> = PropTypes.shape({
//   aktørId: PropTypes.number,
//   arbeidsforholdId: PropTypes.string,
//   arbeidsforholdType: kodeverkObjektPropType,
//   arbeidsgiverId: PropTypes.string,
//   arbeidsgiverNavn: PropTypes.string,
//   belopFraInntektsmeldingPrMnd: PropTypes.number,
//   eksternArbeidsforholdId: PropTypes.string,
//   naturalytelseBortfaltPrÅr: PropTypes.number,
//   naturalytelseTilkommetPrÅr: PropTypes.number,
//   opphoersdato: PropTypes.number,
//   organisasjonstype: kodeverkObjektPropType,
//   perioderMedGraderingEllerRefusjon: PropTypes.arrayOf(perioderMedGraderingEllerRefusjonPropType),
//   permisjon: PropTypes.shape({
//     permisjonFom: PropTypes.string,
//     permisjonTom: PropTypes.string,
//   }),
//   refusjonPrAar: PropTypes.number,
//   startdato: PropTypes.string,
// });
//
// type fordelBeregningsgrunnlagAndelPropType = {
//     aktivitetStatus?: Kodeverk;
//     andelIArbeid?: number[];
//     andelsnr?: number;
//     arbeidsforhold?: beregningsgrunnlagArbeidsforholdProptype;
//     arbeidsforholdType?: Kodeverk;
//     belopFraInntektsmeldingPrAar?: number;
//     fordelingForrigeBehandlingPrAar?: number;
//     fordeltPrAar?: number;
//     inntektskategori?: Kodeverk;
//     lagtTilAvSaksbehandler?: boolean;
//     nyttArbeidsforhold?: boolean;
//     refusjonskravFraInntektsmeldingPrAar?: number;
//     refusjonskravPrAar?: number;
// };
//
// const fordelBeregningsgrunnlagAndelPropType: PropTypes.Requireable<fordelBeregningsgrunnlagAndelPropType> = PropTypes.shape({
//   aktivitetStatus: kodeverkObjektPropType,
//   andelIArbeid: PropTypes.arrayOf(PropTypes.number),
//   andelsnr: PropTypes.number,
//   arbeidsforhold: beregningsgrunnlagArbeidsforholdProptype,
//   arbeidsforholdType: kodeverkObjektPropType,
//   belopFraInntektsmeldingPrAar: PropTypes.number,
//   fordelingForrigeBehandlingPrAar: PropTypes.number,
//   fordeltPrAar: PropTypes.number,
//   inntektskategori: kodeverkObjektPropType,
//   lagtTilAvSaksbehandler: PropTypes.bool,
//   nyttArbeidsforhold: PropTypes.bool,
//   refusjonskravFraInntektsmeldingPrAar: PropTypes.number,
//   refusjonskravPrAar: PropTypes.number,
// });
//
// type fordelBeregningsgrunnlagPeriodePropType = {
//     fom?: string;
//     fordelBeregningsgrunnlagAndeler?: fordelBeregningsgrunnlagAndelPropType[];
//     skalRedigereInntekt?: boolean;
//     skalPreutfyllesMedBeregningsgrunnlag?: boolean;
//     skalKunneEndreRefusjon?: boolean;
//     tom?: string;
// };
//
// const fordelBeregningsgrunnlagPeriodePropType: PropTypes.Requireable<fordelBeregningsgrunnlagPeriodePropType> = PropTypes.shape({
//   fom: PropTypes.string,
//   fordelBeregningsgrunnlagAndeler: PropTypes.arrayOf(fordelBeregningsgrunnlagAndelPropType),
//   skalRedigereInntekt: PropTypes.bool,
//   skalPreutfyllesMedBeregningsgrunnlag: PropTypes.bool,
//   skalKunneEndreRefusjon: PropTypes.bool,
//   tom: PropTypes.string,
// });
//
// type fordelBeregningsgrunnlagPropType = {
//     arbeidsforholdTilFordeling?: arbeidsforholdTilFordelingPropType[];
//     fordelBeregningsgrunnlagPerioder?: fordelBeregningsgrunnlagPeriodePropType[];
// };
//
// const fordelBeregningsgrunnlagPropType: PropTypes.Requireable<fordelBeregningsgrunnlagPropType> = PropTypes.shape({
//   arbeidsforholdTilFordeling: PropTypes.arrayOf(arbeidsforholdTilFordelingPropType),
//   fordelBeregningsgrunnlagPerioder: PropTypes.arrayOf(fordelBeregningsgrunnlagPeriodePropType),
// });
//
// type faktaOmFordelingPropType = {
//     fordelBeregningsgrunnlag?: fordelBeregningsgrunnlagPropType;
// };
//
// const faktaOmFordelingPropType: PropTypes.Requireable<faktaOmFordelingPropType> = PropTypes.shape({
//   fordelBeregningsgrunnlag: fordelBeregningsgrunnlagPropType,
// });
//
// type beregningsgrunnlagPropType = {
//     aktivitetStatus?: {
//         aktivitetStatus?: Kodeverk;
//     }[];
//     beregningsgrunnlagPeriode?: {
//         avkortetPrAar?: number;
//         beregnetPrAar?: number;
//         beregningsgrunnlagPeriodeFom?: string;
//         beregningsgrunnlagPeriodeTom?: string;
//         bruttoInkludertBortfaltNaturalytelsePrAar?: number;
//         bruttoPrAar?: number;
//         dagsats?: number;
//         ledetekstAvkortet?: string;
//         ledetekstBrutto?: string;
//         ledetekstRedusert?: string;
//         overstyrtPrAar?: number;
//         redusertPrAar?: number;
//         periodeAarsaker?: Kodeverk[];
//         beregningsgrunnlagPrStatusOgAndel?: {
//             aktivitetStatus?: Kodeverk;
//             arbeidsforholdType?: Kodeverk;
//             avkortetPrAar?: number;
//             beregnetPrAar?: number;
//             beregningsgrunnlagFom?: string;
//             beregningsgrunnlagTom?: string;
//             bruttoPrAar?: number;
//             arbeidsforholdId?: string;
//             overstyrtPrAar?: number;
//             redusertPrAar?: number;
//             pgi1?: number;
//             pgi2?: number;
//             pgi3?: number;
//             pgiSnitt?: number;
//             aarsbeloepFraTilstoetendeYtelse?: number;
//             bortfaltNaturalytelse?: number;
//             erNyIArbeidslivet?: boolean;
//             erTidsbegrensetArbeidsforhold?: boolean;
//             erNyoppstartet?: boolean;
//             arbeidsgiverId?: string;
//             arbeidsgiverNavn?: string;
//             andelsnr?: number;
//             lonnsendringIBeregningsperioden?: boolean;
//             besteberegningPrAar?: number;
//         }[];
//     }[];
//     sammenligningsgrunnlag?: {
//         avvikPromille?: number;
//         rapportertPrAar?: number;
//         sammenligningsgrunnlagFom?: string;
//         sammenligningsgrunnlagTom?: string;
//     };
//     skjaeringstidspunktBeregning?: string;
//     faktaOmBeregning?: faktaOmBeregningPropType;
//     faktaOmFordeling?: faktaOmFordelingPropType;
// };
//
// const beregningsgrunnlagPropType: PropTypes.Requireable<beregningsgrunnlagPropType> = PropTypes.shape({
//   aktivitetStatus: PropTypes.arrayOf(PropTypes.shape({
//     aktivitetStatus: kodeverkObjektPropType,
//   })),
//   beregningsgrunnlagPeriode: PropTypes.arrayOf(PropTypes.shape({
//     avkortetPrAar: PropTypes.number,
//     beregnetPrAar: PropTypes.number,
//     beregningsgrunnlagPeriodeFom: PropTypes.string,
//     beregningsgrunnlagPeriodeTom: PropTypes.string,
//     bruttoInkludertBortfaltNaturalytelsePrAar: PropTypes.number,
//     bruttoPrAar: PropTypes.number,
//     dagsats: PropTypes.number,
//     ledetekstAvkortet: PropTypes.string,
//     ledetekstBrutto: PropTypes.string,
//     ledetekstRedusert: PropTypes.string,
//     overstyrtPrAar: PropTypes.number,
//     redusertPrAar: PropTypes.number,
//     periodeAarsaker: PropTypes.arrayOf(kodeverkObjektPropType),
//     beregningsgrunnlagPrStatusOgAndel: PropTypes.arrayOf(PropTypes.shape({
//       aktivitetStatus: kodeverkObjektPropType,
//       arbeidsforholdType: kodeverkObjektPropType,
//       avkortetPrAar: PropTypes.number,
//       beregnetPrAar: PropTypes.number,
//       beregningsgrunnlagFom: PropTypes.string,
//       beregningsgrunnlagTom: PropTypes.string,
//       bruttoPrAar: PropTypes.number,
//       arbeidsforholdId: PropTypes.string,
//       overstyrtPrAar: PropTypes.number,
//       redusertPrAar: PropTypes.number,
//       pgi1: PropTypes.number,
//       pgi2: PropTypes.number,
//       pgi3: PropTypes.number,
//       pgiSnitt: PropTypes.number,
//       aarsbeloepFraTilstoetendeYtelse: PropTypes.number,
//       bortfaltNaturalytelse: PropTypes.number,
//       erNyIArbeidslivet: PropTypes.bool,
//       erTidsbegrensetArbeidsforhold: PropTypes.bool,
//       erNyoppstartet: PropTypes.bool,
//       arbeidsgiverId: PropTypes.string,
//       arbeidsgiverNavn: PropTypes.string,
//       andelsnr: PropTypes.number,
//       lonnsendringIBeregningsperioden: PropTypes.bool,
//       besteberegningPrAar: PropTypes.number,
//     })),
//   })),
//   sammenligningsgrunnlag: PropTypes.shape({
//     avvikPromille: PropTypes.number,
//     rapportertPrAar: PropTypes.number,
//     sammenligningsgrunnlagFom: PropTypes.string,
//     sammenligningsgrunnlagTom: PropTypes.string,
//   }),
//   skjaeringstidspunktBeregning: PropTypes.string,
//   faktaOmBeregning: faktaOmBeregningPropType,
//   faktaOmFordeling: faktaOmFordelingPropType,
// });
//
// export default beregningsgrunnlagPropType;
