import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { applyRequestHandlers, type MswParameters } from 'msw-storybook-addon';

import * as stories from './Home.stories';

const { VisAktør, VisSøk, VisLosIkkeTilgjengelig, VisSideIkkeFunnet } = composeStories(stories);

describe('Home', () => {
  it('skal rendre aktør-panel', async () => {
    applyRequestHandlers(VisAktør.parameters['msw'] as MswParameters['msw']);
    render(<VisAktør />);
    expect(await screen.findByText('Espen Utvikler')).toBeInTheDocument();
  });

  it('skal rendre søke-panel', async () => {
    applyRequestHandlers(VisSøk.parameters['msw'] as MswParameters['msw']);
    render(<VisSøk />);
    expect(await screen.findByText('Søk på sak eller person')).toBeInTheDocument();
  });

  it('skal rendre los-ikke-tilgjengelig-panel', async () => {
    applyRequestHandlers(VisLosIkkeTilgjengelig.parameters['msw'] as MswParameters['msw']);
    render(<VisLosIkkeTilgjengelig />);
    expect(await screen.findByText('FPLOS er ikke tilgjengelig')).toBeInTheDocument();
  });

  it('skal rendre side-ikke-funnet-panel', async () => {
    applyRequestHandlers(VisSideIkkeFunnet.parameters['msw'] as MswParameters['msw']);
    render(<VisSideIkkeFunnet />);
    expect(await screen.findByText('Beklager, vi finner ikke siden du leter etter.')).toBeInTheDocument();
  });
});
