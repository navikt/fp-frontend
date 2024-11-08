import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';

import * as stories from './AnnenForelderPapirsoknadIndex.stories';

const { Default } = composeStories(stories);

describe('<AnnenForelderPapirsoknadIndex>', () => {
  it('skal validere fødselsnummer', async () => {
    const lagre = vi.fn();

    const utils = render(<Default submitCallback={lagre} />);

    expect(await screen.findByText('Den andre forelderen')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText('Feltet må fylles ut')).toBeInTheDocument();

    const fødselsnummer = utils.getByLabelText('Fødselsnummer/D-nummer');
    await userEvent.type(fødselsnummer, '03');

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText('Feltet må være et fødselsnummer (11 siffer)')).toBeInTheDocument();

    await userEvent.type(fødselsnummer, '232334232');

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText('Ugyldig fødselsnummer')).toBeInTheDocument();

    await userEvent.clear(fødselsnummer);
    await userEvent.type(fødselsnummer, '07078518434');

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(
      await screen.findByText('Fødselsnummer til den andre forelderen kan ikke være det samme som søker'),
    ).toBeInTheDocument();

    await userEvent.clear(fødselsnummer);
    await userEvent.type(fødselsnummer, '30013726678');

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      annenForelder: {
        foedselsnummer: '30013726678',
        kanIkkeOppgiAnnenForelder: undefined,
      },
    });
  });

  it('skal ikke kunne oppgi annen forelder', async () => {
    const lagre = vi.fn();

    const utils = render(<Default submitCallback={lagre} />);

    expect(await screen.findByText('Den andre forelderen')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Kan ikke oppgi annen forelder'));

    await userEvent.click(screen.getByText('Har ikke norsk f.nr. eller d-nr.'));

    await userEvent.selectOptions(utils.getByLabelText('Land'), 'AND');

    const fødselsnummer = utils.getByLabelText('Utenlandsk fødselsnummer');
    await userEvent.type(fødselsnummer, '032323');

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

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
