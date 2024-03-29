import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';

import * as stories from './InntektsgivendeArbeidPapirsoknadIndex.stories';

const { Default } = composeStories(stories);

describe('<InntektsgivendeArbeidPapirsoknadIndex>', () => {
  it('skal fylle ut inntektsgivende arbeid i utland', async () => {
    const lagre = vi.fn();

    const utils = render(<Default submitCallback={lagre} />);

    expect(await screen.findByText('Inntektsgivende arbeid i Norge')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Vedtaksløsningen foretar oppslag av norske arbeidsforhold fra Aa-registeret så dette skal ikke registreres her',
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('Inntektsgivende arbeid i utlandet')).toBeInTheDocument();

    const arbeidsgiverInput = utils.getByLabelText('Arbeidsgiver');
    await userEvent.type(arbeidsgiverInput, 'test-arbeidsgiver');

    const fomInput = utils.getByLabelText('Fra og med');
    await userEvent.type(fomInput, '15.06.2022');
    fireEvent.blur(fomInput);

    const tomInput = utils.getByLabelText('Til og med');
    await userEvent.type(tomInput, '18.06.2022');
    fireEvent.blur(tomInput);

    await userEvent.selectOptions(utils.getByLabelText('Land'), 'AND');

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      arbeidsforhold: [
        {
          periodeFom: '2022-06-15',
          periodeTom: '2022-06-18',
          arbeidsgiver: 'test-arbeidsgiver',
          land: 'AND',
        },
      ],
    });
  });
});
