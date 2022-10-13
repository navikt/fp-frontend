import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { BehandlingAppKontekst } from '@navikt/ft-types';

import { Fagsak } from '@fpsak-frontend/types';

import FagsakData from '../fagsak/FagsakData';
import { BehandlingerIndex } from './BehandlingerIndex';

describe('BehandlingerIndex', () => {
  it('skal rendre komponent korrekt', async () => {
    const fagsak = {
      saksnummer: '123',
      behandlinger: [{
        uuid: '1',
      }] as BehandlingAppKontekst[],
    } as Fagsak;

    render(
      <MemoryRouter>
        <BehandlingerIndex
          fagsakData={new FagsakData(fagsak)}
          setBehandlingUuidOgVersjon={jest.fn()}
          setRequestPendingMessage={jest.fn()}
        />
      </MemoryRouter>,
    );

    expect(await screen.findByText('Velg behandling')).toBeInTheDocument();
  });
});
