import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { expect } from 'vitest';

import { AdresseType, sivilstandType } from '@navikt/fp-kodeverk';
import { AlleKodeverk, KjønnkodeEnum, Personoversikt } from '@navikt/fp-types';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { TIDENES_ENDE } from '@navikt/ft-utils';

import { PersonopplysningerForFamilie } from './PersonopplysningerForFamilie';

const adresse1 = {
  fom: '2023-01-01',
  tom: TIDENES_ENDE,
  adresseType: AdresseType.BOSTEDSADRESSE,
  adresselinje1: 'Industrigata 2B',
  postNummer: '4123',
  poststed: 'Bobygda',
  land: 'Norge',
};

const adresse2 = {
  fom: '2019-01-01',
  tom: '2022-12-31',
  adresseType: AdresseType.BOSTEDSADRESSE_UTLAND,
  adresselinje1: 'Veigata 1',
  postNummer: '0203',
  poststed: 'Bobygda',
  land: 'Norge',
};

const personoversikt: Personoversikt = {
  bruker: {
    navn: 'Espen Utvikler',
    aktoerId: '1',
    kjønn: KjønnkodeEnum.MANN,
    sivilstand: sivilstandType.SAMBOER,
    fødselsdato: '1989-01-01',
    adresser: [adresse1, adresse2],
  },
  annenPart: {
    navn: 'Petra Utvikler',
    aktoerId: '2',
    kjønn: KjønnkodeEnum.KVINNE,
    sivilstand: sivilstandType.SAMBOER,
    fødselsdato: '1989-01-01',
    adresser: [adresse1, adresse2],
  },
  barn: [
    {
      navn: 'Tutta Utvikler',
      fødselsdato: '2023-01-01',
      adresser: [adresse1],
      aktoerId: '3',
      kjønn: KjønnkodeEnum.KVINNE,
      sivilstand: sivilstandType.UGIFT,
    },
    {
      navn: 'Snuppa Utvikler',
      fødselsdato: '2023-01-01',
      dødsdato: '2023-04-01',
      adresser: [adresse1],
      aktoerId: '4',
      kjønn: KjønnkodeEnum.KVINNE,
      sivilstand: sivilstandType.UGIFT,
    },
  ],
};

describe('PersonopplysningerForFamilie', () => {
  it('skal vise personoplysninger for familie', () => {
    render(
      <PersonopplysningerForFamilie
        personoversikt={personoversikt}
        alleKodeverk={alleKodeverk as unknown as AlleKodeverk}
      />,
    );

    const barn1 = within(screen.getByLabelText('Tutta Utvikler'));
    expect(barn1.getByText('Barnet, Tutta Utvikler')).toBeInTheDocument();
    expect(barn1.getByText('Født 01.01.2023')).toBeInTheDocument();
    expect(barn1.queryByLabelText('Sivilstand')).not.toBeInTheDocument();
    expect(
      barn1.getByText('Adresser for barnet registrert i folkeregisteret gyldige på skjæringstidspunktet'),
    ).toBeInTheDocument();
    expect(barn1.getByText('Periode')).toBeInTheDocument();
    expect(barn1.getByText('01.01.2023 -')).toBeInTheDocument();
    expect(barn1.getByText('Adresse')).toBeInTheDocument();
    expect(barn1.getByText('Industrigata 2B, 4123 Bobygda')).toBeInTheDocument();
    expect(barn1.getByText('Type')).toBeInTheDocument();
    expect(barn1.getByText('Bostedsadresse')).toBeInTheDocument();

    const barn2 = within(screen.getByLabelText('Snuppa Utvikler'));
    expect(barn2.getByText('Barnet, Snuppa Utvikler')).toBeInTheDocument();
    expect(barn2.queryByText('Født 01.01.2023')).not.toBeInTheDocument();
    expect(barn2.getByText('Død 01.04.2023')).toBeInTheDocument();
    expect(barn2.queryByLabelText('Sivilstand')).not.toBeInTheDocument();
    expect(
      barn2.getByText('Adresser for barnet registrert i folkeregisteret gyldige på skjæringstidspunktet'),
    ).toBeInTheDocument();
    expect(barn2.getByText('Periode')).toBeInTheDocument();
    expect(barn2.getByText('01.01.2023 -')).toBeInTheDocument();
    expect(barn2.getByText('Adresse')).toBeInTheDocument();
    expect(barn2.getByText('Industrigata 2B, 4123 Bobygda')).toBeInTheDocument();
    expect(barn2.getByText('Type')).toBeInTheDocument();
    expect(barn2.getByText('Bostedsadresse')).toBeInTheDocument();

    const bruker = within(screen.getByLabelText('Espen Utvikler'));
    expect(bruker.getByText('Søker, Espen Utvikler')).toBeInTheDocument();
    expect(bruker.getByLabelText('Sivilstand')).toBeInTheDocument();
    expect(bruker.getByText('Samboer')).toBeInTheDocument();
    expect(
      bruker.getByText('Adresser for søker registrert i folkeregisteret gyldige for de siste 12 månedene'),
    ).toBeInTheDocument();
    expect(bruker.getByText('Periode')).toBeInTheDocument();
    expect(bruker.getByText('01.01.2023 -')).toBeInTheDocument();
    expect(bruker.getByText('01.01.2019 - 31.12.2022')).toBeInTheDocument();
    expect(bruker.getByText('Adresse')).toBeInTheDocument();
    expect(bruker.getByText('Industrigata 2B, 4123 Bobygda')).toBeInTheDocument();
    expect(bruker.getByText('Veigata 1, 0203 Bobygda')).toBeInTheDocument();
    expect(bruker.getByText('Type')).toBeInTheDocument();
    expect(bruker.getByText('Bostedsadresse')).toBeInTheDocument();
    expect(bruker.getByText('Bostedsadresse utland')).toBeInTheDocument();

    const annenPart = within(screen.getByLabelText('Petra Utvikler'));
    expect(annenPart.getByText('Den andre forelderen, Petra Utvikler')).toBeInTheDocument();
    expect(annenPart.getByText('Samboer')).toBeInTheDocument();
    expect(annenPart.getByLabelText('Sivilstand')).toBeInTheDocument();
    expect(
      annenPart.getByText(
        'Adresser for den andre forelderen registrert i folkeregisteret gyldige på skjæringstidspunktet',
      ),
    ).toBeInTheDocument();
    expect(annenPart.getByText('Periode')).toBeInTheDocument();
    expect(annenPart.getByText('01.01.2023 -')).toBeInTheDocument();
    expect(annenPart.getByText('01.01.2019 - 31.12.2022')).toBeInTheDocument();
    expect(annenPart.getByText('Adresse')).toBeInTheDocument();
    expect(annenPart.getByText('Industrigata 2B, 4123 Bobygda')).toBeInTheDocument();
    expect(annenPart.getByText('Veigata 1, 0203 Bobygda')).toBeInTheDocument();
    expect(annenPart.getByText('Type')).toBeInTheDocument();
    expect(annenPart.getByText('Bostedsadresse')).toBeInTheDocument();
    expect(annenPart.getByText('Bostedsadresse utland')).toBeInTheDocument();
  });
});
