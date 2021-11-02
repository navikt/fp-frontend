import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './VedtakProsessIndex.stories';

const { InnvilgetForeldrepengerTilGodkjenningForSaksbehandler } = composeStories(stories);

describe('<VedtakProsessIndex>', () => {
  it('skal forhåndsvise vedtaksbrev og så fatte vedtak', async () => {
    const lagre = jest.fn();
    const forhåndsvis = jest.fn();

    render(<InnvilgetForeldrepengerTilGodkjenningForSaksbehandler submitCallback={lagre} previewCallback={forhåndsvis} />);

    expect(await screen.findByText('Vedtak')).toBeInTheDocument();
    expect(screen.getByText('Foreldrepenger er innvilget')).toBeInTheDocument();
    expect(screen.getByText('Rediger vedtaksbrev')).toBeInTheDocument();

    userEvent.click(screen.getByText('Automatisk vedtaksbrev'));

    await waitFor(() => expect(forhåndsvis).toHaveBeenCalledTimes(1));
    expect(forhåndsvis).toHaveBeenNthCalledWith(1, {
      dokumentMal: undefined,
      fritekst: undefined,
      gjelderVedtak: true,
      tittel: undefined,
      vedtaksbrev: {
        kode: 'AUTOMATISK',
      },
    });

    userEvent.click(screen.getByText('Fatt vedtak'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, []);
  });

  it('skal redigere vedtaksbrev og så fatte vedtak', async () => {
    const lagre = jest.fn();
    const forhåndsvis = jest.fn();

    const utils = render(<InnvilgetForeldrepengerTilGodkjenningForSaksbehandler submitCallback={lagre} previewCallback={forhåndsvis} />);

    expect(await screen.findByText('Vedtak')).toBeInTheDocument();

    userEvent.click(screen.getByText('Rediger vedtaksbrev'));

    expect(await screen.findByText('Manuelt vedtaksbrev')).toBeInTheDocument();
    expect(screen.getByText('Tekst fra det automatisk genererte brevet kan kopieres og limes inn i det manuelle brevet')).toBeInTheDocument();

    const overskriftInput = utils.getByLabelText('Overskrift');
    userEvent.type(overskriftInput, 'Dette er en overskrift');

    const innholdInput = utils.getByLabelText('Innhold i brev til søker');
    userEvent.type(innholdInput, 'Dette er innhold');

    userEvent.click(screen.getByText('Forhåndsvis manuelt brev'));

    await waitFor(() => expect(forhåndsvis).toHaveBeenCalledTimes(1));
    expect(forhåndsvis).toHaveBeenNthCalledWith(1, {
      dokumentMal: 'FRITKS',
      fritekst: 'Dette er innhold',
      gjelderVedtak: true,
      tittel: 'Dette er en overskrift',
      vedtaksbrev: undefined,
    });

    userEvent.click(screen.getByText('Fatt vedtak'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, []);
  });
});
