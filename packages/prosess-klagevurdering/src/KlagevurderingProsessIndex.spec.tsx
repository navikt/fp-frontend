import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './KlagevurderingProsessIndex.stories';

const {
  KlagevurderingMedAksjonspunktNfp, MedholdIKlageNk, StadfestKlageNk, HjemsendtIKlageNk, OpphevIKlageNk,
} = composeStories(stories);

describe('<KlagevurderingProsessIndex>', () => {
  it('skal fylle ut, mellomlagre, forhåndsvise og så bekrefte aksjonspunkt for NFP', async () => {
    const lagre = vi.fn();
    const mellomlagre = vi.fn();
    const forhåndsvise = vi.fn();

    const utils = render(<KlagevurderingMedAksjonspunktNfp submitCallback={lagre} mellomlagre={mellomlagre} forhandsvisCallback={forhåndsvise} />);

    expect(await screen.findByText('Behandle klage')).toBeInTheDocument();
    expect(screen.getByText('Vurder om klagen skal tas til følge')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Omgjør vedtaket'));

    await userEvent.selectOptions(utils.getByLabelText('Årsak'), 'ULIK_VURDERING');

    await userEvent.click(screen.getByText('Til gunst'));

    await userEvent.selectOptions(utils.getByLabelText('Hjemmel'), '14-17');

    const vurderingInput = utils.getByLabelText('Begrunnelse');
    await userEvent.type(vurderingInput, 'Dette er en begrunnelse');

    const fritekstInput = utils.getByLabelText('Fritekst til brev');
    await userEvent.type(fritekstInput, 'Dette er en fritekst');

    await userEvent.click(screen.getByText('Lagre'));

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

    await userEvent.click(screen.getByText('Forhåndsvis brev'));

    await waitFor(() => expect(forhåndsvise).toHaveBeenCalledTimes(1));
    expect(forhåndsvise).toHaveBeenNthCalledWith(1, {
      dokumentMal: 'KGEOMG',
      erOpphevetKlage: false,
      fritekst: 'Dette er en fritekst',
    });

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

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

  it('skal vise medhold av klage for NK', async () => {
    render(<MedholdIKlageNk />);

    expect(await screen.findByText('Behandle klage')).toBeInTheDocument();

    expect(screen.getByText('Vurdering')).toBeInTheDocument();
    expect(screen.getByText('Omgjør vedtaket')).toBeInTheDocument();

    expect(screen.getByText('Årsak')).toBeInTheDocument();
    expect(screen.getByText('Ulik skjønnsvurdering')).toBeInTheDocument();
    expect(screen.getByText('Til gunst')).toBeInTheDocument();

    expect(screen.getByText('Fritekst til brev')).toBeInTheDocument();
    expect(screen.getByText('test')).toBeInTheDocument();

    expect(screen.getByText('Begrunnelse')).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse')).toBeInTheDocument();
  });

  it('skal vise stadfesting av klage for NK', async () => {
    render(<StadfestKlageNk />);

    expect(await screen.findByText('Behandle klage')).toBeInTheDocument();

    expect(screen.getByText('Vurdering')).toBeInTheDocument();
    expect(screen.getByText('Stadfest vedtaket')).toBeInTheDocument();

    expect(screen.queryByText('Årsak')).not.toBeInTheDocument();
    expect(screen.queryByText('Ulik skjønnsvurdering')).not.toBeInTheDocument();
    expect(screen.queryByText('Til gunst')).not.toBeInTheDocument();

    expect(screen.getByText('Fritekst til brev')).toBeInTheDocument();
    expect(screen.getByText('test')).toBeInTheDocument();

    expect(screen.getByText('Begrunnelse')).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse')).toBeInTheDocument();
  });

  it('skal vise hjemsending av klage for NK', async () => {
    render(<HjemsendtIKlageNk />);

    expect(await screen.findByText('Behandle klage')).toBeInTheDocument();

    expect(screen.getByText('Vurdering')).toBeInTheDocument();
    expect(screen.getByText('Hjemsend vedtaket')).toBeInTheDocument();

    expect(screen.getByText('Årsak')).toBeInTheDocument();
    expect(screen.getByText('Ulik skjønnsvurdering')).toBeInTheDocument();
    expect(screen.queryByText('Til gunst')).not.toBeInTheDocument();

    expect(screen.getByText('Fritekst til brev')).toBeInTheDocument();
    expect(screen.getByText('test')).toBeInTheDocument();

    expect(screen.getByText('Begrunnelse')).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse')).toBeInTheDocument();
  });

  it('skal vise oppheving av klage for NK', async () => {
    render(<OpphevIKlageNk />);

    expect(await screen.findByText('Behandle klage')).toBeInTheDocument();

    expect(screen.getByText('Vurdering')).toBeInTheDocument();
    expect(screen.getByText('Opphev og hjemsend vedtaket')).toBeInTheDocument();

    expect(screen.getByText('Årsak')).toBeInTheDocument();
    expect(screen.getByText('Ulik skjønnsvurdering')).toBeInTheDocument();
    expect(screen.queryByText('Til gunst')).not.toBeInTheDocument();

    expect(screen.getByText('Fritekst til brev')).toBeInTheDocument();
    expect(screen.getByText('test')).toBeInTheDocument();

    expect(screen.getByText('Begrunnelse')).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse')).toBeInTheDocument();
  });
});
