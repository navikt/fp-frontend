import React from 'react';
import { Modal } from '@navikt/ds-react';
import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
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

    await userEvent.click(screen.getByAltText('Endre perioden'));

    expect(screen.getByText('Lagre').closest('button')).toBeDisabled();

    await userEvent.click(screen.getByText('Bosatt utland'));

    expect(await screen.findByText('Lagre')).toBeEnabled();

    await userEvent.click(screen.getByText('Lagre'));

    expect(await screen.findByText('Utland endres, ved behov flytt saken til riktig enhet.')).toBeInTheDocument();

    await userEvent.click(screen.getByText('OK'));

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
      'Se søknad for informasjon om oppgitt rettighet fra EØS. Innhent dokumentasjon fra utenlandsk trygdemyndighet ved behov',
    )).toBeInTheDocument();
    expect(screen.getByText('Innhentelse av dokumentasjon')).toBeInTheDocument();

    await userEvent.click(screen.getAllByText('Dokumentasjon vil bli innhentet')[0]);

    const begrunnelseInput = utils.getByLabelText('Begrunnelse');
    await userEvent.type(begrunnelseInput, 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en begrunnelse',
      dokStatus: 'DOKUMENTASJON_VIL_BLI_INNHENTET',
      kode: '5068',
    });
  });

  it('skal få feilmelding når en ikke har fylt ut alle feltene under Opptjening utland', async () => {
    const lagre = jest.fn();

    const utils = render(<ApentAksjonspunktForInnhentingAvDokumentasjon submitCallback={lagre} />);

    expect(await screen.findByText(
      'Se søknad for informasjon om oppgitt rettighet fra EØS. Innhent dokumentasjon fra utenlandsk trygdemyndighet ved behov',
    )).toBeInTheDocument();

    const begrunnelseInput = utils.getByLabelText('Begrunnelse');
    await userEvent.type(begrunnelseInput, 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(screen.getAllByText('Feltet må fylles ut')[0]).toBeInTheDocument());

    expect(lagre).toHaveBeenCalledTimes(0);
  });

  it('skal lagre ny startdato for foreldrepenger', async () => {
    const lagre = jest.fn();

    render(<EndringAvUtland submitCallback={lagre} />);

    expect(await screen.findByText('Startdato for foreldrepengeperioden')).toBeInTheDocument();
    expect(screen.getByText('Startdato som benyttes')).toBeInTheDocument();
    expect(screen.getByText('01.01.2019')).toBeInTheDocument();

    expect(screen.queryByText('Startdato som skal benyttes (fra søknad eller fødsel)')).not.toBeInTheDocument();

    await userEvent.click(screen.getByAltText('Endre startdato for foreldrepenger'));

    const startdato = screen.getByText('Startdato som skal benyttes (fra søknad eller fødsel)');
    await userEvent.type(startdato, '{backspace}{backspace}20');
    await fireEvent.blur(startdato);

    expect(screen.getByText('Lagre').closest('button')).toBeDisabled();

    const vurdering = screen.getByText('Vurdering');
    await userEvent.type(vurdering, 'Dette er en vurdering');

    expect(await screen.findByText('Lagre')).toBeEnabled();

    await userEvent.click(screen.getByText('Lagre'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en vurdering',
      kode: '6045',
      opprinneligDato: '2019-01-01',
      startdatoFraSoknad: '2020-01-01',
    });
  });
});
