import React from 'react';
import {
  render, screen, waitFor,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';

import * as stories from './AnnenForelderPapirsoknadIndex.stories';

const { Default } = composeStories(stories);

describe('<AnnenForelderPapirsoknadIndex>', () => {
  it('skal validere fødselsnummer', async () => {
    const lagre = jest.fn();

    const utils = render(<Default submitCallback={lagre} />);

    expect(await screen.findByText('Den andre forelderen')).toBeInTheDocument();

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText('Feltet må fylles ut')).toBeInTheDocument();

    const fødselsnummer = utils.getByLabelText('Fødselsnummer/D-nummer');
    userEvent.paste(fødselsnummer, '03');

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText('Feltet må være et fødselsnummer (11 siffer)')).toBeInTheDocument();

    userEvent.paste(fødselsnummer, '232334232');

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText('Ugyldig fødselsnummer')).toBeInTheDocument();

    userEvent.clear(fødselsnummer);
    userEvent.paste(fødselsnummer, '07078518434');

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText('Fødselsnummer til den andre forelderen kan ikke være det samme som søker.')).toBeInTheDocument();

    userEvent.clear(fødselsnummer);
    userEvent.paste(fødselsnummer, '30013726678');

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      annenForelder: {
        foedselsnummer: '30013726678',
        kanIkkeOppgiAnnenForelder: undefined,
      },
    });
  });

  it('skal ikke kunne oppgi annen forelder', async () => {
    const lagre = jest.fn();

    const utils = render(<Default submitCallback={lagre} />);

    expect(await screen.findByText('Den andre forelderen')).toBeInTheDocument();

    userEvent.click(screen.getByText('Kan ikke oppgi annen forelder'));

    userEvent.click(screen.getByText('Har ikke norsk f.nr. eller d-nr.'));

    userEvent.selectOptions(utils.getByLabelText('Land'), 'AND');

    const fødselsnummer = utils.getByLabelText('Utenlandsk fødselsnummer');
    userEvent.paste(fødselsnummer, '032323');

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      annenForelder: {
        foedselsnummer: undefined,
        kanIkkeOppgiAnnenForelder: true,
        kanIkkeOppgiBegrunnelse: {
          arsak: 'IKKE_NORSK_FNR',
          land: 'AND',
          utenlandskFoedselsnummer: '032323',
        },
      },
    });
  });
});
