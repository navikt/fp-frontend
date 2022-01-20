import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './KlagevurderingProsessIndex.stories';

const {
  KlagevurderingMedAksjonspunktNfp,
} = composeStories(stories);

describe('<KlagevurderingProsessIndex>', () => {
  it('skal fylle ut, mellomlagre, forhåndsvise og så bekrefte aksjonspunkt for NFP', async () => {
    const lagre = jest.fn();
    const mellomlagre = jest.fn();
    const forhåndsvise = jest.fn();

    const utils = render(<KlagevurderingMedAksjonspunktNfp submitCallback={lagre} mellomlagre={mellomlagre} forhandsvisCallback={forhåndsvise} />);

    expect(await screen.findByText('Behandle klage')).toBeInTheDocument();
    expect(screen.getByText('Vurder om klagen skal tas til følge')).toBeInTheDocument();

    userEvent.click(screen.getByText('Omgjør vedtaket'));

    userEvent.selectOptions(utils.getByLabelText('Årsak'), 'ULIK_VURDERING');

    userEvent.click(screen.getByText('Til gunst'));

    userEvent.selectOptions(utils.getByLabelText('Hjemmel'), '14-17');

    const vurderingInput = utils.getByLabelText('Begrunnelse');
    userEvent.type(vurderingInput, 'Dette er en begrunnelse');

    const fritekstInput = utils.getByLabelText('Fritekst til brev');
    userEvent.type(fritekstInput, 'Dette er en fritekst');

    userEvent.click(screen.getByText('Lagre'));

    await waitFor(() => expect(mellomlagre).toHaveBeenCalledTimes(1));
    expect(mellomlagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en begrunnelse',
      fritekstTilBrev: 'Dette er en fritekst',
      klageHjemmel: '14-17',
      klageMedholdArsak: 'ULIK_VURDERING',
      klageVurdering: 'MEDHOLD_I_KLAGE',
      klageVurderingOmgjoer: 'GUNST_MEDHOLD_I_KLAGE',
      kode: '5035',
    });

    userEvent.click(screen.getByText('Forhåndsvis brev'));

    await waitFor(() => expect(forhåndsvise).toHaveBeenCalledTimes(1));
    expect(forhåndsvise).toHaveBeenNthCalledWith(1, {
      dokumentMal: 'KGEOMG',
      erOpphevetKlage: false,
      fritekst: 'Dette er en fritekst',
    });

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en begrunnelse',
      fritekstTilBrev: 'Dette er en fritekst',
      klageHjemmel: '14-17',
      klageMedholdArsak: 'ULIK_VURDERING',
      klageVurdering: 'MEDHOLD_I_KLAGE',
      klageVurderingOmgjoer: 'GUNST_MEDHOLD_I_KLAGE',
      kode: '5035',
    });
  });

  it('skal ikke vise forhåndsvis-lenke når fritekst ikke er fylt ut', async () => {
    render(<KlagevurderingMedAksjonspunktNfp />);
    expect(await screen.findByText('Behandle klage')).toBeInTheDocument();
    expect(screen.queryByText('Forhåndsvis brev')).not.toBeInTheDocument();
  });
});
