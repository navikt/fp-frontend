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
      adresser.getByText('Dette ble markert fordi det ikke er registrert noen adresser i folkeregisteret'),
    ).toBeInTheDocument();

    expect(adresser.getByText('Søker, Ola Nordmann')).toBeInTheDocument();
    expect(
      adresser.getByText('Adresse for søker registrert i folkeregisteret gyldige for de siste 12 månedene'),
    ).toBeInTheDocument();
    expect(adresser.getByText('01.01.2019 -')).toBeInTheDocument();
    expect(adresser.getByText('Oslogata 1, 1234 Oslo NOR')).toBeInTheDocument();
    expect(adresser.getByText('Bostedsadresse')).toBeInTheDocument();
    expect(adresser.getByText('01.01.2020 - 01.01.2021')).toBeInTheDocument();
    expect(adresser.getByText('Mäkelänkatu 1 B, FI-00123 Helsinki FIN')).toBeInTheDocument();
    expect(adresser.getByText('Postadresse i utlandet')).toBeInTheDocument();
    expect(adresser.getByText('Annen part, Kari Nordmann')).toBeInTheDocument();
    expect(
      adresser.getByText('Det er mulighet for å se adresse på skjæringspunktet for den andre forelderen'),
    ).toBeInTheDocument();
    expect(
      adresser.getByText('Den andre forelderen har samme adresse som søker på skjæringstidspunktet'),
    ).toBeInTheDocument();

    // OpplysningerOmPersonstatus
    const personstatus = within(screen.getByLabelText('Personstatus og statsborgerskap for søker og annen part'));
    await userEvent.click(personstatus.getByText('Vis mer'));

    const bruker = within(screen.getByLabelText('Personstatus og statsborgerskap for Ola Nordmann'));
    expect(bruker.getByText('Søker, Ola Nordmann')).toBeInTheDocument();

    expect(bruker.getByText('Personstatus')).toBeInTheDocument();
    expect(bruker.getByText('Utvandret')).toBeInTheDocument();
    expect(bruker.getByText('Utflyttingsdato')).toBeInTheDocument();
    expect(bruker.getByText('01.01.2022')).toBeInTheDocument();

    expect(bruker.getByText('Region for statsborgerskap')).toBeInTheDocument();
    expect(bruker.getByText('Nordisk')).toBeInTheDocument();

    const annenpart = within(screen.getByLabelText('Personstatus og statsborgerskap for Kari Nordmann'));
    expect(annenpart.getByText('Annen part, Kari Nordmann')).toBeInTheDocument();

    expect(annenpart.getByText('Personstatus')).toBeInTheDocument();
    expect(annenpart.getByText('Bosatt')).toBeInTheDocument();

    expect(annenpart.getByText('Region for statsborgerskap')).toBeInTheDocument();
    expect(annenpart.getByText('3.landsborger')).toBeInTheDocument();

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
    expect(medlPerioder.getByText('Land lovv.')).toBeInTheDocument();
    expect(medlPerioder.getByText('Studieland')).toBeInTheDocument();
    expect(medlPerioder.getByText('Type medl.')).toBeInTheDocument();
    expect(medlPerioder.getByText('Dekn. type')).toBeInTheDocument();
    expect(medlPerioder.getByText('Besl. dato')).toBeInTheDocument();

    expect(medlPerioder.getByText('01.01.2022 - 01.01.2024')).toBeInTheDocument();
    expect(medlPerioder.getByText('Ja')).toBeInTheDocument();
    expect(medlPerioder.getByText('Spania')).toBeInTheDocument();
    expect(medlPerioder.getByText('Irak')).toBeInTheDocument();
    expect(medlPerioder.getByText('Endelig')).toBeInTheDocument();
    expect(medlPerioder.getByText('Full')).toBeInTheDocument();
    expect(medlPerioder.getByText('01.02.2024')).toBeInTheDocument();

    expect(medlPerioder.getByText('01.01.2019 - 01.01.2022')).toBeInTheDocument();
    expect(medlPerioder.getByText('Nei')).toBeInTheDocument();
    expect(medlPerioder.getByText('Under avklaring')).toBeInTheDocument();
    expect(medlPerioder.getByText('Opphør')).toBeInTheDocument();
    expect(medlPerioder.getByText('01.02.2020')).toBeInTheDocument();

    // OpplysningerOmOppholdstillatelser
    const oppholdstillatelser = within(screen.getByLabelText('Oppholdstillatelse(1)'));
    await userEvent.click(oppholdstillatelser.getByText('Vis mer'));

    expect(
      oppholdstillatelser.getByText('Dette ble markert fordi søker har én eller flere oppholdstilatelser'),
    ).toBeInTheDocument();
    expect(
      oppholdstillatelser.getByText(
        'Perioder med oppholdstilatelser som er registrert i folkegregisteret gyldige for de siste 12 månedene',
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
