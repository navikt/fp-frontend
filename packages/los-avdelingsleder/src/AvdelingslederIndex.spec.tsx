import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './AvdelingslederIndex.stories';

const { Default, HarIkkeTilgang, LasteIkonFørValgtAvdelingErSatt, SkalFiltrereBortAvdelingerSomKreverKode6 } =
  composeStories(stories);

describe('<AvdelingslederIndex>', () => {
  it.skip('skal vise lasteikon før valgt avdeling er satt', async () => {
    render(<LasteIkonFørValgtAvdelingErSatt />);
    expect(await screen.findByText('venter...')).toBeInTheDocument();
  });

  it('skal vise avdelingsleder dashboard etter at valgt avdeling er satt', async () => {
    render(<Default />);
    expect(await screen.findByText('Gjeldende behandlingskøer')).toBeInTheDocument();
    expect(screen.getByText('Nøkkeltall')).toBeInTheDocument();
    expect(screen.getByText('Saksbehandlere')).toBeInTheDocument();
    expect(screen.getByText('Reservasjoner')).toBeInTheDocument();
    expect(screen.getByText('Gjeldende behandlingskøer')).toBeInTheDocument();
    expect(screen.getByText('1234 NAV Oslo')).toBeInTheDocument();
    expect(screen.getByText('123 NAV Viken')).toBeInTheDocument();
  });

  it('skal vise at en ikke har tilgang til avdelingsleder-siden', async () => {
    render(<HarIkkeTilgang />);
    expect(await screen.findByText('Du har ikke tilgang til å bruke dette programmet')).toBeInTheDocument();
  });

  it('skal filtere bort avdelinger som krever kode 6 når avdelingsleder ikke har tilgang til dette', async () => {
    render(<SkalFiltrereBortAvdelingerSomKreverKode6 />);
    expect(await screen.findByText('Gjeldende behandlingskøer')).toBeInTheDocument();
    expect(screen.getByText('123 NAV Viken')).toBeInTheDocument();
    expect(screen.queryByText('1234 NAV Oslo')).not.toBeInTheDocument();
  });
});
