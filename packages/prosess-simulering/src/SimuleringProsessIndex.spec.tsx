import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import * as stories from './SimuleringProsessIndex.stories';

const { AksjonspunktVurderFeilutbetaling, SimuleringspanelUtenAksjonspunkt, AksjonspunktKontrollerEtterbetaling } =
  composeStories(stories);

describe('<SimuleringProsessIndex>', () => {
  it('skal velge ingen tilbakebetaling og så bekrefte', async () => {
    const lagre = vi.fn();

    const utils = render(<AksjonspunktVurderFeilutbetaling submitCallback={lagre} />);

    expect(await screen.findByText('Simulering')).toBeInTheDocument();
    expect(screen.getByText('Vurder videre behandling av tilbakekreving')).toBeInTheDocument();
    expect(screen.getByText('−49 863')).toBeInTheDocument();
    expect(screen.getByText('−10 899')).toBeInTheDocument();
    expect(screen.getByText('Foreldrepenger avvik')).toBeInTheDocument();
    expect(screen.getByText('−9 176')).toBeInTheDocument();
    expect(screen.getByText('Resultat')).toBeInTheDocument();
    expect(screen.getByText('−26 486')).toBeInTheDocument();

    const begrunnelseInput = utils.getByLabelText(
      'Beskriv hvorfor det har oppstått en feilutbetaling og hvordan den skal behandles videre',
    );
    await userEvent.type(begrunnelseInput, 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Avvent samordning, ingen tilbakekreving'));

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        begrunnelse: 'Dette er en begrunnelse',
        kode: '5084',
        varseltekst: undefined,
        videreBehandling: 'TILBAKEKR_IGNORER',
      },
    ]);
  });

  it('skal velge å opprett tilbakekreving, sende varsel og så bekrefte', async () => {
    const lagre = vi.fn();

    const utils = render(<AksjonspunktVurderFeilutbetaling submitCallback={lagre} />);

    expect(await screen.findByText('Simulering')).toBeInTheDocument();

    const begrunnelseInput = utils.getByLabelText(
      'Beskriv hvorfor det har oppstått en feilutbetaling og hvordan den skal behandles videre',
    );
    await userEvent.type(begrunnelseInput, 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Opprett tilbakekreving, send varsel'));

    expect(await screen.findByText('Send varsel om tilbakekreving')).toBeInTheDocument();

    const fritekstVarselInput = utils.getByLabelText('Fritekst i varselet');
    await userEvent.type(fritekstVarselInput, 'Dette er en fritekst');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        begrunnelse: 'Dette er en begrunnelse',
        kode: '5084',
        varseltekst: 'Dette er en fritekst',
        videreBehandling: 'TILBAKEKR_INFOTRYGD',
      },
    ]);
  });

  it('skal vise og så skjule verdier i tabell', async () => {
    render(<AksjonspunktVurderFeilutbetaling />);

    expect(await screen.findByText('Simulering')).toBeInTheDocument();

    expect(screen.queryByText('Foreldrepenger nytt beløp')).not.toBeInTheDocument();

    await userEvent.click(screen.getByText('Vis flere detaljer'));

    expect(await screen.findByText('Foreldrepenger nytt beløp')).toBeInTheDocument();
    expect(screen.getByText(/52 619/)).toBeInTheDocument();
    expect(screen.getByText('Foreldrepenger tidligere utbetalt')).toBeInTheDocument();
    expect(screen.getByText('61 795')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Vis færre detaljer'));

    expect(await screen.findByText('Vis flere detaljer')).toBeInTheDocument();
  });

  it('skal ikke vise aksjonspunkt-tekst og input-felter når en ikke har aksjonspunkt', async () => {
    const utils = render(<SimuleringspanelUtenAksjonspunkt />);

    expect(await screen.findByText('Simulering')).toBeInTheDocument();
    expect(screen.queryByText('Vurder videre behandling av tilbakekreving')).not.toBeInTheDocument();
    expect(
      utils.queryByLabelText('Beskriv hvorfor det har oppstått en feilutbetaling og hvordan den skal behandles videre'),
    ).not.toBeInTheDocument();
    expect(screen.queryByText('Opprett tilbakekreving, send varsel')).not.toBeInTheDocument();

    expect(
      screen.getByText(
        'Det foreligger en åpen tilbakekrevingsbehandling, endringer i vedtaket vil automatisk oppdatere eksisterende feilutbetalte perioder og beløp.',
      ),
    ).toBeInTheDocument();
  });

  it('skal kunne løse aksjonspunkt for stor etterbetaling til søker', async () => {
    const lagre = vi.fn();

    const utils = render(<AksjonspunktKontrollerEtterbetaling submitCallback={lagre} />);

    expect(await screen.findByText('Simulering')).toBeInTheDocument();
    expect(
      await screen.findByText(
        'Ny inntektsmelding vil føre til en høy etterbetaling til bruker i en tidligere innvilget periode. Kontroller om dette er riktig',
      ),
    ).toBeInTheDocument();
    const begrunnelse = utils.getByLabelText('Begrunn hvorfor du går videre med denne behandlingen.');
    await userEvent.type(begrunnelse, 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        begrunnelse: 'Dette er en begrunnelse',
        kode: '5029',
      },
    ]);
  });
});
