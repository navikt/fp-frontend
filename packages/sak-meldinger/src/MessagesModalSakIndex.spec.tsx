import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import * as stories from './MessagesModalSakIndex.stories';

const { Default } = composeStories(stories);

describe('<MessagesModalSakIndex>', () => {
  it('skal vise modal når brevet er bestilt og lukke ved trykk på OK-knapp', async () => {
    const lukk = vi.fn();

    render(<Default closeEvent={lukk} />);

    expect(await screen.findAllByText('Brevet er bestilt')).toHaveLength(2);

    await userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(lukk).toHaveBeenCalledTimes(1));
  });
});
