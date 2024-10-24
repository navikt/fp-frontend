import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import * as stories from './HistorikkSakIndex.stories';

const { BehandlingIkkeErValgt, BehandlingErValgt } = composeStories(stories);

describe('<HistorikkSakIndex>', () => {
  it('skal vise historikk uten behandlingsfilter når ingen behandlinger er valgt', async () => {
    render(<BehandlingIkkeErValgt />);
    expect(await screen.findByText(/Historikk/)).toBeInTheDocument();
    expect(screen.queryByText('Filtrer på behandling')).not.toBeInTheDocument();
  });

  it('skal vise historikk med behandlingsfilter når behandling er valgt', async () => {
    render(<BehandlingErValgt />);
    expect(await screen.findByText(/Historikk/)).toBeInTheDocument();
    expect(screen.getByText('Filtrer på behandling')).toBeInTheDocument();
  });

  it('skal filtrere bort historikkinnslag ved filtrering på behandling', async () => {
    render(<BehandlingErValgt />);
    expect(await screen.findByText(/Historikk/)).toBeInTheDocument();

    expect(screen.getAllByTestId('snakkeboble', { exact: false })).toHaveLength(5);

    await userEvent.click(screen.getByText('Filtrer på behandling'));

    expect(await screen.findAllByTestId('snakkeboble', { exact: false })).toHaveLength(2);
  });

  it('skal sortere og vise nyeste historikkinnslag først', async () => {
    render(<BehandlingIkkeErValgt />);
    expect(await screen.findByText(/Historikk/)).toBeInTheDocument();

    const snakkebobler = screen.getAllByTestId('snakkeboble', { exact: false });
    expect(snakkebobler[0]).toHaveTextContent(/Arbeidsgiver•23.09.2019 kl.16:22/);
    expect(snakkebobler[1]).toHaveTextContent(/Beslutter Z984523•20.09.2019 kl.14:11/);
    expect(snakkebobler[2]).toHaveTextContent(/Vedtaksløsningen•19.09.2019 kl.12:16/);
    expect(snakkebobler[3]).toHaveTextContent(/Saksbehandler Z991110•18.09.2019 kl.15:25/);
    expect(snakkebobler[4]).toHaveTextContent(/Søker•18.09.2019 kl.13:12/);
  });
});
