/**
 * Midlertidig håndskrevet type for refusjonspanelet (TFP-7267).
 *
 * Speiler datatypene i @navikt/ft-fakta-refusjon (v1.1.1): RefusjonsAndel/Refusjonsperiode.
 * fp-sak eksponerer refusjon-lenken og skal returnere denne strukturen.
 *
 * Erstatt med generert type fra fpsak.gen.ts når fp-sak har eksponert kontrakten
 * (kjør `yarn generate`) og aliaser den til `Refusjon` i src/index.ts.
 */

export type RefusjonKilde = 'IM' | 'SAKSBEHANDLER';

export type RefusjonUtfall = 'INNVILGET' | 'AVSLÅTT' | 'REDUSERT';

export type RefusjonUtfallÅrsak = 'AVTALT_MED_ARBEIDSGIVER' | 'KONKURS' | 'UTMELDT';

export type Refusjonsperiode = {
  fom: string;
  tom: string;
  refusjonsbeløpPrMnd: number;
  fristForInnsendingAvRefusjonskrav: string;
  tidligsteMuligeDatoMedRefusjonEtterFrist: string;
  datoForInnsendtEllerEndretIM: string;
  utfall?: RefusjonUtfall;
  utfallÅrsak?: RefusjonUtfallÅrsak;
  utfallBegrunnelse?: string;
};

export type Refusjonsandel = {
  arbeidsgiverIdent: string;
  kilde: RefusjonKilde;
  refusjonsperioder: Refusjonsperiode[];
};

export type Refusjon = {
  refusjonsandeler: Refusjonsandel[];
};
