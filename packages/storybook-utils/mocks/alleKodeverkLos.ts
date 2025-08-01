// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import type { AlleKodeverkLos } from '@navikt/fp-types';

export const alleKodeverkLos: AlleKodeverkLos = {
  BehandlingType: [
    {
      kode: 'BT-002',
      kodeverk: 'BEHANDLING_TYPE',
      navn: 'Førstegangsbehandling',
    },
    {
      kode: 'BT-003',
      kodeverk: 'BEHANDLING_TYPE',
      navn: 'Klage',
    },
    {
      kode: 'BT-004',
      kodeverk: 'BEHANDLING_TYPE',
      navn: 'Revurdering',
    },
    {
      kode: 'BT-006',
      kodeverk: 'BEHANDLING_TYPE',
      navn: 'Innsyn',
    },
    {
      kode: 'BT-007',
      kodeverk: 'BEHANDLING_TYPE',
      navn: 'Tilbakebetaling',
    },
    {
      kode: 'BT-008',
      kodeverk: 'BEHANDLING_TYPE',
      navn: 'Anke',
    },
    {
      kode: 'BT-009',
      kodeverk: 'BEHANDLING_TYPE',
      navn: 'Tilbakebetaling revurdering',
    },
  ],
  AndreKriterierType: [
    {
      kode: 'ARBEID_INNTEKT',
      kodeverk: 'ANDRE_KRITERIER',
      navn: 'Arbeid og inntekt',
    },
    {
      kode: 'BARE_FAR_RETT',
      kodeverk: 'ANDRE_KRITERIER',
      navn: 'Bare far har rett',
    },
    {
      kode: 'BERØRT_BEHANDLING',
      kodeverk: 'ANDRE_KRITERIER',
      navn: 'Berørt behandling',
    },
    {
      kode: 'UTLANDSSAK',
      kodeverk: 'ANDRE_KRITERIER',
      navn: 'Bosatt utland',
    },
    {
      kode: 'DØD',
      kodeverk: 'ANDRE_KRITERIER',
      navn: 'Død eller dødfødsel',
    },
    {
      kode: 'ENDRINGSSOKNAD',
      kodeverk: 'ANDRE_KRITERIER',
      navn: 'Endringssøknad',
    },
    {
      kode: 'EØS_SAK',
      kodeverk: 'ANDRE_KRITERIER',
      navn: 'EØS (bosatt Norge)',
    },
    {
      kode: 'MOR_UKJENT_UTLAND',
      kodeverk: 'ANDRE_KRITERIER',
      navn: 'Gruppe 2',
    },
    {
      kode: 'KLAGE_PÅ_TILBAKEBETALING',
      kodeverk: 'ANDRE_KRITERIER',
      navn: 'Klage på tilbakebetaling',
    },
    {
      kode: 'KODE7_SAK',
      kodeverk: 'ANDRE_KRITERIER',
      navn: 'Kode 7',
    },
    {
      kode: 'PLEIEPENGER',
      kodeverk: 'ANDRE_KRITERIER',
      navn: 'Pleiepenger',
    },
    {
      kode: 'PRAKSIS_UTSETTELSE',
      kodeverk: 'ANDRE_KRITERIER',
      navn: 'Praksis utsettelse',
    },
    {
      kode: 'PAPIRSOKNAD',
      kodeverk: 'ANDRE_KRITERIER',
      navn: 'Registrer papirsøknad',
    },
    {
      kode: 'REVURDERING_INNTEKTSMELDING',
      kodeverk: 'ANDRE_KRITERIER',
      navn: 'Revurdering inntektsmelding',
    },
    {
      kode: 'SAMMENSATT_KONTROLL',
      kodeverk: 'ANDRE_KRITERIER',
      navn: 'Sammensatt kontroll',
    },
    {
      kode: 'NÆRING',
      kodeverk: 'ANDRE_KRITERIER',
      navn: 'Selvstendig næringsdrivende',
    },
    {
      kode: 'TERMINBEKREFTELSE',
      kodeverk: 'ANDRE_KRITERIER',
      navn: 'Terminbekreftelse',
    },
    {
      kode: 'TIL_BESLUTTER',
      kodeverk: 'ANDRE_KRITERIER',
      navn: 'Til beslutter',
    },
    {
      kode: 'UTBETALING_TIL_BRUKER',
      kodeverk: 'ANDRE_KRITERIER',
      navn: 'Utbetaling til bruker',
    },
    {
      kode: 'VURDER_EØS_OPPTJENING',
      kodeverk: 'ANDRE_KRITERIER',
      navn: 'Vurder behov for SED',
    },
    {
      kode: 'VURDER_FARESIGNALER',
      kodeverk: 'ANDRE_KRITERIER',
      navn: 'Vurder faresignaler',
    },
    {
      kode: 'VURDER_FORMKRAV',
      kodeverk: 'ANDRE_KRITERIER',
      navn: 'Vurder formkrav',
    },
    {
      kode: 'VURDER_SYKDOM',
      kodeverk: 'ANDRE_KRITERIER',
      navn: 'Vurder sykdom',
    },
    {
      kode: 'IKKE_VARSLET',
      kodeverk: 'ANDRE_KRITERIER',
      navn: 'Ikke varslet',
    },
    {
      kode: 'OVER_FIRE_RETTSGEBYR',
      kodeverk: 'ANDRE_KRITERIER',
      navn: 'Over 4 rettsgebyr',
    },
  ],
  FagsakYtelseType: [
    {
      kode: 'ES',
      kodeverk: 'FAGSAK_YTELSE_TYPE',
      navn: 'Engangsstønad',
    },
    {
      kode: 'FP',
      kodeverk: 'FAGSAK_YTELSE_TYPE',
      navn: 'Foreldrepenger',
    },
    {
      kode: 'SVP',
      kodeverk: 'FAGSAK_YTELSE_TYPE',
      navn: 'Svangerskapspenger',
    },
  ],
  FagsakStatus: [
    {
      kode: 'OPPR',
      kodeverk: 'FAGSAK_STATUS',
      navn: 'Opprettet',
    },
    {
      kode: 'UBEH',
      kodeverk: 'FAGSAK_STATUS',
      navn: 'Under behandling',
    },
    {
      kode: 'LOP',
      kodeverk: 'FAGSAK_STATUS',
      navn: 'Løpende',
    },
    {
      kode: 'AVSLU',
      kodeverk: 'FAGSAK_STATUS',
      navn: 'Avsluttet',
    },
  ],
  BehandlingVenteStatus: [
    {
      kode: 'PÅ_VENT',
      kodeverk: 'BEHANDLING_VENTE_STATUS',
      navn: 'På vent',
    },
    {
      kode: 'IKKE_PÅ_VENT',
      kodeverk: 'BEHANDLING_VENTE_STATUS',
      navn: 'Ikke på vent',
    },
  ],
  KøSortering: [
    {
      kode: 'BEHFRIST',
      kodeverk: 'KO_SORTERING',
      navn: 'Dato for behandlingsfrist',
      felttype: 'DATO',
      feltkategori: 'UNIVERSAL',
    },
    {
      kode: 'OPPRBEH',
      kodeverk: 'KO_SORTERING',
      navn: 'Dato for opprettelse av behandling',
      felttype: 'DATO',
      feltkategori: 'UNIVERSAL',
    },
    {
      kode: 'FORSTONAD',
      kodeverk: 'KO_SORTERING',
      navn: 'Dato for første stønadsdag',
      felttype: 'DATO',
      feltkategori: 'UNIVERSAL',
    },
    {
      kode: 'BELOP',
      kodeverk: 'KO_SORTERING',
      navn: 'Feilutbetalt beløp',
      felttype: 'HELTALL',
      feltkategori: 'TILBAKEKREVING',
    },
    {
      kode: 'FEILUTBETALINGSTART',
      kodeverk: 'KO_SORTERING',
      navn: 'Dato for første feilutbetaling',
      felttype: 'DATO',
      feltkategori: 'TILBAKEKREVING',
    },
  ],
};
