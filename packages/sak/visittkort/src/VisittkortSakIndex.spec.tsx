import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';

import * as stories from './VisittkortSakIndex.stories';

const {
  UtenAnnenPart,
  PersonopplysningerForBeggeParter,
  ForAnnenPartDerAktørIdErUkjent,
  MedDiskresjonskodeOgDødAnnenpart,
  MedVergeOgBrukerUnder18,
  FamilieMedDødfødtBarn,
  FamilieMedFødtBarn,
  FamilieMedTermin,
  FamilieMedOmsorgovertakelse,
  FamilieMedAdopsjon,
} = composeStories(stories);

describe('VisittkortSakIndex', () => {
  it('skal vise visittkort for far', async () => {
    render(<UtenAnnenPart />);

    expect(await screen.findByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText('123456 78910')).toBeInTheDocument();
  });

  it('skal vise visittkort for begge parter', async () => {
    render(<PersonopplysningerForBeggeParter />);

    expect(screen.getByText('Klara Ku')).toBeInTheDocument();
    expect(screen.getByText('656565 78787')).toBeInTheDocument();

    expect(await screen.findByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText('123456 78910')).toBeInTheDocument();
  });

  it('skal vise visittkort med diskresjonskode og død annenpart', async () => {
    render(<MedDiskresjonskodeOgDødAnnenpart />);

    expect(await screen.findByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText('123456 78910')).toBeInTheDocument();
    expect(await screen.findByText('Kode 6')).toBeInTheDocument();

    expect(screen.getByText('Klara Ku')).toBeInTheDocument();
    expect(screen.getByText('656565 78787')).toBeInTheDocument();
    expect(screen.getByText('Død 01.02.2024')).toBeInTheDocument();
  });

  it('skal vise visittkort for ungdom under 18 med verge', async () => {
    render(<MedVergeOgBrukerUnder18 />);

    expect(await screen.findByText('Klara Ku')).toBeInTheDocument();
    expect(screen.getByText('656565 78787')).toBeInTheDocument();
    expect(await screen.findByText('Verge')).toBeInTheDocument();
    expect(screen.getByText('Under 18')).toBeInTheDocument();
  });

  it('skal vise visittkort for ukjent annen part', async () => {
    render(<ForAnnenPartDerAktørIdErUkjent />);

    expect(await screen.findByText('Klara Ku')).toBeInTheDocument();
    expect(screen.getByText('656565 78787')).toBeInTheDocument();
    expect(screen.getByText('Ukjent navn, mangler norsk id-nr')).toBeInTheDocument();
  });

  it.each([
    ['fødsel', ['Født 21.01.2020 (5 år)'], FamilieMedFødtBarn],
    ['termin', ['Termin 21.01.2020'], FamilieMedTermin],
    ['omsorgovertakelse', ['Foreldreansvar 21.01.2020'], FamilieMedOmsorgovertakelse],
    ['adopsjon', ['Adopsjon 21.01.2020'], FamilieMedAdopsjon],
    ['dødfødsel', ['Født 21.01.2020', 'Død'], FamilieMedDødfødtBarn],
  ])('skal vise visittkort med familiehendelse: %s', (_, expected, Component) => {
    render(<Component />);
    for (const text of expected) {
      expect(screen.getByText(text)).toBeInTheDocument();
    }
  });
});
