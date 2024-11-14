import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import * as stories from './BehandlingVelgerSakIndex.stories';

const { Default, IngenBehandlinger } = composeStories(stories);

describe('<BehandlingVelgerSakIndex>', () => {
  it('skal vise kun en behandling når behandlingslisten ikke er ekspandert', async () => {
    render(<Default />);
    expect(await screen.findByText('Førstegangsbehandling')).toBeInTheDocument();
    expect(screen.getByText('Behandlingsstatus')).toBeInTheDocument();
    expect(screen.getAllByText('Avsluttet')).toHaveLength(2);
    expect(screen.getByText('Resultat')).toBeInTheDocument();
    expect(screen.getByText('Avslått')).toBeInTheDocument();
    expect(screen.getByText('Opprettet')).toBeInTheDocument();
    expect(screen.getByText(/02.08.2017/)).toBeInTheDocument();
    expect(screen.getByText(/02.08.2017/)).toBeInTheDocument();
    expect(screen.getByText('Enhet')).toBeInTheDocument();
    expect(screen.getByText('Nav familie- og pensjonsytelser Bergen')).toBeInTheDocument();
    expect(screen.getByText('4812')).toBeInTheDocument();
  });

  it('skal ekspandere behandlingslisten og da vise alle behandlinger', async () => {
    render(<Default />);
    expect(await screen.findByText('Førstegangsbehandling')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Åpne behandlingsliste'));

    expect(await screen.findByText('Revurdering')).toBeInTheDocument();
    expect(screen.getByText('Dokumentinnsyn')).toBeInTheDocument();
    expect(screen.getAllByText('Førstegangsbehandling')).toHaveLength(2);
  });

  it('skal vise at ingen behandlinger er opprettet', async () => {
    render(<IngenBehandlinger />);
    expect(await screen.findByText('Ingen behandlinger er opprettet')).toBeInTheDocument();
  });

  it('skal sortere behandlingene og vise nyeste først', async () => {
    render(<Default />);
    expect(await screen.findByText('Førstegangsbehandling')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Åpne behandlingsliste'));

    expect(await screen.findByText('Revurdering')).toBeInTheDocument();

    const alleRader = screen.getAllByTestId('behandling', { exact: false });
    expect(alleRader.length).toBe(4);
    expect(alleRader[0]).toHaveTextContent(/Opprettet02.10.2017/);
    expect(alleRader[1]).toHaveTextContent(/Opprettet02.08.2017/);
    expect(alleRader[2]).toHaveTextContent(/Opprettet01.08.2017/);
    expect(alleRader[3]).toHaveTextContent(/Opprettet12.07.2017/);
  });
});
