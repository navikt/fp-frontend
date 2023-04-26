import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import dayjs from 'dayjs';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';

import * as stories from './FodselPapirsoknadIndex.stories';

const { Default, ErIkkeForeldrepenger } = composeStories(stories);

describe('<FodselPapirsoknadIndex>', () => {
  it('skal velge at barnet er født for foreldrepengersak', async () => {
    const lagre = vi.fn();

    const utils = render(<Default submitCallback={lagre} />);

    expect(await screen.findByText('Opplysninger om termin og fødsel')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText('Feltet må fylles ut')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Ja'));

    await waitFor(() => expect(screen.queryByText('Feltet må fylles ut')).not.toBeInTheDocument());

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findAllByText('Feltet må fylles ut')).toHaveLength(2);

    const fødtInput = utils.getByLabelText('Når ble barnet født?');
    await userEvent.type(fødtInput, dayjs().subtract(10, 'day').format(DDMMYYYY_DATE_FORMAT));
    fireEvent.blur(fødtInput);
    await userEvent.type(utils.getByLabelText('Antall barn'), '2');

    expect(screen.getByText('Rett til prematuruker vil kun sjekkes når du også oppgir termindato')).toBeInTheDocument();

    const termindatoInput = utils.getByLabelText('Termindato');
    await userEvent.type(termindatoInput, '14.09.2022');
    fireEvent.blur(termindatoInput);

    const utstedDatoInput = utils.getByLabelText('Utstedt dato fra terminbekreftelsen');
    await userEvent.type(utstedDatoInput, '15.09.2022');
    fireEvent.blur(utstedDatoInput);

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      antallBarn: '2',
      erBarnetFodt: true,
      foedselsDato: dayjs().subtract(10, 'day').format(ISO_DATE_FORMAT),
      terminbekreftelseDato: '2022-09-15',
      termindato: '2022-09-14',
    });
  });

  it('skal velge at barnet er født for annet en foreldrepengersak', async () => {
    render(<ErIkkeForeldrepenger />);

    expect(await screen.findByText('Opplysninger om termin og fødsel')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Ja'));

    expect(await screen.findByText('Når ble barnet født?')).toBeInTheDocument();

    expect(
      screen.queryByText('Rett til prematuruker vil kun sjekkes når du også oppgir termindato'),
    ).not.toBeInTheDocument();
    expect(screen.queryByText('Termindato')).not.toBeInTheDocument();
    expect(screen.queryByText('Utstedt dato fra terminbekreftelsen')).not.toBeInTheDocument();
  });

  it('skal velge at barnet ikke er født', async () => {
    const lagre = vi.fn();

    const utils = render(<Default submitCallback={lagre} />);

    expect(await screen.findByText('Opplysninger om termin og fødsel')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Nei'));

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findAllByText('Feltet må fylles ut')).toHaveLength(2);

    const termindatoInput = utils.getByLabelText('Termindato');
    await userEvent.type(termindatoInput, '13.09.2022');
    fireEvent.blur(termindatoInput);

    await userEvent.type(utils.getByLabelText('Antall barn'), '2');

    const utstedtDatoInput = utils.getByLabelText('Utstedt dato fra terminbekreftelsen');
    await userEvent.type(utstedtDatoInput, dayjs().format(DDMMYYYY_DATE_FORMAT));
    fireEvent.blur(utstedtDatoInput);

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText(/Dato må være før eller lik/)).toBeInTheDocument();

    await userEvent.clear(utstedtDatoInput);
    await userEvent.type(utstedtDatoInput, '27.05.2022');
    fireEvent.blur(utstedtDatoInput);

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      antallBarnFraTerminbekreftelse: '2',
      erBarnetFodt: false,
      terminbekreftelseDato: '2022-05-27',
      termindato: '2022-09-13',
    });
  });
});
