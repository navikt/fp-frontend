import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './MenyEndreBehandlendeEnhetIndex.stories';

const { Default } = composeStories(stories);

describe('<MenyEndreBehandlendeEnhetIndex>', () => {
  it('skal velge og lagre ny enhet', async () => {
    const lagreNyBehandlendeEnhet = jest.fn();
    const lukkModal = jest.fn();
    const utils = render(<Default lagreNyBehandlendeEnhet={lagreNyBehandlendeEnhet} lukkModal={lukkModal} />);
    expect(await screen.findByText('Endre behandlende enhet for valgt behandling')).toBeInTheDocument();
    expect(screen.getByText('OK')).toBeDisabled();

    const begrunnelseInput = utils.getByLabelText('Begrunnelse');
    userEvent.type(begrunnelseInput, 'Dette er en begrunnelse');

    userEvent.selectOptions(utils.getByLabelText('Ny enhet'), '0');

    await waitFor(() => expect(screen.getByText('OK')).not.toBeDisabled());
    userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(lukkModal).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(lagreNyBehandlendeEnhet).toHaveBeenCalledTimes(1));
    expect(lagreNyBehandlendeEnhet).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en begrunnelse',
      enhetId: '1000',
      enhetNavn: 'NAV Viken',
    });
  });

  it('skal avbryte endring av enhet', async () => {
    const lagreNyBehandlendeEnhet = jest.fn();
    const lukkModal = jest.fn();
    render(<Default lagreNyBehandlendeEnhet={lagreNyBehandlendeEnhet} lukkModal={lukkModal} />);
    expect(await screen.findByText('Endre behandlende enhet for valgt behandling')).toBeInTheDocument();

    userEvent.click(screen.getByText('Avbryt'));

    await waitFor(() => expect(lukkModal).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(lagreNyBehandlendeEnhet).toHaveBeenCalledTimes(0));
  });
});
