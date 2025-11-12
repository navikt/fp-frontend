import type { Oppgave } from '@navikt/fp-los-saksbehandler';

export const oppgaverForFagsaker: Oppgave[] = [
  {
    id: 46567,
    saksnummer: '1',
    navn: 'Kristine Kalv',
    system: 'FPSAK',
    personnummer: '21487132273',
    behandlingstype: 'BT-002',
    fagsakYtelseType: 'FP',
    erTilSaksbehandling: true,
    opprettetTidspunkt: '2025-09-15T11:36:28.579',
    behandlingsfrist: '2025-10-27T00:00:00',
    behandlingId: 'a47091ce-638c-403a-8ef9-b4419b4d4313',
    andreKriterier: ['UTBETALING_TIL_BRUKER'],
    reservasjonStatus: {
      erReservert: true,
      reservertTilTidspunkt: '2025-11-12T21:49:56.181',
      erReservertAvInnloggetBruker: true,
      reservertAvUid: 'S123456',
      reservertAvNavn: 'Sara Saksbehandler',
      flyttetReservasjon: null,
    },
  },
];
