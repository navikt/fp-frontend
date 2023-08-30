import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import * as stories from './SakenFaktaIndex.stories';

const { StartdatoForForeldrepenger, ApentAksjonspunktForInnhentingAvDokumentasjon } = composeStories(stories);

describe('<SakenFaktaIndex>', () => {
  it('skal få aksjonspunkt om innehenting av dokumentasjon, svar at vil bli innhentet og bekreft', async () => {
    const lagre = vi.fn();

    const utils = render(<ApentAksjonspunktForInnhentingAvDokumentasjon submitCallback={lagre} />);

    expect(
      await screen.findByText(
        'Se søknad for informasjon om oppgitt rettighet fra EØS. Innhent dokumentasjon fra utenlandsk trygdemyndighet ved behov',
      ),
    ).toBeInTheDocument();
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
    const lagre = vi.fn();

    const utils = render(<ApentAksjonspunktForInnhentingAvDokumentasjon submitCallback={lagre} />);

    expect(
      await screen.findByText(
        'Se søknad for informasjon om oppgitt rettighet fra EØS. Innhent dokumentasjon fra utenlandsk trygdemyndighet ved behov',
      ),
    ).toBeInTheDocument();

    const begrunnelseInput = utils.getByLabelText('Begrunnelse');
    await userEvent.type(begrunnelseInput, 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(screen.getAllByText('Feltet må fylles ut')[0]).toBeInTheDocument());

    expect(lagre).toHaveBeenCalledTimes(0);
  });

  it('skal lagre ny startdato for foreldrepenger', async () => {
    const lagre = vi.fn();

    render(<StartdatoForForeldrepenger submitCallback={lagre} />);

    expect(await screen.findByText('Startdato for foreldrepengeperioden')).toBeInTheDocument();
    expect(screen.getByText('Startdato som benyttes')).toBeInTheDocument();
    expect(screen.getByText('01.01.2019')).toBeInTheDocument();

    expect(screen.queryByText('Startdato som skal benyttes (fra søknad eller fødsel)')).not.toBeInTheDocument();

    await userEvent.click(screen.getByTitle('Endre startdato for foreldrepenger'));

    const startdato = screen.getByText('Startdato som skal benyttes (fra søknad eller fødsel)');
    await userEvent.type(startdato, '{backspace}{backspace}20');
    await fireEvent.blur(startdato);

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
