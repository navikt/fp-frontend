import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './TotrinnskontrollSakIndex.stories';

const { ForBeslutter, ForBeslutterMedTidligereRetur, ForSaksbehandler } = composeStories(stories);

describe('TotrinnskontrollSakIndex', () => {
  it('skal godkjenne begge aksjonspunktene', async () => {
    const lagre = vi.fn();

    render(<ForBeslutter onSubmit={lagre} />);

    expect(await screen.findByText('Kontroller endrede opplysninger og faglige vurderinger')).toBeInTheDocument();
    expect(screen.getByText('Formkrav klage NFP')).toBeInTheDocument();
    expect(screen.getByText('Klageresultat NFP')).toBeInTheDocument();

    expect(screen.getByText('Godkjenn vedtaket').closest('button')).toBeDisabled();
    expect(screen.getByText('Send til saksbehandler').closest('button')).toBeDisabled();

    const checkboxes = screen.getAllByText('Godkjent');
    await userEvent.click(checkboxes[0]!);
    await userEvent.click(checkboxes[1]!);

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
        begrunnelse: undefined,
        kode: '5016',
      },
    });
  });

  it('skal sende tilbake til saksbehandler fordi det er feil i fakta og feil i lovanvendelse', async () => {
    const lagre = vi.fn();

    render(<ForBeslutter onSubmit={lagre} />);

    expect(await screen.findByText('Kontroller endrede opplysninger og faglige vurderinger')).toBeInTheDocument();
    expect(screen.getByText('Formkrav klage NFP')).toBeInTheDocument();
    expect(screen.getByText('Klageresultat NFP')).toBeInTheDocument();

    await userEvent.click(screen.getAllByText('Godkjent')[0]!);
    await userEvent.click(screen.getAllByText('Vurder på nytt')[1]!);

    expect(await screen.findByText('Årsak til retur')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Fakta'));
    await userEvent.click(screen.getByText('Regel-/lovanvendelse'));

    const begrunnelseInput = screen.getAllByLabelText('Begrunnelse');
    await userEvent.type(begrunnelseInput[1]!, 'Dette er en begrunnelse');

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
        begrunnelse: undefined,
        kode: '5016',
      },
    });
  });

  it('skal vise feilmeldinger når en ikke har fylt ut årsak og begrunnelse', async () => {
    const lagre = vi.fn();

    render(<ForBeslutter onSubmit={lagre} />);

    expect(await screen.findByText('Kontroller endrede opplysninger og faglige vurderinger')).toBeInTheDocument();
    expect(screen.getByText('Formkrav klage NFP')).toBeInTheDocument();
    expect(screen.getByText('Klageresultat NFP')).toBeInTheDocument();

    await userEvent.click(screen.getAllByText('Godkjent')[0]!);
    await userEvent.click(screen.getAllByText('Vurder på nytt')[1]!);

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

    expect(screen.getByText('Klageresultat NFP')).toBeInTheDocument();
    expect(screen.getAllByText('Godkjent')).toHaveLength(2);
  });

  it('skal ikke forhåndsvise åpne "Vurder på nytt"-bokser når AP aldri har vært sendt tilbake (FAGSYSTEM-424226)', async () => {
    render(<ForBeslutter />);

    expect(await screen.findByText('Kontroller endrede opplysninger og faglige vurderinger')).toBeInTheDocument();

    // Ingen radioknapp skal være forhåndsvalgt – "Årsak til retur"-seksjonen skal ikke vises
    expect(screen.queryByText('Årsak til retur')).not.toBeInTheDocument();

    // Begge knapper skal være disabled fordi ingenting er vurdert ennå
    expect(screen.getByText('Godkjenn vedtaket').closest('button')).toBeDisabled();
    expect(screen.getByText('Send til saksbehandler').closest('button')).toBeDisabled();
  });

  it('skal forhåndsutfylle "Vurder på nytt" med årsaker når AP faktisk har vært sendt tilbake', async () => {
    render(<ForBeslutterMedTidligereRetur />);

    expect(await screen.findByText('Kontroller endrede opplysninger og faglige vurderinger')).toBeInTheDocument();

    // Det første AP ble tidligere sendt tilbake – årsak-seksjonen skal vises forhåndsutfylt
    expect(screen.getByText('Årsak til retur')).toBeInTheDocument();
    expect(screen.getByLabelText('Fakta')).toBeChecked();
    expect(screen.getByLabelText('Regel-/lovanvendelse')).toBeChecked();
  });
});
