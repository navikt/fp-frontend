import React from 'react';

import HistorikkSakIndex from '@fpsak-frontend/sak-historikk';
import { Historikkinnslag } from '@fpsak-frontend/types';

import alleKodeverk from '../mocks/alleKodeverk.json';

const history = [{
  behandlingUuid: '999951',
  type: {
    kode: 'NYE_REGOPPLYSNINGER',
    kodeverk: 'HISTORIKKINNSLAG_TYPE',
  },
  aktoer: {
    kode: 'VL',
    kodeverk: 'HISTORIKK_AKTOER',
  },
  kjoenn: {
    kode: '-',
    kodeverk: 'BRUKER_KJOENN',
  },
  opprettetAv: 'Srvengangsstonad',
  opprettetTidspunkt: '2019-09-19T12:16:14.499',
  dokumentLinks: [],
  historikkinnslagDeler: [
    {
      begrunnelse: {
        kode: 'SAKSBEH_START_PA_NYTT',
        kodeverk: 'HISTORIKK_BEGRUNNELSE_TYPE',
      },
      hendelse: {
        navn: {
          kode: 'NYE_REGOPPLYSNINGER',
          kodeverk: 'HISTORIKKINNSLAG_TYPE',
        },
      },
      opplysninger: [],
      endredeFelter: [],
    },
  ],
},
{
  behandlingUuid: '999951',
  type: {
    kode: 'INNSYN_OPPR',
    kodeverk: 'HISTORIKKINNSLAG_TYPE',
  },
  aktoer: {
    kode: 'SBH',
    kodeverk: 'HISTORIKK_AKTOER',
  },
  kjoenn: {
    kode: '-',
    kodeverk: 'BRUKER_KJOENN',
  },
  opprettetAv: 'Z991110',
  opprettetTidspunkt: '2019-09-18T15:25:31.291',
  dokumentLinks: [],
  historikkinnslagDeler: [
    {
      begrunnelseFritekst: 'Krav om innsyn mottatt 18.09.2019',
      hendelse: {
        navn: {
          kode: 'INNSYN_OPPR',
          kodeverk: 'HISTORIKKINNSLAG_TYPE',
        },
      },
      opplysninger: [],
      endredeFelter: [],
    },
  ],
},
{
  behandlingUuid: '999952',
  type: {
    kode: 'BEH_STARTET',
    kodeverk: 'HISTORIKKINNSLAG_TYPE',
  },
  aktoer: {
    kode: 'SOKER',
    kodeverk: 'HISTORIKK_AKTOER',
  },
  kjoenn: {
    kode: 'K',
    kodeverk: 'BRUKER_KJOENN',
  },
  opprettetAv: 'Srvengangsstonad',
  opprettetTidspunkt: '2019-09-18T13:12:48.874',
  dokumentLinks: [
    {
      tag: 'Søknad',
      url: 'http://127.0.0.1:8080/fpsak/api/dokument/hent-dokument?journalpostId=453471722&dokumentId=470153809',
      journalpostId: '453471722',
      dokumentId: '470153809',
      utgått: false,
    },
  ],
  historikkinnslagDeler: [
    {
      hendelse: {
        navn: {
          kode: 'BEH_STARTET',
          kodeverk: 'HISTORIKKINNSLAG_TYPE',
        },
      },
      opplysninger: [],
      endredeFelter: [],
    },
  ],
}] as Historikkinnslag[];

const locationMock = {
  pathname: 'test',
  search: 'test',
  state: {},
  hash: 'test',
};

export default {
  title: 'sak/sak-historikk',
  component: HistorikkSakIndex,
};

export const visHistorikkNårBehandlingIkkeErValgt = () => (
  <div style={{
    width: '600px', backgroundColor: 'white', padding: '30px',
  }}
  >
    <HistorikkSakIndex
      historikkFpSak={history}
      historikkFpTilbake={[]}
      alleKodeverkFpSak={alleKodeverk as any}
      saksnummer="2"
      getBehandlingLocation={() => locationMock}
      createLocationForSkjermlenke={() => locationMock}
    />
  </div>
);

export const visHistorikkNårBehandlingErValgt = () => (
  <div style={{
    width: '600px', backgroundColor: 'white', padding: '30px',
  }}
  >
    <HistorikkSakIndex
      historikkFpSak={history}
      historikkFpTilbake={[]}
      alleKodeverkFpSak={alleKodeverk as any}
      saksnummer="2"
      getBehandlingLocation={() => locationMock}
      createLocationForSkjermlenke={() => locationMock}
      valgtBehandlingUuid="999951"
    />
  </div>
);
