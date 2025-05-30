import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { DokumentMalType } from '@navikt/fp-kodeverk';

import * as stories from './VedtakInnsynProsessIndex.stories';

const { PanelForInnvilgetVedtak, PanelForAvvistVedtak, PanelForAvvistVedtakReadonly } = composeStories(stories);

describe('VedtakInnsynProsessIndex', () => {
  it('skal forhåndsvise og så bekrefte innvilget vedtak', async () => {
    const lagre = vi.fn();
    const forhåndsvise = vi.fn();

    render(<PanelForInnvilgetVedtak submitCallback={lagre} previewCallback={forhåndsvise} />);

    expect(await screen.findByText('Forslag til vedtak')).toBeInTheDocument();
    expect(screen.getByText('Resultat')).toBeInTheDocument();
    expect(screen.getByText('Krav om innsyn innvilget')).toBeInTheDocument();
    expect(screen.getByText('Vurdering')).toBeInTheDocument();
    expect(screen.getByText('Dette er utført')).toBeInTheDocument();

    expect(screen.getByText('Innsynsdokumentasjon til søker')).toBeInTheDocument();
    expect(screen.getByText('Dette er et dokument')).toBeInTheDocument();
    expect(screen.queryByText('Fritekst i brev')).not.toBeInTheDocument();

    await userEvent.click(screen.getByText('Forhåndsvis brev'));

    await waitFor(() => expect(forhåndsvise).toHaveBeenCalledTimes(1));
    expect(forhåndsvise).toHaveBeenNthCalledWith(1, {
      dokumentMal: DokumentMalType.INNSYN_SVAR,
      fritekst: ' ',
      mottaker: '',
    });

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: undefined,
      kode: '5015',
      mottattDato: '2019-01-01',
    });
  });

  it('skal forhåndsvise og så bekrefte avvist vedtak', async () => {
    const lagre = vi.fn();
    const forhåndsvise = vi.fn();

    const utils = render(<PanelForAvvistVedtak submitCallback={lagre} previewCallback={forhåndsvise} />);

    expect(await screen.findByText('Forslag til vedtak')).toBeInTheDocument();
    expect(screen.getByText('Resultat')).toBeInTheDocument();
    expect(screen.getByText('Krav om innsyn avslått')).toBeInTheDocument();
    expect(screen.getByText('Vurdering')).toBeInTheDocument();
    expect(screen.getByText('Dette er utført')).toBeInTheDocument();

    const vurderingInput = utils.getByLabelText('Fritekst i brev');
    await userEvent.type(vurderingInput, 'Dette er en fritekst');

    await userEvent.click(screen.getByText('Forhåndsvis brev'));

    await waitFor(() => expect(forhåndsvise).toHaveBeenCalledTimes(1));
    expect(forhåndsvise).toHaveBeenNthCalledWith(1, {
      dokumentMal: DokumentMalType.INNSYN_SVAR,
      fritekst: 'Dette er en fritekst',
      mottaker: '',
    });

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en fritekst',
      kode: '5015',
      mottattDato: '2019-01-01',
    });
  });

  it('skal vise avslått panel i readonly etter at behandling er avsluttet', async () => {
    const forhåndsvise = vi.fn();

    render(<PanelForAvvistVedtakReadonly previewCallback={forhåndsvise} />);

    expect(await screen.findByText('Vedtak')).toBeInTheDocument();
    expect(screen.getByText('Resultat')).toBeInTheDocument();
    expect(screen.getByText('Krav om innsyn avslått')).toBeInTheDocument();
    expect(screen.getByText('Vurdering')).toBeInTheDocument();
    expect(screen.getByText('Dette er utført')).toBeInTheDocument();

    expect(screen.getByText('Dette er en vurdering')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Vis vedtaksbrev'));

    await waitFor(() => expect(forhåndsvise).toHaveBeenCalledTimes(1));
    expect(forhåndsvise).toHaveBeenNthCalledWith(1, {
      dokumentMal: DokumentMalType.INNSYN_SVAR,
      fritekst: 'Dette er en vurdering',
      mottaker: '',
    });
  });
});
