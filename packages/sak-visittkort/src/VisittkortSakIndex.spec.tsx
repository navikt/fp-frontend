import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './VisittkortSakIndex.stories';
import { expect } from 'vitest';

const {
  UtenAnnenPart,
  PersonopplysningerForBeggeParter,
  ForAnnenPartDerAktørIdErUkjent,
  MedDiskresjonskodeOgDødAnnenpart,
  MedVergeOgBrukerUnder18,
  FamilieMedDødfødtBarn,
} = composeStories(stories);

describe('<VisittkortSakIndex>', () => {
  it('skal vise visittkort for far', async () => {
    render(<UtenAnnenPart />);

    expect(await screen.findByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText('123456 78910')).toBeInTheDocument();
  });

  it('skal vise visittkort for begge parter', async () => {
    render(<PersonopplysningerForBeggeParter />);

    expect(await screen.findByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText('123456 78910')).toBeInTheDocument();

    expect(screen.getByText('Klara Ku')).toBeInTheDocument();
    expect(screen.getByText('656565 78787')).toBeInTheDocument();
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

    expect(await screen.findByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText('123456 78910')).toBeInTheDocument();
    expect(await screen.findByText('Verge')).toBeInTheDocument();
    expect(screen.getByText('Under 18')).toBeInTheDocument();
  });

  it('skal vise visittkort for ukjent annen part', async () => {
    render(<ForAnnenPartDerAktørIdErUkjent />);

    expect(await screen.findByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText('123456 78910')).toBeInTheDocument();
    expect(screen.getByText('Ukjent navn, mangler norsk id-nr')).toBeInTheDocument();
  });

  it('skal vise visittkort for familie med dødfødt barn', async () => {
    render(<FamilieMedDødfødtBarn />);

    expect(await screen.findByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText('123456 78910')).toBeInTheDocument();

    expect(screen.getByText('Født 21.01.2020')).toBeInTheDocument();
    expect(screen.getByText('Død')).toBeInTheDocument();
  });
});
