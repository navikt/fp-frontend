import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './OppgaverSomErApneEllerPaVentPanel.stories';

const { Default } = composeStories(stories);

describe('<OppgaverSomErApneEllerPaVentPanel>', () => {
  // TODO echarts-testing
  it.skip('skal vise graffilter', async () => {
    const { getByLabelText } = render(<Default />);
    expect(await screen.findByText('Status - åpne behandlinger')).toBeInTheDocument();

    expect(getByLabelText('Førstegangsbehandling')).toBeChecked();
    expect(getByLabelText('Klage')).toBeChecked();
    expect(getByLabelText('Revurdering')).toBeChecked();
    expect(getByLabelText('Innsyn')).toBeChecked();
    expect(getByLabelText('Anke')).toBeChecked();
  });
});
