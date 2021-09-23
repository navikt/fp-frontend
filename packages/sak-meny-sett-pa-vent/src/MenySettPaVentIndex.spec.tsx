import React from 'react';
import moment from 'moment';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import Modal from 'nav-frontend-modal';
import * as stories from './MenySettPaVentIndex.stories';

const { Default } = composeStories(stories);

const initFrist = (): string => {
  const date = moment().toDate();
  date.setDate(date.getDate() + 28);
  return date.toISOString().substr(0, 10);
};

describe('<MenySettPaVentIndex>', () => {
  Modal.setAppElement('body');

  it('skal velge årsak for sett på vent og så fortsette', async () => {
    const settBehandlingPaVent = jest.fn();
    const lukkModal = jest.fn();
    const utils = render(<Default settBehandlingPaVent={settBehandlingPaVent} lukkModal={lukkModal} />);
    expect(await screen.findByText('Behandlingen settes på vent med frist')).toBeInTheDocument();

    userEvent.selectOptions(utils.getByLabelText('Årsak'), 'AVV_DOK');

    userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(lukkModal).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(settBehandlingPaVent).toHaveBeenCalledTimes(1));
    expect(settBehandlingPaVent).toHaveBeenNthCalledWith(1, {
      frist: initFrist(),
      ventearsak: 'AVV_DOK',
    });
  });
});
