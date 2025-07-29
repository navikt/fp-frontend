import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import { mswWrapper } from '@navikt/fp-utils-test';

import * as stories from './SistBehandledeSaker.stories';

const { Default, IngenBehandlinger } = composeStories(stories);

describe('SistBehandledeSaker', () => {
  it(
    'skal vise sist behandlede saker',
    mswWrapper(async ({ setHandlers }) => {
      setHandlers(Default.parameters['msw']);
      render(<Default />);
      expect(await screen.findByText('Dine siste reserverte behandlinger')).toBeInTheDocument();
      expect(await screen.findByText('Espen Utvikler')).toBeInTheDocument();
      expect(screen.getByText('13232323')).toBeInTheDocument();
    }),
  );

  it(
    'skal vise ingen behandlinger',
    mswWrapper(async ({ setHandlers }) => {
      setHandlers(IngenBehandlinger.parameters['msw']);
      render(<IngenBehandlinger />);
      expect(await screen.findByText('Dine siste reserverte behandlinger')).toBeInTheDocument();
      expect(await screen.findByText('Ingen behandlinger')).toBeInTheDocument();
    }),
  );
});
