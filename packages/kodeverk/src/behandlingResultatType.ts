const behandlingResultatType = {
  ANKE_AVVIST: 'ANKE_AVVIST',
  ANKE_DELVIS_MEDHOLD: 'ANKE_DELVIS_MEDHOLD',
  ANKE_HJEMSENDE_UTEN_OPPHEV: 'ANKE_HJEMSENDE_UTEN_OPPHEV',
  ANKE_MEDHOLD: 'ANKE_MEDHOLD',
  ANKE_OMGJORT_UGUNST: 'ANKE_OMGJORT_UGUNST',
  ANKE_OPPHEVE_OG_HJEMSENDE: 'ANKE_OPPHEVE_OG_HJEMSENDE',
  ANKE_YTELSESVEDTAK_STADFESTET: 'ANKE_YTELSESVEDTAK_STADFESTET',
  AVSLATT: 'AVSLÅTT',
  FORELDREPENGER_ENDRET: 'FORELDREPENGER_ENDRET',
  FORELDREPENGER_SENERE: 'FORELDREPENGER_SENERE',
  HENLAGT_SOKNAD_TRUKKET: 'HENLAGT_SØKNAD_TRUKKET',
  HENLAGT_ANKE_TRUKKET: 'HENLAGT_ANKE_TRUKKET',
  HENLAGT_BRUKER_DOD: 'HENLAGT_BRUKER_DØD',
  HENLAGT_FEILOPPRETTET: 'HENLAGT_FEILOPPRETTET',
  HENLAGT_INNSYN_TRUKKET: 'HENLAGT_INNSYN_TRUKKET',
  HENLAGT_KLAGE_TRUKKET: 'HENLAGT_KLAGE_TRUKKET',
  HENLAGT_SOKNAD_MANGLER: 'HENLAGT_SØKNAD_MANGLER',
  HJEMSENDE_UTEN_OPPHEVE: 'HJEMSENDE_UTEN_OPPHEVE',
  IKKE_FASTSATT: 'IKKE_FASTSATT',
  INGEN_ENDRING: 'INGEN_ENDRING',
  INNSYN_INNVILGET: 'INNSYN_INNVILGET',
  INNSYN_DELVIS_INNVILGET: 'INNSYN_DELVIS_INNVILGET',
  INNSYN_AVVIST: 'INNSYN_AVVIST',
  INNVILGET: 'INNVILGET',
  KLAGE_AVVIST: 'KLAGE_AVVIST',
  KLAGE_MEDHOLD: 'KLAGE_MEDHOLD',
  KLAGE_DELVIS_MEDHOLD: 'KLAGE_DELVIS_MEDHOLD',
  KLAGE_OMGJORT_UGUNST: 'KLAGE_OMGJORT_UGUNST',
  KLAGE_YTELSESVEDTAK_OPPHEVET: 'KLAGE_YTELSESVEDTAK_OPPHEVET',
  KLAGE_YTELSESVEDTAK_STADFESTET: 'KLAGE_YTELSESVEDTAK_STADFESTET',
  KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET: 'KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET',
  MANGLER_BEREGNINGSREGLER: 'MANGLER_BEREGNINGSREGLER',
  MERGET_OG_HENLAGT: 'MERGET_OG_HENLAGT',
  OPPHOR: 'OPPHØR',
};

const innvilgetKlageResultatTyper = [
  behandlingResultatType.KLAGE_MEDHOLD,
  behandlingResultatType.KLAGE_DELVIS_MEDHOLD,
  behandlingResultatType.KLAGE_OMGJORT_UGUNST,
  behandlingResultatType.KLAGE_YTELSESVEDTAK_OPPHEVET,
  behandlingResultatType.KLAGE_YTELSESVEDTAK_STADFESTET,
  behandlingResultatType.KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET,
  behandlingResultatType.HJEMSENDE_UTEN_OPPHEVE,
];

const klageOmgjortResultatTyper = [
  behandlingResultatType.KLAGE_MEDHOLD,
  behandlingResultatType.KLAGE_DELVIS_MEDHOLD,
  behandlingResultatType.KLAGE_OMGJORT_UGUNST,
];

const innvilgetRevurderingFPResultatTyper = [
  behandlingResultatType.FORELDREPENGER_ENDRET,
  behandlingResultatType.FORELDREPENGER_SENERE,
  behandlingResultatType.INGEN_ENDRING,
];

export const isInnvilget = (behandlingResultatTypeKode: string): boolean =>
  innvilgetKlageResultatTyper.includes(behandlingResultatTypeKode) ||
  innvilgetRevurderingFPResultatTyper.includes(behandlingResultatTypeKode) ||
  behandlingResultatTypeKode === behandlingResultatType.INNVILGET;

export const isAvslag = (behandlingResultatTypeKode: string): boolean =>
  behandlingResultatTypeKode === behandlingResultatType.AVSLATT ||
  behandlingResultatTypeKode === behandlingResultatType.KLAGE_AVVIST ||
  behandlingResultatTypeKode === behandlingResultatType.KLAGE_YTELSESVEDTAK_STADFESTET;

export const isOpphor = (behandlingResultatTypeKode: string): boolean =>
  behandlingResultatTypeKode === behandlingResultatType.OPPHOR;

export const isKlageOmgjort = (behandlingResultatTypeKode: string): boolean =>
  klageOmgjortResultatTyper.includes(behandlingResultatTypeKode);

export const isKlageAvvist = (behandlingResultatTypeKode?: string): boolean =>
  behandlingResultatTypeKode === behandlingResultatType.KLAGE_AVVIST;

export default behandlingResultatType;
