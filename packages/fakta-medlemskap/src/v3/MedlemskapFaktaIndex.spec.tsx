import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { composeStories } from '@storybook/react';
import * as stories from './MedlemskapFaktaIndex.stories';
import userEvent from '@testing-library/user-event';
const { Default } = composeStories(stories);

describe('<MedlemskapFaktaIndex>', () => {
  it('skal vise medlemspanel med aksjonspunkt', async () => {
    render(<Default submitCallback={vi.fn()} />);
    expect(await screen.findByText('Vurder om søker har medlemskap i folketrygden.')).toBeInTheDocument();

    // SituasjonOversikt
    const situasjon = within(screen.getByLabelText('Situasjons Oversikt'));

    expect(situasjon.getByText('Har bodd')).toBeInTheDocument();
    expect(situasjon.getByText('I Sverige')).toBeInTheDocument();

    expect(situasjon.getByText('Skal bo')).toBeInTheDocument();
    expect(situasjon.getByText('I Danmark')).toBeInTheDocument();

    expect(situasjon.getByText('Siste adresse')).toBeInTheDocument();
    expect(situasjon.getByText('I Norge')).toBeInTheDocument();

    expect(situasjon.getByText('Statsborgerskap')).toBeInTheDocument();
    expect(situasjon.getByText('Nordisk')).toBeInTheDocument();

    expect(situasjon.getByText('Personstatus')).toBeInTheDocument();
    expect(situasjon.getByText('Bosatt (f.reg)')).toBeInTheDocument();

    expect(screen.getByText('Opplysninger fra søknad')).toBeInTheDocument();
    expect(screen.getByText('Adresser til søker(2) og annen part(2)')).toBeInTheDocument();

    // OpplysningerOmUtenlandsopphold
    const utenlandsopphold = within(screen.getByLabelText('Opplysninger fra søknad'));
    await userEvent.click(utenlandsopphold.getByText('Vis mer'));

    expect(
      utenlandsopphold.getByText('Dette ble markert fordi søker har oppgitt at man skal eller har bodd i utlandet'),
    ).toBeInTheDocument();

    expect(utenlandsopphold.getByText('Hvor har du bodd de siste 12 månedene?')).toBeInTheDocument();
    expect(utenlandsopphold.getByText('Jeg har bodd i Norge')).toBeInTheDocument();
    expect(utenlandsopphold.getByText('Hvilke land og hvor lenge har du bodd der?')).toBeInTheDocument();
    expect(utenlandsopphold.getByText('01.01.2010 - 01.01.2011')).toBeInTheDocument();
    expect(utenlandsopphold.getByText('i Sverige')).toBeInTheDocument();
    expect(utenlandsopphold.getByText('Hvor skal du bo de neste 12 månedene?')).toBeInTheDocument();
    expect(utenlandsopphold.getByText('Jeg skal bo i Norge')).toBeInTheDocument();
    expect(utenlandsopphold.getByText('Hvilke land og hvor lenge skal du bo der?')).toBeInTheDocument();
    expect(utenlandsopphold.getByText('01.01.2018 - 01.01.2019')).toBeInTheDocument();
    expect(utenlandsopphold.getByText('i Danmark')).toBeInTheDocument();

    // OpplysningerOmAdresser
    const adresser = within(screen.getByLabelText('Adresser til søker(2) og annen part(2)'));
    await userEvent.click(adresser.getByText('Vis mer'));

    expect(
      adresser.getByText('Dette ble markert fordi det er registrert én eller flere adresser i utlandet'),
    ).toBeInTheDocument();
    expect(
      adresser.getByText('Dette ble markert fordi det ikke er registrert noen adresser i folkeregisteret'),
    ).toBeInTheDocument();

    expect(adresser.getByText('Søker, Ola Nordmann:')).toBeInTheDocument();
    expect(
      adresser.getByText('Bostedsadresse for søker registrert i folkeregisteret gyldige for de siste 12 månedene'),
    ).toBeInTheDocument();
    expect(adresser.getByText('01.01.2019 - 01.01.2020')).toBeInTheDocument();
    expect(adresser.getByText('Oslogata 1, 1234 Oslo NOR')).toBeInTheDocument();
    expect(adresser.getByText('Bostedsadresse')).toBeInTheDocument();
    expect(adresser.getByText('01.01.2020 - 01.01.2021')).toBeInTheDocument();
    expect(adresser.getByText('Mäkelänkatu 1 B, FI-00123 Helsinki FIN')).toBeInTheDocument();
    expect(adresser.getByText('Postadresse i utlandet')).toBeInTheDocument();
    expect(adresser.getByText('Annen part, Kari Nordmann:')).toBeInTheDocument();
    expect(
      adresser.getByText('Det er mulighet for å se bostedadresse på skjæringspunktet for den andre forelderen'),
    ).toBeInTheDocument();
    expect(
      adresser.getByText('Den andre forelderen har samme adresse som søker på skjæringstidspunktet'),
    ).toBeInTheDocument();

    expect(screen.getByText('Begrunn endringene')).toBeInTheDocument();
    expect(screen.getByText('Bekreft')).toBeInTheDocument();
  });
});
