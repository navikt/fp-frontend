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
    expect(
      await screen.findByText(
        'Det er usikkert om søker er bosatt i Norge. Vurder om søker har medlemskap i folketrygden.',
      ),
    ).toBeInTheDocument();

    // SituasjonOversikt
    const situasjon = within(screen.getByLabelText('Situasjons Oversikt'));

    expect(situasjon.getByText('Har bodd')).toBeInTheDocument();
    expect(situasjon.getByText('I Sverige')).toBeInTheDocument();

    expect(situasjon.getByText('Skal bo')).toBeInTheDocument();
    expect(situasjon.getByText('I Danmark')).toBeInTheDocument();

    expect(situasjon.getByText('Siste bostedsadresse')).toBeInTheDocument();
    expect(situasjon.getByText('I Norge')).toBeInTheDocument();

    expect(situasjon.getByText('Statsborgerskap')).toBeInTheDocument();
    expect(situasjon.getByText('Nordisk')).toBeInTheDocument();

    expect(situasjon.getByText('Personstatus')).toBeInTheDocument();
    expect(situasjon.getByText('Utvandret')).toBeInTheDocument();

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
      adresser.getByText('Dette ble markert fordi det ikke er registrert norske bostedsadresser i folkeregisteret'),
    ).toBeInTheDocument();

    expect(adresser.getByText('Søker, Ola Nordmann')).toBeInTheDocument();
    expect(
      adresser.getByText('Adresser for søker registrert i folkeregisteret gyldige for de siste 12 månedene'),
    ).toBeInTheDocument();
    expect(adresser.getByText('01.01.2019 -')).toBeInTheDocument();
    expect(adresser.getByText('Oslogata 1, 1234 Oslo')).toBeInTheDocument();
    expect(adresser.getByText('Bostedsadresse')).toBeInTheDocument();
    expect(adresser.getByText('01.01.2020 - 01.01.2021')).toBeInTheDocument();
    expect(adresser.getByText('Mäkelänkatu 1B, FI-00123 Helsinki, Finland')).toBeInTheDocument();
    expect(adresser.getByText('Kontaktadresse utland')).toBeInTheDocument();
    expect(adresser.getByText('Den andre forelderen, Kari Nordmann')).toBeInTheDocument();
    expect(
      adresser.getByText(
        'Adresser for den andre forelderen registrert i folkeregisteret gyldige på skjæringstidspunktet',
      ),
    ).toBeInTheDocument();
    expect(
      adresser.getByText('Den andre forelderen har samme adresse som søker på skjæringstidspunktet'),
    ).toBeInTheDocument();

    // OpplysningerOmPersonstatus
    const personstatus = within(screen.getByLabelText('Personstatus og statsborgerskap for søker og annen part'));
    await userEvent.click(personstatus.getByText('Vis mer'));

    const bruker = within(screen.getByLabelText('Personstatus og statsborgerskap for Ola Nordmann'));
    expect(bruker.getByText('Søker, Ola Nordmann')).toBeInTheDocument();

    const regionTabellBruker = within(bruker.getByLabelText('Region for bruker'));
    expect(regionTabellBruker.getByText('Region for statsborgerskap')).toBeInTheDocument();
    expect(regionTabellBruker.getByText('Fra og med')).toBeInTheDocument();
    expect(regionTabellBruker.getByText('Til og med')).toBeInTheDocument();

    expect(regionTabellBruker.getByText('Nordisk')).toBeInTheDocument();
    expect(regionTabellBruker.getByText('01.01.2019')).toBeInTheDocument();
    expect(regionTabellBruker.getByText('01.01.2021')).toBeInTheDocument();

    const personstatusTabellBruker = within(bruker.getByLabelText('Personstatus for bruker'));

    expect(personstatusTabellBruker.getByText('Personstatus')).toBeInTheDocument();
    expect(personstatusTabellBruker.getByText('Fra og med')).toBeInTheDocument();
    expect(personstatusTabellBruker.getByText('Til og med')).toBeInTheDocument();
    expect(personstatusTabellBruker.getByText('Utvandret')).toBeInTheDocument();
    expect(personstatusTabellBruker.getByText('01.01.2024')).toBeInTheDocument();
    expect(personstatusTabellBruker.getByText('Bosatt')).toBeInTheDocument();
    expect(personstatusTabellBruker.getByText('01.01.2019')).toBeInTheDocument();
    expect(personstatusTabellBruker.getByText('01.01.2022')).toBeInTheDocument();

    const annenpart = within(screen.getByLabelText('Personstatus og statsborgerskap for Kari Nordmann'));
    expect(annenpart.getByText('Annen part, Kari Nordmann')).toBeInTheDocument();

    const regionTabellAnnenpart = within(annenpart.getByLabelText('Region for annenpart'));

    expect(regionTabellAnnenpart.getByText('Region for statsborgerskap')).toBeInTheDocument();
    expect(regionTabellAnnenpart.getByText('Fra og med')).toBeInTheDocument();
    expect(regionTabellAnnenpart.getByText('Til og med')).toBeInTheDocument();

    expect(regionTabellAnnenpart.getByText('3.landsborger')).toBeInTheDocument();
    expect(regionTabellAnnenpart.getByText('01.01.2019')).toBeInTheDocument();
    expect(regionTabellAnnenpart.getByText('01.01.2021')).toBeInTheDocument();

    const personstatusTabellAnnenpart = within(annenpart.getByLabelText('Personstatus for annenpart'));

    expect(personstatusTabellAnnenpart.getByText('Personstatus')).toBeInTheDocument();
    expect(personstatusTabellAnnenpart.getByText('Fra og med')).toBeInTheDocument();
    expect(personstatusTabellAnnenpart.getByText('Til og med')).toBeInTheDocument();
    expect(personstatusTabellAnnenpart.getByText('Bosatt')).toBeInTheDocument();
    expect(personstatusTabellAnnenpart.getByText('01.01.2019')).toBeInTheDocument();
    expect(personstatusTabellAnnenpart.getByText('01.01.2020')).toBeInTheDocument();

    // OpplysningerFraMedlemskapsregister
    const medlPerioder = within(screen.getByLabelText('Medlemskapsperioder(2)'));
    await userEvent.click(medlPerioder.getByText('Vis mer'));

    expect(
      medlPerioder.getByText('Dette ble markert fordi søker har én eller flere perioder i medlemskapsregisteret'),
    ).toBeInTheDocument();
    expect(
      medlPerioder.getByText('Perioder fra medlemskapsregisteret gyldige for de siste 12 månedene'),
    ).toBeInTheDocument();
    expect(medlPerioder.getByText('Periode')).toBeInTheDocument();
    expect(medlPerioder.getByText('Er medlem')).toBeInTheDocument();
    expect(medlPerioder.getByText('Lovvalgland')).toBeInTheDocument();
    expect(medlPerioder.getByText('Studieland')).toBeInTheDocument();
    expect(medlPerioder.getByText('Lovvalg')).toBeInTheDocument();
    expect(medlPerioder.getByText('Dekn. type')).toBeInTheDocument();
    expect(medlPerioder.getByText('Besl. dato')).toBeInTheDocument();

    expect(medlPerioder.getByText('01.01.2023 - 01.01.2024')).toBeInTheDocument();
    expect(medlPerioder.getByText('Ja')).toBeInTheDocument();
    expect(medlPerioder.getByText('Norge')).toBeInTheDocument();
    expect(medlPerioder.getByText('Sverige')).toBeInTheDocument();
    expect(medlPerioder.getByText('Endelig')).toBeInTheDocument();
    expect(medlPerioder.getByText('Full')).toBeInTheDocument();
    expect(medlPerioder.getByText('24.09.2024')).toBeInTheDocument();

    expect(medlPerioder.getByText('01.01.2019 - 01.01.2022')).toBeInTheDocument();
    expect(medlPerioder.getByText('Nei')).toBeInTheDocument();
    expect(medlPerioder.getByText('Finland')).toBeInTheDocument();
    expect(medlPerioder.getByText('Under avklaring')).toBeInTheDocument();
    expect(medlPerioder.getByText('Opphør')).toBeInTheDocument();
    expect(medlPerioder.getByText('01.02.2020')).toBeInTheDocument();

    // OpplysningerOmOppholdstillatelser
    const oppholdstillatelser = within(screen.getByLabelText('Oppholdstillatelse(1)'));
    await userEvent.click(oppholdstillatelser.getByText('Vis mer'));

    expect(
      oppholdstillatelser.getByText('Dette ble markert fordi søker mangler oppholdstillatelse'),
    ).toBeInTheDocument();
    expect(
      oppholdstillatelser.getByText(
        'Perioder med oppholdstillatelser som er registrert i folkeregisteret gyldige for de siste 12 månedene',
      ),
    ).toBeInTheDocument();
    expect(oppholdstillatelser.getByText('Periode')).toBeInTheDocument();
    expect(oppholdstillatelser.getByText('Type')).toBeInTheDocument();
    expect(oppholdstillatelser.getByText('13.10.2021 - 13.01.2024')).toBeInTheDocument();
    expect(oppholdstillatelser.getByText('Permanent oppholdstillatelse')).toBeInTheDocument();

    expect(screen.getByText('Begrunn endringene')).toBeInTheDocument();
    expect(screen.getByText('Bekreft')).toBeInTheDocument();
  });
});
