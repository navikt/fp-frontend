import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import { mswWrapper } from '@navikt/fp-utils-test';

import * as stories from './BehandlingSupportIndex.stories';

const { NårBehandlingErValgt, SkalViseFraBeslutter } = composeStories(stories);

describe('BehandlingSupportIndex', () => {
  it(
    'skal vise historikk-panelet som default',
    mswWrapper(async ({ setHandlers }) => {
      setHandlers(NårBehandlingErValgt.parameters['msw']);
      render(<NårBehandlingErValgt />);

      expect(await screen.findAllByText('Historikk')).toHaveLength(2);
      expect(screen.getByLabelText('Utvid behandling detaljer panel')).toBeInTheDocument();
      expect(screen.getByText('Filtrer på behandling')).toBeInTheDocument();

      expect(screen.getByText('Send melding')).toBeInTheDocument();
      expect(screen.getByText('Dokumenter')).toBeInTheDocument();
      expect(screen.getByText('Notatblokk')).toBeInTheDocument();
    }),
  );

  it(
    'skal vise beslutter-panel',
    mswWrapper(async ({ setHandlers }) => {
      setHandlers(SkalViseFraBeslutter.parameters['msw']);
      render(<SkalViseFraBeslutter />);

      expect(await screen.findByTitle('Fra beslutter')).toBeInTheDocument();

      expect(screen.getByText('Historikk')).toBeInTheDocument();
      expect(screen.getByText('Send melding')).toBeInTheDocument();
      expect(screen.getByText('Dokumenter')).toBeInTheDocument();
      expect(screen.getByText('Notatblokk')).toBeInTheDocument();
    }),
  );
});
