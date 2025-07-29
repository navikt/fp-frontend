import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { mswWrapper } from '@navikt/fp-utils-test';

import * as stories from './OppgaveHandlingerMenu.stories';

const { Default } = composeStories(stories);

describe('OppgaveHandlingerMenu', () => {
  it(
    'skal vise fire meny-knapper for reserverte oppgaver',
    mswWrapper(async ({ setHandlers }) => {
      setHandlers(Default.parameters['msw']);
      render(<Default />);

      expect(await screen.findByText('Handlinger på oppgave')).toBeInTheDocument();

      await userEvent.click(screen.getByRole('button'));

      expect(await screen.findByText('Legg tilbake i felles kø')).toBeInTheDocument();
      expect(screen.getByText('Forleng reservasjon (24t)')).toBeInTheDocument();
      expect(screen.getByText('Reserver med dato')).toBeInTheDocument();
      expect(screen.getByText('Flytt til ny saksbehandler')).toBeInTheDocument();
    }),
  );

  it(
    'skal åpne modal for å forlenge reservasjon',
    mswWrapper(async ({ setHandlers }) => {
      setHandlers(Default.parameters['msw']);
      render(<Default />);

      expect(await screen.findByText('Handlinger på oppgave')).toBeInTheDocument();

      await userEvent.click(screen.getByRole('button'));

      expect(await screen.findByText('Legg tilbake i felles kø')).toBeInTheDocument();

      await userEvent.click(screen.getByText('Forleng reservasjon (24t)'));

      expect(await screen.findAllByText('Behandlingen er reservert på deg')).toHaveLength(2);
    }),
  );

  it(
    'skal åpne modal for å reservere med dato',
    mswWrapper(async ({ setHandlers }) => {
      setHandlers(Default.parameters['msw']);
      render(<Default />);

      expect(await screen.findByText('Handlinger på oppgave')).toBeInTheDocument();

      await userEvent.click(screen.getByRole('button'));

      expect(await screen.findByText('Legg tilbake i felles kø')).toBeInTheDocument();

      await userEvent.click(screen.getByText('Reserver med dato'));

      expect(await screen.findByText('Velg dato som reservasjonen avsluttes')).toBeInTheDocument();
    }),
  );

  it(
    'skal åpne og lukke modal for å flytte reservasjon',
    mswWrapper(async ({ setHandlers }) => {
      setHandlers(Default.parameters['msw']);
      render(<Default />);

      expect(await screen.findByText('Handlinger på oppgave')).toBeInTheDocument();

      await userEvent.click(screen.getByRole('button'));

      expect(await screen.findByText('Legg tilbake i felles kø')).toBeInTheDocument();

      await userEvent.click(screen.getByText('Flytt til ny saksbehandler'));

      expect(await screen.findByText('Flytt reservasjonen til annen saksbehandler')).toBeInTheDocument();

      await userEvent.click(screen.getByText('Avbryt'));

      await waitFor(() =>
        expect(screen.queryByText('Flytt reservasjonen til annen saksbehandler')).not.toBeInTheDocument(),
      );
    }),
  );
});
