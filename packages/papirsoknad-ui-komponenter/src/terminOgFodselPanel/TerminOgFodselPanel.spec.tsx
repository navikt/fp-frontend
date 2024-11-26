import { fireEvent, screen, waitFor } from '@testing-library/react';
import dayjs from 'dayjs';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';

import * as stories from './TerminOgFodselPanel.stories';

const { ForeldrepengeSak, ErIkkeForeldrepengeSak } = composeStories(stories);

describe('<TerminOgFodselPanel>', () => {
  it('skal velge at barnet er født for foreldrepengersak', async () => {
    const lagre = vi.fn();

    await ForeldrepengeSak.run({
      parameters: {
        submitCallback: lagre,
      },
    });

    expect(await screen.findByText('Opplysninger om termin og fødsel')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText('Feltet må fylles ut')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Ja'));

    await waitFor(() => expect(screen.queryByText('Feltet må fylles ut')).not.toBeInTheDocument());

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findAllByText('Feltet må fylles ut')).toHaveLength(2);

    const fødtInput = screen.getByLabelText('Fødselsdato');
    await userEvent.type(fødtInput, dayjs().subtract(10, 'day').format(DDMMYYYY_DATE_FORMAT));
    fireEvent.blur(fødtInput);
    await userEvent.type(screen.getByLabelText('Antall barn'), '2');

    expect(screen.getByText('Rett til prematuruker vil kun sjekkes når du også oppgir termindato')).toBeInTheDocument();

    const termindatoInput = screen.getByLabelText('Termindato');
    await userEvent.type(termindatoInput, dayjs().subtract(15, 'day').format(DDMMYYYY_DATE_FORMAT));
    fireEvent.blur(termindatoInput);

    expect(screen.queryByText('Utstedt dato fra terminbekreftelsen')).not.toBeInTheDocument();

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(lagre).toHaveBeenCalledOnce();
    expect(lagre).toHaveBeenCalledWith({
      antallBarn: 2,
      erBarnetFodt: true,
      foedselsDato: dayjs().subtract(10, 'day').format(ISO_DATE_FORMAT),
      termindato: dayjs().subtract(15, 'day').format(ISO_DATE_FORMAT),
    });
  });

  it('skal velge at barnet er født for annet en foreldrepengersak', async () => {
    const lagre = vi.fn();
    await ErIkkeForeldrepengeSak.run({
      parameters: {
        submitCallback: lagre,
      },
    });

    expect(await screen.findByText('Opplysninger om termin og fødsel')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Ja'));

    await userEvent.type(screen.getByLabelText('Fødselsdato'), '14.09.2022');

    expect(
      screen.queryByText('Rett til prematuruker vil kun sjekkes når du også oppgir termindato'),
    ).not.toBeInTheDocument();

    await userEvent.type(screen.getByLabelText('Antall barn'), '1');

    await userEvent.type(screen.getByLabelText('Termindato'), '13.09.2022');

    expect(screen.queryByText('Utstedt dato fra terminbekreftelsen')).not.toBeInTheDocument();

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(lagre).toHaveBeenCalledOnce();
    expect(lagre).toHaveBeenCalledWith({
      antallBarn: 1,
      erBarnetFodt: true,
      foedselsDato: '2022-09-14',
      termindato: '2022-09-13',
    });
  });

  it.each([
    ['en foreldrepenge sak', ForeldrepengeSak],
    ['annet en foreldrepengersak', ErIkkeForeldrepengeSak],
  ])('skal velge at barnet ikke er født for %s', async (navn, scenario) => {
    const lagre = vi.fn();

    await scenario.run({
      parameters: {
        submitCallback: lagre,
      },
    });

    expect(await screen.findByText('Opplysninger om termin og fødsel')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Nei'));

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findAllByText('Feltet må fylles ut')).toHaveLength(2);

    const termindatoInput = screen.getByLabelText('Termindato');
    await userEvent.type(termindatoInput, '13.09.2022');
    fireEvent.blur(termindatoInput);

    await userEvent.type(screen.getByLabelText('Antall barn'), '2');

    const utstedtDatoInput = screen.getByLabelText('Utstedt dato fra terminbekreftelsen');
    await userEvent.type(utstedtDatoInput, dayjs().format(DDMMYYYY_DATE_FORMAT));
    fireEvent.blur(utstedtDatoInput);

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText(/Dato må være før eller lik/)).toBeInTheDocument();

    await userEvent.clear(utstedtDatoInput);
    await userEvent.type(utstedtDatoInput, '27.05.2022');
    fireEvent.blur(utstedtDatoInput);

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(lagre).toHaveBeenCalledOnce();
    expect(lagre).toHaveBeenCalledWith({
      antallBarnFraTerminbekreftelse: 2,
      erBarnetFodt: false,
      terminbekreftelseDato: '2022-05-27',
      termindato: '2022-09-13',
    });
  });
});
