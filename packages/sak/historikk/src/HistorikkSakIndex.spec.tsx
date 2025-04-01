import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './HistorikkSakIndex.stories';

const { BehandlingIkkeErValgt, BehandlingErValgt } = composeStories(stories);

describe('HistorikkSakIndex', () => {
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

    expect(screen.getAllByTestId('historikkinnslag')).toHaveLength(10);

    await userEvent.click(screen.getByText('Filtrer på behandling'));

    expect(await screen.findAllByTestId('historikkinnslag')).toHaveLength(1);
  });

  it('skal sortere og vise nyeste historikkinnslag først', async () => {
    await BehandlingIkkeErValgt.run();
    expect(await screen.findByText(/Historikk/)).toBeInTheDocument();

    const historikkinnslag = screen.getAllByTestId('historikkinnslag');
    expect(historikkinnslag).toHaveLength(10);
  });
});
