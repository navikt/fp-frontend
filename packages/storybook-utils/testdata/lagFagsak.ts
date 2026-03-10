import type { Fagsak } from '@navikt/fp-types';

export const lagFagsak = (overrides?: Partial<Fagsak>): Fagsak => ({
  aktørId: '9999999999999',
  behandlingTypeKanOpprettes: [],
  behandlinger: [],
  bruker: {
    fødselsdato: '1979-01-01',
    fødselsnummer: '12345678901',
    kjønn: 'K',
    navn: 'Søker Søkersen',
    språkkode: 'NB',
  },
  brukerManglerAdresse: false,
  dekningsgrad: 100,
  fagsakMarkeringer: [],
  fagsakYtelseType: 'FP',
  harVergeIÅpenBehandling: false,
  historikkinnslag: [],
  kontrollResultat: { kontrollresultat: 'IKKE_KLASSIFISERT' },
  notater: [],
  relasjonsRolleType: 'MORA',
  sakSkalTilInfotrygd: false,
  saksnummer: '12345',
  status: 'UBEH',
  ...overrides,
});
