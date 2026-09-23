import type { ComponentProps } from 'react';
import { IntlProvider } from 'react-intl';
import { createMemoryRouter, RouterProvider } from 'react-router';

import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { lagBehandling, lagFagsak, lagFagsakBehandling } from '@navikt/fp-storybook-utils';
import type { Behandling } from '@navikt/fp-types';

import type { BehandlingerIndex } from '../behandling/BehandlingerIndex';
import { RequestPendingProvider } from '../data/polling/RequestPendingContext';
import { useHentBehandling } from '../data/polling/useHentBehandling';
import type { FagsakProfileIndex } from '../fagsakprofile/FagsakProfileIndex';
import { FagsakData } from './FagsakData';
import { FagsakIndex } from './FagsakIndex';
import { useHentFagsak } from './useHentFagsak';

import messages from '../../i18n/nb_NO.json';

vi.mock('../data/polling/useHentBehandling');
vi.mock('./useHentFagsak');
vi.mock('@navikt/fp-sak-visittkort', () => ({ VisittkortSakIndex: () => null }));
vi.mock('../behandlingsupport/BehandlingSupportIndex', () => ({ BehandlingSupportIndex: () => null }));
vi.mock('../behandling/BehandlingerIndex', () => ({
  BehandlingerIndex: ({ behandling }: ComponentProps<typeof BehandlingerIndex>) => (
    <div>{behandling ? `Behandling ${behandling.uuid}, versjon ${behandling.versjon}` : 'Laster behandling'}</div>
  ),
}));
vi.mock('../fagsakprofile/FagsakProfileIndex', () => ({
  FagsakProfileIndex: ({ behandling, toggleSideMeny, visSideMeny }: ComponentProps<typeof FagsakProfileIndex>) => (
    <div>
      <span>{behandling ? `Meny for ${behandling.uuid}` : 'Ingen behandlingsmeny'}</span>
      <button onClick={toggleSideMeny}>{visSideMeny ? 'Skjul sidepanel' : 'Vis sidepanel'}</button>
    </div>
  ),
}));

describe('FagsakIndexNavigasjon', () => {
  const forespørsler: { uuid?: string; svar: (behandling: Behandling) => void }[] = [];

  beforeEach(() => {
    forespørsler.length = 0;
    vi.mocked(useHentFagsak).mockImplementation(saksnummer => [
      true,
      new FagsakData(
        lagFagsak({
          saksnummer,
          behandlinger: [lagFagsakBehandling({ uuid: 'A' }), lagFagsakBehandling({ uuid: 'B' })],
        }),
      ),
    ]);
    vi.mocked(useHentBehandling).mockImplementation((_erTilbakekreving, setBehandling, uuid) => ({
      hentOgSettBehandling: () => {
        forespørsler.push({ uuid, svar: setBehandling });
      },
    }));
  });

  const renderFagsak = () => {
    const router = createMemoryRouter(
      [
        {
          path: '/fagsak/:saksnummer/*',
          element: (
            <IntlProvider locale="nb" messages={messages}>
              <RequestPendingProvider>
                <FagsakIndex />
              </RequestPendingProvider>
            </IntlProvider>
          ),
        },
      ],
      { initialEntries: ['/fagsak/123/behandling/A/'] },
    );
    render(<RouterProvider router={router} />);
    return router;
  };

  it('skal skjule gammel behandling og meny straks URL-en endres', async () => {
    const router = renderFagsak();
    act(() => forespørsler[0]!.svar(lagBehandling({ uuid: 'A', versjon: 1 })));
    expect(screen.getByText('Behandling A, versjon 1')).toBeInTheDocument();

    await act(() => router.navigate('/fagsak/123/behandling/B/'));

    expect(screen.queryByText('Behandling A, versjon 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Meny for A')).not.toBeInTheDocument();
    expect(screen.getByText('Laster behandling')).toBeInTheDocument();
    expect(forespørsler.map(f => f.uuid)).toEqual(['A', 'B']);
  });

  it('skal ignorere sene svar fra forrige behandling', async () => {
    const router = renderFagsak();
    await act(() => router.navigate('/fagsak/123/behandling/B/'));
    act(() => forespørsler[1]!.svar(lagBehandling({ uuid: 'B', versjon: 2 })));
    act(() => forespørsler[0]!.svar(lagBehandling({ uuid: 'A', versjon: 3 })));

    expect(screen.getByText('Behandling B, versjon 2')).toBeInTheDocument();
    expect(screen.getByText('Meny for B')).toBeInTheDocument();
    expect(screen.queryByText('Behandling A, versjon 3')).not.toBeInTheDocument();
  });

  it('skal ignorere gamle svar også etter navigasjon tilbake til samme behandling', async () => {
    const router = renderFagsak();
    await act(() => router.navigate('/fagsak/123/behandling/B/'));
    await act(() => router.navigate('/fagsak/123/behandling/A/'));
    act(() => forespørsler[2]!.svar(lagBehandling({ uuid: 'A', versjon: 3 })));
    act(() => forespørsler[0]!.svar(lagBehandling({ uuid: 'A', versjon: 1 })));

    expect(screen.getByText('Behandling A, versjon 3')).toBeInTheDocument();
  });

  it('skal ikke erstatte gjeldende behandling med en eldre versjon eller feil UUID', () => {
    renderFagsak();
    const { svar } = forespørsler[0]!;
    act(() => svar(lagBehandling({ uuid: 'A', versjon: 3 })));
    act(() => svar(lagBehandling({ uuid: 'A', versjon: 2 })));
    act(() => svar(lagBehandling({ uuid: 'B', versjon: 4 })));

    expect(screen.getByText('Behandling A, versjon 3')).toBeInTheDocument();
  });

  it('skal tømme behandlingen ved bytte av fagsak og beholde valgt sidepanelvisning', async () => {
    const router = renderFagsak();
    act(() => forespørsler[0]!.svar(lagBehandling({ uuid: 'A', versjon: 1 })));
    await userEvent.click(screen.getByRole('button', { name: 'Skjul sidepanel' }));

    await act(() => router.navigate('/fagsak/456/behandling/B/'));
    act(() => forespørsler[0]!.svar(lagBehandling({ uuid: 'A', versjon: 2 })));

    expect(screen.getByText('Laster behandling')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Vis sidepanel' })).toBeInTheDocument();
  });
});
