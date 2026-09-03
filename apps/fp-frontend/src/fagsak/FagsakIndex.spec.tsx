import { Context as ResponsiveContext } from 'react-responsive';

import { composeStories, composeStory } from '@storybook/react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './FagsakIndex.stories';

const { Default } = composeStories(stories);
const DefaultForStorskjerm = composeStory(
  stories.Default,
  stories.default,
  {
    decorators: [
      Story => (
        <ResponsiveContext value={{ width: 1702 }}>
          <Story />
        </ResponsiveContext>
      ),
    ],
  },
  'DefaultForStorskjerm',
);
const DefaultForSmåskjerm = composeStory(
  stories.Default,
  stories.default,
  {
    decorators: [
      Story => (
        <ResponsiveContext value={{ width: 1408 }}>
          <Story />
        </ResponsiveContext>
      ),
    ],
  },
  'DefaultForSmåskjerm',
);

describe('FagsakIndex', () => {
  it('skal vise fagsak-delen av app og vente på at behandling skal vises', async () => {
    await Default.run();

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

  it('skal vise åpning og lukking av sidepanel ved storskjerm', async () => {
    await DefaultForStorskjerm.run();

    expect(await screen.findByText('Foreldrepenger')).toBeInTheDocument();
    expect(await screen.findByText('352018689 - Under behandling')).toBeInTheDocument();
    expect(screen.getByLabelText('Skjul profil sidepanel')).toBeInTheDocument();

    await userEvent.click(screen.getByLabelText('Skjul profil sidepanel'));
    expect(screen.getByLabelText('Vis sidepanel')).toBeInTheDocument();
  });

  it('skal skjule knapp for åpning eller lukking av sidepanel ved småskjerm', async () => {
    await DefaultForSmåskjerm.run();

    expect(await screen.findByText('Foreldrepenger')).toBeInTheDocument();
    expect(await screen.findByText('352018689 - Under behandling')).toBeInTheDocument();
    expect(screen.queryByLabelText('Skjul profil sidepanel')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Vis sidepanel')).not.toBeInTheDocument();
  });
});
