const behandlingResultatType = {
  IKKE_FASTSATT: 'IKKE_FASTSATT',
  INNVILGET: 'INNVILGET',
  AVSLATT: 'AVSLÅTT',
  OPPHOR: 'OPPHØR',
  HENLAGT_SOKNAD_TRUKKET: 'HENLAGT_SØKNAD_TRUKKET',
  KLAGE_AVVIST: 'KLAGE_AVVIST',
  KLAGE_MEDHOLD: 'KLAGE_MEDHOLD',
  KLAGE_DELVIS_MEDHOLD: 'KLAGE_DELVIS_MEDHOLD',
  KLAGE_OMGJORT_UGUNST: 'KLAGE_OMGJORT_UGUNST',
  KLAGE_YTELSESVEDTAK_OPPHEVET: 'KLAGE_YTELSESVEDTAK_OPPHEVET',
  KLAGE_YTELSESVEDTAK_STADFESTET: 'KLAGE_YTELSESVEDTAK_STADFESTET',
  KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET: 'KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET',
  HJEMSENDE_UTEN_OPPHEVE: 'HJEMSENDE_UTEN_OPPHEVE',
  HENLAGT_KLAGE_TRUKKET: 'HENLAGT_KLAGE_TRUKKET',
  HENLAGT_ANKE_TRUKKET: 'HENLAGT_ANKE_TRUKKET',
  HENLAGT_INNSYN_TRUKKET: 'HENLAGT_INNSYN_TRUKKET',
  HENLAGT_FEILOPPRETTET: 'HENLAGT_FEILOPPRETTET',
  HENLAGT_FEILOPPRETTET_MED_BREV: 'HENLAGT_FEILOPPRETTET_MED_BREV',
  HENLAGT_FEILOPPRETTET_UTEN_BREV: 'HENLAGT_FEILOPPRETTET_UTEN_BREV',
  HENLAGT_BRUKER_DOD: 'HENLAGT_BRUKER_DØD',
  FORELDREPENGER_ENDRET: 'FORELDREPENGER_ENDRET',
  FORELDREPENGER_SENERE: 'FORELDREPENGER_SENERE',
  INGEN_ENDRING: 'INGEN_ENDRING',
  MANGLER_BEREGNINGSREGLER: 'MANGLER_BEREGNINGSREGLER',
  HENLAGT_SOKNAD_MANGLER: 'HENLAGT_SØKNAD_MANGLER',
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

const innvilgetRevurderingFPResultatTyper = [behandlingResultatType.FORELDREPENGER_ENDRET,
  behandlingResultatType.FORELDREPENGER_SENERE,
  behandlingResultatType.INGEN_ENDRING];

export const isInnvilget = (behandlingResultatTypeKode: string): boolean => innvilgetKlageResultatTyper.includes(behandlingResultatTypeKode)
  || innvilgetRevurderingFPResultatTyper.includes(behandlingResultatTypeKode)
  || behandlingResultatTypeKode === behandlingResultatType.INNVILGET;

export const isAvslag = (behandlingResultatTypeKode: string): boolean => behandlingResultatTypeKode === behandlingResultatType.AVSLATT
  || behandlingResultatTypeKode === behandlingResultatType.KLAGE_AVVIST
  || behandlingResultatTypeKode === behandlingResultatType.KLAGE_YTELSESVEDTAK_STADFESTET;

export const isOpphor = (behandlingResultatTypeKode: string): boolean => behandlingResultatTypeKode === behandlingResultatType.OPPHOR;

export const isKlageOmgjort = (behandlingResultatTypeKode: string): boolean => klageOmgjortResultatTyper.includes(behandlingResultatTypeKode);

export default behandlingResultatType;
