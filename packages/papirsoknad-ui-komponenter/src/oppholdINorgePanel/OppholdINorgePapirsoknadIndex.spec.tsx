import React from 'react';
import {
  fireEvent,
  render, screen, waitFor,
} from '@testing-library/react';
import dayjs from 'dayjs';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';

import * as stories from './OppholdINorgePapirsoknadIndex.stories';

const { ForFodsel } = composeStories(stories);

describe('<OppholdINorgePapirsoknadIndex>', () => {
  it('skal svare ja på alle spørsmåla for fødsel', async () => {
    const lagre = jest.fn();

    render(<ForFodsel submitCallback={lagre} />);

    expect(await screen.findByText('Opphold i Norge')).toBeInTheDocument();

    expect(screen.getByText('Bor i Norge ved fødselstidspunktet')).toBeInTheDocument();
    userEvent.click(screen.getAllByText('Ja')[0]);

    expect(screen.getByText('Bodd i Norge de siste 12 månedene')).toBeInTheDocument();
    userEvent.click(screen.getAllByText('Ja')[1]);

    expect(screen.getByText('Bor i Norge de neste 12 månedene')).toBeInTheDocument();
    userEvent.click(screen.getAllByText('Ja')[2]);

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      fremtidigeOppholdUtenlands: [{
        periodeFom: undefined,
        periodeTom: undefined,
      }],
      harFremtidigeOppholdUtenlands: false,
      harTidligereOppholdUtenlands: false,
      oppholdINorge: true,
      tidligereOppholdUtenlands: [{
        periodeFom: undefined,
        periodeTom: undefined,
      }],
    });
  });

  it('skal svare nei på at en har bodd i norge de siste 12 månedene', async () => {
    const lagre = jest.fn();

    const utils = render(<ForFodsel submitCallback={lagre} />);

    expect(await screen.findByText('Opphold i Norge')).toBeInTheDocument();

    expect(screen.getByText('Bor i Norge ved fødselstidspunktet')).toBeInTheDocument();
    userEvent.click(screen.getAllByText('Ja')[0]);

    expect(screen.getByText('Bodd i Norge de siste 12 månedene')).toBeInTheDocument();
    userEvent.click(screen.getAllByText('Nei')[1]);

    expect(screen.getByText('Bor i Norge de neste 12 månedene')).toBeInTheDocument();
    userEvent.click(screen.getAllByText('Ja')[2]);

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findAllByText('Feltet må fylles ut')).toHaveLength(3);

    userEvent.selectOptions(utils.getByLabelText('Land'), 'AND');

    const fomDatoInput = utils.getByLabelText('F.o.m.');
    userEvent.paste(fomDatoInput, dayjs().subtract(10, 'day').format(DDMMYYYY_DATE_FORMAT));
    fireEvent.blur(fomDatoInput);

    const tomDatoInput = utils.getByLabelText('T.o.m.');
    userEvent.paste(tomDatoInput, dayjs().add(1, 'day').format(DDMMYYYY_DATE_FORMAT));
    fireEvent.blur(tomDatoInput);

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText(`Dato må være før eller lik ${dayjs().format(DDMMYYYY_DATE_FORMAT)}`)).toBeInTheDocument();

    userEvent.clear(tomDatoInput);
    userEvent.paste(tomDatoInput, dayjs().subtract(11, 'day').format(DDMMYYYY_DATE_FORMAT));
    fireEvent.blur(tomDatoInput);

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText(`Dato må være før eller lik ${dayjs().subtract(11, 'day').format(DDMMYYYY_DATE_FORMAT)}`)).toBeInTheDocument();
    expect(screen.getByText(`Dato må være etter eller lik ${dayjs().subtract(10, 'day').format(DDMMYYYY_DATE_FORMAT)}`)).toBeInTheDocument();

    userEvent.clear(tomDatoInput);
    userEvent.paste(tomDatoInput, dayjs().subtract(6, 'day').format(DDMMYYYY_DATE_FORMAT));
    fireEvent.blur(tomDatoInput);

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      dummy: '24.05.2022',
      fremtidigeOppholdUtenlands: [{
        periodeFom: undefined,
        periodeTom: undefined,
      }],
      harFremtidigeOppholdUtenlands: false,
      harTidligereOppholdUtenlands: true,
      oppholdINorge: true,
      tidligereOppholdUtenlands: [{
        land: 'AND',
        periodeFom: '2022-05-20',
        periodeTom: '2022-05-24',
      }],
    });
  });

  it('skal svare nei på at en skal bo i norge de neste 12 månedene', async () => {
    const lagre = jest.fn();

    const utils = render(<ForFodsel submitCallback={lagre} />);

    expect(await screen.findByText('Opphold i Norge')).toBeInTheDocument();

    expect(screen.getByText('Bor i Norge ved fødselstidspunktet')).toBeInTheDocument();
    userEvent.click(screen.getAllByText('Ja')[0]);

    expect(screen.getByText('Bodd i Norge de siste 12 månedene')).toBeInTheDocument();
    userEvent.click(screen.getAllByText('Ja')[1]);

    expect(screen.getByText('Bor i Norge de neste 12 månedene')).toBeInTheDocument();
    userEvent.click(screen.getAllByText('Nei')[2]);

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findAllByText('Feltet må fylles ut')).toHaveLength(3);

    userEvent.selectOptions(utils.getByLabelText('Land'), 'AND');

    const fomDatoInput = utils.getByLabelText('F.o.m.');
    userEvent.paste(fomDatoInput, dayjs().subtract(1, 'day').format(DDMMYYYY_DATE_FORMAT));
    fireEvent.blur(fomDatoInput);

    const tomDatoInput = utils.getByLabelText('T.o.m.');
    userEvent.paste(tomDatoInput, dayjs().add(10, 'day').format(DDMMYYYY_DATE_FORMAT));
    fireEvent.blur(tomDatoInput);

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText(`Dato må være etter eller lik ${dayjs().format(DDMMYYYY_DATE_FORMAT)}`)).toBeInTheDocument();

    userEvent.clear(fomDatoInput);
    userEvent.paste(fomDatoInput, dayjs().add(11, 'day').format(DDMMYYYY_DATE_FORMAT));
    fireEvent.blur(fomDatoInput);

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText(`Dato må være før eller lik ${dayjs().add(10, 'day').format(DDMMYYYY_DATE_FORMAT)}`)).toBeInTheDocument();
    expect(screen.getByText(`Dato må være etter eller lik ${dayjs().add(11, 'day').format(DDMMYYYY_DATE_FORMAT)}`)).toBeInTheDocument();

    userEvent.clear(fomDatoInput);
    userEvent.paste(fomDatoInput, dayjs().add(6, 'day').format(DDMMYYYY_DATE_FORMAT));
    fireEvent.blur(fomDatoInput);

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      dummy: '05.06.2022',
      fremtidigeOppholdUtenlands: [{
        land: 'AND',
        periodeFom: '2022-06-05',
        periodeTom: '2022-06-09',
      }],
      harFremtidigeOppholdUtenlands: true,
      harTidligereOppholdUtenlands: false,
      oppholdINorge: true,
      tidligereOppholdUtenlands: [{
        periodeFom: undefined,
        periodeTom: undefined,
      }],
    });
  });
});
