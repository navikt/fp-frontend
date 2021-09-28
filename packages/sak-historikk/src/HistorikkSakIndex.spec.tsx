import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './HistorikkSakIndex.stories';

const {
  BehandlingIkkeErValgt, BehandlingErValgt, HistorikkinnslagAktivitetskrav, HistorikkinnslagForeldelse, HistorikkinnslagTilbakekreving,
} = composeStories(stories);

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

  it('skal vise historikkinnslag for aktivitetskrav', async () => {
    render(<HistorikkinnslagAktivitetskrav />);
    expect(await screen.findByText('Fakta om aktivitetskrav')).toBeInTheDocument();
    expect(screen.getByText('19.09.2019 - 12:16 // Søker')).toBeInTheDocument();
    expect(screen.getByText(/Perioden/)).toBeInTheDocument();
    expect(screen.getByText(/05.01.2021 - 19.01.2021/)).toBeInTheDocument();
    expect(screen.getByText(/er avklart til/)).toBeInTheDocument();
    expect(screen.getByText(/Mor er i aktivitet/)).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse')).toBeInTheDocument();
  });

  it('skal vise historikkinnslag for foreldelse', async () => {
    render(<HistorikkinnslagForeldelse />);
    expect(await screen.findByText('19.09.2019 - 12:16 // Søker')).toBeInTheDocument();
    expect(screen.getByText(/Manuell vurdering/)).toBeInTheDocument();
    expect(screen.getByText(/av perioden 10.10.2018-./)).toBeInTheDocument();
    expect(screen.getByText(/endret fra Ja til/)).toBeInTheDocument();
    expect(screen.getByText(/Nei/)).toBeInTheDocument();
    expect(screen.getByText(/er satt til/)).toBeInTheDocument();
    expect(screen.getByText(/Dette er en ny verdi/)).toBeInTheDocument();
  });

  it('skal vise historikkinnslag for tilbakekreving', async () => {
    render(<HistorikkinnslagTilbakekreving />);
    expect(await screen.findByText('19.09.2019 - 12:16 // Søker')).toBeInTheDocument();
    expect(screen.getByText(/Vurdering/)).toBeInTheDocument();
    expect(screen.getByText(/av perioden 10.10.2018-./)).toBeInTheDocument();
    expect(screen.getByText(/endret fra Ja til/)).toBeInTheDocument();
    expect(screen.getByText(/Nei/)).toBeInTheDocument();
    expect(screen.getByText(/er satt til/)).toBeInTheDocument();
    expect(screen.getByText(/Dette er ny verdi/)).toBeInTheDocument();
  });
});
