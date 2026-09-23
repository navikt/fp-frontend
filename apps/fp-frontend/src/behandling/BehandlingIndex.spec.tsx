import { useEffect } from 'react';
import { createMemoryRouter, RouterProvider } from 'react-router';

import { act, render, screen } from '@testing-library/react';

import { alleKodeverk, lagBehandling, lagFagsak } from '@navikt/fp-storybook-utils';

import { initFetchFpsak } from '../../.storybook/testdata';
import { FagsakData } from '../fagsak/FagsakData';
import { BehandlingIndex } from './BehandlingIndex';
import { useBehandlingDataContext } from './felles/context/BehandlingDataContext';

const { registrerNavigasjon } = vi.hoisted(() => ({
  registrerNavigasjon: vi.fn<(naviger: (prosessSteg?: string, faktaPanel?: string) => void) => void>(),
}));

vi.mock('@tanstack/react-query', () => ({
  useQuery: () => ({ data: { ...initFetchFpsak, ...alleKodeverk } }),
}));
vi.mock('../data/fagsakApi', () => ({
  initFetchOptions: () => ({}),
  useFagsakApi: () => ({ kodeverkOptions: () => ({}) }),
}));
vi.mock('../data/polling/useBehandlingPollingOperasjoner', () => ({
  useBehandlingPollingOperasjoner: () => ({
    lagreAksjonspunkter: vi.fn(),
    lagreOverstyrteAksjonspunkter: vi.fn(),
  }),
}));
vi.mock('./BehandlingPanelerIndex', () => ({
  BehandlingPanelerIndex: () => {
    const { oppdaterProsessStegOgFaktaPanelIUrl } = useBehandlingDataContext();
    useEffect(() => {
      registrerNavigasjon(oppdaterProsessStegOgFaktaPanelIUrl);
    }, [oppdaterProsessStegOgFaktaPanelIUrl]);
    return <div>Aktiv behandling</div>;
  },
}));

describe('BehandlingIndex', () => {
  beforeEach(() => {
    registrerNavigasjon.mockClear();
  });

  const renderBehandling = (uuid = 'A') => {
    const router = createMemoryRouter(
      [
        {
          path: '/fagsak/123/behandling/:behandlingUuid/',
          element: (
            <BehandlingIndex
              behandling={lagBehandling({ uuid })}
              fagsakData={new FagsakData(lagFagsak({ saksnummer: '123' }))}
              setBehandling={vi.fn()}
              hentOgSettBehandling={vi.fn()}
              setBehandlingUuidFraUrl={vi.fn()}
            />
          ),
        },
        { path: '/annen-side', element: <div>Annen side</div> },
      ],
      { initialEntries: ['/fagsak/123/behandling/A/'] },
    );
    render(<RouterProvider router={router} />);
    return router;
  };

  it('skal ikke vise en behandling som ikke samsvarer med URL-en', () => {
    renderBehandling('B');

    expect(screen.queryByText('Aktiv behandling')).not.toBeInTheDocument();
    expect(registrerNavigasjon).not.toHaveBeenCalled();
  });

  it('skal oppdatere panelvalg for aktiv behandling', () => {
    const router = renderBehandling();
    const naviger = registrerNavigasjon.mock.calls[0]![0];

    act(() => naviger('uttak', 'arbeid'));

    expect(router.state.location.pathname).toBe('/fagsak/123/behandling/A/');
    expect(new URLSearchParams(router.state.location.search).get('punkt')).toBe('uttak');
    expect(new URLSearchParams(router.state.location.search).get('fakta')).toBe('arbeid');
  });

  it('skal tillate at et panel velger prosessteg ved første montering', () => {
    registrerNavigasjon.mockImplementationOnce(naviger => naviger('uttak', 'arbeid'));

    const router = renderBehandling();

    expect(new URLSearchParams(router.state.location.search).get('punkt')).toBe('uttak');
  });

  it('skal ikke navigere tilbake når en gammel innsending fullføres etter at behandlingen er lukket', async () => {
    const router = renderBehandling();
    const etterLagring = registrerNavigasjon.mock.calls[0]![0];
    await act(() => router.navigate('/annen-side'));

    act(() => etterLagring('default', 'default'));

    expect(router.state.location.pathname).toBe('/annen-side');
    expect(screen.getByText('Annen side')).toBeInTheDocument();
  });
});
