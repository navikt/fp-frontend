import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import { mswWrapper } from '@navikt/fp-utils-test';

import * as stories from './OppgaveJournalføringIndex.stories';

const { ViseOppgaverIListe, IngenOppgaver } = composeStories(stories);

describe('OppgaveJournalføringIndex', () => {
  it(
    'skal vise en liste med oppgaver',
    mswWrapper(async ({ setHandlers }) => {
      setHandlers(ViseOppgaverIListe.parameters['msw']);
      render(<ViseOppgaverIListe />);
      expect(await screen.findByText('Journalføring')).toBeInTheDocument();

      // Tabell overskrift
      expect(await screen.findByText('Opprettet')).toBeInTheDocument();
      expect(screen.getByText('Ytelse')).toBeInTheDocument();
      expect(screen.getByText('Beskrivelse')).toBeInTheDocument();
      expect(screen.getByText('Bruker')).toBeInTheDocument();
      expect(screen.getByText('Frist')).toBeInTheDocument();
      expect(screen.getByText('Saksbehandler')).toBeInTheDocument();
      // Rad 1
      expect(screen.getAllByText('Inntektsmelding')).toHaveLength(2);
      expect(screen.getAllByText('01.01.2022')).toHaveLength(4);
      expect(screen.getAllByText('Foreldrepenger')).toHaveLength(2);
      expect(screen.getByText('12048714373')).toBeInTheDocument();
      expect(screen.getByText('01.02.2022')).toBeInTheDocument();
      expect(screen.getByText('Y654321')).toBeInTheDocument();
      expect(screen.getByText('4016')).toBeInTheDocument();
    }),
  );

  it(
    'skal vise ingen oppgaver',
    mswWrapper(async ({ setHandlers }) => {
      setHandlers(IngenOppgaver.parameters['msw']);
      render(<IngenOppgaver />);
      expect(await screen.findByText('Fant ingen journalføringsoppgaver')).toBeInTheDocument();
    }),
  );
});
