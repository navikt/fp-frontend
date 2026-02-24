import type { BehandlingResultatType } from '@navikt/fp-types';

const innvilgetRevurderingFPResultatTyper = new Set<BehandlingResultatType>([
  'FORELDREPENGER_ENDRET',
  'FORELDREPENGER_SENERE',
  'INGEN_ENDRING',
]);

const innvilgetKlageResultatTyper = new Set<BehandlingResultatType>([
  'KLAGE_MEDHOLD',
  'KLAGE_DELVIS_MEDHOLD',
  'KLAGE_OMGJORT_UGUNST',
  'KLAGE_YTELSESVEDTAK_OPPHEVET',
  'KLAGE_YTELSESVEDTAK_STADFESTET',
  'KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET',
  'HJEMSENDE_UTEN_OPPHEVE',
]);

export const isInnvilget = (behandlingResultatTypeKode: BehandlingResultatType): boolean =>
  innvilgetKlageResultatTyper.has(behandlingResultatTypeKode) ||
  innvilgetRevurderingFPResultatTyper.has(behandlingResultatTypeKode) ||
  behandlingResultatTypeKode === 'INNVILGET';
