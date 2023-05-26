import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { RestApiMock } from '@navikt/fp-utils-test';

import { requestFagsakApi, FagsakApiKeys } from '../../data/fagsakContextApi';
import HistorikkIndex from './HistorikkIndex';

describe('<HistorikkIndex>', () => {
  it('skal prøve å hente historikk og så vise historikk-panel', async () => {
    const data = [
      { key: FagsakApiKeys.INIT_FETCH_FPTILBAKE.name, global: true, data: {} },
      { key: FagsakApiKeys.KODEVERK.name, global: true, data: {} },
      { key: FagsakApiKeys.KODEVERK_FPTILBAKE.name, global: true, data: {} },
    ];

    render(
      <RestApiMock data={data} requestApi={requestFagsakApi}>
        <MemoryRouter>
          <HistorikkIndex saksnummer="12345" behandlingUuid="1" behandlingVersjon={2} kjønn="K" />
        </MemoryRouter>
      </RestApiMock>,
    );

    expect(await screen.findByText('Filtrer på behandling')).toBeInTheDocument();
  });
});
