import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './MenyMerkSomHasterIndex.stories';

const { Default } = composeStories(stories);

describe('MenyMerkSomHasterIndex', () => {
  it('skal vise modal og velge å åpne behandling for endringer', async () => {
    const merkSomHaster = vi.fn();
    const lukkModal = vi.fn();
    render(<Default merkSomHaster={merkSomHaster} lukkModal={lukkModal} />);

    expect(await screen.findByText('Merk som haster?')).toBeInTheDocument();

    await userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(merkSomHaster).toHaveBeenCalledTimes(1));
    expect(lukkModal).toHaveBeenCalledTimes(1);
  });
});
