import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { applyRequestHandlers } from 'msw-storybook-addon';

import * as stories from './Home.stories';

const { VisAktør, VisSøk, VisLosIkkeTilgjengelig, VisSideIkkeFunnet } = composeStories(stories);

describe('Home', () => {
  it('skal rendre aktør-panel', async () => {
    await applyRequestHandlers(VisAktør.parameters['msw']);
    render(<VisAktør />);
    expect(await screen.findByText('Espen Utvikler')).toBeInTheDocument();
  });

  it('skal rendre søke-panel', async () => {
    await applyRequestHandlers(VisSøk.parameters['msw']);
    render(<VisSøk />);
    expect(await screen.findByText('Søk på sak eller person')).toBeInTheDocument();
  });

  it.skip('skal rendre los-ikke-tilgjengelig-panel', async () => {
    await applyRequestHandlers(VisLosIkkeTilgjengelig.parameters['msw']);
    render(<VisLosIkkeTilgjengelig />);
    expect(await screen.findByText('FPLOS er ikke tilgjengelig')).toBeInTheDocument();
  });

  it('skal rendre side-ikke-funnet-panel', async () => {
    await applyRequestHandlers(VisSideIkkeFunnet.parameters['msw']);
    render(<VisSideIkkeFunnet />);
    expect(await screen.findByText('Beklager, vi finner ikke siden du leter etter.')).toBeInTheDocument();
  });
});
