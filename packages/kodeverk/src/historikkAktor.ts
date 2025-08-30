import type { foreldrepenger_behandlingslager_behandling_historikk_HistorikkAktør } from '@navikt/fp-types';

export enum HistorikkAktorEnum {
  BESLUTTER = 'BESL',
  SAKSBEHANDLER = 'SBH',
  SOKER = 'SOKER',
  ARBEIDSGIVER = 'ARBEIDSGIVER',
  VEDTAKSLOSNINGEN = 'VL',
}

export type HistorikkAktor = foreldrepenger_behandlingslager_behandling_historikk_HistorikkAktør;
