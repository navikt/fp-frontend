import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './MenyApneForEndringerIndex.stories';

const { Default } = composeStories(stories);

describe('MenyApneForEndringerIndex', () => {
  it('skal vise modal og velge å åpne behandling for endringer', async () => {
    const apneBehandlingForEndringer = vi.fn();
    const lukkModal = vi.fn();
    render(<Default apneBehandlingForEndringer={apneBehandlingForEndringer} lukkModal={lukkModal} />);

    expect(await screen.findByText('Åpne behandling for endringer?')).toBeInTheDocument();

    await userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(apneBehandlingForEndringer).toHaveBeenCalledTimes(1));
    expect(lukkModal).toHaveBeenCalledTimes(1);
  });
});
