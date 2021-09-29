import React from 'react';
import { render, screen } from '@testing-library/react';

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';

import { requestApi, FpsakApiKeys } from '../../data/fpsakApi';
import HistorikkIndex from './HistorikkIndex';

describe('<HistorikkIndex>', () => {
  it('skal slå sammen og sortere historikk for fpsak og fptilbake', async () => {
    const data = [
      { key: FpsakApiKeys.INIT_FETCH_FPTILBAKE.name, global: true, data: {} },
      { key: FpsakApiKeys.KODEVERK.name, global: true, data: {} },
      { key: FpsakApiKeys.KODEVERK_FPTILBAKE.name, global: true, data: {} },
      {
        key: FpsakApiKeys.HISTORY_FPSAK.name,
        global: true,
        data: [{
          opprettetTidspunkt: '2019-01-01',
          historikkinnslagDeler: [],
          type: {
            kode: 'Test fpsak 1',
          },
        }, {
          opprettetTidspunkt: '2019-01-06',
          historikkinnslagDeler: [],
          type: {
            kode: 'Test fpsak 2',
          },
        }],
      },
      {
        key: FpsakApiKeys.HISTORY_FPTILBAKE.name,
        global: true,
        data: [{
          opprettetTidspunkt: '2019-01-04',
          historikkinnslagDeler: [],
          type: {
            kode: 'Test fptilbake',
          },
        }],
      },
    ];

    render(
      <RestApiMock data={data} requestApi={requestApi}>
        <HistorikkIndex
          saksnummer="12345"
          behandlingUuid="1"
          behandlingVersjon={2}
        />
      </RestApiMock>,
    );

    expect(await screen.findByText('Behandlingen settes på vent med frist')).toBeInTheDocument();

    // const index = wrapper.find(HistorikkSakIndex);
    // expect(index).toHaveLength(1);

    // const { historikkFpSak, historikkFpTilbake } = index.props();

    // expect(historikkFpSak).toHaveLength(2);
    // expect(historikkFpTilbake).toHaveLength(1);
  });
});
