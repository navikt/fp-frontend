import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import { mswTest } from '@navikt/fp-utils-test';

import * as stories from './SaksbehandlereForSakslisteForm.stories';

const { IngenSaksbehandlere, ToSaksbehandlere, SaksbehandlereSomErGruppert } = composeStories(stories);

describe('SaksbehandlereForSakslisteForm', () => {
  mswTest('skal vise tekst som viser at ingen saksbehandlere er tilknyttet', async ({ setHandlers }) => {
    setHandlers(IngenSaksbehandlere.parameters['msw']);
    render(<IngenSaksbehandlere />);
    expect(await screen.findByText('Saksbehandlere')).toBeInTheDocument();
    expect(await screen.findByText('Avdelingen har ingen saksbehandlere tilknyttet')).toBeInTheDocument();
  });

  mswTest('skal vise to saksbehandlere i listen', async ({ setHandlers }) => {
    setHandlers(ToSaksbehandlere.parameters['msw']);
    render(<ToSaksbehandlere />);
    expect(await screen.findByText('Saksbehandlere')).toBeInTheDocument();
    expect(await screen.findByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText('Steffen')).toBeInTheDocument();
  });

  mswTest.skip('skal vise gruppe og liste med alle saksbehandlere', async ({ setHandlers }) => {
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
  });
});
