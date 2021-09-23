import React from 'react';
import Modal from 'nav-frontend-modal';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './MessagesModalSakIndex.stories';

const { Default } = composeStories(stories);

describe('<MessagesModalSakIndex>', () => {
  Modal.setAppElement('body');

  it('skal vise modal når brevet er bestilt og lukke ved trykk på OK-knapp', async () => {
    const lukk = jest.fn();

    render(<Default closeEvent={lukk} />);

    expect(await screen.findByText('Brevet er bestilt')).toBeInTheDocument();

    userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(lukk).toHaveBeenCalledTimes(1));
  });
});
