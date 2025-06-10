import { Context as ResponsiveContext } from 'react-responsive';

import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { mswTest } from '@navikt/fp-utils-test';

import * as stories from './FagsakIndex.stories';

const { Default } = composeStories(stories);

describe('FagsakIndex', () => {
  mswTest('skal vise fagsak-delen av app og vente på at behandling skal vises', async ({ setHandlers }) => {
    setHandlers(Default.parameters['msw']);
    render(<Default />);

    expect(await screen.findByText('Faresignaler')).toBeInTheDocument();
    expect(await screen.findByText('Foreldrepenger')).toBeInTheDocument();
    expect(await screen.findByText('352018689 - Under behandling')).toBeInTheDocument();

    expect(await screen.findByText('Behandlingsmeny')).toBeInTheDocument();

    expect(screen.getByText('Revurdering')).toBeInTheDocument();
    expect(screen.getByText('Behandling utredes')).toBeInTheDocument();

    expect(screen.getByText('Venter på mulige faresignaler')).toBeInTheDocument();

    expect(screen.getByText('Finn søker andre steder')).toBeInTheDocument();

    expect(screen.getAllByText('Historikk')).toHaveLength(2);

    expect(screen.getByText('Venter…')).toBeInTheDocument();
  });

  mswTest('skal vise åpning og lukking av sidepanel ved storskjerm', async ({ setHandlers }) => {
    setHandlers(Default.parameters['msw']);
    render(
      <ResponsiveContext.Provider value={{ width: 1702 }}>
        <Default />
      </ResponsiveContext.Provider>,
    );

    expect(await screen.findByText('Foreldrepenger')).toBeInTheDocument();
    expect(await screen.findByText('352018689 - Under behandling')).toBeInTheDocument();
    expect(screen.getByLabelText('Skjul profil sidepanel')).toBeInTheDocument();

    await userEvent.click(screen.getByLabelText('Skjul profil sidepanel'));
    expect(screen.queryByLabelText('Vis sidepanel')).toBeInTheDocument();
  });

  mswTest('skal skjule knapp for åpning eller lukking av sidepanel ved småskjerm', async ({ setHandlers }) => {
    setHandlers(Default.parameters['msw']);
    render(
      <ResponsiveContext.Provider value={{ width: 1408 }}>
        <Default />
      </ResponsiveContext.Provider>,
    );

    expect(await screen.findByText('Foreldrepenger')).toBeInTheDocument();
    expect(await screen.findByText('352018689 - Under behandling')).toBeInTheDocument();
    expect(screen.queryByLabelText('Skjul profil sidepanel')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Vis sidepanel')).not.toBeInTheDocument();
  });
});
