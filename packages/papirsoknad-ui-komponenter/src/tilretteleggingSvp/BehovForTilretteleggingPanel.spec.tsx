import { composeStories } from '@storybook/react';
import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './BehovForTilretteleggingPanel.stories';

const { Default } = composeStories(stories);

describe('<BehovForTilretteleggingPanel>', () => {
  it('skal velge nei på alle de obligatoriske spørsmålene og da få feilmelding', async () => {
    const lagre = vi.fn();

    await Default.run({
      parameters: {
        submitCallback: lagre,
      },
    });

    expect(await screen.findByText('Behov for tilrettelegging')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findAllByText('Feltet må fylles ut')).toHaveLength(3);

    await userEvent.click(screen.getAllByText('Nei')[0]);
    await userEvent.click(screen.getAllByText('Nei')[1]);
    await userEvent.click(screen.getAllByText('Nei')[2]);

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText('Minst ett av spørsmålene må besvares med alternativ Ja')).toBeInTheDocument();

    expect(lagre).not.toHaveBeenCalled();
  });

  it('skal velge at det søkes om svangerskapspenger som selvstendig næringsdrivende', async () => {
    const lagre = vi.fn();

    await Default.run({
      parameters: {
        submitCallback: lagre,
      },
    });

    expect(await screen.findByText('Behov for tilrettelegging')).toBeInTheDocument();

    await userEvent.click(screen.getAllByText('Ja')[0]);
    await userEvent.click(screen.getAllByText('Nei')[1]);
    await userEvent.click(screen.getAllByText('Nei')[2]);

    expect(
      await screen.findByText('Jordmor/lege oppgir at tilrettelegging er nødvendig fra og med'),
    ).toBeInTheDocument();

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findAllByText('Feltet må fylles ut')).toHaveLength(4);

    const tilretteleggingFom = screen.getByLabelText('Jordmor/lege oppgir at tilrettelegging er nødvendig fra og med');
    await userEvent.type(tilretteleggingFom, '01.05.2022');
    fireEvent.blur(tilretteleggingFom);

    await userEvent.selectOptions(screen.getByLabelText('Behov for tilrettelegging'), 'HEL_TILRETTELEGGING');

    const fraDato = screen.getByLabelText('Fra dato');
    await userEvent.type(fraDato, '30.05.2022');
    fireEvent.blur(fraDato);

    const stillingsprosent = screen.getByLabelText('Stillingsprosent');
    await userEvent.type(stillingsprosent, '100');

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(lagre).toHaveBeenCalledOnce();
    expect(lagre).toHaveBeenCalledWith({
      tilretteleggingArbeidsforhold: [
        {
          '@type': 'SN',
          behovsdato: '2022-05-01',
          tilrettelegginger: [
            {
              dato: '2022-05-30',
              stillingsprosent: '100',
              tilretteleggingType: 'HEL_TILRETTELEGGING',
            },
          ],
        },
      ],
    });
  });
});
