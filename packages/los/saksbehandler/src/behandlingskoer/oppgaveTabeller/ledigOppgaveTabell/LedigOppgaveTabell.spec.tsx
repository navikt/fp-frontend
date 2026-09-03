import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/react';

import * as stories from './LedigOppgaveTabell.stories';

const { Default, TomOppgaveTabell } = composeStories(stories);

describe('LedigOppgaveTabell', () => {
  it('skal vise tabell med behandlinger', async () => {
    await Default.run();

    expect(await screen.findByText('Neste i køen')).toBeInTheDocument();
    expect(await screen.findByText('4 totalt')).toBeInTheDocument();
    expect(await screen.findByText('Espen Utvikler')).toBeInTheDocument();
    expect(await screen.findByText('FP')).toBeInTheDocument();
    expect(await screen.findByText('Søknad')).toBeInTheDocument();
    expect(await screen.findByText('Inntektsmelding')).toBeInTheDocument();
  });

  it('skal vise tom tabell når det ikke er behandlinger for køen', async () => {
    await TomOppgaveTabell.run();
    expect(await screen.findByText('Neste i køen')).toBeInTheDocument();
    expect(await screen.findByText('0 totalt')).toBeInTheDocument();
    expect(screen.getByText('Det er ingen behandlinger i køen')).toBeInTheDocument();
  });
});
