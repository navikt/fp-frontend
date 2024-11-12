import { screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import * as stories from './HistorikkSakIndex.stories';

const { BehandlingIkkeErValgt, BehandlingErValgt } = composeStories(stories);

describe('<HistorikkSakIndex>', () => {
  it('skal vise historikk uten behandlingsfilter når ingen behandlinger er valgt', async () => {
    await BehandlingIkkeErValgt.run();
    expect(await screen.findByText(/Historikk/)).toBeInTheDocument();
    expect(screen.queryByText('Filtrer på behandling')).not.toBeInTheDocument();
  });

  it('skal vise historikk med behandlingsfilter når behandling er valgt', async () => {
    await BehandlingErValgt.run();
    expect(await screen.findByText(/Historikk/)).toBeInTheDocument();
    expect(screen.getByText('Filtrer på behandling')).toBeInTheDocument();
  });

  it('skal filtrere bort historikkinnslag ved filtrering på behandling', async () => {
    await BehandlingErValgt.run();
    expect(await screen.findByText(/Historikk/)).toBeInTheDocument();

    expect(screen.getAllByTestId('snakkeboble', { exact: false })).toHaveLength(5);

    await userEvent.click(screen.getByText('Filtrer på behandling'));

    expect(await screen.findAllByTestId('snakkeboble', { exact: false })).toHaveLength(2);
  });

  it('skal sortere og vise nyeste historikkinnslag først', async () => {
    await BehandlingIkkeErValgt.run();
    expect(await screen.findByText(/Historikk/)).toBeInTheDocument();

    const snakkebobler = screen.getAllByTestId('snakkeboble', { exact: false });
    expect(snakkebobler[0]).toHaveTextContent(/23.09.2019 - 16:22/);
    expect(snakkebobler[1]).toHaveTextContent(/20.09.2019 - 14:11/);
    expect(snakkebobler[2]).toHaveTextContent(/19.09.2019 - 12:16/);
    expect(snakkebobler[3]).toHaveTextContent(/18.09.2019 - 15:25/);
    expect(snakkebobler[4]).toHaveTextContent(/18.09.2019 - 13:12/);
  });
});
