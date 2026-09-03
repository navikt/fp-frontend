import { composeStories } from '@storybook/react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './BehandlingstypeVelger.stories';

const { Default } = composeStories(stories);

describe('BehandlingstypeVelger', () => {
  it('skal vise checkboxer for behandlingstyper', async () => {
    await Default.run();
    expect(await screen.findByText('Behandlingstype')).toBeInTheDocument();
    expect(screen.getByLabelText('Førstegangsbehandling')).toBeChecked();
    expect(screen.getByLabelText('Klage')).not.toBeChecked();
  });

  it('skal velge klage', async () => {
    await Default.run();
    expect(await screen.findByText('Behandlingstype')).toBeInTheDocument();
    expect(screen.getByLabelText('Klage')).not.toBeChecked();

    await userEvent.click(screen.getByText('Klage'));

    await waitFor(() => expect(screen.getByLabelText('Klage')).toBeChecked());
  });
});
