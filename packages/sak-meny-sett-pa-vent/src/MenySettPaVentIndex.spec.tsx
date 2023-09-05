import React from 'react';
import dayjs from 'dayjs';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import * as stories from './MenySettPaVentIndex.stories';

const { Default } = composeStories(stories);

const initFrist = (): string => {
  const date = dayjs().toDate();
  date.setDate(date.getDate() + 28);
  return dayjs(date).format(ISO_DATE_FORMAT);
};

describe('<MenySettPaVentIndex>', () => {
  it('skal velge årsak for sett på vent og så fortsette', async () => {
    const settBehandlingPaVent = vi.fn();
    const lukkModal = vi.fn();
    const utils = render(<Default settBehandlingPaVent={settBehandlingPaVent} lukkModal={lukkModal} />);
    expect(await screen.findByText('Behandlingen settes på vent')).toBeInTheDocument();

    await userEvent.selectOptions(utils.getByLabelText('Årsak'), 'AVV_DOK');

    await userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(lukkModal).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(settBehandlingPaVent).toHaveBeenCalledTimes(1));
    expect(settBehandlingPaVent).toHaveBeenNthCalledWith(1, {
      frist: initFrist(),
      ventearsak: 'AVV_DOK',
    });
  });
});
