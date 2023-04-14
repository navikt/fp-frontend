import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './VedtakKlageProsessIndex.stories';

const { VedtakspanelDerKlageErVurdertAvNfp, VedtakspanelDerKlageErVurdertAvNk } = composeStories(stories);

describe('<VedtakKlageProsessIndex>', () => {
  it('skal fylle ut, forhåndsvise og så bekrefte vedtak for NFP', async () => {
    const lagre = vi.fn(() => Promise.resolve());
    const forhåndsvis = vi.fn();

    render(<VedtakspanelDerKlageErVurdertAvNfp submitCallback={lagre} previewVedtakCallback={forhåndsvis} />);

    expect(await screen.findByText('Resultat')).toBeInTheDocument();

    expect(screen.getByText('Resultat av klage')).toBeInTheDocument();
    expect(screen.getByText('Avvist fordi klagen ikke oppfyller formkravene')).toBeInTheDocument();

    expect(screen.getByText('Årsak til avvisning')).toBeInTheDocument();
    expect(screen.getByText('Klagen er ikke konkret')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Forhåndsvis vedtaksbrev'));

    await waitFor(() => expect(forhåndsvis).toHaveBeenCalledTimes(1));
    expect(forhåndsvis).toHaveBeenNthCalledWith(1, {
      gjelderVedtak: true,
    });
    await userEvent.click(screen.getByText('Til godkjenning'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        kode: '5015',
      },
    ]);
  });

  it('skal vise readonly-informasjon for NK', async () => {
    render(<VedtakspanelDerKlageErVurdertAvNk />);

    expect(await screen.findByText('Resultat')).toBeInTheDocument();

    expect(screen.getByText('Resultat av klage')).toBeInTheDocument();
    expect(screen.getByText('Avvist fordi klagen ikke oppfyller formkravene')).toBeInTheDocument();

    expect(screen.getByText('Årsak til avvisning')).toBeInTheDocument();
    expect(screen.getByText('Klagen er ikke konkret')).toBeInTheDocument();

    expect(screen.queryByText('Til godkjenning')).not.toBeInTheDocument();
    expect(screen.queryByText('Forhåndsvis vedtaksbrev')).not.toBeInTheDocument();
  });
});
