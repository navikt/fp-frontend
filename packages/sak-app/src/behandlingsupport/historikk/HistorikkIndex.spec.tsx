import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';

import { requestApi, FpsakApiKeys } from '../../data/fpsakApi';
import HistorikkIndex from './HistorikkIndex';

describe('<HistorikkIndex>', () => {
  it('skal prøve å hente historikk og så vise historikk-panel', async () => {
    const data = [
      { key: FpsakApiKeys.INIT_FETCH_FPTILBAKE.name, global: true, data: {} },
      { key: FpsakApiKeys.KODEVERK.name, global: true, data: {} },
      { key: FpsakApiKeys.KODEVERK_FPTILBAKE.name, global: true, data: {} },
      {
        key: FpsakApiKeys.HISTORY_FPSAK.name,
        data: [],
      },
      {
        key: FpsakApiKeys.HISTORY_FPTILBAKE.name,
        data: [],
      },
    ];

    render(
      <RestApiMock data={data} requestApi={requestApi}>
        <MemoryRouter>
          <HistorikkIndex
            saksnummer="12345"
            behandlingUuid="1"
            behandlingVersjon={2}
          />
        </MemoryRouter>
      </RestApiMock>,
    );

    expect(await screen.findByText('Filtrer på behandling')).toBeInTheDocument();
  });
});
