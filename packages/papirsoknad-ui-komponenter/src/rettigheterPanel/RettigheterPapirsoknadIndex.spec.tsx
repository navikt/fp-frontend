import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';

import * as stories from './RettigheterPapirsoknadIndex.stories';

const { Default, FarAdopterer } = composeStories(stories);

describe('<RettigheterPapirsoknadIndex>', () => {
  it('skal velge at andre forelderen er død', async () => {
    const lagre = jest.fn();

    render(<Default submitCallback={lagre} />);

    expect(await screen.findByText('Rettigheter')).toBeInTheDocument();
    expect(screen.queryByText('Mann adopterer alene')).not.toBeInTheDocument();

    userEvent.click(screen.getByText('Den andre forelderen er død'));

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      rettigheter: 'ANNEN_FORELDER_DOED',
    });
  });

  it('skal kunne velge at mann adopterer alene når søker er far og det er en adopsjonssøknad', async () => {
    const lagre = jest.fn();

    render(<FarAdopterer submitCallback={lagre} />);

    expect(await screen.findByText('Rettigheter')).toBeInTheDocument();

    userEvent.click(screen.getByText('Mann adopterer alene'));

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      rettigheter: 'MANN_ADOPTERER_ALENE',
    });
  });
});
