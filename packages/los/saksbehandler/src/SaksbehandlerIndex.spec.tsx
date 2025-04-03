import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { applyRequestHandlers } from 'msw-storybook-addon';

import * as stories from './SaksbehandlerIndex.stories';

const { Default } = composeStories(stories);

describe('<SaksbehandlerIndex>', () => {
  it('skal saksbehandler-los', async () => {
    await applyRequestHandlers(Default.parameters['msw']);
    await render(<Default />);
    expect(await screen.findByText('Behandlingskø')).toBeInTheDocument();
    expect(await screen.findByText('Neste i køen')).toBeInTheDocument();
    expect(await screen.findByText('Søk')).toBeInTheDocument();
    expect(screen.getByText('Dine siste reserverte behandlinger')).toBeInTheDocument();
    expect(screen.getByText('Statistikk')).toBeInTheDocument();
  });
});
