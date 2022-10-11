import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './BehandlingstypeVelger.stories';

const { Default } = composeStories(stories);

describe('<BehandlingstypeVelger>', () => {
  it('skal vise checkboxer for behandlingstyper', async () => {
    const { getByLabelText } = render(<Default />);
    expect(await screen.findByText('Behandlingstype')).toBeInTheDocument();
    expect(getByLabelText('Førstegangsbehandling')).toBeChecked();
    expect(getByLabelText('Klage')).not.toBeChecked();
  });

  it('skal velge klage', async () => {
    const { getByLabelText } = render(<Default />);
    expect(await screen.findByText('Behandlingstype')).toBeInTheDocument();
    expect(getByLabelText('Klage')).not.toBeChecked();

    await userEvent.click(screen.getByText('Klage'));

    await waitFor(() => expect(getByLabelText('Klage')).toBeChecked());
  });
});
