import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/react';
import { applyRequestHandlers, type MswParameters } from 'msw-storybook-addon';

import * as stories from './ReservertOppgaveTabell.stories';

const { Default, TomOppgaveTabell } = composeStories(stories);

describe('OppgaverTabell', () => {
  it('skal vise tabell med behandlinger', async () => {
    applyRequestHandlers(Default.parameters['msw'] as MswParameters['msw']);
    await Default.run();

    expect(await screen.findByText('Reserverte')).toBeInTheDocument();
    expect(await screen.findByText('3')).toBeInTheDocument();
    expect(screen.getByText('Helge Utvikler')).toBeInTheDocument();
    expect(screen.getByText('Bjarne Bjærke')).toBeInTheDocument();
    expect(screen.getByText('Borgil Bø')).toBeInTheDocument();
  });

  it('skal vise tom tabell når det ikke er behandlinger for køen', async () => {
    applyRequestHandlers(TomOppgaveTabell.parameters['msw'] as MswParameters['msw']);
    await TomOppgaveTabell.run();
    expect(await screen.findByText('Reserverte')).toBeInTheDocument();
    expect(await screen.findByText('0')).toBeInTheDocument();
    expect(screen.getByText('Det er ingen reserverte behandlinger')).toBeInTheDocument();
  });
});
