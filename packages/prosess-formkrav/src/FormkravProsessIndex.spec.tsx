import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './FormkravProsessIndex.stories';

const {
  FormkravPanelForAksjonspunktNfp,
} = composeStories(stories);

describe('<FormkravProsessIndex>', () => {
  it('skal fylle ut og bekrefte skjema for NFP', async () => {
    const lagre = jest.fn();

    const utils = render(<FormkravPanelForAksjonspunktNfp submitCallback={lagre} />);

    expect(await screen.findByText('Vurder formkrav')).toBeInTheDocument();
    expect(screen.getByText('Fvl §§ 28, 31, 32, 33 og ftrl § 21-12')).toBeInTheDocument();
    expect(screen.getByText('Vurder om klagen oppfyller formkravene')).toBeInTheDocument();

    const vurderingInput = utils.getByLabelText('Vurdering');
    userEvent.paste(vurderingInput, 'Dette er en vurdering');

    userEvent.selectOptions(utils.getByLabelText('Vedtaket som er påklagd'), '1');

    userEvent.click(screen.getAllByText('Ja')[0]);
    userEvent.click(screen.getAllByText('Ja')[1]);
    userEvent.click(screen.getAllByText('Ja')[2]);
    userEvent.click(screen.getAllByText('Ja')[3]);

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en vurdering',
      erFristOverholdt: true,
      erKlagerPart: true,
      erKonkret: true,
      erSignert: true,
      erTilbakekreving: false,
      kode: '5082',
      tilbakekrevingInfo: null,
      vedtakBehandlingUuid: '1',
    });
  });
});
