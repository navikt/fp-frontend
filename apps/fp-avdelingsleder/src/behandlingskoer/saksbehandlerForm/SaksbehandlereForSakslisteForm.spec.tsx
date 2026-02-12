import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { applyRequestHandlers, type MswParameters } from 'msw-storybook-addon';

import * as stories from './SaksbehandlereForSakslisteForm.stories';

const { IngenSaksbehandlere, ToSaksbehandlere, SaksbehandlereSomErGruppert } = composeStories(stories);

describe('SaksbehandlereForSakslisteForm', () => {
  it('skal vise tekst som viser at ingen saksbehandlere er tilknyttet', async () => {
    applyRequestHandlers(IngenSaksbehandlere.parameters['msw'] as MswParameters['msw']);
    render(<IngenSaksbehandlere />);
    expect(await screen.findByText('Saksbehandlere')).toBeInTheDocument();
    expect(await screen.findByText('Avdelingen har ingen saksbehandlere tilknyttet')).toBeInTheDocument();
  });

  it('skal vise to saksbehandlere i listen', async () => {
    applyRequestHandlers(ToSaksbehandlere.parameters['msw'] as MswParameters['msw']);
    render(<ToSaksbehandlere />);
    expect(await screen.findByText('Saksbehandlere')).toBeInTheDocument();
    expect(await screen.findByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText('Steffen')).toBeInTheDocument();
  });

  it('skal vise gruppe og liste med alle saksbehandlere', async () => {
    applyRequestHandlers(SaksbehandlereSomErGruppert.parameters['msw'] as MswParameters['msw']);
    render(<SaksbehandlereSomErGruppert />);
    expect(await screen.findByText('Gruppenavn')).toBeInTheDocument();
    expect(screen.getByText('Saksbehandlere')).toBeInTheDocument();
    expect(screen.getByText('Gruppe 1')).toBeInTheDocument();
    expect(screen.getByText('Antall saksbehandlere')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();

    expect(screen.getAllByText('Steffen')).toHaveLength(2);
    expect(screen.getAllByText('Espen Utvikler')).toHaveLength(2);
    expect(screen.getByText('Eirik')).toBeInTheDocument();
  });
});
