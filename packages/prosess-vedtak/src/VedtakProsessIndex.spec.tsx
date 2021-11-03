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
    expect(lagre).toHaveBeenNthCalledWith(1, [{
      begrunnelse: undefined,
      fritekstBrev: undefined,
      kode: '5015',
      overskrift: undefined,
      skalBrukeOverstyrendeFritekstBrev: false,
    }]);
  });

  it('skal redigere vedtaksbrev, forhåndsvise og så fatte vedtak', async () => {
    const lagre = jest.fn();
    const forhåndsvis = jest.fn();

    const utils = render(<InnvilgetForeldrepengerTilGodkjenningForSaksbehandler submitCallback={lagre} previewCallback={forhåndsvis} />);

    expect(await screen.findByText('Vedtak')).toBeInTheDocument();

    userEvent.click(screen.getByText('Rediger vedtaksbrev'));

    expect(await screen.findByText('Manuelt vedtaksbrev')).toBeInTheDocument();
    expect(screen.getByText('Tekst fra det automatisk genererte brevet kan kopieres og limes inn i det manuelle brevet')).toBeInTheDocument();

    userEvent.click(screen.getByText('Fatt vedtak'));

    expect(await screen.findAllByText('Feltet må fylles ut')).toHaveLength(2);

    const overskriftInput = utils.getByLabelText('Overskrift');
    userEvent.type(overskriftInput, 'Dette er en overskrift');

    const innholdInput = utils.getByLabelText('Innhold i brev til søker');
    userEvent.type(innholdInput, 'Dette er innhold');

    await waitFor(() => expect(screen.queryByText('Feltet må fylles ut')).not.toBeInTheDocument());

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
    expect(lagre).toHaveBeenNthCalledWith(1, [{
      begrunnelse: undefined,
      fritekstBrev: 'Dette er innhold',
      kode: '5015',
      overskrift: 'Dette er en overskrift',
      skalBrukeOverstyrendeFritekstBrev: true,
    }]);
  });

  it('skal redigere vedtaksbrev, forkaste det via modal og så fatte vedtak', async () => {
    const lagre = jest.fn();

    const utils = render(<InnvilgetForeldrepengerTilGodkjenningForSaksbehandler submitCallback={lagre} />);

    expect(await screen.findByText('Vedtak')).toBeInTheDocument();

    userEvent.click(screen.getByText('Rediger vedtaksbrev'));

    expect(await screen.findByText('Manuelt vedtaksbrev')).toBeInTheDocument();
    expect(screen.getByText('Tekst fra det automatisk genererte brevet kan kopieres og limes inn i det manuelle brevet')).toBeInTheDocument();

    userEvent.click(screen.getByText('Fatt vedtak'));

    expect(await screen.findAllByText('Feltet må fylles ut')).toHaveLength(2);

    const overskriftInput = utils.getByLabelText('Overskrift');
    userEvent.type(overskriftInput, 'Dette er en overskrift');

    const innholdInput = utils.getByLabelText('Innhold i brev til søker');
    userEvent.type(innholdInput, 'Dette er innhold');

    await waitFor(() => expect(screen.queryByText('Feltet må fylles ut')).not.toBeInTheDocument());

    userEvent.click(screen.getByText('Forkast manuelt brev'));

    expect(await screen.findByText('Dersom du forkaster det manuelle brevet, vil det erstattes av det automatisk genererte brevet')).toBeInTheDocument();

    userEvent.click(screen.getAllByText('Forkast manuelt brev')[1]);

    await waitFor(() => expect(screen.queryByText('Manuelt vedtaksbrev')).not.toBeInTheDocument());

    userEvent.click(screen.getByText('Fatt vedtak'));
    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [{
      begrunnelse: undefined,
      fritekstBrev: undefined,
      kode: '5015',
      overskrift: undefined,
      skalBrukeOverstyrendeFritekstBrev: false,
    }]);
  });
});
