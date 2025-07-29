import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import { mswWrapper } from '@navikt/fp-utils-test';

import * as stories from './SaksbehandlereForSakslisteForm.stories';

const { IngenSaksbehandlere, ToSaksbehandlere, SaksbehandlereSomErGruppert } = composeStories(stories);

describe('SaksbehandlereForSakslisteForm', () => {
  it(
    'skal vise tekst som viser at ingen saksbehandlere er tilknyttet',
    mswWrapper(async ({ setHandlers }) => {
      setHandlers(IngenSaksbehandlere.parameters['msw']);
      render(<IngenSaksbehandlere />);
      expect(await screen.findByText('Saksbehandlere')).toBeInTheDocument();
      expect(await screen.findByText('Avdelingen har ingen saksbehandlere tilknyttet')).toBeInTheDocument();
    }),
  );

  it(
    'skal vise to saksbehandlere i listen',
    mswWrapper(async ({ setHandlers }) => {
      setHandlers(ToSaksbehandlere.parameters['msw']);
      render(<ToSaksbehandlere />);
      expect(await screen.findByText('Saksbehandlere')).toBeInTheDocument();
      expect(await screen.findByText('Espen Utvikler')).toBeInTheDocument();
      expect(screen.getByText('Steffen')).toBeInTheDocument();
    }),
  );

  it.skip(
    'skal vise gruppe og liste med alle saksbehandlere',
    mswWrapper(async ({ setHandlers }) => {
      setHandlers(SaksbehandlereSomErGruppert.parameters['msw']);
      render(<SaksbehandlereSomErGruppert />);
      expect(await screen.findByText('Saksbehandlere')).toBeInTheDocument();
      expect(screen.getByText('Gruppenavn')).toBeInTheDocument();
      expect(screen.getByText('Gruppe 1')).toBeInTheDocument();
      expect(screen.getByText('Antall tilknyttet køen')).toBeInTheDocument();
      expect(screen.getByText('1')).toBeInTheDocument();

      expect(screen.getAllByText('Steffen')).toHaveLength(2);
      expect(screen.getAllByText('Espen Utvikler')).toHaveLength(2);
      expect(screen.getByText('Eirik')).toBeInTheDocument();
    }),
  );
});
