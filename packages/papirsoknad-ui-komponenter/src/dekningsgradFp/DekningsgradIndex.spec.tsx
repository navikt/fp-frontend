import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';

import * as stories from './DekningsgradIndex.stories';

const { Default } = composeStories(stories);

describe('<BekreftelsePanel>', () => {
  it('skal måtte velge dekningsgrad', async () => {
    const lagre = vi.fn();

    render(<Default submitCallback={lagre} />);

    expect(await screen.findByText('Dekningsgrad')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText('Feltet må fylles ut')).toBeInTheDocument();

    await userEvent.click(screen.getByText('80 prosent'));

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      dekningsgrad: '80_PROSENT',
    });
  });
});
