import React from 'react';
import dokumentMalType from '@fpsak-frontend/kodeverk/src/dokumentMalType';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './VedtakInnsynProsessIndex.stories';

const {
  PanelForInnvilgetVedtak, PanelForAvvistVedtak, PanelForAvvistVedtakReadonly,
} = composeStories(stories);

describe('<VedtakInnsynProsessIndex>', () => {
  it('skal forhåndsvise og så bekrefte innvilget vedtak', async () => {
    const lagre = jest.fn();
    const forhåndsvise = jest.fn();

    render(<PanelForInnvilgetVedtak submitCallback={lagre} forhandsvisCallback={forhåndsvise} />);

    expect(await screen.findByText('Forslag til vedtak')).toBeInTheDocument();
    expect(screen.getByText('Resultat')).toBeInTheDocument();
    expect(screen.getByText('Krav om innsyn innvilget')).toBeInTheDocument();
    expect(screen.getByText('Vurdering')).toBeInTheDocument();
    expect(screen.getByText('Dette er utført')).toBeInTheDocument();

    expect(screen.getByText('Innsynsdokumentasjon til søker')).toBeInTheDocument();
    expect(screen.getByText('Dette er et dokument')).toBeInTheDocument();
    expect(screen.queryByText('Fritekst i brev')).not.toBeInTheDocument();

    userEvent.click(screen.getByText('Forhåndsvis brev'));

    await waitFor(() => expect(forhåndsvise).toHaveBeenCalledTimes(1));
    expect(forhåndsvise).toHaveBeenNthCalledWith(1, {
      dokumentMal: dokumentMalType.INNSYN_SVAR,
      fritekst: ' ',
      gjelderVedtak: true,
      mottaker: '',
    });

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: undefined,
      kode: '5015',
      mottattDato: '2019-01-01',
    });
  });

  it('skal forhåndsvise og så bekrefte avvist vedtak', async () => {
    const lagre = jest.fn();
    const forhåndsvise = jest.fn();

    const utils = render(<PanelForAvvistVedtak submitCallback={lagre} forhandsvisCallback={forhåndsvise} />);

    expect(await screen.findByText('Forslag til vedtak')).toBeInTheDocument();
    expect(screen.getByText('Resultat')).toBeInTheDocument();
    expect(screen.getByText('Krav om innsyn avslått')).toBeInTheDocument();
    expect(screen.getByText('Vurdering')).toBeInTheDocument();
    expect(screen.getByText('Dette er utført')).toBeInTheDocument();

    const vurderingInput = utils.getByLabelText('Fritekst i brev');
    userEvent.paste(vurderingInput, 'Dette er en fritekst');

    userEvent.click(screen.getByText('Forhåndsvis brev'));

    await waitFor(() => expect(forhåndsvise).toHaveBeenCalledTimes(1));
    expect(forhåndsvise).toHaveBeenNthCalledWith(1, {
      dokumentMal: dokumentMalType.INNSYN_SVAR,
      fritekst: 'Dette er en fritekst',
      gjelderVedtak: true,
      mottaker: '',
    });

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en fritekst',
      kode: '5015',
      mottattDato: '2019-01-01',
    });
  });

  it('skal vise avslått panel i readonly etter at behandling er avsluttet', async () => {
    const forhåndsvise = jest.fn();

    render(<PanelForAvvistVedtakReadonly forhandsvisCallback={forhåndsvise} />);

    expect(await screen.findByText('Vedtak')).toBeInTheDocument();
    expect(screen.getByText('Resultat')).toBeInTheDocument();
    expect(screen.getByText('Krav om innsyn avslått')).toBeInTheDocument();
    expect(screen.getByText('Vurdering')).toBeInTheDocument();
    expect(screen.getByText('Dette er utført')).toBeInTheDocument();

    expect(screen.getByText('Dette er en vurdering')).toBeInTheDocument();

    userEvent.click(screen.getByText('Vis vedtaksbrev'));

    await waitFor(() => expect(forhåndsvise).toHaveBeenCalledTimes(1));
    expect(forhåndsvise).toHaveBeenNthCalledWith(1, {
      dokumentMal: dokumentMalType.INNSYN_SVAR,
      fritekst: 'Dette er en vurdering',
      gjelderVedtak: true,
      mottaker: '',
    });
  });
});
