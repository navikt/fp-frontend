import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import * as stories from './MenyEndreBehandlendeEnhetIndex.stories';

const { Default } = composeStories(stories);

describe('<MenyEndreBehandlendeEnhetIndex>', () => {
  it('skal velge og lagre ny enhet', async () => {
    const lagreNyBehandlendeEnhet = vi.fn();
    const lukkModal = vi.fn();
    const utils = render(<Default lagreNyBehandlendeEnhet={lagreNyBehandlendeEnhet} lukkModal={lukkModal} />);
    expect(await screen.findByText('Endre behandlende enhet for valgt behandling')).toBeInTheDocument();
    expect(screen.getByText('OK').closest('button')).toBeDisabled();

    const begrunnelseInput = utils.getByLabelText('Begrunnelse');
    await userEvent.type(begrunnelseInput, 'Dette er en begrunnelse');

    await userEvent.selectOptions(utils.getByLabelText('Ny enhet'), '0');

    expect(await screen.findByText('OK')).toBeEnabled();
    await userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(lukkModal).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(lagreNyBehandlendeEnhet).toHaveBeenCalledTimes(1));
    expect(lagreNyBehandlendeEnhet).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en begrunnelse',
      enhetId: '1000',
      enhetNavn: 'Nav Vikafossen',
    });
  });

  it('skal avbryte endring av enhet', async () => {
    const lagreNyBehandlendeEnhet = vi.fn();
    const lukkModal = vi.fn();
    render(<Default lagreNyBehandlendeEnhet={lagreNyBehandlendeEnhet} lukkModal={lukkModal} />);
    expect(await screen.findByText('Endre behandlende enhet for valgt behandling')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Avbryt'));

    await waitFor(() => expect(lukkModal).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(lagreNyBehandlendeEnhet).toHaveBeenCalledTimes(0));
  });
});
