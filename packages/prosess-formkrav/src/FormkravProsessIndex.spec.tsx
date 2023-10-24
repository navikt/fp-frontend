import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import * as stories from './FormkravProsessIndex.stories';

const {
  FormkravPanelForAksjonspunktNfp,
  FormkravPanelForAksjonspunktKaIkkePåklagd,
  FormkravPanelForAksjonspunktKaValgtBehandling,
} = composeStories(stories);

describe('<FormkravProsessIndex>', () => {
  it('skal fylle ut og bekrefte skjema for NFP', async () => {
    const lagre = vi.fn();

    const utils = render(<FormkravPanelForAksjonspunktNfp submitCallback={lagre} />);

    expect(await screen.findByText('Vurder formkrav')).toBeInTheDocument();
    expect(screen.getByText('Fvl §§ 28, 31, 32, 33 og ftrl § 21-12')).toBeInTheDocument();
    expect(screen.getByText('Vurder om klagen oppfyller formkravene')).toBeInTheDocument();

    const vurderingInput = utils.getByLabelText('Vurdering');
    await userEvent.type(vurderingInput, 'Dette er en vurdering');

    await userEvent.selectOptions(utils.getByLabelText('Vedtaket som er påklagd'), '1');

    await userEvent.click(screen.getAllByText('Ja')[0]);
    await userEvent.click(screen.getAllByText('Ja')[1]);
    await userEvent.click(screen.getAllByText('Ja')[2]);
    await userEvent.click(screen.getAllByText('Ja')[3]);

    expect(screen.queryByText('Fritekst')).not.toBeInTheDocument();

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en vurdering',
      erFristOverholdt: true,
      erKlagerPart: true,
      erKonkret: true,
      erSignert: true,
      erTilbakekreving: false,
      fritekstTilBrev: undefined,
      kode: '5082',
      tilbakekrevingInfo: undefined,
      vedtakBehandlingUuid: '1',
    });
  });

  it('skal kunne fylle ut fritekst og mellomlagre når en velger nei på et spørsmål', async () => {
    const mellomlagre = vi.fn();

    const utils = render(<FormkravPanelForAksjonspunktNfp lagreFormkravVurdering={mellomlagre} />);

    expect(await screen.findByText('Vurder formkrav')).toBeInTheDocument();

    await userEvent.selectOptions(utils.getByLabelText('Vedtaket som er påklagd'), '1');

    await userEvent.click(screen.getAllByText('Nei')[0]);
    await userEvent.click(screen.getAllByText('Ja')[1]);
    await userEvent.click(screen.getAllByText('Ja')[2]);
    await userEvent.click(screen.getAllByText('Ja')[3]);

    const vurderingInput = utils.getByLabelText('Vurdering');
    await userEvent.type(vurderingInput, 'Dette er en vurdering');

    const fritekstInput = utils.getByLabelText('Fritekst');
    await userEvent.type(fritekstInput, 'Dette er en fritekst');

    await userEvent.click(screen.getByText('Lagre'));

    await waitFor(() => expect(mellomlagre).toHaveBeenCalledTimes(1));
    expect(mellomlagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en vurdering',
      behandlingUuid: '1',
      erFristOverholdt: true,
      erKlagerPart: false,
      erKonkret: true,
      erSignert: true,
      erTilbakekreving: false,
      fritekstTilBrev: 'Dette er en fritekst',
      kode: '5082',
      klageTilbakekreving: undefined,
      paKlagdBehandlingUuid: '1',
    });
  });

  it('skal vise informasjon for KA når ikke påklagd', async () => {
    render(<FormkravPanelForAksjonspunktKaIkkePåklagd />);

    expect(await screen.findByText('Vurder formkrav')).toBeInTheDocument();

    expect(screen.getByText('Vedtaket som er påklagd')).toBeInTheDocument();
    expect(screen.getByText('Ikke påklagd et vedtak')).toBeInTheDocument();

    expect(screen.getByText('Er klager part i saken?')).toBeInTheDocument();
    expect(screen.getAllByText('Nei')).toHaveLength(2);

    expect(screen.getByText('Klages det på konkrete elementer i vedtaket?')).toBeInTheDocument();
    expect(screen.getAllByText('Ja')).toHaveLength(2);

    expect(screen.getByText('Er klagefristen overholdt?')).toBeInTheDocument();

    expect(screen.getByText('Er klagen signert?')).toBeInTheDocument();

    expect(screen.getByText('Vurdering')).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse')).toBeInTheDocument();
  });

  it('skal vise informasjon for KA når påklagd', async () => {
    render(<FormkravPanelForAksjonspunktKaValgtBehandling />);

    expect(await screen.findByText('Vurder formkrav')).toBeInTheDocument();

    expect(screen.getByText('Vedtaket som er påklagd')).toBeInTheDocument();
    expect(screen.getByText('Førstegangsbehandling 02.08.17 00:54')).toBeInTheDocument();

    expect(screen.getByText('Er klager part i saken?')).toBeInTheDocument();
    expect(screen.getAllByText('Ja')).toHaveLength(2);

    expect(screen.getByText('Klages det på konkrete elementer i vedtaket?')).toBeInTheDocument();
    expect(screen.getAllByText('Nei')).toHaveLength(2);

    expect(screen.getByText('Er klagefristen overholdt?')).toBeInTheDocument();

    expect(screen.getByText('Er klagen signert?')).toBeInTheDocument();

    expect(screen.getByText('Vurdering')).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse')).toBeInTheDocument();
  });
});
