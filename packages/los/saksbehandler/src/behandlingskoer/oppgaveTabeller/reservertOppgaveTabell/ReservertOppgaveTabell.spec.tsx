import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/react';

import { mswTest } from '@navikt/fp-utils-test';

import * as stories from './ReservertOppgaveTabell.stories';

const { Default, TomOppgaveTabell } = composeStories(stories);

describe('OppgaverTabell', () => {
  mswTest('skal vise tabell med behandlinger', async ({ setHandlers }) => {
    setHandlers(Default.parameters['msw']);
    await Default.run();

    expect(await screen.findByText('Reserverte')).toBeInTheDocument();
    expect(await screen.findByText('3')).toBeInTheDocument();
    expect(screen.getByText('Helge Utvikler')).toBeInTheDocument();
    expect(screen.getByText('Bjarne Bjærke')).toBeInTheDocument();
    expect(screen.getByText('Borgil Bø')).toBeInTheDocument();
  });

  mswTest('skal vise tom tabell når det ikke er behandlinger for køen', async ({ setHandlers }) => {
    setHandlers(TomOppgaveTabell.parameters['msw']);
    await TomOppgaveTabell.run();
    expect(await screen.findByText('Reserverte')).toBeInTheDocument();
    expect(await screen.findByText('0')).toBeInTheDocument();
    expect(screen.getByText('Det er ingen reserverte behandlinger')).toBeInTheDocument();
  });
});
