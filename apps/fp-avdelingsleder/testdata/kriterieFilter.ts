import type { AndreKriterierType, KriterieFilterDto } from '@navikt/fp-types';

/**
 * Dette er default kriterier som settes ved nyopprettet saksliste
 */
export const kriterieFilter: Record<AndreKriterierType, KriterieFilterDto> = {
  RETURNERT_FRA_BESLUTTER: {
    andreKriterierType: 'RETURNERT_FRA_BESLUTTER',
    valgbarForBehandlingTyper: ['BT-002', 'BT-003', 'BT-004', 'BT-006', 'BT-007', 'BT-008', 'BT-009'],
    valgbarForYtelseTyper: ['ES', 'FP', 'SVP'],
  },
  UTBETALING_TIL_BRUKER: {
    andreKriterierType: 'UTBETALING_TIL_BRUKER',
    valgbarForBehandlingTyper: ['BT-004', 'BT-002'],
    valgbarForYtelseTyper: ['SVP', 'FP'],
  },
  NÆRING: {
    andreKriterierType: 'NÆRING',
    valgbarForBehandlingTyper: ['BT-002', 'BT-003', 'BT-004', 'BT-006', 'BT-007', 'BT-008', 'BT-009'],
    valgbarForYtelseTyper: ['SVP', 'FP'],
  },
  KODE7_SAK: {
    andreKriterierType: 'KODE7_SAK',
    valgbarForBehandlingTyper: ['BT-002', 'BT-003', 'BT-004', 'BT-006', 'BT-007', 'BT-008', 'BT-009'],
    valgbarForYtelseTyper: ['ES', 'FP', 'SVP'],
  },
  UTSATT_START: {
    andreKriterierType: 'UTSATT_START',
    valgbarForBehandlingTyper: ['BT-004'],
    valgbarForYtelseTyper: ['FP'],
  },
  KLAGE_PÅ_TILBAKEBETALING: {
    andreKriterierType: 'KLAGE_PÅ_TILBAKEBETALING',
    valgbarForBehandlingTyper: ['BT-003'],
    valgbarForYtelseTyper: ['ES', 'FP', 'SVP'],
  },
  REVURDERING_INNTEKTSMELDING: {
    andreKriterierType: 'REVURDERING_INNTEKTSMELDING',
    valgbarForBehandlingTyper: ['BT-004'],
    valgbarForYtelseTyper: ['SVP', 'FP'],
  },
  VURDER_FARESIGNALER: {
    andreKriterierType: 'VURDER_FARESIGNALER',
    valgbarForBehandlingTyper: ['BT-002'],
    valgbarForYtelseTyper: ['ES', 'FP', 'SVP'],
  },
  EØS_SAK: {
    andreKriterierType: 'EØS_SAK',
    valgbarForBehandlingTyper: ['BT-002', 'BT-003', 'BT-004', 'BT-006', 'BT-007', 'BT-008', 'BT-009'],
    valgbarForYtelseTyper: ['ES', 'FP', 'SVP'],
  },
  BARE_FAR_RETT: {
    andreKriterierType: 'BARE_FAR_RETT',
    valgbarForBehandlingTyper: ['BT-004', 'BT-002'],
    valgbarForYtelseTyper: ['FP'],
  },
  PRAKSIS_UTSETTELSE: {
    andreKriterierType: 'PRAKSIS_UTSETTELSE',
    valgbarForBehandlingTyper: ['BT-004', 'BT-002'],
    valgbarForYtelseTyper: ['FP'],
  },
  SAMMENSATT_KONTROLL: {
    andreKriterierType: 'SAMMENSATT_KONTROLL',
    valgbarForBehandlingTyper: ['BT-002', 'BT-003', 'BT-004', 'BT-006', 'BT-007', 'BT-008', 'BT-009'],
    valgbarForYtelseTyper: ['ES', 'FP', 'SVP'],
  },
  PLEIEPENGER: {
    andreKriterierType: 'PLEIEPENGER',
    valgbarForBehandlingTyper: ['BT-004'],
    valgbarForYtelseTyper: ['FP'],
  },
  UTLANDSSAK: {
    andreKriterierType: 'UTLANDSSAK',
    valgbarForBehandlingTyper: ['BT-002', 'BT-003', 'BT-004', 'BT-006', 'BT-007', 'BT-008', 'BT-009'],
    valgbarForYtelseTyper: ['ES', 'FP', 'SVP'],
  },
  HASTER: {
    andreKriterierType: 'HASTER',
    valgbarForBehandlingTyper: ['BT-002', 'BT-003', 'BT-004', 'BT-006', 'BT-007', 'BT-008', 'BT-009'],
    valgbarForYtelseTyper: ['ES', 'FP', 'SVP'],
  },
  ENDRINGSSOKNAD: {
    andreKriterierType: 'ENDRINGSSOKNAD',
    valgbarForBehandlingTyper: ['BT-004'],
    valgbarForYtelseTyper: ['FP'],
  },
  VURDER_FORMKRAV: {
    andreKriterierType: 'VURDER_FORMKRAV',
    valgbarForBehandlingTyper: ['BT-003'],
    valgbarForYtelseTyper: ['ES', 'FP', 'SVP'],
  },
  DØD: {
    andreKriterierType: 'DØD',
    valgbarForBehandlingTyper: ['BT-002', 'BT-003', 'BT-004', 'BT-006', 'BT-007', 'BT-008', 'BT-009'],
    valgbarForYtelseTyper: ['ES', 'FP', 'SVP'],
  },
  ARBEID_INNTEKT: {
    andreKriterierType: 'ARBEID_INNTEKT',
    valgbarForBehandlingTyper: ['BT-004', 'BT-002'],
    valgbarForYtelseTyper: ['SVP', 'FP'],
  },
  OVER_FIRE_RETTSGEBYR: {
    andreKriterierType: 'OVER_FIRE_RETTSGEBYR',
    valgbarForBehandlingTyper: ['BT-009', 'BT-007'],
    valgbarForYtelseTyper: ['ES', 'FP', 'SVP'],
  },
  VURDER_EØS_OPPTJENING: {
    andreKriterierType: 'VURDER_EØS_OPPTJENING',
    valgbarForBehandlingTyper: ['BT-002'],
    valgbarForYtelseTyper: ['SVP', 'FP'],
  },
  VURDER_SYKDOM: {
    andreKriterierType: 'VURDER_SYKDOM',
    valgbarForBehandlingTyper: ['BT-004', 'BT-002'],
    valgbarForYtelseTyper: ['FP'],
  },
  IKKE_VARSLET: {
    andreKriterierType: 'IKKE_VARSLET',
    valgbarForBehandlingTyper: ['BT-009', 'BT-007'],
    valgbarForYtelseTyper: ['ES', 'FP', 'SVP'],
  },
  BERØRT_BEHANDLING: {
    andreKriterierType: 'BERØRT_BEHANDLING',
    valgbarForBehandlingTyper: ['BT-004'],
    valgbarForYtelseTyper: ['FP'],
  },
  TIL_BESLUTTER: {
    andreKriterierType: 'TIL_BESLUTTER',
    valgbarForBehandlingTyper: ['BT-002', 'BT-003', 'BT-004', 'BT-006', 'BT-007', 'BT-008', 'BT-009'],
    valgbarForYtelseTyper: ['ES', 'FP', 'SVP'],
  },
  NYTT_VEDTAK: {
    andreKriterierType: 'NYTT_VEDTAK',
    valgbarForBehandlingTyper: ['BT-004', 'BT-002'],
    valgbarForYtelseTyper: ['SVP', 'FP'],
  },
  MOR_UKJENT_UTLAND: {
    andreKriterierType: 'MOR_UKJENT_UTLAND',
    valgbarForBehandlingTyper: ['BT-004', 'BT-002'],
    valgbarForYtelseTyper: ['FP'],
  },
  PAPIRSOKNAD: {
    andreKriterierType: 'PAPIRSOKNAD',
    valgbarForBehandlingTyper: ['BT-004', 'BT-002'],
    valgbarForYtelseTyper: ['ES', 'FP', 'SVP'],
  },
  TERMINBEKREFTELSE: {
    andreKriterierType: 'TERMINBEKREFTELSE',
    valgbarForBehandlingTyper: ['BT-004', 'BT-002'],
    valgbarForYtelseTyper: ['FP', 'ES'],
  },
};
