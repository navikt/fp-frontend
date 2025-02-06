export enum FaktaOmBeregningTilfelle {
  VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD = 'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD',
  VURDER_SN_NY_I_ARBEIDSLIVET = 'VURDER_SN_NY_I_ARBEIDSLIVET',
  VURDER_NYOPPSTARTET_FL = 'VURDER_NYOPPSTARTET_FL',
  FASTSETT_MAANEDSINNTEKT_FL = 'FASTSETT_MAANEDSINNTEKT_FL',
  VURDER_LONNSENDRING = 'VURDER_LØNNSENDRING',
  FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING = 'FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING',
  VURDER_AT_OG_FL_I_SAMME_ORGANISASJON = 'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON',
  FASTSETT_BESTEBEREGNING_FODENDE_KVINNE = 'FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE',
  VURDER_ETTERLONN_SLUTTPAKKE = 'VURDER_ETTERLØNN_SLUTTPAKKE',
  FASTSETT_ETTERLONN_SLUTTPAKKE = 'FASTSETT_ETTERLØNN_SLUTTPAKKE',
  FASTSETT_BG_KUN_YTELSE = 'FASTSETT_BG_KUN_YTELSE',
  VURDER_MOTTAR_YTELSE = 'VURDER_MOTTAR_YTELSE',
  VURDER_BESTEBEREGNING = 'VURDER_BESTEBEREGNING',
  VURDER_MILITÆR_SIVILTJENESTE = 'VURDER_MILITÆR_SIVILTJENESTE',
  VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT = 'VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT',
}

const besteberegningTilfeller = [
  FaktaOmBeregningTilfelle.VURDER_BESTEBEREGNING,
  FaktaOmBeregningTilfelle.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE,
];

export const vurderOgFastsettATFLTilfeller = [
  FaktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON,
  FaktaOmBeregningTilfelle.VURDER_LONNSENDRING,
  FaktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL,
  FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE,
  FaktaOmBeregningTilfelle.VURDER_BESTEBEREGNING,
  FaktaOmBeregningTilfelle.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE,
  FaktaOmBeregningTilfelle.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING,
];

export const fastsettATLIntersection = (tilfeller: string[]): string[] =>
  vurderOgFastsettATFLTilfeller.filter(tilfelle => tilfeller.includes(tilfelle));

const harLonnsendringOgNyoppstartet = (tilfeller: string[]): boolean =>
  tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_LONNSENDRING) &&
  tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL);

const harIkkeLonnsendringEllerNyoppstartet = (tilfeller: string[]): boolean =>
  !(
    tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_LONNSENDRING) ||
    tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL)
  );

export const harVurderMottarYtelse = (tilfeller: string[]): boolean =>
  tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE);

export const harKunATFLISammeOrg = (tilfeller: string[]): boolean =>
  (harIkkeLonnsendringEllerNyoppstartet(tilfeller) || harVurderMottarYtelse(tilfeller)) &&
  tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON);

const harLonnsendringNyOppstartetFLOgATFLISammeOrg = (tilfeller: string[]): boolean =>
  harLonnsendringOgNyoppstartet(tilfeller) &&
  tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON);

export const erATFLSpesialtilfelle = (tilfeller: string[]): boolean =>
  harLonnsendringNyOppstartetFLOgATFLISammeOrg(tilfeller);

export const erATFLSpesialtilfelleEllerVurderMottarYtelse = (tilfeller: string[]): boolean =>
  erATFLSpesialtilfelle(tilfeller) || harVurderMottarYtelse(tilfeller);

export const harIkkeATFLSameOrg = (tilfeller: string[]): boolean =>
  !tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON);

export const harFastsettATFLInntektTilfelleUtenomBesteberegning = (tilfeller: string[]): boolean =>
  tilfeller.some(
    tilfelle =>
      vurderOgFastsettATFLTilfeller.some(t => t === tilfelle) && !besteberegningTilfeller.some(t => t === tilfelle),
  );
