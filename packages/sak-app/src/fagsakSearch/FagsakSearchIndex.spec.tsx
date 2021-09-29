import React from 'react';
import { render, screen } from '@testing-library/react';

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import { Fagsak } from '@fpsak-frontend/types';

import { requestApi, FpsakApiKeys } from '../data/fpsakApi';
import FagsakSearchIndex from './FagsakSearchIndex';

describe('<FagsakSearchIndex>', () => {
  const fagsak = {
    saksnummer: '12345',
    fagsakYtelseType: {
      kode: 'ES',
      kodeverk: 'test',
    },
    status: {
      kode: 'OPPR',
      kodeverk: 'test',
    },
    dekningsgrad: 100,
  };
  const fagsak2: Partial<Fagsak> = {
    ...fagsak,
    saksnummer: '23456',
  };
  const fagsaker = [fagsak, fagsak2];

  it('skal søke opp fagsaker', async () => {
    const data = [
      { key: FpsakApiKeys.KODEVERK.name, global: true, data: {} },
      { key: FpsakApiKeys.SEARCH_FAGSAK.name, data: fagsaker },
    ];

    render(
      <RestApiMock data={data} requestApi={requestApi}>
        <FagsakSearchIndex />
      </RestApiMock>,
    );

    expect(await screen.findByText('Søk på sak eller person')).toBeInTheDocument();
    // const fagsakSearchIndex = wrapper.find(FagsakSokSakIndex);
    // expect(fagsakSearchIndex).toHaveLength(1);

    // expect(fagsakSearchIndex.prop('fagsaker')).toEqual([]);

    // const sok = fagsakSearchIndex.prop('searchFagsakCallback');
    // sok();

    // expect(wrapper.find(FagsakSokSakIndex).prop('fagsaker')).toEqual(fagsaker);
  });

  it('skal gå til valgt fagsak', async () => {
    const data = [
      { key: FpsakApiKeys.KODEVERK.name, global: true, data: {} },
      { key: FpsakApiKeys.SEARCH_FAGSAK.name, data: fagsaker },
    ];

    render(
      <RestApiMock data={data} requestApi={requestApi}>
        <FagsakSearchIndex />
      </RestApiMock>,
    );

    expect(await screen.findByText('Søk på sak eller person')).toBeInTheDocument();

    // const fagsakSearchIndex = wrapper.find(FagsakSokSakIndex);
    // const velgFagsak = fagsakSearchIndex.prop('selectFagsakCallback') as (event: any, saksnummer: string) => undefined;
    // velgFagsak('', fagsak.saksnummer);

    // expect(mockHistoryPush).toHaveBeenCalledWith(`/fagsak/${fagsak.saksnummer}/`);
  });
});
