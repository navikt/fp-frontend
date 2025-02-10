import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/react';
import { applyRequestHandlers } from 'msw-storybook-addon';

import * as stories from './OppgaverTabell.stories';

const { Default, TomOppgaveTabell } = composeStories(stories);

describe('<OppgaverTabell>', () => {
  it('skal vise tabell med behandlinger', async () => {
    await applyRequestHandlers(Default.parameters['msw']);
    await Default.run();

    expect(await screen.findByText('Neste i køen')).toBeInTheDocument();
    expect(await screen.findByText('3 reservert på deg, 4 i køen totalt')).toBeInTheDocument();
    expect(screen.getByText('Helge Utvikler 233')).toBeInTheDocument();
    expect(screen.getByText('Bjarne Bjærke 233')).toBeInTheDocument();
    expect(screen.getByText('Borgil Bø 233')).toBeInTheDocument();
    expect(await screen.findByText('Espen Utvikler 1212')).toBeInTheDocument();
  });

  it('skal vise tom tabell når det ikke er behandlinger for køen', async () => {
    await applyRequestHandlers(TomOppgaveTabell.parameters['msw']);
    await TomOppgaveTabell.run();
    expect(await screen.findByText('Neste i køen')).toBeInTheDocument();
    expect(await screen.findByText('0 reservert på deg, 0 i køen totalt')).toBeInTheDocument();
    expect(screen.getByText('Det er ingen behandlinger i køen')).toBeInTheDocument();
  });
});
