import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { composeStories } from '@storybook/react';
import * as stories from './UtbetalingsdataIs15Index.stories';

const { Default, IngenData } = composeStories(stories);

describe('<UtbetalingsdataIs15Index>', () => {
  it('skal få feilmelding når en søker på ugyldig fødselsnummer', async () => {
    render(<Default />);

    expect(await screen.findByText('Søk i Infotrygd')).toBeInTheDocument();
    expect(screen.getByText('Fødselsnummer')).toBeInTheDocument();

    const søkeInput = screen.getByLabelText('Fødselsnummer');
    await userEvent.type(søkeInput, '111');

    await userEvent.click(screen.getAllByRole('button')[1]);

    expect(await screen.findByText('Oppgitt fødselsnummer er ikke gyldig')).toBeInTheDocument();
  });

  it('skal få søkeresultat ved bruk av gyldig fødselsnummer', async () => {
    render(<Default />);

    expect(await screen.findByText('Søk i Infotrygd')).toBeInTheDocument();
    expect(screen.getByText('Fødselsnummer')).toBeInTheDocument();

    const søkeInput = screen.getByLabelText('Fødselsnummer');
    await userEvent.type(søkeInput, '07078518434');

    await userEvent.click(screen.getAllByRole('button')[1]);

    expect(await screen.findByText('Søkeresultat:')).toBeInTheDocument();

    expect(screen.getByText('Saker')).toBeInTheDocument();
    expect(screen.getByText('Foreldrepenger fødsel')).toBeInTheDocument();
    expect(screen.getByText('Engangsstønad fødsel')).toBeInTheDocument();

    expect(screen.getByText('Utbetalinger')).toBeInTheDocument();
    expect(screen.getAllByText('01.06.2015')).toHaveLength(2);
    expect(screen.getAllByText('Svangerskapspenger')).toHaveLength(1);
    expect(screen.getAllByText('20.08.2015')).toHaveLength(6);
    expect(screen.getAllByText('Foreldrepenger m/ fødsel')).toHaveLength(1);
  });

  it('skal få søkeresultat men ingen data', async () => {
    render(<IngenData />);

    expect(await screen.findByText('Søk i Infotrygd')).toBeInTheDocument();
    expect(screen.getByText('Fødselsnummer')).toBeInTheDocument();

    const søkeInput = screen.getByLabelText('Fødselsnummer');
    await userEvent.type(søkeInput, '07078518434');

    await userEvent.click(screen.getAllByRole('button')[1]);

    expect(await screen.findByText('Søkeresultat: Ingen saker funnet')).toBeInTheDocument();
  });
});
