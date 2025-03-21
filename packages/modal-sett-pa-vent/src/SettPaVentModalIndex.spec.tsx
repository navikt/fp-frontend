import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import dayjs from 'dayjs';
import { expect } from 'vitest';

import * as stories from './SettPaVentModalIndex.stories';

const { BehandlingMedFrist, BehandlingSomErAutomatiskPåVentUtenFrist, VenterPåTilbakekrevinggrunnlagMedUtløptFrist } =
  composeStories(stories);

describe('SettPaVentModalIndex', () => {
  it('skal kunne lagre når frist er en gyldig fremtidig dato', async () => {
    const submitCallback = vi.fn();
    render(<BehandlingMedFrist submitCallback={submitCallback} />);

    expect(await screen.findByText('Behandlingen settes på vent')).toBeInTheDocument();

    const frist = dayjs().add(1, 'day');
    await userEvent.clear(screen.getByLabelText('Frist'));
    await userEvent.type(screen.getByLabelText('Frist'), frist.format(DDMMYYYY_DATE_FORMAT));

    await userEvent.selectOptions(screen.getByLabelText('Årsak'), 'AVV_DOK');
    await userEvent.click(screen.getByText('OK'));

    await waitFor(() => {
      expect(submitCallback).toHaveBeenNthCalledWith(1, {
        ventearsak: 'AVV_DOK',
        frist: frist.format(ISO_DATE_FORMAT),
      });
    });
  });

  it('skal ikke kunne lagre med historisk frist og uten årsak', async () => {
    const submitCallback = vi.fn();
    render(<BehandlingMedFrist submitCallback={submitCallback} />);

    expect(await screen.findByText('Behandlingen settes på vent')).toBeInTheDocument();
    await userEvent.clear(screen.getByLabelText('Frist'));
    await userEvent.type(screen.getByLabelText('Frist'), '18.03.2025');

    await userEvent.click(screen.getByText('OK'));

    const date = dayjs().format(DDMMYYYY_DATE_FORMAT);
    expect(screen.getByText(`Dato må være etter eller lik ${date}`)).toBeInTheDocument();
    expect(screen.getByText('Feltet må fylles ut')).toBeInTheDocument();

    expect(screen.getByText('OK').closest('button')).toBeEnabled();
    await userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(submitCallback).toHaveBeenCalledTimes(0));
  });

  it('skal ikke vise frist eller årsak-input når behandling automatisk er satt på vent uten frist', async () => {
    render(<BehandlingSomErAutomatiskPåVentUtenFrist />);

    expect(await screen.findByText('Behandlingen er satt på vent')).toBeInTheDocument();
    expect(screen.queryByLabelText('Frist')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Årsak')).not.toBeInTheDocument();
  });

  it('skal vise tekst for tilbakekreving behandling venter på kravgrunnlag og fristen er utløpt', async () => {
    render(<VenterPåTilbakekrevinggrunnlagMedUtløptFrist />);
    expect(await screen.findByText('Behandlingen er satt på vent')).toBeInTheDocument();
    expect(screen.getByText('Venter på tilbakekrevingsgrunnlag fra økonomi')).toBeInTheDocument();
    expect(screen.getByText(/OBS! Fristen på denne behandlingen er utløpt!/)).toBeInTheDocument();
    expect(screen.getByText(/Kontroller hvorfor Økonomi ikke har dannet et kravgrunnlag./)).toBeInTheDocument();
  });
});
