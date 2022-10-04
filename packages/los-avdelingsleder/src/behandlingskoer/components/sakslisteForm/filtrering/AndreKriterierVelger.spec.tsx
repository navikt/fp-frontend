import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './AndreKriterierVelger.stories';

const { Default } = composeStories(stories);

describe('<AndreKriterierVelger>', () => {
  it('skal vise checkboxer for andre kriterier der Til beslutter er valgt fra før', async () => {
    const { getByLabelText } = render(<Default />);
    expect(await screen.findByText('Til beslutter')).toBeInTheDocument();
    expect(getByLabelText('Til beslutter')).toBeChecked();
    expect(getByLabelText('Ta med i køen')).toBeChecked();
    expect(getByLabelText('Fjern fra køen')).not.toBeChecked();
  });

  it('skal velge Registrer papirsøknad og fjerne dette fra køen', async () => {
    const { getAllByLabelText } = render(<Default />);
    expect(await screen.findByText('Registrer papirsøknad')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Registrer papirsøknad'));

    expect(getAllByLabelText('Ta med i køen')[1]).not.toBeChecked();
    expect(getAllByLabelText('Fjern fra køen')[1]).not.toBeChecked();

    await userEvent.click(getAllByLabelText('Fjern fra køen')[1]);

    await waitFor(() => expect(getAllByLabelText('Fjern fra køen')[1]).toBeChecked());
    expect(getAllByLabelText('Ta med i køen')[1]).not.toBeChecked();
  });
});
