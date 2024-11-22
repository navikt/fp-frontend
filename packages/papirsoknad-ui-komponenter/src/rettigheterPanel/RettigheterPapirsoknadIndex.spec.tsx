import { screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';

import * as stories from './RettigheterPapirsoknadIndex.stories';

const { MorFødsel, FarAdopterer } = composeStories(stories);

describe('<RettigheterPapirsoknadIndex>', () => {
  it('skal velge at andre forelderen er død', async () => {
    const lagre = vi.fn();

    await MorFødsel.run({ parameters: { submitCallback: lagre } });

    expect(await screen.findByText('Rettigheter')).toBeInTheDocument();
    expect(screen.queryByText('Mann adopterer alene')).not.toBeInTheDocument();

    await userEvent.click(screen.getByLabelText('Den andre forelderen er død'));

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(lagre).toHaveBeenCalledOnce();
    expect(lagre).toHaveBeenCalledWith({
      rettigheter: 'ANNEN_FORELDER_DOED',
    });
  });

  it('skal kunne velge at mann adopterer alene når søker er far og det er en adopsjonssøknad', async () => {
    const lagre = vi.fn();

    await FarAdopterer.run({ parameters: { submitCallback: lagre } });

    expect(await screen.findByText('Rettigheter')).toBeInTheDocument();

    expect(await screen.findByText('Mann adopterer alene')).toBeInTheDocument();
    await userEvent.click(screen.getByLabelText('Mann adopterer alene'));

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(lagre).toHaveBeenCalledOnce();
    expect(lagre).toHaveBeenCalledWith({
      rettigheter: 'MANN_ADOPTERER_ALENE',
    });
  });
});
