import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './MenyNyBehandlingIndex.stories';

const { Default } = composeStories(stories);

describe('<MenyNyBehandlingIndex>', () => {
  it('skal opprette ny ankebehandling', async () => {
    const lagNyBehandling = jest.fn();
    const lukkModal = jest.fn();
    const utils = render(<Default lagNyBehandling={lagNyBehandling} lukkModal={lukkModal} />);
    expect(await screen.findByText('Opprett ny behandling')).toBeInTheDocument();

    userEvent.selectOptions(utils.getByRole('combobox'), 'BT-008');

    userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(lukkModal).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(lagNyBehandling).toHaveBeenCalledTimes(1));
    expect(lagNyBehandling).toHaveBeenNthCalledWith(1, false, {
      behandlingType: 'BT-008',
      eksternUuid: undefined,
      fagsakYtelseType: {
        kode: 'FP',
        kodeverk: 'YTELSE_TYPE',
      },
      saksnummer: '123',
    });

    expect(utils.queryByRole('checkbox')).not.toBeInTheDocument();
  });

  it('skal opprette ny førstegangssøknad og krysse av for at den er et resultat av klagebehandling', async () => {
    const lagNyBehandling = jest.fn();
    const lukkModal = jest.fn();
    const utils = render(<Default lagNyBehandling={lagNyBehandling} lukkModal={lukkModal} />);
    expect(await screen.findByText('Opprett ny behandling')).toBeInTheDocument();

    userEvent.selectOptions(utils.getByRole('combobox'), 'BT-002');

    userEvent.click(utils.getByRole('checkbox'));

    userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(lukkModal).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(lagNyBehandling).toHaveBeenCalledTimes(1));
    expect(lagNyBehandling).toHaveBeenNthCalledWith(1, false, {
      behandlingType: 'BT-002',
      eksternUuid: undefined,
      fagsakYtelseType: {
        kode: 'FP',
        kodeverk: 'YTELSE_TYPE',
      },
      nyBehandlingEtterKlage: true,
      saksnummer: '123',
    });
  });

  it('skal opprette ny førstegangssøknad og ikke krysse av for at den er et resultat av klagebehandling', async () => {
    const lagNyBehandling = jest.fn();
    const lukkModal = jest.fn();
    const utils = render(<Default lagNyBehandling={lagNyBehandling} lukkModal={lukkModal} />);
    expect(await screen.findByText('Opprett ny behandling')).toBeInTheDocument();

    userEvent.selectOptions(utils.getByRole('combobox'), 'BT-002');

    userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(lukkModal).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(lagNyBehandling).toHaveBeenCalledTimes(1));
    expect(lagNyBehandling).toHaveBeenNthCalledWith(1, false, {
      behandlingType: 'BT-002',
      eksternUuid: undefined,
      fagsakYtelseType: {
        kode: 'FP',
        kodeverk: 'YTELSE_TYPE',
      },
      nyBehandlingEtterKlage: undefined,
      saksnummer: '123',
    });
  });

  it('skal velge årsak når en har valgt revurderingsbehandling', async () => {
    const lagNyBehandling = jest.fn();
    const lukkModal = jest.fn();
    const utils = render(<Default lagNyBehandling={lagNyBehandling} lukkModal={lukkModal} />);
    expect(await screen.findByText('Opprett ny behandling')).toBeInTheDocument();

    userEvent.selectOptions(utils.getByRole('combobox'), 'BT-004');

    userEvent.selectOptions(utils.getAllByRole('combobox')[1], 'RE-KLAG-U-INNTK');

    userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(lukkModal).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(lagNyBehandling).toHaveBeenCalledTimes(1));
    expect(lagNyBehandling).toHaveBeenNthCalledWith(1, false, {
      behandlingType: 'BT-004',
      behandlingArsakType: 'RE-KLAG-U-INNTK',
      eksternUuid: undefined,
      fagsakYtelseType: {
        kode: 'FP',
        kodeverk: 'YTELSE_TYPE',
      },
      saksnummer: '123',
    });
  });

  it('skal gi feilmelding når obligatoriske felter ikke er fylt ut', async () => {
    const lagNyBehandling = jest.fn();
    const lukkModal = jest.fn();
    const utils = render(<Default lagNyBehandling={lagNyBehandling} lukkModal={lukkModal} />);
    expect(await screen.findByText('Opprett ny behandling')).toBeInTheDocument();

    userEvent.click(screen.getByText('OK'));

    expect(await screen.findByText('Feltet må fylles ut')).toBeInTheDocument();

    userEvent.selectOptions(utils.getByRole('combobox'), 'BT-004');

    await waitFor(() => expect(screen.queryByText('Feltet må fylles ut')).not.toBeInTheDocument());

    userEvent.click(screen.getByText('OK'));

    expect(await screen.findByText('Feltet må fylles ut')).toBeInTheDocument();
  });
});
