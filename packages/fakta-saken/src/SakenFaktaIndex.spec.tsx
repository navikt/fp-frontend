import React from 'react';
import Modal from 'nav-frontend-modal';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './SakenFaktaIndex.stories';

const { EndringAvUtland, ApentAksjonspunktForInnhentingAvDokumentasjon } = composeStories(stories);

describe('<SakenFaktaIndex>', () => {
  Modal.setAppElement('body');
  it('skal endre utland, få opp lagre-modal og så lagre', async () => {
    const lagre = jest.fn();

    render(<EndringAvUtland submitCallback={lagre} />);

    expect(await screen.findByText('Utland')).toBeInTheDocument();
    expect(screen.getByText('Saken er satt til')).toBeInTheDocument();
    expect(screen.getByText('Nasjonal')).toBeInTheDocument();

    expect(screen.queryByText('Innhentelse av dokumentasjon')).not.toBeInTheDocument();

    userEvent.click(screen.getByAltText('Endre perioden'));

    expect(screen.getByText('Lagre')).toBeDisabled();

    userEvent.click(screen.getByText('Bosatt utland'));

    await waitFor(() => expect(screen.getByText('Lagre')).not.toBeDisabled());

    userEvent.click(screen.getByText('Lagre'));

    expect(await screen.findByText('Utland endres, ved behov flytt saken til riktig enhet.')).toBeInTheDocument();

    userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'BOSATT_UTLAND',
      gammelVerdi: 'NASJONAL',
      kode: '6068',
    });
  });

  it('skal få aksjonspunkt om innehenting av dokumentasjon, svar at vil bli innhentet og bekreft', async () => {
    const lagre = jest.fn();

    const utils = render(<ApentAksjonspunktForInnhentingAvDokumentasjon submitCallback={lagre} />);

    expect(await screen.findByText(
      'Søker har oppgitt informasjon om opptjening i utlandet. Innhent dokumentasjon fra utenlandsk trygdemyndighet ved behov.',
    )).toBeInTheDocument();
    expect(screen.getByText('Innhentelse av dokumentasjon')).toBeInTheDocument();

    userEvent.click(screen.getAllByText('Dokumentasjon vil bli innhentet')[0]);

    const begrunnelseInput = utils.getByLabelText('Begrunnelse');
    userEvent.type(begrunnelseInput, 'Dette er en begrunnelse');

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en begrunnelse',
      dokStatus: 'DOKUMENTASJON_VIL_BLI_INNHENTET',
      kode: '5068',
    });
  });

  it('skal få feilmelding når en ikke har fylt ut alle feltene under Opptjening utland', async () => {
    const lagre = jest.fn();

    render(<ApentAksjonspunktForInnhentingAvDokumentasjon submitCallback={lagre} />);

    expect(await screen.findByText(
      'Søker har oppgitt informasjon om opptjening i utlandet. Innhent dokumentasjon fra utenlandsk trygdemyndighet ved behov.',
    )).toBeInTheDocument();

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    expect(await screen.findAllByText('Feltet må fylles ut')).toHaveLength(2);

    expect(lagre).toHaveBeenCalledTimes(0);
  });
});
