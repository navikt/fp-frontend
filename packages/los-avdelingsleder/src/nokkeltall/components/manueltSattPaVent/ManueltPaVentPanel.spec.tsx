import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './ManueltPaVentPanel.stories';

const { Default } = composeStories(stories);

describe('<ManueltPaVentPanel>', () => {
  it('skal vise graffilter', async () => {
    const { getByLabelText } = render(<Default />);
    expect(await screen.findByText('Antall behandlinger satt på vent manuelt')).toBeInTheDocument();

    expect((screen.getByText('4 uker frem') as HTMLOptionElement).selected).toBeTruthy();
    expect((screen.getByText('8 uker frem') as HTMLOptionElement).selected).toBeFalsy();

    expect(getByLabelText('Foreldrepenger')).not.toBeChecked();
    expect(getByLabelText('Engangsstønad')).not.toBeChecked();
    expect(getByLabelText('Svangerskapspenger')).not.toBeChecked();
    expect(getByLabelText('Alle')).toBeChecked();
  });
});
