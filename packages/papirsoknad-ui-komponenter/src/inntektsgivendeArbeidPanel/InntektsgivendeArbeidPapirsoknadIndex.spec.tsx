import { composeStories } from '@storybook/react';
import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './InntektsgivendeArbeidPapirsoknadIndex.stories';

const { Default } = composeStories(stories);

describe('<InntektsgivendeArbeidPapirsoknadIndex>', () => {
  it('skal fylle ut inntektsgivende arbeid i utland', async () => {
    const lagre = vi.fn();

    await Default.run({
      parameters: {
        submitCallback: lagre,
      },
    });

    expect(await screen.findByText('Inntektsgivende arbeid i Norge')).toBeInTheDocument();
    expect(screen.getByText(/Vedtaksløsningen foretar oppslag av norske arbeidsforhold /)).toBeInTheDocument();
    expect(screen.getByText('Inntektsgivende arbeid i utlandet')).toBeInTheDocument();

    const arbeidsgiverInput = screen.getByLabelText('Arbeidsgiver');
    await userEvent.type(arbeidsgiverInput, 'test-arbeidsgiver');

    const fomInput = screen.getByLabelText('Fra og med');
    await userEvent.type(fomInput, '15.06.2022');
    fireEvent.blur(fomInput);

    const tomInput = screen.getByLabelText('Til og med');
    await userEvent.type(tomInput, '18.06.2022');
    fireEvent.blur(tomInput);

    await userEvent.selectOptions(screen.getByLabelText('Land'), 'AND');

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(lagre).toHaveBeenCalledOnce();
    expect(lagre).toHaveBeenCalledWith({
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
