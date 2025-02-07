import { Context as ResponsiveContext } from 'react-responsive';

import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { applyRequestHandlers } from 'msw-storybook-addon';

import * as stories from './FagsakIndex.stories';

const { Default } = composeStories(stories);

describe('FagsakIndex', () => {
  it('skal vise fagsak-delen av app og vente på at behandling skal vises', async () => {
    await applyRequestHandlers(Default.parameters['msw']);
    render(<Default />);

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

  it('skal vise fagsak-del', async () => {
    await applyRequestHandlers(Default.parameters.msw);
    render(
      <ResponsiveContext.Provider value={{ width: 300 }}>
        <Default />
      </ResponsiveContext.Provider>,
    );
    expect(await screen.findByText('Foreldrepenger')).toBeInTheDocument();
    expect(await screen.findByText('352018689 - Under behandling')).toBeInTheDocument();

    expect(screen.queryByLabelText('Skjul sidepanel')).not.toBeInTheDocument();
  });
});
