import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import { mswTest } from '@navikt/fp-utils-test';

import * as stories from './Home.stories';

const { VisAktør, VisSøk, VisLosIkkeTilgjengelig, VisSideIkkeFunnet } = composeStories(stories);

describe('Home', () => {
  mswTest('skal rendre aktør-panel', async ({ setHandlers }) => {
    setHandlers(VisAktør.parameters['msw']);
    render(<VisAktør />);
    expect(await screen.findByText('Espen Utvikler')).toBeInTheDocument();
  });

  mswTest('skal rendre søke-panel', async ({ setHandlers }) => {
    setHandlers(VisSøk.parameters['msw']);
    render(<VisSøk />);
    expect(await screen.findByText('Søk på sak eller person')).toBeInTheDocument();
  });

  mswTest('skal rendre los-ikke-tilgjengelig-panel', async ({ setHandlers }) => {
    setHandlers(VisLosIkkeTilgjengelig.parameters['msw']);
    await render(<VisLosIkkeTilgjengelig />);
    expect(await screen.findByText('FPLOS er ikke tilgjengelig')).toBeInTheDocument();
  });

  mswTest('skal rendre side-ikke-funnet-panel', async ({ setHandlers }) => {
    setHandlers(VisSideIkkeFunnet.parameters['msw']);
    render(<VisSideIkkeFunnet />);
    expect(await screen.findByText('Beklager, vi finner ikke siden du leter etter.')).toBeInTheDocument();
  });
});
