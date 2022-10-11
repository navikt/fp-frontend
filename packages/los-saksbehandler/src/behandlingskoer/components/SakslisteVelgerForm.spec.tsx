import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './SakslisteVelgerForm.stories';

const { Default, MedToSakslister } = composeStories(stories);

describe('<SakslisteVelgerForm>', () => {
  it('skal vise dropdown med en saksliste', async () => {
    const { getByText } = render(<Default />);

    expect(await screen.findByText('Utvalgskriterier')).toBeInTheDocument();

    expect(await screen.findByText('Saksliste 1')).toBeInTheDocument();
    expect(screen.queryByText('Saksliste 2')).not.toBeInTheDocument();

    expect((getByText('Saksliste 1') as HTMLOptionElement).selected).toBeTruthy();

    expect(screen.getByText('Stønadstype')).toBeInTheDocument();
    expect(screen.getByText('Foreldrepenger')).toBeInTheDocument();

    expect(screen.getByText('Behandlingstype')).toBeInTheDocument();
    expect(screen.getByText('Førstegangsbehandling')).toBeInTheDocument();
    expect(screen.getByText('Revurdering')).toBeInTheDocument();

    expect(screen.getByText('Andre filter')).toBeInTheDocument();
    expect(screen.getByText('Til beslutter')).toBeInTheDocument();

    expect(screen.getByText('Sortering')).toBeInTheDocument();
    expect(screen.getByText(/Behandlingsfrist/i)).toBeInTheDocument();
    expect(screen.getByText(/Gjeldende intervall:/i)).toBeInTheDocument();
  });

  it('skal vise dropdown med to saksliste og så bytte valgt liste', async () => {
    const { getByLabelText, getByText } = render(<MedToSakslister />);

    expect(await screen.findByText('Utvalgskriterier')).toBeInTheDocument();

    expect(screen.getByText('Saksliste 1')).toBeInTheDocument();
    expect(screen.getByText('Saksliste 2')).toBeInTheDocument();

    expect((getByText('Saksliste 1') as HTMLOptionElement).selected).toBeTruthy();
    expect((getByText('Saksliste 2') as HTMLOptionElement).selected).toBeFalsy();

    expect(screen.getByText('Foreldrepenger')).toBeInTheDocument();

    await userEvent.selectOptions(getByLabelText('Behandlingskø'), '2');

    expect((getByText('Saksliste 1') as HTMLOptionElement).selected).toBeFalsy();
    expect((getByText('Saksliste 2') as HTMLOptionElement).selected).toBeTruthy();

    expect(screen.getByText('Svangerskapspenger')).toBeInTheDocument();

    expect(screen.getByText('Behandlingstype')).toBeInTheDocument();
    expect(screen.getByText('Førstegangsbehandling')).toBeInTheDocument();
    expect(screen.getByText('Klage')).toBeInTheDocument();

    expect(screen.getByText('Andre filter')).toBeInTheDocument();
    expect(screen.getByText('Utbetaling til bruker')).toBeInTheDocument();
  });
});
