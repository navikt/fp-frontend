import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import { mswTest } from '@navikt/fp-utils-test';

import * as stories from './SøkResultat.stories';

const { Default } = composeStories(stories);

describe('SøkResultat', () => {
  mswTest('skal vise en tabell med en rad og tilhørende kolonnedata', async ({ setHandlers }) => {
    setHandlers(Default.parameters['msw']);
    render(<Default />);

    expect(await screen.findByText('Saksnummer')).toBeInTheDocument();
    expect(screen.getByText('12213234')).toBeInTheDocument();
    expect(screen.getByText('Under behandling')).toBeInTheDocument();
  });
});
