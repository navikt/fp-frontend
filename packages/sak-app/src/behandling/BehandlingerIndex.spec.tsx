import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { BehandlingAppKontekst, Fagsak } from '@fpsak-frontend/types';

import { BehandlingerIndex } from './BehandlingerIndex';

describe('BehandlingerIndex', () => {
  it('skal rendre komponent korrekt', async () => {
    const fagsak = {
      saksnummer: '123',
    };
    const alleBehandlinger = [{
      uuid: '1',
    }];

    render(
      <MemoryRouter>
        <BehandlingerIndex
          fagsak={fagsak as Fagsak}
          alleBehandlinger={alleBehandlinger as BehandlingAppKontekst[]}
          setBehandlingUuidOgVersjon={jest.fn()}
          setRequestPendingMessage={jest.fn()}
        />
      </MemoryRouter>,
    );

    expect(await screen.findByText('Velg behandling')).toBeInTheDocument();
  });
});
