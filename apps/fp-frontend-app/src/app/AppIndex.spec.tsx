import { Context as ResponsiveContext } from 'react-responsive';

import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { applyRequestHandlers } from 'msw-storybook-addon';

import * as stories from './AppIndex.stories';

const { Default } = composeStories(stories);

describe('AppIndex', () => {
  it('skal rendre app med korrekt informasjon', async () => {
    await applyRequestHandlers(Default.parameters['msw']);
    render(
      <ResponsiveContext.Provider value={{ width: 1000 }}>
        <Default />
      </ResponsiveContext.Provider>,
    );

    expect(await screen.findByText('Svangerskap, fødsel og adopsjon')).toBeInTheDocument();
    expect(screen.getByText('Sara Saksbehandler')).toBeInTheDocument();

    expect(await screen.findByText('Foreldrepenger')).toBeInTheDocument();
    expect(screen.getByText('100%')).toBeInTheDocument();
    expect(screen.getByText('Utland')).toBeInTheDocument();
    expect(screen.getByText('3 - Under behandling')).toBeInTheDocument();
    expect(screen.getByText('Behandlingsmeny')).toBeInTheDocument();

    expect(await screen.findByText('Ingen faresignaler oppdaget')).toBeInTheDocument();

    expect(screen.getByText('Filtrer på behandling')).toBeInTheDocument();
    expect(screen.getByText('Dette er en inntektsmelding')).toBeInTheDocument();

    expect(screen.getByText('Førstegangsbehandling')).toBeInTheDocument();
    expect(screen.getByText('Behandlingsstatus')).toBeInTheDocument();
    expect(screen.getByText('Behandling utredes')).toBeInTheDocument();
    expect(screen.getByText('Resultat')).toBeInTheDocument();
    expect(screen.getByText('Ikke fastsatt')).toBeInTheDocument();
    expect(screen.getByText('Opprettet')).toBeInTheDocument();
    expect(screen.getByText('Enhet')).toBeInTheDocument();
    expect(screen.getByText('4806')).toBeInTheDocument();

    expect(await screen.findByText('Adopsjon 07.06.2023')).toBeInTheDocument();

    expect(await screen.findByText('Hjort Brit')).toBeInTheDocument();
    expect(screen.getByText('Hjort Gabriel')).toBeInTheDocument();

    // TODO Fiks dette. Ser ikkje ut som lazy-loading lar seg testa
    /* expect(await screen.findByText('Opplysningsplikt')).toBeInTheDocument();
    expect(screen.getByText('Inngangsvilkår')).toBeInTheDocument();
    expect(screen.getByText('Beregning')).toBeInTheDocument();
    expect(screen.getByText('Uttak')).toBeInTheDocument();
    expect(screen.getByText('Tilkjent ytelse')).toBeInTheDocument();
    expect(screen.getByText('Simulering')).toBeInTheDocument();
    expect(screen.getByText('Vedtak')).toBeInTheDocument();

    expect(screen.getByText('Fakta om')).toBeInTheDocument();
    expect(screen.getByText('Saken')).toBeInTheDocument();
    expect(screen.getByText('Arbeid og inntekt')).toBeInTheDocument();
    expect(screen.getByText('Ytelser')).toBeInTheDocument();
    expect(screen.getByText('Adopsjon')).toBeInTheDocument();
    expect(screen.getByText('Medlemskap')).toBeInTheDocument();

    screen.getByText('Kontroller mot opplysningene fra adopsjonsdokumentasjonen'); */
  });
});
