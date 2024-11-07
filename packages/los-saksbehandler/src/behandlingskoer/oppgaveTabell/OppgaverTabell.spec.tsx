import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/react';
import * as stories from './OppgaverTabell.stories';

const { Default, TomOppgaveTabell } = composeStories(stories);

describe('<OppgaverTabell>', () => {
  it('skal vise tabell med behandlinger', async () => {
    await Default.run();

    expect(await screen.findByText('Neste i køen')).toBeInTheDocument();
    expect(screen.getByText('4 behandlinger')).toBeInTheDocument();
    expect(screen.getByText('Helge Utvikler 233')).toBeInTheDocument();
    expect(screen.getByText('Bjarne Bjærke 233')).toBeInTheDocument();
    expect(screen.getByText('Borgil Bø 233')).toBeInTheDocument();
    expect(screen.getByText('Espen Utvikler 1212')).toBeInTheDocument();
  });

  it('skal vise tom tabell når det ikke er behandlinger for køen', async () => {
    await TomOppgaveTabell.run();
    expect(await screen.findByText('Neste i køen')).toBeInTheDocument();
    expect(screen.getByText('0 behandlinger')).toBeInTheDocument();
    expect(screen.getByText('Det er ingen behandlinger i køen')).toBeInTheDocument();
  });
});
