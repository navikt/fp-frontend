import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import { mswTest } from '@navikt/fp-utils-test';

import * as stories from './SistBehandledeSaker.stories';

const { Default, IngenBehandlinger } = composeStories(stories);

describe('SistBehandledeSaker', () => {
  mswTest('skal vise sist behandlede saker', async ({ setHandlers }) => {
    setHandlers(Default.parameters['msw']);
    render(<Default />);
    expect(await screen.findByText('Dine siste reserverte behandlinger')).toBeInTheDocument();
    expect(await screen.findByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText('13232323')).toBeInTheDocument();
  });

  mswTest('skal vise ingen behandlinger', async ({ setHandlers }) => {
    setHandlers(IngenBehandlinger.parameters['msw']);
    render(<IngenBehandlinger />);
    expect(await screen.findByText('Dine siste reserverte behandlinger')).toBeInTheDocument();
    expect(await screen.findByText('Ingen behandlinger')).toBeInTheDocument();
  });
});
