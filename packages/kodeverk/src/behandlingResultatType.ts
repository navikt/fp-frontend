export enum BehandlingResultatType {
  IKKE_FASTSATT = 'IKKE_FASTSATT',
  INNVILGET = 'INNVILGET',
  AVSLATT = 'AVSLÅTT',
  OPPHOR = 'OPPHØR',
  HENLAGT_SOKNAD_TRUKKET = 'HENLAGT_SØKNAD_TRUKKET',
  KLAGE_AVVIST = 'KLAGE_AVVIST',
  KLAGE_MEDHOLD = 'KLAGE_MEDHOLD',
  KLAGE_DELVIS_MEDHOLD = 'KLAGE_DELVIS_MEDHOLD',
  KLAGE_OMGJORT_UGUNST = 'KLAGE_OMGJORT_UGUNST',
  KLAGE_YTELSESVEDTAK_OPPHEVET = 'KLAGE_YTELSESVEDTAK_OPPHEVET',
  KLAGE_YTELSESVEDTAK_STADFESTET = 'KLAGE_YTELSESVEDTAK_STADFESTET',
  KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET = 'KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET',
  HJEMSENDE_UTEN_OPPHEVE = 'HJEMSENDE_UTEN_OPPHEVE',
  HENLAGT_KLAGE_TRUKKET = 'HENLAGT_KLAGE_TRUKKET',
  HENLAGT_ANKE_TRUKKET = 'HENLAGT_ANKE_TRUKKET',
  HENLAGT_FEILOPPRETTET = 'HENLAGT_FEILOPPRETTET',
  HENLAGT_FEILOPPRETTET_MED_BREV = 'HENLAGT_FEILOPPRETTET_MED_BREV',
  HENLAGT_FEILOPPRETTET_UTEN_BREV = 'HENLAGT_FEILOPPRETTET_UTEN_BREV',
  HENLAGT_BRUKER_DOD = 'HENLAGT_BRUKER_DØD',
  FORELDREPENGER_ENDRET = 'FORELDREPENGER_ENDRET',
  FORELDREPENGER_SENERE = 'FORELDREPENGER_SENERE',
  INGEN_ENDRING = 'INGEN_ENDRING',
  MANGLER_BEREGNINGSREGLER = 'MANGLER_BEREGNINGSREGLER',
  HENLAGT_SOKNAD_MANGLER = 'HENLAGT_SØKNAD_MANGLER',
  INNSYN_INNVILGET = 'INNSYN_INNVILGET',
  INNSYN_DELVIS_INNVILGET = 'INNSYN_DELVIS_INNVILGET',
  INNSYN_AVVIST = 'INNSYN_AVVIST',
  HENLAGT_INNSYN_TRUKKET = 'HENLAGT_INNSYN_TRUKKET',
}

const innvilgetKlageResultatTyper = [
  BehandlingResultatType.KLAGE_MEDHOLD,
  BehandlingResultatType.KLAGE_DELVIS_MEDHOLD,
  BehandlingResultatType.KLAGE_OMGJORT_UGUNST,
  BehandlingResultatType.KLAGE_YTELSESVEDTAK_OPPHEVET,
  BehandlingResultatType.KLAGE_YTELSESVEDTAK_STADFESTET,
  BehandlingResultatType.KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET,
  BehandlingResultatType.HJEMSENDE_UTEN_OPPHEVE,
];

const klageOmgjortResultatTyper = [
  BehandlingResultatType.KLAGE_MEDHOLD,
  BehandlingResultatType.KLAGE_DELVIS_MEDHOLD,
  BehandlingResultatType.KLAGE_OMGJORT_UGUNST,
];

const innvilgetRevurderingFPResultatTyper = [
  BehandlingResultatType.FORELDREPENGER_ENDRET,
  BehandlingResultatType.FORELDREPENGER_SENERE,
  BehandlingResultatType.INGEN_ENDRING,
];

export const isInnvilget = (behandlingResultatTypeKode: string): boolean =>
  innvilgetKlageResultatTyper.some(t => t === behandlingResultatTypeKode) ||
  innvilgetRevurderingFPResultatTyper.some(t => t === behandlingResultatTypeKode) ||
  behandlingResultatTypeKode === BehandlingResultatType.INNVILGET;

export const isAvslag = (behandlingResultatTypeKode: string): boolean =>
  behandlingResultatTypeKode === BehandlingResultatType.AVSLATT ||
  behandlingResultatTypeKode === BehandlingResultatType.KLAGE_AVVIST ||
  behandlingResultatTypeKode === BehandlingResultatType.KLAGE_YTELSESVEDTAK_STADFESTET;

export const isOpphor = (behandlingResultatTypeKode: string): boolean =>
  behandlingResultatTypeKode === BehandlingResultatType.OPPHOR;

export const isKlageOmgjort = (behandlingResultatTypeKode: string): boolean =>
  klageOmgjortResultatTyper.some(t => t === behandlingResultatTypeKode);

export const isKlageAvvist = (behandlingResultatTypeKode?: string): boolean =>
  behandlingResultatTypeKode === BehandlingResultatType.KLAGE_AVVIST;

export default BehandlingResultatType;
