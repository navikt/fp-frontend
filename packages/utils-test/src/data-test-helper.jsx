export const withoutRestActions = (actions) => actions.filter((a) => !a.type.match(/^@@REST/));

export const ignoreRestErrors = (e) => (e.config && e.response ? e : Promise.reject(e));

export const dummyFagsak = (saksnummer = 12345) => ({
  saksnummer,
  sakstype: { kode: 'ES', navn: 'test' },
  status: { kode: 'OPPR', navn: 'test' },
  barnFodt: '10.10.2017',
  dekningsgrad: 100,
  antallBarn: 1,
  person: {
    navn: 'Espen',
    alder: 38,
    personnummer: '123456789',
    erKvinne: true,
  },
  opprettet: '10.10.2017',
  skalBehandlesAvInfotrygd: false,
});

export const dummyBehandling = (id = 67890) => ({
  id,
  versjon: 1,
  type: { kode: 'test', navn: 'test' },
  status: { kode: 'test', navn: 'test' },
  fagsakId: 0,
  opprettet: 'test',
});
