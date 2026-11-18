import type { ReactNode } from 'react';
import { IntlProvider } from 'react-intl';
import { MemoryRouter } from 'react-router';

import { render } from '@testing-library/react';

import { lagBehandling } from '@navikt/fp-storybook-utils';
import type { BehandlingFpSak, BeregningsresultatDagytelse, BeregningsresultatEs } from '@navikt/fp-types';

import { BehandlingRel } from '../../../data/behandlingApi';
import { VedtakProsessStegInitPanel } from './VedtakProsessStegInitPanel';

const { vedtakProsessIndex, svarFraBackend, behandling } = vi.hoisted(() => {
  const gjeldendeBehandling: { current?: BehandlingFpSak } = {};
  return {
    vedtakProsessIndex: vi.fn<(props: { originaltBeregningsresultat?: unknown }) => null>(() => null),
    svarFraBackend: new Map<string, unknown>(),
    behandling: gjeldendeBehandling,
  };
});

vi.mock('@tanstack/react-query', async importOriginal => ({
  ...(await importOriginal<typeof import('@tanstack/react-query')>()),
  useQuery: (options: { queryKey: string[]; enabled?: boolean; select?: (data: unknown) => unknown }) => {
    const data = options.enabled === false ? undefined : (svarFraBackend.get(options.queryKey[0]!) ?? null);
    return { data: options.select ? options.select(data) : data, isFetching: false };
  },
  useMutation: () => ({ mutate: vi.fn(), mutateAsync: vi.fn(), isPending: false }),
}));
vi.mock('@navikt/fp-prosess-vedtak', () => ({
  VedtakEditeringProvider: ({ children }: { children: ReactNode }) => children,
  VedtakProsessIndex: vedtakProsessIndex,
}));
vi.mock('../../felles/context/BehandlingDataContext', () => ({
  useBehandlingDataContext: () => ({ setSkalOppdatereEtterBekreftelseAvAp: vi.fn() }),
}));
vi.mock('../../felles/prosess/useStandardProsessPanelProps', () => ({
  useStandardProsessPanelProps: () => ({ behandling: behandling.current, aksjonspunkterForPanel: [] }),
}));
vi.mock('../../felles/prosess/ProsessDefaultInitPanel', () => ({
  ProsessDefaultInitPanel: ({ children }: { children: ReactNode }) => children,
}));
vi.mock('../../felles/modaler/vedtak/FatterVedtakStatusModal', () => ({ FatterVedtakStatusModal: () => null }));
vi.mock('../../felles/modaler/vedtak/IverksetterVedtakStatusModal', () => ({
  IverksetterVedtakStatusModal: () => null,
}));

const lagBehandlingMedLenke = (rel: string) =>
  lagBehandling({ links: [{ href: `/fpsak/api/${rel}`, rel, type: 'GET' }] });

const renderPanel = (erEngangsstønad: boolean) =>
  render(
    <MemoryRouter>
      <IntlProvider locale="nb-NO" onError={() => undefined}>
        <VedtakProsessStegInitPanel erEngangsstønad={erEngangsstønad} />
      </IntlProvider>
    </MemoryRouter>,
  );

describe('VedtakProsessStegInitPanel', () => {
  beforeEach(() => {
    svarFraBackend.clear();
    vedtakProsessIndex.mockClear();
  });

  it('skal sende beregningsresultat for original behandling videre for foreldrepenger', () => {
    const original: BeregningsresultatDagytelse = { perioder: [] };
    svarFraBackend.set(BehandlingRel.BEREGNINGSRESULTAT_DAGYTELSE_ORIGINAL_BEHANDLING, original);
    behandling.current = lagBehandlingMedLenke(BehandlingRel.BEREGNINGSRESULTAT_DAGYTELSE_ORIGINAL_BEHANDLING);

    renderPanel(false);

    expect(vedtakProsessIndex.mock.lastCall?.[0].originaltBeregningsresultat).toBe(original);
  });

  it('skal sende beregningsresultat for original behandling videre for engangsstønad', () => {
    const original: BeregningsresultatEs = { antallBarn: 1, beregnetTilkjentYtelse: 92648, satsVerdi: 92648 };
    svarFraBackend.set(BehandlingRel.BEREGNINGSRESULTAT_ENGANGSSTONAD_ORIGINAL_BEHANDLING, original);
    behandling.current = lagBehandlingMedLenke(BehandlingRel.BEREGNINGSRESULTAT_ENGANGSSTONAD_ORIGINAL_BEHANDLING);

    renderPanel(true);

    expect(vedtakProsessIndex.mock.lastCall?.[0].originaltBeregningsresultat).toBe(original);
  });
});
