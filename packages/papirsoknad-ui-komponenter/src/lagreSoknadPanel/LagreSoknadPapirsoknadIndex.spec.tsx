import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect } from 'vitest';

import * as stories from './LagreSoknadPapirsoknadIndex.stories';

const { Default } = composeStories(stories);

describe('LagreSoknadPapirsoknadIndex', () => {
  it('skal bekrefte opplysninger', async () => {
    const lagre = vi.fn();

    await Default.run({
      parameters: {
        submitCallback: lagre,
      },
    });

    expect(await screen.findByText('Ferdigstill registrering')).toBeInTheDocument();

    const textareaInput = screen.getByLabelText('Begrunnelse');
    expect(screen.getByText('Ved endring av opplysningene er begrunnelse obligatorisk')).toBeInTheDocument();
    await userEvent.type(textareaInput, 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Verge/fullmektig skal knyttes til saken'));

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    expect(screen.queryByText('Bekreft og avslutt behandling')).not.toBeInTheDocument();

    expect(lagre).toHaveBeenCalledOnce();
    expect(lagre).toHaveBeenCalledWith({
      kommentarEndring: 'Dette er en begrunnelse',
      registrerVerge: true,
      ufullstendigSoeknad: undefined,
    });
  });

  it('skal velge at søkers opplysningsplikt ikke er overholdt', async () => {
    const lagreUfullstendigsoknad = vi.fn();
    const lagre = vi.fn();

    await Default.run({
      parameters: {
        submitCallback: lagre,
      },
      args: {
        ...Default.args,
        onSubmitUfullstendigsoknad: lagreUfullstendigsoknad,
      },
    });

    expect(await screen.findByText('Ferdigstill registrering')).toBeInTheDocument();

    const textareaInput = screen.getByLabelText('Begrunnelse');
    expect(screen.getByText('Ved endring av opplysningene er begrunnelse obligatorisk')).toBeInTheDocument();
    await userEvent.type(textareaInput, 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Søkers opplysningsplikt er ikke overholdt'));

    expect(screen.queryByText('Bekreft og fortsett')).not.toBeInTheDocument();

    await userEvent.click(screen.getByText('Bekreft og fortsett til avslag'));

    expect(lagreUfullstendigsoknad).toHaveBeenCalledOnce();
    expect(lagre).not.toHaveBeenCalled();
  });
});
