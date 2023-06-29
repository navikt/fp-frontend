import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { composeStories } from '@storybook/react';

import { RestApiMock } from '@navikt/fp-utils-test';

import AppIndex from './AppIndex';
import { requestFagsakApi, FagsakApiKeys } from '../data/fagsakContextApi';

import * as stories from './AppIndex.stories';

const { BekreftAdopsjon } = composeStories(stories);

describe('<AppIndex>', () => {
  it.skip('skal vise hjem-skjermbilde', async () => {
    const data = [
      { key: FagsakApiKeys.INIT_FETCH.name, global: true, data: { innloggetBruker: { navn: 'Peder' } } },
      { key: FagsakApiKeys.KODEVERK.name, global: true, data: {} },
      { key: FagsakApiKeys.KODEVERK_FPTILBAKE.name, global: true, data: {} },
    ];

    render(
      <RestApiMock data={data} requestApi={requestFagsakApi}>
        <MemoryRouter>
          <AppIndex />
        </MemoryRouter>
      </RestApiMock>,
    );

    expect(await screen.findByText('Svangerskap, fødsel og adopsjon')).toBeInTheDocument();
  });

  it.skip('skal vise query-feilmelding', async () => {
    const data = [
      { key: FagsakApiKeys.INIT_FETCH.name, global: true, data: { innloggetBruker: { navn: 'Peder' } } },
      { key: FagsakApiKeys.KODEVERK.name, global: true, data: {} },
      { key: FagsakApiKeys.KODEVERK_FPTILBAKE.name, global: true, data: {} },
    ];

    render(
      <RestApiMock data={data} requestApi={requestFagsakApi}>
        <MemoryRouter initialEntries={['/test?errormessage=Det+finnes+ingen+sak+med+denne+referansen%3A+266']}>
          <AppIndex />
        </MemoryRouter>
      </RestApiMock>,
    );
    expect(await screen.findByText('Det finnes ingen sak med denne referansen: 266')).toBeInTheDocument();
  });

  it('skal rendre app med korrekt informasjon', async () => {
    render(<BekreftAdopsjon />);

    expect(await screen.findByText('Svangerskap, fødsel og adopsjon')).toBeInTheDocument();
    expect(screen.getByText('Sara Saksbehandler')).toBeInTheDocument();

    expect(await screen.findByText('Foreldrepenger')).toBeInTheDocument();
    expect(screen.getByText('100%')).toBeInTheDocument();
    expect(screen.getByText('Utland')).toBeInTheDocument();
    expect(screen.getByText('3 - Under behandling')).toBeInTheDocument();
    expect(screen.getByText('Behandlingsmeny')).toBeInTheDocument();

    expect(await screen.findByText('Ingen faresignaler oppdaget')).toBeInTheDocument();

    expect(screen.getByText('Filtrer på behandling')).toBeInTheDocument();
    expect(screen.getByText('Behandling startet')).toBeInTheDocument();

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

    // TOD Fiks dette. Ser ikkje ut som lazy-loading lar seg testa
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

  it.skip('skal bekrefte aksjonspunkt', async () => {
    const utils = await render(<BekreftAdopsjon />);

    expect(await screen.findByText('Adopsjonsopplysninger fra søknad')).toBeInTheDocument();

    const begrunnValgInput = utils.getByLabelText('Begrunn endringene');
    await userEvent.type(begrunnValgInput, 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    expect(await screen.findByText('Fakta om medlemskap')).toBeInTheDocument();
    expect(screen.getByText('Vurder om søker har gyldig medlemskap i perioden')).toBeInTheDocument();
  });
});
