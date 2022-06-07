import React from 'react';
import {
  render, screen, waitFor,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';

import * as stories from './BekreftelsePanel.stories';

const { Default, MedObligatoriskFeltFordiAnnenForelderErInformert } = composeStories(stories);

describe('<BekreftelsePanel>', () => {
  it('skal ikke ha behov for å velge når annen forelder ikke er informert', async () => {
    const lagre = jest.fn();

    render(<Default submitCallback={lagre} />);

    expect(await screen.findByText('Bekreftelse')).toBeInTheDocument();
    expect(screen.getByText('Annen forelder er kjent med hvilke perioder det er søkt om')).toBeInTheDocument();

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      annenForelderInformert: undefined,
    });
  });

  it('skal måtte velge når annen forelder er informert', async () => {
    const lagre = jest.fn();

    render(<MedObligatoriskFeltFordiAnnenForelderErInformert submitCallback={lagre} />);

    expect(await screen.findByText('Bekreftelse')).toBeInTheDocument();
    expect(screen.getByText('Annen forelder er kjent med hvilke perioder det er søkt om')).toBeInTheDocument();

    userEvent.click(screen.getByText('Ja'));

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      annenForelderInformert: true,
    });
  });
});
