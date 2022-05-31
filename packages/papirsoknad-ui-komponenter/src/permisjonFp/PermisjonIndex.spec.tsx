import React from 'react';
import {
  fireEvent,
  render, screen, waitFor,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';

import * as stories from './PermisjonIndex.stories';

const { Default } = composeStories(stories);

describe('<PermisjonIndex>', () => {
  it('skal velge fullt uttak', async () => {
    const lagre = jest.fn();

    const utils = render(<Default submitCallback={lagre} />);

    expect(await screen.findByText('Tidsrom for permisjon')).toBeInTheDocument();

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText(
      'Minst en av følgende perioder må være utfylt: fullt uttak, overføring av kvote, utsettelse eller gradering',
    )).toBeInTheDocument();

    userEvent.click(screen.getAllByText('Fullt uttak')[1]);

    userEvent.selectOptions(utils.getByLabelText('Periodetype'), 'MØDREKVOTE');

    const fomDatoInput = utils.getByLabelText('F.o.m.');
    userEvent.paste(fomDatoInput, '2022.05.20');
    fireEvent.blur(fomDatoInput);

    const tomDatoInput = utils.getByLabelText('T.o.m.');
    userEvent.paste(tomDatoInput, '2022.06.20');
    fireEvent.blur(tomDatoInput);

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      'felles-validering': '2022.06.20', // TODO Burde få vekk denne
      tidsromPermisjon: {
        fulltUttak: true,
        permisjonsPerioder: [{
          flerbarnsdager: undefined,
          harSamtidigUttak: undefined,
          periodeFom: '2022-05-20',
          periodeTom: '2022-06-20',
          periodeType: 'MØDREKVOTE',
        }],
        skalGradere: undefined,
        skalHaOpphold: undefined,
        skalOvertaKvote: undefined,
        skalUtsette: undefined,
      },
    });
  });
});
