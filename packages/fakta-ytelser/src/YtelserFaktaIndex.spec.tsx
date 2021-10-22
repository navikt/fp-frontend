import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './YtelserFaktaIndex.stories';

const { YtelserForHovedsøker, YtelserForHovedsøkerOgAnnenPart, UtenTilgrensedeYtelser } = composeStories(stories);

describe('<YtelserFaktaIndex>', () => {
  it('skal vise ytelser for hovedsøker', async () => {
    render(<YtelserForHovedsøker />);

    expect(await screen.findByText('Søkers ytelser')).toBeInTheDocument();
    expect(screen.queryByText('Annen parts ytelser')).not.toBeInTheDocument();

    // Kolonne headers - tabell
    expect(screen.getByText('Ytelse')).toBeInTheDocument();
    expect(screen.getByText('Periode')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('Saksnr.')).toBeInTheDocument();

    // Verdier rad 1
    expect(screen.getByText('Svangerskapspenger')).toBeInTheDocument();
    expect(screen.getByText('03.02.2019 - 04.02.2019')).toBeInTheDocument();
    expect(screen.getByText('Åpen')).toBeInTheDocument();
    expect(screen.getByText('12')).toBeInTheDocument();

    // Verdier rad 2
    expect(screen.getByText('Sykepenger')).toBeInTheDocument();
    expect(screen.getByText('05.02.2019 - 06.02.2019')).toBeInTheDocument();
    expect(screen.getByText('Løpende')).toBeInTheDocument();
    expect(screen.getByText('13')).toBeInTheDocument();
  });

  it('skal vise ytelser for hovedsøker og annen part', async () => {
    render(<YtelserForHovedsøkerOgAnnenPart />);

    expect(await screen.findByText('Søkers ytelser')).toBeInTheDocument();

    expect(await screen.findByText('Annen parts ytelser')).toBeInTheDocument();

    // Verdier rad 1 - Annen part
    expect(screen.getByText('Dagpenger')).toBeInTheDocument();
    expect(screen.getByText('03.02.2020 - 04.02.2020')).toBeInTheDocument();
    expect(screen.getByText('Avsluttet')).toBeInTheDocument();
    expect(screen.getByText('123')).toBeInTheDocument();
  });

  it('skal vise ytelser for hovedsøker uten tilgrensede ytelser', async () => {
    render(<UtenTilgrensedeYtelser />);

    expect(await screen.findByText('Søkers ytelser')).toBeInTheDocument();

    // Verdier rad 1 - Hovedsøker
    expect(screen.getByText('Svangerskapspenger')).toBeInTheDocument();
    expect(screen.getByText('Ingen')).toBeInTheDocument();
  });
});
