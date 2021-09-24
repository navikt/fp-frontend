import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './VisittkortSakIndex.stories';

const { IkkeHarAnnenPart, PersonopplysningerForBeggeParter, ForAnnenPartDerAktørIdErUkjent } = composeStories(stories);

describe('<VisittkortSakIndex>', () => {
  it('skal vise visittkort for far', async () => {
    render(<IkkeHarAnnenPart />);

    expect(await screen.findByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText('1234567')).toBeInTheDocument();
  });

  it('skal vise visittkort for begge parter', async () => {
    render(<PersonopplysningerForBeggeParter />);

    expect(await screen.findByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText('1234567')).toBeInTheDocument();
    expect(screen.getByText('Klara Ku')).toBeInTheDocument();
    expect(screen.getByText('6565656')).toBeInTheDocument();
  });

  it('skal vise visittkort for ukjent annen part', async () => {
    render(<ForAnnenPartDerAktørIdErUkjent />);

    expect(await screen.findByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText('1234567')).toBeInTheDocument();
    expect(screen.getByText('Ukjent navn, mangler norsk id-nr')).toBeInTheDocument();
  });
});
