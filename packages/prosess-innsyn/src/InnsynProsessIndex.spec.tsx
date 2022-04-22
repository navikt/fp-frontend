import React from 'react';
import {
  render, screen, waitFor, fireEvent,
} from '@testing-library/react';
import moment from 'moment';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import * as stories from './InnsynProsessIndex.stories';

const {
  PanelForVurderingAvInnsyn,
} = composeStories(stories);

describe('<InnsynProsessIndex>', () => {
  it('skal fylle ut og så bekrefte avslått innsyn', async () => {
    const lagre = jest.fn();

    const utils = render(<PanelForVurderingAvInnsyn submitCallback={lagre} />);

    expect(await screen.findByText('Innsynsbehandling')).toBeInTheDocument();
    expect(screen.getByText('Følg manuelle rutiner for innsynsbehandling')).toBeInTheDocument();

    const datoMottattKravInput = utils.getByLabelText('Dato for mottatt krav om innsyn');
    userEvent.paste(datoMottattKravInput, '23.12.2021');
    fireEvent.blur(datoMottattKravInput);

    expect(screen.getByText('Velg innsynsdokumentasjon til søker')).toBeInTheDocument();
    expect(screen.getByText('Dette er et dokument')).toBeInTheDocument();

    const vurderingInput = utils.getByLabelText('Vurdering');
    userEvent.paste(vurderingInput, 'Dette er en vurdering');

    userEvent.click(screen.getByText('Bekreft og fortsett'));
    expect(await screen.findByText('Feltet må fylles ut')).toBeInTheDocument();

    userEvent.click(screen.getByText('Avslått innsyn'));

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en vurdering',
      fristDato: moment().add(3, 'days').format(ISO_DATE_FORMAT),
      innsynDokumenter: [{
        dokumentId: '3',
        fikkInnsyn: false,
        journalpostId: '2',
      }],
      innsynResultatType: 'AVVIST',
      kode: '5037',
      mottattDato: '2021-12-23',
      sattPaVent: undefined,
    });
  });

  it('skal ekspandere liste med vedtaksdokumenter', async () => {
    render(<PanelForVurderingAvInnsyn />);

    expect(await screen.findByText('Innsynsbehandling')).toBeInTheDocument();

    expect(screen.queryByText('01.01.2019')).not.toBeInTheDocument();

    userEvent.click(screen.getByText('Vedtaksdokumentasjon på saken (1)'));

    expect(await screen.findByText('01.01.2019')).toBeInTheDocument();
    expect(screen.getByText('Førstegangsbehandling')).toBeInTheDocument();
  });

  it('skal fylle ut og så bekrefte innvilget innsyn', async () => {
    const lagre = jest.fn();

    const utils = render(<PanelForVurderingAvInnsyn submitCallback={lagre} />);

    expect(await screen.findByText('Innsynsbehandling')).toBeInTheDocument();

    const datoMottattKravInput = utils.getByLabelText('Dato for mottatt krav om innsyn');
    userEvent.paste(datoMottattKravInput, '23.12.2021');
    fireEvent.blur(datoMottattKravInput);

    userEvent.click(screen.getByRole('checkbox'));

    const vurderingInput = utils.getByLabelText('Vurdering');
    userEvent.paste(vurderingInput, 'Dette er en vurdering');

    userEvent.click(screen.getByText('Innvilget innsyn'));

    userEvent.click(screen.getByText('Sett behandling på vent i påvente av skanning'));

    const sattPaVentFristInput = utils.getByLabelText('Behandling blir satt på vent med frist');
    userEvent.clear(sattPaVentFristInput);
    userEvent.paste(sattPaVentFristInput, '29.12.2021');
    fireEvent.blur(sattPaVentFristInput);

    userEvent.click(screen.getByText('Sett behandling på vent'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en vurdering',
      fristDato: '2021-12-29',
      innsynDokumenter: [{
        dokumentId: '3',
        fikkInnsyn: true,
        journalpostId: '2',
      }],
      innsynResultatType: 'INNV',
      kode: '5037',
      mottattDato: '2021-12-23',
      sattPaVent: true,
    });
  });
});
