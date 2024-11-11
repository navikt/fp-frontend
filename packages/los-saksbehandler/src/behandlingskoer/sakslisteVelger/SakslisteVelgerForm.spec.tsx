import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import * as stories from './SakslisteVelgerForm.stories';

const { Default, MedToSakslister, MedFlereEnnTreSaksbehandlere } = composeStories(stories);

describe('<SakslisteVelgerForm>', () => {
  it('skal vise dropdown med en saksliste', async () => {
    const { getByText } = render(<Default />);

    expect(await screen.findByText('Saksliste 1')).toBeInTheDocument();
    expect(screen.queryByText('Saksliste 2')).not.toBeInTheDocument();

    expect((getByText('Saksliste 1') as HTMLOptionElement).selected).toBeTruthy();

    expect(screen.getByText('Stønad')).toBeInTheDocument();
    expect(screen.getByText('Foreldrepenger')).toBeInTheDocument();

    expect(screen.getByText('Behandling')).toBeInTheDocument();
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

    expect(await screen.findByText('Saksliste 1')).toBeInTheDocument();

    expect(screen.getByText('Saksliste 2')).toBeInTheDocument();

    expect((getByText('Saksliste 1') as HTMLOptionElement).selected).toBeTruthy();
    expect((getByText('Saksliste 2') as HTMLOptionElement).selected).toBeFalsy();

    expect(screen.getByText('Foreldrepenger')).toBeInTheDocument();

    await userEvent.selectOptions(getByLabelText('Behandlingskø'), '2');

    expect((getByText('Saksliste 1') as HTMLOptionElement).selected).toBeFalsy();
    expect((getByText('Saksliste 2') as HTMLOptionElement).selected).toBeTruthy();

    expect(screen.getByText('Svangerskapspenger')).toBeInTheDocument();

    expect(screen.getByText('Behandling')).toBeInTheDocument();
    expect(screen.getByText('Førstegangsbehandling')).toBeInTheDocument();
    expect(screen.getByText('Klage')).toBeInTheDocument();

    expect(screen.getByText('Andre filter')).toBeInTheDocument();
    expect(screen.getByText('Utbetaling til bruker')).toBeInTheDocument();
  });

  it('skal i utgangspunktet kun vise tre saksbehandlere og så klikke for å vise alle', async () => {
    render(<MedFlereEnnTreSaksbehandlere />);

    expect(await screen.findByText('Andre som jobber med denne køen nå')).toBeInTheDocument();

    expect(screen.getByText('Auto Joakim')).toBeInTheDocument();
    expect(screen.getByText('Bente Frogner')).toBeInTheDocument();
    expect(screen.getByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText('2 andre')).toBeInTheDocument();
    expect(screen.queryByText('Hans Haugerud')).not.toBeInTheDocument();
    expect(screen.queryByText('Olav Hellerud')).not.toBeInTheDocument();

    await userEvent.click(screen.getByText('Se alle'));

    expect(await screen.findByText('Se færre')).toBeInTheDocument();

    expect(screen.queryByText('2 andre')).not.toBeInTheDocument();
    expect(screen.getByText('Hans Haugerud')).toBeInTheDocument();
    expect(screen.getByText('Olav Hellerud')).toBeInTheDocument();
  });
});
