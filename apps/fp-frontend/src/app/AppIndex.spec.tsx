import { Context as ResponsiveContext } from 'react-responsive';

import { composeStories } from '@storybook/react';
import { render, screen, waitFor, within } from '@testing-library/react';
import { applyRequestHandlers, type MswParameters } from 'msw-storybook-addon';
import { expect } from 'vitest';

import * as stories from './AppIndex.stories';

const { Default } = composeStories(stories);

describe('AppIndex', () => {
  it('skal rendre app med korrekt informasjon', async () => {
    applyRequestHandlers(Default.parameters['msw'] as MswParameters['msw']);
    render(
      <ResponsiveContext.Provider value={{ width: 1000 }}>
        <Default />
      </ResponsiveContext.Provider>,
    );

    expect(await screen.findByText('Svangerskap, fødsel og adopsjon')).toBeInTheDocument();
    expect(screen.getByText('Sara Saksbehandler')).toBeInTheDocument();

    expect(await screen.findByText('Foreldrepenger')).toBeInTheDocument();
    expect(screen.getByText('100%')).toBeInTheDocument();
    expect(screen.getByText('1 - Under behandling')).toBeInTheDocument();
    expect(screen.getByText('Behandlingsmeny')).toBeInTheDocument();

    expect(screen.getByText('Førstegangsbehandling')).toBeInTheDocument();
    expect(screen.getByText('Behandlingsstatus')).toBeInTheDocument();
    expect(screen.getByText('Behandling utredes')).toBeInTheDocument();
    expect(screen.getByText('Resultat')).toBeInTheDocument();
    expect(screen.getByText('Ikke fastsatt')).toBeInTheDocument();
    expect(screen.getByText('Opprettet')).toBeInTheDocument();
    expect(screen.getByText('05.03.2025 kl. 16:42')).toBeInTheDocument();
    expect(screen.getByText('Enhet')).toBeInTheDocument();
    expect(screen.getByText('4867')).toBeInTheDocument();

    expect(screen.getByText('Ingen faresignaler oppdaget')).toBeInTheDocument();

    expect(screen.getAllByText('Historikk')).toHaveLength(2);
    expect(screen.getByText('Filtrer på behandling')).toBeInTheDocument();
    expect(screen.getByText('Vedlegg er mottatt')).toBeInTheDocument();
    expect(screen.getByText('Behandling er startet')).toBeInTheDocument();

    expect(screen.getByText('Kristine Kalv')).toBeInTheDocument();
    expect(screen.getByText('214871 32273')).toBeInTheDocument();
    expect(screen.getByText('Asbjørn Lemur')).toBeInTheDocument();
    expect(screen.getByText('215283 17364')).toBeInTheDocument();
    expect(screen.getByText(/Født 05.03.2025/)).toBeInTheDocument();

    // Vent til prosesspanel er ferdig lastet
    await waitFor(
      () => {
        expect(screen.queryByText('Venter…')).not.toBeInTheDocument();
      },
      { timeout: 20000 },
    );

    const prosessMeny = within(await screen.findByTestId('prosess-meny'));
    expect(prosessMeny.getByText('Opplysningsplikt')).toBeInTheDocument();
    expect(prosessMeny.getByText('Inngangsvilkår')).toBeInTheDocument();
    expect(prosessMeny.getByText('Beregning')).toBeInTheDocument();
    expect(prosessMeny.getByText('Uttak')).toBeInTheDocument();
    expect(prosessMeny.getByText('Tilkjent ytelse')).toBeInTheDocument();
    expect(prosessMeny.getByText('Simulering')).toBeInTheDocument();
    expect(prosessMeny.getByText('Vedtak')).toBeInTheDocument();

    const faktaMeny = within(await screen.findByTestId('fakta-meny'));
    expect(faktaMeny.getByText('Fakta om')).toBeInTheDocument();
    expect(faktaMeny.getByText('Saken')).toBeInTheDocument();
    expect(faktaMeny.getByText('Arbeid og inntekt')).toBeInTheDocument();
    expect(faktaMeny.getByText('Inntektsmelding')).toBeInTheDocument();
    expect(faktaMeny.getByText('Ytelser')).toBeInTheDocument();
    expect(faktaMeny.getByText('Fødsel')).toBeInTheDocument();
    expect(faktaMeny.getByText('Medlemskap')).toBeInTheDocument();
    expect(faktaMeny.getByText('Opptjening')).toBeInTheDocument();
    expect(faktaMeny.getByText('Omsorg og rett')).toBeInTheDocument();
    expect(faktaMeny.getByText('Beregning')).toBeInTheDocument();
    expect(faktaMeny.getByText('Uttak')).toBeInTheDocument();
  });
});
