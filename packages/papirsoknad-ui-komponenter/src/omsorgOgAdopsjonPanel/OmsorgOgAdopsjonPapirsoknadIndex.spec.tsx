import { fireEvent, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';

import * as stories from './OmsorgOgAdopsjonPapirsoknadIndex.stories';

const { ForFodsel, ForAdopsjon } = composeStories(stories);

describe('<OmsorgOgAdopsjonPapirsoknadIndex>', () => {
  it('skal velge ett barn for fødsel', async () => {
    const lagre = vi.fn();

    await ForFodsel.run({
      parameters: {
        submitCallback: lagre,
      },
    });

    expect(await screen.findByText('Omsorg')).toBeInTheDocument();

    const datoInput = screen.getByLabelText('Dato for omsorgsovertakelsen');
    await userEvent.type(datoInput, '30.05.2022');
    fireEvent.blur(datoInput);

    const antallBarnInput = screen.getByLabelText('Antall barn');
    await userEvent.type(antallBarnInput, '1');

    const fødselsdatoInput = screen.getByLabelText('Fødselsdato barn 1');
    await userEvent.type(fødselsdatoInput, '21.05.2022');
    fireEvent.blur(fødselsdatoInput);

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText('Dato må være lik 27.05.2022')).toBeInTheDocument();

    await userEvent.clear(fødselsdatoInput);
    await userEvent.type(fødselsdatoInput, '27.05.2022');
    fireEvent.blur(fødselsdatoInput);

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    await waitFor(() => expect(lagre).toHaveBeenCalledOnce());
    expect(lagre).toHaveBeenCalledWith({
      omsorg: {
        antallBarn: 1,
        foedselsDato: ['2022-05-27'],
        omsorgsovertakelsesdato: '2022-05-30',
      },
    });
  });

  it('skal velge to barn for fødsel', async () => {
    const lagre = vi.fn();

    await ForFodsel.run({
      parameters: {
        submitCallback: lagre,
      },
    });

    expect(await screen.findByText('Omsorg')).toBeInTheDocument();

    const datoInput = screen.getByLabelText('Dato for omsorgsovertakelsen');
    await userEvent.type(datoInput, '30.05.2022');
    fireEvent.blur(datoInput);

    const antallBarnInput = screen.getByLabelText('Antall barn');
    await userEvent.type(antallBarnInput, '2');

    const fødselsdatoInput = screen.getByLabelText('Fødselsdato barn 1');
    await userEvent.type(fødselsdatoInput, '27.05.2022');
    fireEvent.blur(fødselsdatoInput);

    const fødselsdato2Input = screen.getByLabelText('Fødselsdato barn 2');
    await userEvent.type(fødselsdato2Input, '26.05.2022');
    fireEvent.blur(fødselsdato2Input);

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    await waitFor(() => expect(lagre).toHaveBeenCalledOnce());
    expect(lagre).toHaveBeenCalledWith({
      omsorg: {
        antallBarn: 2,
        foedselsDato: ['2022-05-27', '2022-05-26'],
        omsorgsovertakelsesdato: '2022-05-30',
      },
    });
  });

  it('skal velge to barn for adopsjon', async () => {
    const lagre = vi.fn();

    await ForAdopsjon.run({
      parameters: {
        submitCallback: lagre,
      },
    });

    expect(await screen.findByText('Adopsjon')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findAllByText('Feltet må fylles ut')).toHaveLength(2);

    const datoInput = screen.getByLabelText('Dato for omsorgsovertakelse/stebarnsadopsjon');
    await userEvent.type(datoInput, '30.05.2022');
    fireEvent.blur(datoInput);

    const ankomstdatoInput = screen.getByLabelText('Ankomstdato');
    await userEvent.type(ankomstdatoInput, '22.05.2022');
    fireEvent.blur(ankomstdatoInput);

    const antallBarnInput = screen.getByLabelText('Antall barn');
    await userEvent.type(antallBarnInput, '2');

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findAllByText('Feltet må fylles ut')).toHaveLength(2);

    const fødselsdatoInput = screen.getByLabelText('Fødselsdato barn 1');
    await userEvent.type(fødselsdatoInput, '27.05.2022');
    fireEvent.blur(fødselsdatoInput);

    const fødselsdato2Input = screen.getByLabelText('Fødselsdato barn 2');
    await userEvent.type(fødselsdato2Input, '26.05.2022');
    fireEvent.blur(fødselsdato2Input);

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    await waitFor(() => expect(lagre).toHaveBeenCalledOnce());
    expect(lagre).toHaveBeenCalledWith({
      omsorg: {
        ankomstdato: '2022-05-22',
        antallBarn: 2,
        foedselsDato: ['2022-05-27', '2022-05-26'],
        omsorgsovertakelsesdato: '2022-05-30',
      },
    });
  });
});
