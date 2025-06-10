import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import { mswTest } from '@navikt/fp-utils-test';

import * as stories from './SaksbehandlerIndex.stories';

const { Default } = composeStories(stories);

describe('SaksbehandlerIndex', () => {
  mswTest('skal saksbehandler-los', async ({ setHandlers }) => {
    setHandlers(Default.parameters['msw']);
    await render(<Default />);
    expect(await screen.findByText('Behandlingskø')).toBeInTheDocument();
    expect(await screen.findByText('Neste i køen')).toBeInTheDocument();
    expect(await screen.findByText('Søk')).toBeInTheDocument();
    expect(screen.getByText('Dine siste reserverte behandlinger')).toBeInTheDocument();
    expect(screen.getByText('Statistikk')).toBeInTheDocument();
  });
});
