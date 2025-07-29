import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './SprakPapirsoknadIndex.stories';

const { Default } = composeStories(stories);

describe('SprakPapirsoknadIndex', () => {
  it('skal velge korrekt språk', async () => {
    const lagre = vi.fn();

    await Default.run({ parameters: { submitCallback: lagre } });

    expect(await screen.findByText('Språk')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Nynorsk'));

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(lagre).toHaveBeenCalledOnce();
    expect(lagre).toHaveBeenCalledWith({
      språkkode: 'NN',
    });
  });
});
