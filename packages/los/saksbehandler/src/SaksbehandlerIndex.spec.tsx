import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { applyRequestHandlers, type MswParameters } from 'msw-storybook-addon';

import * as stories from './SaksbehandlerIndex.stories';

const { Default } = composeStories(stories);

describe('SaksbehandlerIndex', () => {
  it('skal saksbehandler-los', async () => {
    applyRequestHandlers(Default.parameters['msw'] as MswParameters['msw']);
    render(<Default />);
    expect(await screen.findByText('Behandlingskø')).toBeInTheDocument();
    expect(await screen.findByText('Neste i køen')).toBeInTheDocument();
    expect(await screen.findByTitle('Søk')).toBeInTheDocument();
    expect(screen.getByText('Dine siste reserverte behandlinger')).toBeInTheDocument();
  });
});
