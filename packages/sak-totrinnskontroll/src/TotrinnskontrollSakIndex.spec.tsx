import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './TotrinnskontrollSakIndex.stories';

const { ForBeslutter, ForSaksbehandler } = composeStories(stories);

describe('<TotrinnskontrollSakIndex>', () => {
  it('skal godkjenne begge aksjonspunktene', async () => {
    const lagre = jest.fn();

    render(<ForBeslutter lagre={lagre} />);

    expect(await screen.findByText('Kontroller endrede opplysninger og faglige vurderinger')).toBeInTheDocument();
    expect(screen.getByText('Formkrav klage NFP')).toBeInTheDocument();
    expect(screen.getByText('Klageresultat Vedtaksinstans')).toBeInTheDocument();

    expect(screen.getByText('Godkjenn vedtaket')).toBeDisabled();
    expect(screen.getByText('Send til saksbehandler')).not.toBeDisabled();

    const checkboxes = screen.getAllByText('Godkjent');
    userEvent.click(checkboxes[0]);
    userEvent.click(checkboxes[1]);

    await waitFor(() => expect(screen.queryByText('Godkjenn vedtaket')).not.toBeDisabled());
    expect(screen.getByText('Send til saksbehandler')).toBeDisabled();

    userEvent.click(screen.getByText('Godkjenn vedtaket'));

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
            godkjent: 'true',
          },
          {
            aksjonspunktKode: '5035',
            arsaker: [],
            begrunnelse: undefined,
            godkjent: 'true',
          },
        ],
        begrunnelse: null,
      },
    });
  });

  it('skal sende tilbake til saksbehandler fordi det er feil i fakta og feil i lovanvendelse', async () => {
    const lagre = jest.fn();

    const utils = render(<ForBeslutter lagre={lagre} />);

    expect(await screen.findByText('Kontroller endrede opplysninger og faglige vurderinger')).toBeInTheDocument();
    expect(screen.getByText('Formkrav klage NFP')).toBeInTheDocument();
    expect(screen.getByText('Klageresultat Vedtaksinstans')).toBeInTheDocument();

    userEvent.click(screen.getAllByText('Godkjent')[0]);
    userEvent.click(screen.getAllByText('Vurder på nytt')[1]);

    expect(await screen.findByText('Årsak')).toBeInTheDocument();

    userEvent.click(screen.getByText('Feil fakta'));
    userEvent.click(screen.getByText('Feil lovanvendelse'));

    const begrunnelseInput = utils.getByLabelText('Begrunnelse');
    userEvent.type(begrunnelseInput, 'Dette er en begrunnelse');

    userEvent.click(screen.getByText('Send til saksbehandler'));

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
            godkjent: 'true',
          },
          {
            aksjonspunktKode: '5035',
            arsaker: [
              'FEIL_FAKTA',
              'FEIL_LOV',
            ],
            begrunnelse: 'Dette er en begrunnelse',
            godkjent: 'false',
          },
        ],
        begrunnelse: null,
      },
    });
  });

  it('skal vise feilmeldinger når en ikke har fylt ut årsak og begrunnelse', async () => {
    const lagre = jest.fn();

    render(<ForBeslutter lagre={lagre} />);

    expect(await screen.findByText('Kontroller endrede opplysninger og faglige vurderinger')).toBeInTheDocument();
    expect(screen.getByText('Formkrav klage NFP')).toBeInTheDocument();
    expect(screen.getByText('Klageresultat Vedtaksinstans')).toBeInTheDocument();

    userEvent.click(screen.getAllByText('Godkjent')[0]);
    userEvent.click(screen.getAllByText('Vurder på nytt')[1]);

    expect(await screen.findByText('Årsak')).toBeInTheDocument();

    userEvent.click(screen.getByText('Send til saksbehandler'));

    expect(await screen.findAllByText('Feltet må fylles ut')).toHaveLength(2);

    expect(lagre).toHaveBeenCalledTimes(0);
  });

  it('skal vise informasjon til saksbehandler om hva som ikke ble godkjent av beslutter', async () => {
    render(<ForSaksbehandler />);

    expect(await screen.findByText('Løst aksjonspunkt:')).toBeInTheDocument();
    expect(screen.getByText('Kontroller endrede opplysninger og faglige vurderinger')).toBeInTheDocument();

    expect(screen.getByText('Formkrav klage NFP')).toBeInTheDocument();
    expect(screen.getByText('Feil regelforståelse')).toBeInTheDocument();
    expect(screen.getByText('Feil fakta')).toBeInTheDocument();
    expect(screen.getByText('Denne er ikke godkjent fordi...')).toBeInTheDocument();

    expect(screen.getByText('Klageresultat Vedtaksinstans')).toBeInTheDocument();
    expect(screen.getByText('Godkjent')).toBeInTheDocument();
  });
});
