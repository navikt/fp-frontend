import { composeStories } from '@storybook/react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './BehandlingPaVent.stories';

const { BehandlingSattPåVent, BehandlingSattManueltPåVent } = composeStories(stories);

describe('BehandlingPaVent', () => {
  it('skal vise at behandling er satt på vent', async () => {
    await BehandlingSattPåVent.run();

    expect(await screen.findByText('Behandlingen er satt på vent')).toBeInTheDocument();
    expect(screen.getByText('Frist')).toBeInTheDocument();
    expect(screen.getByText('Årsak')).toBeInTheDocument();
    expect(screen.queryByRole('Select')).not.toBeInTheDocument();
  });

  it('skal vise at behandling er satt på vent manuelt og så endre årsak og lagre', async () => {
    const åpneSøkeside = vi.fn();

    await BehandlingSattManueltPåVent.run({
      args: { ...BehandlingSattManueltPåVent.args, opneSokeside: åpneSøkeside },
    });

    expect(await screen.findByText('Behandlingen er satt på vent')).toBeInTheDocument();
    expect(screen.getByText('Frist')).toBeInTheDocument();
    expect(screen.getByText('Årsak')).toBeInTheDocument();
    expect(screen.getByText('Du kan endre frist eller årsak før du fortsetter')).toBeInTheDocument();

    await userEvent.selectOptions(screen.getByLabelText('Årsak'), 'AVV_DOK');

    await userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(åpneSøkeside).toHaveBeenCalledTimes(1));
  });
});
