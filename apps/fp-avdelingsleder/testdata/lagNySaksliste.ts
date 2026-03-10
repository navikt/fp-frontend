import type { SakslisteDto } from '@navikt/fp-types';

/**
 * Dette er default saksliste ved oppretting av ny saksliste
 */
export const lagNySaksliste = (override: Partial<SakslisteDto>): SakslisteDto => ({
  sakslisteId: 1,
  navn: 'Ny liste',
  sortering: {
    sorteringType: 'BEHFRIST',
    periodefilter: 'FAST_PERIODE',
  },
  behandlingTyper: [],
  fagsakYtelseTyper: [],
  andreKriterie: {
    inkluder: [],
    ekskluder: [
      'SAMMENSATT_KONTROLL',
      'EØS_SAK',
      'UTLANDSSAK',
      'KODE7_SAK',
      'TIL_BESLUTTER',
      'MOR_UKJENT_UTLAND',
      'PAPIRSOKNAD',
    ],
  },
  sorteringTyper: [
    {
      sorteringType: 'BEHFRIST',
      feltType: 'DATO',
    },
    {
      sorteringType: 'OPPRBEH',
      feltType: 'DATO',
    },
    {
      sorteringType: 'FORSTONAD',
      feltType: 'DATO',
    },
    {
      sorteringType: 'FORSTONAD_SYNK',
      feltType: 'DATO',
    },
    {
      sorteringType: 'BELOP',
      feltType: 'HELTALL',
    },
    {
      sorteringType: 'FEILUTBETALINGSTART',
      feltType: 'DATO',
    },
    {
      sorteringType: 'OPPGAVE_OPPRETTET',
      feltType: 'DATO_UTEN_FILTER',
    },
  ],
  saksbehandlere: [],
  ...override,
});
