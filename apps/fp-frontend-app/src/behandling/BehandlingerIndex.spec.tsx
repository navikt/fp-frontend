import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import type { BehandlingAppKontekst, Fagsak } from '@navikt/fp-types';

import { FagsakData } from '../fagsak/FagsakData';
import { BehandlingerIndex } from './BehandlingerIndex';

describe('BehandlingerIndex', () => {
  it('skal rendre komponent korrekt', async () => {
    const fagsak = {
      saksnummer: '123',
      behandlinger: [
        {
          uuid: '1',
        },
      ] as BehandlingAppKontekst[],
    } as Fagsak;

    render(
      <MemoryRouter>
        <BehandlingerIndex
          fagsakData={new FagsakData(fagsak)}
          setBehandling={vi.fn()}
          setBehandlingUuidFraUrl={vi.fn()}
          hentOgSettBehandling={vi.fn()}
        />
      </MemoryRouter>,
    );

    expect(await screen.findByText('Velg behandling')).toBeInTheDocument();
  });
});
