import type { AlleKodeverkLos } from '@navikt/fp-types';

export const alleKodeverkLos: AlleKodeverkLos = {
  BehandlingType: [
    {
      kode: 'BT-002',
      navn: 'Førstegangsbehandling',
    },
    {
      kode: 'BT-003',
      navn: 'Klage',
    },
    {
      kode: 'BT-004',
      navn: 'Revurdering',
    },
    {
      kode: 'BT-006',
      navn: 'Innsyn',
    },
    {
      kode: 'BT-007',
      navn: 'Tilbakebetaling',
    },
    {
      kode: 'BT-008',
      navn: 'Anke',
    },
    {
      kode: 'BT-009',
      navn: 'Tilbakebetaling revurdering',
    },
  ],
  AndreKriterierType: [
    {
      kode: 'ARBEID_INNTEKT',
      navn: 'Arbeid og inntekt',
    },
    {
      kode: 'BARE_FAR_RETT',
      navn: 'Bare far har rett',
    },
    {
      kode: 'BERØRT_BEHANDLING',
      navn: 'Berørt behandling',
    },
    {
      kode: 'UTLANDSSAK',
      navn: 'Bosatt utland',
    },
    {
      kode: 'DØD',
      navn: 'Død eller dødfødsel',
    },
    {
      kode: 'ENDRINGSSOKNAD',
      navn: 'Endringssøknad',
    },
    {
      kode: 'EØS_SAK',
      navn: 'EØS (bosatt Norge)',
    },
    {
      kode: 'MOR_UKJENT_UTLAND',
      navn: 'Gruppe 2',
    },
    {
      kode: 'HASTER',
      navn: 'Haster',
    },
    {
      kode: 'IKKE_VARSLET',
      navn: 'Ikke varslet',
    },
    {
      kode: 'KLAGE_PÅ_TILBAKEBETALING',
      navn: 'Klage på tilbakebetaling',
    },
    {
      kode: 'KODE7_SAK',
      navn: 'Kode 7',
    },
    {
      kode: 'NYTT_VEDTAK',
      navn: 'Ny stønadsperiode',
    },
    {
      kode: 'OVER_FIRE_RETTSGEBYR',
      navn: 'Over 4 rettsgebyr',
    },
    {
      kode: 'PLEIEPENGER',
      navn: 'Pleiepenger',
    },
    {
      kode: 'PRAKSIS_UTSETTELSE',
      navn: 'Praksis utsettelse',
    },
    {
      kode: 'PAPIRSOKNAD',
      navn: 'Registrer papirsøknad',
    },
    {
      kode: 'RETURNERT_FRA_BESLUTTER',
      navn: 'Returnert fra beslutter',
    },
    {
      kode: 'REVURDERING_INNTEKTSMELDING',
      navn: 'Revurdering inntektsmelding',
    },
    {
      kode: 'SAMMENSATT_KONTROLL',
      navn: 'Sammensatt kontroll',
    },
    {
      kode: 'NÆRING',
      navn: 'Selvstendig næringsdrivende',
    },
    {
      kode: 'TERMINBEKREFTELSE',
      navn: 'Terminbekreftelse',
    },
    {
      kode: 'TIL_BESLUTTER',
      navn: 'Til beslutter',
    },
    {
      kode: 'UTBETALING_TIL_BRUKER',
      navn: 'Utbetaling til bruker',
    },
    {
      kode: 'UTSATT_START',
      navn: 'Utsatt start',
    },
    {
      kode: 'VURDER_EØS_OPPTJENING',
      navn: 'Vurder behov for SED',
    },
    {
      kode: 'VURDER_FARESIGNALER',
      navn: 'Vurder faresignaler',
    },
    {
      kode: 'VURDER_FORMKRAV',
      navn: 'Vurder formkrav',
    },
    {
      kode: 'VURDER_SYKDOM',
      navn: 'Vurder sykdom',
    },
  ],
  OppgaveBehandlingStatus: [
    {
      kode: 'PÅ_VENT',
      navn: 'På vent',
    },
    {
      kode: 'FERDIG',
      navn: 'Ferdig',
    },
    {
      kode: 'TIL_BESLUTTER',
      navn: 'Til beslutter',
    },
    {
      kode: 'RETURNERT_FRA_BESLUTTER',
      navn: 'Returnert fra beslutter',
    },
    {
      kode: 'UNDER_ARBEID',
      navn: 'Under arbeid',
    },
  ],
  FagsakYtelseType: [
    {
      kode: 'ES',
      navn: 'Engangsstønad',
    },
    {
      kode: 'FP',
      navn: 'Foreldrepenger',
    },
    {
      kode: 'SVP',
      navn: 'Svangerskapspenger',
    },
  ],
  FagsakStatus: [
    {
      kode: 'OPPR',
      navn: 'Opprettet',
    },
    {
      kode: 'UBEH',
      navn: 'Under behandling',
    },
    {
      kode: 'LOP',
      navn: 'Løpende',
    },
    {
      kode: 'AVSLU',
      navn: 'Avsluttet',
    },
  ],
  BehandlingVenteStatus: [
    {
      kode: 'PÅ_VENT',
      navn: 'På vent',
    },
    {
      kode: 'IKKE_PÅ_VENT',
      navn: 'Ikke på vent',
    },
  ],
  KøSortering: [
    {
      kode: 'BEHFRIST',
      navn: 'Dato for behandlingsfrist',
    },
    {
      kode: 'OPPRBEH',
      navn: 'Dato for opprettelse av behandling',
    },
    {
      kode: 'FORSTONAD',
      navn: 'Dato for første stønadsdag',
    },
    {
      kode: 'FORSTONAD_SYNK',
      navn: 'Dato for første stønadsdag synkende',
      felttype: 'DATO',
      feltkategori: 'UNIVERSAL',
    },
    {
      kode: 'BELOP',
      navn: 'Feilutbetalt beløp',
    },
    {
      kode: 'FEILUTBETALINGSTART',
      navn: 'Dato for første feilutbetaling',
    },
  ],
};
