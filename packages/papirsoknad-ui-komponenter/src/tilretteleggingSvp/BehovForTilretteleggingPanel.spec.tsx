import React from 'react';
import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';

import * as stories from './BehovForTilretteleggingPanel.stories';

const { Default } = composeStories(stories);

describe('<BehovForTilretteleggingPanel>', () => {
  it('skal velge nei på alle de obligatoriske spørsmålene og da få feilmelding', async () => {
    const lagre = jest.fn();

    render(<Default submitCallback={lagre} />);

    expect(await screen.findByText('Behov for tilrettelegging')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findAllByText('Feltet må fylles ut')).toHaveLength(3);

    await userEvent.click(screen.getAllByText('Nei')[0]);
    await userEvent.click(screen.getAllByText('Nei')[1]);
    await userEvent.click(screen.getAllByText('Nei')[2]);

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText('Minst ett av spørsmålene må besvares med alternativ Ja')).toBeInTheDocument();

    expect(lagre).toHaveBeenCalledTimes(0);
  });

  it('skal velge at det søkes om svangerskapspenger som selvstendig næringsdrivende', async () => {
    const lagre = jest.fn();

    const utils = render(<Default submitCallback={lagre} />);

    expect(await screen.findByText('Behov for tilrettelegging')).toBeInTheDocument();

    await userEvent.click(screen.getAllByText('Ja')[0]);
    await userEvent.click(screen.getAllByText('Nei')[1]);
    await userEvent.click(screen.getAllByText('Nei')[2]);

    expect(await screen.findByText('Jordmor/lege oppgir at tilrettelegging er nødvendig fra og med')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findAllByText('Feltet må fylles ut')).toHaveLength(4);

    const tilretteleggingFom = utils.getByLabelText('Jordmor/lege oppgir at tilrettelegging er nødvendig fra og med');
    await userEvent.type(tilretteleggingFom, '01.05.2022');
    fireEvent.blur(tilretteleggingFom);

    await userEvent.selectOptions(utils.getByLabelText('Behov for tilrettelegging'), 'HEL_TILRETTELEGGING');

    const fraDato = utils.getByLabelText('Fra dato');
    await userEvent.type(fraDato, '30.05.2022');
    fireEvent.blur(fraDato);

    const stillingsprosent = utils.getByLabelText('Stillingsprosent');
    await userEvent.type(stillingsprosent, '100');

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      tilretteleggingArbeidsforhold: {
        behovsdatoSN: '2022-05-01',
        sokForArbeidsgiver: false,
        sokForFrilans: false,
        sokForSelvstendigNaringsdrivende: true,
        tilretteleggingSelvstendigNaringsdrivende: [{
          dato: '2022-05-30',
          stillingsprosent: '100',
          tilretteleggingType: 'HEL_TILRETTELEGGING',
        }],
      },
    });
  });
});
