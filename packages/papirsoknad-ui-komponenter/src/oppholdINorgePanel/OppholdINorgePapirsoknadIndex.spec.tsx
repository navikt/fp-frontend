import React from 'react';
import {
  fireEvent,
  render, screen, waitFor,
} from '@testing-library/react';
import dayjs from 'dayjs';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';

import * as stories from './OppholdINorgePapirsoknadIndex.stories';

const { ForFodsel, ForAdopsjon } = composeStories(stories);

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

  it('skal ha annen tekst på første spørsmålet for adopsjon', async () => {
    const lagre = jest.fn();

    render(<ForAdopsjon submitCallback={lagre} />);

    expect(await screen.findByText('Opphold i Norge')).toBeInTheDocument();

    expect(screen.getByText('Søker oppholder seg i Norge nå')).toBeInTheDocument();
    expect(screen.queryByText('Bor i Norge ved fødselstidspunktet')).not.toBeInTheDocument();
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
      fremtidigeOppholdUtenlands: [{
        periodeFom: undefined,
        periodeTom: undefined,
      }],
      harFremtidigeOppholdUtenlands: false,
      harTidligereOppholdUtenlands: true,
      oppholdINorge: true,
      tidligereOppholdUtenlands: [{
        land: 'AND',
        periodeFom: dayjs().subtract(10, 'day').format(ISO_DATE_FORMAT),
        periodeTom: dayjs().subtract(6, 'day').format(ISO_DATE_FORMAT),
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
    userEvent.paste(fomDatoInput, dayjs('2022-05-30').subtract(1, 'day').format(DDMMYYYY_DATE_FORMAT));
    fireEvent.blur(fomDatoInput);

    const tomDatoInput = utils.getByLabelText('T.o.m.');
    userEvent.paste(tomDatoInput, dayjs().add(10, 'day').format(DDMMYYYY_DATE_FORMAT));
    fireEvent.blur(tomDatoInput);

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText('Dato må være etter eller lik 30.05.2022')).toBeInTheDocument();

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
      fremtidigeOppholdUtenlands: [{
        land: 'AND',
        periodeFom: dayjs().add(6, 'day').format(ISO_DATE_FORMAT),
        periodeTom: dayjs().add(10, 'day').format(ISO_DATE_FORMAT),
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
