import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import { mswTest } from '@navikt/fp-utils-test';

import * as stories from './GrupperPanel.stories';

const { Default } = composeStories(stories);

describe('GrupperPanel', () => {
  mswTest('skal vise gruppe i tabell', async ({ setHandlers }) => {
    setHandlers(Default.parameters['msw']);
    render(<Default />);
    expect(await screen.findByText('Grupper')).toBeInTheDocument();
    expect(screen.getByText('Id')).toBeInTheDocument();
    expect(screen.getByText('Navn')).toBeInTheDocument();
    expect(screen.getByText('Antall saksbehandlere')).toBeInTheDocument();
  });
});
