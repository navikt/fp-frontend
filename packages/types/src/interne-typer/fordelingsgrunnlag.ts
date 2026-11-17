/**
 * Midlertidig håndskrevet type for fordelingsgrunnlag (TFP-7267).
 *
 * Speiler datatypene i @navikt/ft-fakta-refusjon (v1.1.4): RefusjonsandelDto/RefusjonsperiodeDto.
 * fp-sak returnerer fordelingsgrunnlaget via fordelingsgrunnlag-lenken.
 *
 * Erstatt med generert type fra fpsak.gen.ts når fp-sak har eksponert kontrakten
 * (kjør `yarn generate`) og eksporter den som `Fordelingsgrunnlag` fra @navikt/fp-types.
 */

export type RefusjonKilde = 'INNTEKTSMELDING' | 'SAKSBEHANDLER';

export type RefusjonUtfall = 'INNVILGET' | 'AVSLÅTT' | 'REDUSERT';

export type RefusjonUtfallÅrsak = 'IKKE_INNENFOR_FRIST' | 'UTMELDT' | 'ALLEREDE_DIREKTE_UTBETALT';

export type Refusjonsperiode = {
  fom: string;
  tom: string;
  refusjonPrMnd: number;
  utfall?: RefusjonUtfall;
  utfallÅrsak?: RefusjonUtfallÅrsak;
  utfallBegrunnelse?: string;
};

export type Refusjonsandel = {
  arbeidsgiverIdent: string;
  arbeidsforholdId?: string;
  journalpostId?: string;
  kilde: RefusjonKilde;
  refusjonsperioder: Refusjonsperiode[];
};

export type Fordelingsgrunnlag = {
  refusjonsandeler: Refusjonsandel[];
};
