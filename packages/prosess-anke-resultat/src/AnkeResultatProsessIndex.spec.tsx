import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './AnkeResultatProsessIndex.stories';

const { ResultatVedStadfestYtelsesvedtak, ResultatVedOppheveOgHjemsende, ResultatVedOmgjør, ResultatVedAvvis } =
  composeStories(stories);

describe('<AnkeResultatProsessIndex>', () => {
  it('skal vise resultat ved stadfestet vedtak', async () => {
    render(<ResultatVedStadfestYtelsesvedtak />);

    expect(await screen.findByText('Resultat')).toBeInTheDocument();

    expect(screen.getByText('Innstilling på resultat av anke')).toBeInTheDocument();
    expect(screen.getByText('Vedtaket stadfestes')).toBeInTheDocument();

    expect(screen.getByText('Begrunnelse')).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse')).toBeInTheDocument();
  });

  it('skal vise resultat ved opphevet vedtak', async () => {
    render(<ResultatVedOppheveOgHjemsende />);

    expect(await screen.findByText('Resultat')).toBeInTheDocument();

    expect(screen.getByText('Innstilling på resultat av anke')).toBeInTheDocument();
    expect(screen.getByText('Vedtaket oppheves')).toBeInTheDocument();

    expect(screen.getByText('Begrunnelse')).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse')).toBeInTheDocument();
  });

  it('skal vise resultat ved omgjort vedtak', async () => {
    render(<ResultatVedOmgjør />);

    expect(await screen.findByText('Resultat')).toBeInTheDocument();

    expect(screen.getByText('Innstilling på resultat av anke')).toBeInTheDocument();
    expect(screen.getByText('Vedtaket omgjøres til ugunst')).toBeInTheDocument();

    expect(screen.getByText('Begrunnelse')).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse')).toBeInTheDocument();
  });

  it('skal vise resultat ved avvist vedtak', async () => {
    render(<ResultatVedAvvis />);

    expect(await screen.findByText('Resultat')).toBeInTheDocument();

    expect(screen.getByText('Innstilling på resultat av anke')).toBeInTheDocument();
    expect(screen.getByText('Vedtaket avvises')).toBeInTheDocument();

    expect(screen.getByText('Årsak')).toBeInTheDocument();
    expect(screen.getByText('Den som anker er ikke part i saken')).toBeInTheDocument();
    expect(screen.getByText('Det ankes ikke på konkrete elementer i vedtaket')).toBeInTheDocument();
    expect(screen.getByText('Ankefristen er ikke overholdt')).toBeInTheDocument();
    expect(screen.getByText('Anken er ikke signert')).toBeInTheDocument();

    expect(screen.getByText('Skal anken subsidiært realitetsbehandles?')).toBeInTheDocument();
    expect(screen.getByText('Ja')).toBeInTheDocument();

    expect(screen.getByText('Begrunnelse')).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse')).toBeInTheDocument();
  });
});
