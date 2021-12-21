import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './VedtakKlageProsessIndex.stories';

const {
  VedtakspanelDerKlageErVurdertAvNfp,
} = composeStories(stories);

describe('<VedtakKlageProsessIndex>', () => {
  it('skal fylle ut, forhåndsvise og så bekrefte vedtak for NFP', async () => {
    const lagre = jest.fn(() => Promise.resolve());
    const forhåndsvis = jest.fn();

    render(<VedtakspanelDerKlageErVurdertAvNfp submitCallback={lagre} previewVedtakCallback={forhåndsvis} />);

    expect(await screen.findByText('Resultat')).toBeInTheDocument();

    expect(screen.getByText('Resultat av klage')).toBeInTheDocument();
    expect(screen.getByText('Avvist fordi klagen ikke oppfyller formkravene')).toBeInTheDocument();

    expect(screen.getByText('Årsak til avvisning')).toBeInTheDocument();
    expect(screen.getByText('Klagen er ikke konkret')).toBeInTheDocument();

    userEvent.click(screen.getByText('Forhåndsvis vedtaksbrev'));

    await waitFor(() => expect(forhåndsvis).toHaveBeenCalledTimes(1));
    expect(forhåndsvis).toHaveBeenNthCalledWith(1, {
      gjelderVedtak: true,
    });
    userEvent.click(screen.getByText('Til godkjenning'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [{
      kode: '5015',
    }]);
  });
});
