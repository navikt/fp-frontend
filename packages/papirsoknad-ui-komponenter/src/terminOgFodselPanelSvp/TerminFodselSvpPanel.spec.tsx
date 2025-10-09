import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { composeStories } from '@storybook/react';
import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import dayjs from 'dayjs';
import { expect } from 'vitest';

import * as stories from './TerminFodselSvpPanel.stories';

const { Default } = composeStories(stories);

describe('TerminFodselSvpPanel', () => {
  it('skal velge termindato og fødselsdato', async () => {
    const lagre = vi.fn();
    const foedselsDato = dayjs().subtract(1, 'day');
    const termindato = dayjs().subtract(1, 'week');

    await Default.run({ parameters: { submitCallback: lagre } });

    expect(await screen.findByText('Opplysninger om termin og fødsel')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Ja'));

    const fødselsdatoFelt = screen.getByLabelText('Fødselsdato');
    await userEvent.type(fødselsdatoFelt, foedselsDato.format(DDMMYYYY_DATE_FORMAT));

    const termindatoFelt = screen.getByLabelText('Termindato');
    await userEvent.type(termindatoFelt, termindato.format(DDMMYYYY_DATE_FORMAT));
    fireEvent.blur(termindatoFelt);

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(lagre).toHaveBeenCalledOnce();
    expect(lagre).toHaveBeenCalledWith({
      erBarnetFodt: true,
      foedselsDato: foedselsDato.format(ISO_DATE_FORMAT),
      termindato: termindato.format(ISO_DATE_FORMAT),
    });
  });

  it('skal bare vise fødselsdato når barnet er født', async () => {
    await Default.run();

    expect(await screen.findByText('Opplysninger om termin og fødsel')).toBeInTheDocument();

    expect(screen.queryByLabelText('Fødselsdato')).not.toBeInTheDocument();
    await userEvent.click(screen.getByText('Nei'));
    expect(screen.queryByLabelText('Fødselsdato')).not.toBeInTheDocument();
    await userEvent.click(screen.getByText('Ja'));
    expect(screen.getByLabelText('Fødselsdato')).toBeInTheDocument();
  });

  it('skal validere termindato i forhold til fødselsdato', async () => {
    const lagre = vi.fn();

    const foedselsDato = dayjs().subtract(6, 'months').format(ISO_DATE_FORMAT);
    const ugyldigTermindato = dayjs().format(ISO_DATE_FORMAT);

    await Default.run({ parameters: { submitCallback: lagre } });

    await userEvent.click(screen.getByText('Ja'));

    const fødselsdatoFelt = screen.getByLabelText('Fødselsdato');
    await userEvent.type(fødselsdatoFelt, foedselsDato);
    fødselsdatoFelt.blur();

    const termindatoFelt = screen.getByLabelText('Termindato');
    await userEvent.type(termindatoFelt, ugyldigTermindato);
    termindatoFelt.blur();
    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText(/Termin kan ikke være mer enn 5 måneder etter fødsel/)).toBeInTheDocument();

    expect(lagre).toHaveBeenCalledTimes(0);
  });
});
