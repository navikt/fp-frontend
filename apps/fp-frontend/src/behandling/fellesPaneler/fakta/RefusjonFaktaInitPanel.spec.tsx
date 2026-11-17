import type { ReactNode } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import { åpneDokument } from '@navikt/fp-utils';

import { dokumenter } from '../../../../.storybook/testdata/dokumenter';
import { fordelingsgrunnlag } from '../../../../.storybook/testdata/fordelingsgrunnlag';
import { RefusjonFaktaInitPanel } from './RefusjonFaktaInitPanel';

import messages from '../../../../i18n/nb_NO.json';

const { hentFordelingsgrunnlag, hentDokumenter, harLenke } = vi.hoisted(() => ({
  hentFordelingsgrunnlag: vi.fn(),
  hentDokumenter: vi.fn(),
  harLenke: vi.fn<() => boolean>(),
}));

vi.mock('../../../data/behandlingApi', () => ({
  getBehandlingApi: () => ({
    fordelingsgrunnlagOptions: () => ({
      queryKey: ['fordelingsgrunnlag'],
      queryFn: hentFordelingsgrunnlag,
      enabled: harLenke(),
    }),
  }),
  harLenke,
}));

vi.mock('../../../data/fagsakApi', () => ({
  useFagsakApi: () => ({
    hentDokumenter: () => ({
      queryKey: ['sak-dokumentliste'],
      queryFn: hentDokumenter,
    }),
  }),
}));

vi.mock('../../felles/context/BehandlingDataContext', () => ({
  useBehandlingDataContext: () => ({
    behandling: { uuid: 'behandling-1', versjon: 1 },
    fagsak: { saksnummer: '1' },
  }),
}));

vi.mock('../../felles/fakta/useStandardFaktaPanelProps', () => ({
  useStandardFaktaPanelProps: () => ({
    isReadOnly: false,
    submitCallback: vi.fn(),
  }),
}));

vi.mock('../../felles/fakta/FaktaDefaultInitPanel', () => ({
  FaktaDefaultInitPanel: ({ children }: { children: ReactNode }) => children,
}));

vi.mock('@navikt/fp-utils', async importOriginal => ({
  ...(await importOriginal<typeof import('@navikt/fp-utils')>()),
  åpneDokument: vi.fn(),
  useMellomlagretFormData: () => ({
    mellomlagretFormData: undefined,
    setMellomlagretFormData: vi.fn(),
  }),
}));

const renderPanel = () =>
  render(
    <QueryClientProvider client={new QueryClient({ defaultOptions: { queries: { retry: false } } })}>
      <RawIntlProvider value={createIntl(messages)}>
        <RefusjonFaktaInitPanel arbeidsgiverOpplysningerPerId={{}} />
      </RawIntlProvider>
    </QueryClientProvider>,
  );

describe('RefusjonFaktaInitPanel', () => {
  beforeEach(() => {
    vi.mocked(åpneDokument).mockClear();
    harLenke.mockReturnValue(true);
    hentFordelingsgrunnlag.mockResolvedValue(fordelingsgrunnlag);
    hentDokumenter.mockResolvedValue(dokumenter);
  });

  it.each([
    { tittel: 'Inntektsmelding med endret refusjon', forventetTittel: 'Inntektsmelding med endret refusjon' },
    { tittel: undefined, forventetTittel: 'Inntektsmelding' },
  ])('skal åpne riktig inntektsmelding med tittelen $forventetTittel', async ({ tittel, forventetTittel }) => {
    const user = userEvent.setup();
    hentDokumenter.mockResolvedValue([...dokumenter.slice(1), { ...dokumenter[0], tittel }]);
    renderPanel();

    await user.click(await screen.findByRole('button', { name: 'Åpne PDF' }));

    expect(åpneDokument).toHaveBeenCalledTimes(1);
    expect(åpneDokument).toHaveBeenCalledWith('1', '0000', '00000', forventetTittel);
  });
});
