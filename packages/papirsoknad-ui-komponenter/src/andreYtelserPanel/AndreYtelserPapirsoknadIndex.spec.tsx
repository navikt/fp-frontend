import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect } from 'vitest';

import * as stories from './AndreYtelserPapirsoknadIndex.stories';

const { Default, KunMiliterEllerSiviltjeneste } = composeStories(stories);

describe('AndreYtelserPapirsoknadIndex', () => {
  it('skal validere at fom-dato er før tom-dato', async () => {
    const lagre = vi.fn();

    await Default.run({
      parameters: {
        submitCallback: lagre,
      },
    });

    expect(await screen.findByText('Andre inntektskilder')).toBeInTheDocument();
    expect(screen.getByText('Etterlønn eller sluttpakke')).toBeInTheDocument();
    expect(screen.getByText('Militær eller siviltjeneste')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Ventelønn eller vartpenger'));

    expect(await screen.findByText('F.o.m.')).toBeInTheDocument();

    const fomInput = screen.getByLabelText('F.o.m.');
    await userEvent.type(fomInput, '14.09.2022');

    const tomInput = screen.getByLabelText('T.o.m.');
    await userEvent.type(tomInput, '13.09.2022');

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText('Dato må være før eller lik 13.09.2022')).toBeInTheDocument();
    expect(screen.getByText('Dato må være etter eller lik 14.09.2022')).toBeInTheDocument();

    await userEvent.clear(tomInput);
    await userEvent.type(tomInput, '15.09.2022');

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(lagre).toHaveBeenCalledOnce();
    expect(lagre).toHaveBeenCalledWith({
      andreYtelser: [
        {
          periodeFom: '2022-09-14',
          periodeTom: '2022-09-15',
          ytelseType: 'VENTELØNN_VARTPENGER',
        },
      ],
    });
  });

  it('skal legge til flere perioder under militær eller siviltjeneste', async () => {
    const lagre = vi.fn();

    await KunMiliterEllerSiviltjeneste.run({
      parameters: {
        submitCallback: lagre,
      },
    });

    expect(await screen.findByText('Andre inntektskilder')).toBeInTheDocument();

    await userEvent.click(screen.getByLabelText('Militær eller siviltjeneste'));
    expect(screen.getByText('F.o.m.')).toBeInTheDocument();
    expect(screen.getByText('T.o.m.')).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: 'Legg til periode' }));

    const datoInputs = await screen.findAllByRole('textbox');
    expect(datoInputs).toHaveLength(4);
    await userEvent.type(datoInputs[0], '14.09.2022');
    await userEvent.type(datoInputs[1], '15.09.2022');

    await userEvent.type(datoInputs[2], '10.10.2022');
    await userEvent.type(datoInputs[3], '11.10.2022');

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(lagre).toHaveBeenCalledOnce();
    expect(lagre).toHaveBeenCalledWith({
      andreYtelser: [
        {
          periodeFom: '2022-09-14',
          periodeTom: '2022-09-15',
          ytelseType: 'MILITÆR_ELLER_SIVILTJENESTE',
        },
        {
          periodeFom: '2022-10-10',
          periodeTom: '2022-10-11',
          ytelseType: 'MILITÆR_ELLER_SIVILTJENESTE',
        },
      ],
    });
  });

  it('skal delvis fylle ut skjema og få feilmeldinger', async () => {
    const lagre = vi.fn();

    await Default.run({
      parameters: {
        submitCallback: lagre,
      },
    });

    expect(await screen.findByText('Andre inntektskilder')).toBeInTheDocument();

    await userEvent.click(screen.getByLabelText('Etterlønn eller sluttpakke'));
    await userEvent.click(screen.getByLabelText('Ventelønn eller vartpenger'));
    await userEvent.click(screen.getByLabelText('Militær eller siviltjeneste'));

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findAllByText('Feltet må fylles ut')).toHaveLength(6);

    expect(lagre).toHaveBeenCalledTimes(0);
  });

  it('skal ikke beholde perioder når valg skrus av igjen', async () => {
    const lagre = vi.fn();

    await Default.run({
      parameters: {
        submitCallback: lagre,
      },
    });

    await userEvent.click(screen.getByLabelText('Etterlønn eller sluttpakke'));

    await userEvent.type(screen.getByLabelText('F.o.m.'), '14.09.2022');

    await userEvent.type(screen.getByLabelText('T.o.m.'), '15.09.2022');

    await userEvent.click(screen.getByLabelText('Etterlønn eller sluttpakke'));

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(lagre).toHaveBeenCalledOnce();
    expect(lagre).toHaveBeenCalledWith({
      andreYtelser: [],
    });
  });
});
