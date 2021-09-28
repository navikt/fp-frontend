import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './HistorikkSakIndex.stories';

const { BehandlingIkkeErValgt, BehandlingErValgt } = composeStories(stories);

describe('<HistorikkSakIndex>', () => {
  it('skal vise historikk uten behandlingsfilter når ingen behandlinger er valgt', async () => {
    render(<BehandlingIkkeErValgt />);
    expect(await screen.findByText('Vedtaksløsningen')).toBeInTheDocument();
    expect(screen.queryByText('Filtrer på behandling')).not.toBeInTheDocument();
  });

  it('skal vise historikk med behandlingsfilter når behandling er valgt', async () => {
    render(<BehandlingErValgt />);
    expect(await screen.findByText('Vedtaksløsningen')).toBeInTheDocument();
    expect(screen.getByText('Filtrer på behandling')).toBeInTheDocument();
  });

  it('skal filtrere bort historikkinnslag ved filtrering på behandling', async () => {
    render(<BehandlingErValgt />);
    expect(await screen.findByText('Vedtaksløsningen')).toBeInTheDocument();

    expect(screen.getAllByTestId('snakkeboble', { exact: false })).toHaveLength(3);

    userEvent.click(screen.getByText('Filtrer på behandling'));

    expect(await screen.findAllByTestId('snakkeboble', { exact: false })).toHaveLength(2);
  });

  it('skal sortere og vise nyeste historikkinnslag først', async () => {
    render(<BehandlingIkkeErValgt />);
    expect(await screen.findByText('Vedtaksløsningen')).toBeInTheDocument();

    const snakkebobler = screen.getAllByTestId('snakkeboble', { exact: false });
    expect(snakkebobler[0]).toHaveTextContent(/19.09.2019 - 12:16/);
    expect(snakkebobler[1]).toHaveTextContent(/18.09.2019 - 15:25/);
    expect(snakkebobler[2]).toHaveTextContent(/18.09.2019 - 13:12/);
  });
});
