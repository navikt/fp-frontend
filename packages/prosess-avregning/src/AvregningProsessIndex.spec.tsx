import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './AvregningProsessIndex.stories';

const { AksjonspunktVurderFeilutbetaling, SimuleringspanelUtenAksjonspunkt } = composeStories(stories);

describe('<AvregningProsessIndex>', () => {
  it('skal velge ingen tilbakebetaling og så bekrefte', async () => {
    const lagre = jest.fn();

    const utils = render(<AksjonspunktVurderFeilutbetaling submitCallback={lagre} />);

    expect(await screen.findByText('Simulering')).toBeInTheDocument();
    expect(screen.getByText('Vurder videre behandling av tilbakekreving')).toBeInTheDocument();
    expect(screen.getByText('−49 863')).toBeInTheDocument();
    expect(screen.getByText('−10 899')).toBeInTheDocument();
    expect(screen.getByText('Foreldrepenger avvik')).toBeInTheDocument();
    expect(screen.getByText('−9 176')).toBeInTheDocument();
    expect(screen.getByText('Resultat')).toBeInTheDocument();
    expect(screen.getByText('−26 486')).toBeInTheDocument();

    const begrunnelseInput = utils.getByLabelText('Begrunn hvordan feilutbetalingen skal behandles videre');
    userEvent.paste(begrunnelseInput, 'Dette er en begrunnelse');

    userEvent.click(screen.getByText('Avvent samordning, ingen tilbakekreving'));

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en begrunnelse',
      kode: '5084',
      varseltekst: undefined,
      videreBehandling: 'TILBAKEKR_IGNORER',
    });
  });

  it('skal velge å opprett tilbakekreving, sende varsel og så bekrefte', async () => {
    const lagre = jest.fn();

    const utils = render(<AksjonspunktVurderFeilutbetaling submitCallback={lagre} />);

    expect(await screen.findByText('Simulering')).toBeInTheDocument();

    const begrunnelseInput = utils.getByLabelText('Begrunn hvordan feilutbetalingen skal behandles videre');
    userEvent.paste(begrunnelseInput, 'Dette er en begrunnelse');

    userEvent.click(screen.getByText('Opprett tilbakekreving, send varsel'));

    expect(await screen.findByText('Send varsel om tilbakekreving')).toBeInTheDocument();

    const fritekstVarselInput = utils.getByLabelText('Fritekst i varselet');
    userEvent.paste(fritekstVarselInput, 'Dette er en fritekst');

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en begrunnelse',
      kode: '5084',
      varseltekst: 'Dette er en fritekst',
      videreBehandling: 'TILBAKEKR_INFOTRYGD',
    });
  });

  it('skal vise og så skjule verdier i tabell', async () => {
    render(<AksjonspunktVurderFeilutbetaling />);

    expect(await screen.findByText('Simulering')).toBeInTheDocument();

    userEvent.click(screen.getByText('Vis flere detaljer'));

    expect(await screen.findByText('Foreldrepenger nytt beløp')).toBeInTheDocument();
    expect(screen.getByText('52 619')).toBeInTheDocument();
    expect(screen.getByText('Foreldrepenger tidligere utbetalt')).toBeInTheDocument();
    expect(screen.getByText('61 795')).toBeInTheDocument();

    userEvent.click(screen.getByText('Vis færre detaljer'));

    expect(await screen.findByText('Vis flere detaljer')).toBeInTheDocument();
  });

  it('skal ikke vise aksjonspunkt-tekst og input-felter når en ikke har aksjonspunkt', async () => {
    const utils = render(<SimuleringspanelUtenAksjonspunkt />);

    expect(await screen.findByText('Simulering')).toBeInTheDocument();
    expect(screen.queryByText('Vurder videre behandling av tilbakekreving')).not.toBeInTheDocument();
    expect(utils.queryByLabelText('Begrunn hvordan feilutbetalingen skal behandles videre')).not.toBeInTheDocument();
    expect(screen.queryByText('Opprett tilbakekreving, send varsel')).not.toBeInTheDocument();

    expect(screen.getByText(
      'Det foreligger en åpen tilbakekrevingsbehandling, endringer i vedtaket vil automatisk oppdatere eksisterende feilutbetalte perioder og beløp.',
    )).toBeInTheDocument();
  });
});
