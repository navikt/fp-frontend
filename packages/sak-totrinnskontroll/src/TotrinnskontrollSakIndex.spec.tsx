import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import * as stories from './TotrinnskontrollSakIndex.stories';

const { ForBeslutter, ForSaksbehandler } = composeStories(stories);

describe('<TotrinnskontrollSakIndex>', () => {
  it('skal godkjenne begge aksjonspunktene', async () => {
    const lagre = vi.fn();

    render(<ForBeslutter lagre={lagre} />);

    expect(await screen.findByText('Kontroller endrede opplysninger og faglige vurderinger')).toBeInTheDocument();
    expect(screen.getByText('Formkrav klage NFP')).toBeInTheDocument();
    expect(screen.getByText('Klageresultat Vedtaksinstans')).toBeInTheDocument();

    expect(screen.getByText('Godkjenn vedtaket').closest('button')).toBeDisabled();
    expect(screen.getByText('Send til saksbehandler')).toBeEnabled();

    const checkboxes = screen.getAllByText('Godkjent');
    await userEvent.click(checkboxes[0]);
    await userEvent.click(checkboxes[1]);

    expect(await screen.findByText('Godkjenn vedtaket')).toBeEnabled();
    expect(screen.getByText('Send til saksbehandler').closest('button')).toBeDisabled();

    await userEvent.click(screen.getByText('Godkjenn vedtaket'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      erAlleAksjonspunktGodkjent: true,
      fatterVedtakAksjonspunktDto: {
        '@type': '5016',
        aksjonspunktGodkjenningDtos: [
          {
            aksjonspunktKode: '5082',
            arsaker: [],
            begrunnelse: undefined,
            godkjent: true,
          },
          {
            aksjonspunktKode: '5035',
            arsaker: [],
            begrunnelse: undefined,
            godkjent: true,
          },
        ],
        begrunnelse: null,
      },
    });
  });

  it('skal sende tilbake til saksbehandler fordi det er feil i fakta og feil i lovanvendelse', async () => {
    const lagre = vi.fn();

    const utils = render(<ForBeslutter lagre={lagre} />);

    expect(await screen.findByText('Kontroller endrede opplysninger og faglige vurderinger')).toBeInTheDocument();
    expect(screen.getByText('Formkrav klage NFP')).toBeInTheDocument();
    expect(screen.getByText('Klageresultat Vedtaksinstans')).toBeInTheDocument();

    await userEvent.click(screen.getAllByText('Godkjent')[0]);
    await userEvent.click(screen.getAllByText('Vurder på nytt')[1]);

    expect(await screen.findByText('Årsak til retur')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Fakta'));
    await userEvent.click(screen.getByText('Regel-/lovanvendelse'));

    const begrunnelseInput = utils.getByLabelText('Begrunnelse');
    await userEvent.type(begrunnelseInput, 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Send til saksbehandler'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      erAlleAksjonspunktGodkjent: false,
      fatterVedtakAksjonspunktDto: {
        '@type': '5016',
        aksjonspunktGodkjenningDtos: [
          {
            aksjonspunktKode: '5082',
            arsaker: [],
            begrunnelse: undefined,
            godkjent: true,
          },
          {
            aksjonspunktKode: '5035',
            arsaker: ['FEIL_FAKTA', 'FEIL_LOV'],
            begrunnelse: 'Dette er en begrunnelse',
            godkjent: false,
          },
        ],
        begrunnelse: null,
      },
    });
  });

  it('skal vise feilmeldinger når en ikke har fylt ut årsak og begrunnelse', async () => {
    const lagre = vi.fn();

    render(<ForBeslutter lagre={lagre} />);

    expect(await screen.findByText('Kontroller endrede opplysninger og faglige vurderinger')).toBeInTheDocument();
    expect(screen.getByText('Formkrav klage NFP')).toBeInTheDocument();
    expect(screen.getByText('Klageresultat Vedtaksinstans')).toBeInTheDocument();

    await userEvent.click(screen.getAllByText('Godkjent')[0]);
    await userEvent.click(screen.getAllByText('Vurder på nytt')[1]);

    expect(await screen.findByText('Årsak til retur')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Send til saksbehandler'));

    expect(await screen.findAllByText('Feltet må fylles ut')).toHaveLength(2);

    expect(lagre).toHaveBeenCalledTimes(0);
  });

  it('skal vise informasjon til saksbehandler om hva som ikke ble godkjent av beslutter', async () => {
    render(<ForSaksbehandler />);

    expect(await screen.findByText('Løst aksjonspunkt:')).toBeInTheDocument();
    expect(screen.getByText('Kontroller endrede opplysninger og faglige vurderinger')).toBeInTheDocument();

    expect(screen.getByText('Formkrav klage NFP')).toBeInTheDocument();
    expect(screen.getByText('Regel-/lovanvendelse')).toBeInTheDocument();
    expect(screen.getByText('Fakta')).toBeInTheDocument();
    expect(screen.getByText('Denne er ikke godkjent fordi...')).toBeInTheDocument();

    expect(screen.getByText('Klageresultat Vedtaksinstans')).toBeInTheDocument();
    expect(screen.getAllByText('Godkjent')).toHaveLength(2);
  });
});
