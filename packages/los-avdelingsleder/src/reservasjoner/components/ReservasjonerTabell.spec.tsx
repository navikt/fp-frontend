import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './ReservasjonerTabell.stories';

// @ts-ignore Ta vekk når fiksa
const { ViseAtIngenReservasjonerBleFunnet, VisTabellMedReservasjoner } = composeStories(stories);

describe('<ReservasjonerTabell>', () => {
  it('skal vise tekst som viser at ingen reservasjoner er lagt til', async () => {
    render(<ViseAtIngenReservasjonerBleFunnet />);

    expect(await screen.findByText('Reservasjoner for avdelingen')).toBeInTheDocument();
    expect(screen.getByText('Ingen reservasjoner funnet')).toBeInTheDocument();
  });

  it('skal vise to reservasjoner i tabell', async () => {
    render(<VisTabellMedReservasjoner />);

    expect(await screen.findByText('Reservasjoner for avdelingen')).toBeInTheDocument();
    expect(screen.getByText('Eirik Utvikler')).toBeInTheDocument();
    expect(screen.getByText('Espen Utvikler')).toBeInTheDocument();
  });
});
