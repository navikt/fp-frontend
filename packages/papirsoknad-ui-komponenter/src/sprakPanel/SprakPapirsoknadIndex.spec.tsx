import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';

import * as stories from './SprakPapirsoknadIndex.stories';

const { Default } = composeStories(stories);

describe('<SprakPapirsoknadIndex>', () => {
  it('skal velge korrekt språk', async () => {
    const lagre = vi.fn();

    render(<Default submitCallback={lagre} />);

    expect(await screen.findByText('Språk')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Nynorsk'));

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      språkkode: 'NN',
    });
  });
});
