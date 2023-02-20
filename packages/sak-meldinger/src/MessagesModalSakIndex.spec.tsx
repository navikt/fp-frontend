import React from 'react';
import { Modal } from '@navikt/ds-react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './MessagesModalSakIndex.stories';

const { Default } = composeStories(stories);

describe('<MessagesModalSakIndex>', () => {
  if (Modal.setAppElement) {
    Modal.setAppElement('body');
  }

  it('skal vise modal når brevet er bestilt og lukke ved trykk på OK-knapp', async () => {
    const lukk = vi.fn();

    render(<Default closeEvent={lukk} />);

    expect(await screen.findByText('Brevet er bestilt')).toBeInTheDocument();

    await userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(lukk).toHaveBeenCalledTimes(1));
  });
});
