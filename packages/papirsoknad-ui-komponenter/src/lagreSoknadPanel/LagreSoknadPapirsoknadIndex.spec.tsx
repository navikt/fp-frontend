import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';

import * as stories from './LagreSoknadPapirsoknadIndex.stories';

const { Default } = composeStories(stories);

describe('<LagreSoknadPapirsoknadIndex>', () => {
  it('skal bekrefte opplysninger', async () => {
    const lagre = vi.fn();

    const utils = render(<Default submitCallback={lagre} />);

    expect(await screen.findByText('Ferdigstill registrering')).toBeInTheDocument();

    const textareaInput = utils.getByLabelText('Ved endring av opplysningene er begrunnelse obligatorisk');
    await userEvent.type(textareaInput, 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Verge/fullmektig skal knyttes til saken'));

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    expect(screen.queryByText('Bekreft og avslutt behandling')).not.toBeInTheDocument();

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      kommentarEndring: 'Dette er en begrunnelse',
      registrerVerge: true,
      ufullstendigSoeknad: undefined,
    });
  });

  it('skal velge at søkers opplysningsplikt ikke er overholdt', async () => {
    const lagre = vi.fn();

    const utils = render(<Default submitCallback={lagre} />);

    expect(await screen.findByText('Ferdigstill registrering')).toBeInTheDocument();

    const textareaInput = utils.getByLabelText('Ved endring av opplysningene er begrunnelse obligatorisk');
    await userEvent.type(textareaInput, 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Søkers opplysningsplikt er ikke overholdt'));

    expect(screen.queryByText('Bekreft og fortsett')).not.toBeInTheDocument();

    await userEvent.click(screen.getByText('Bekreft og avslutt behandling'));

    expect(
      await screen.findByText(
        'Avslutter registrering av søknaden. Det er ikke mulig å innhente ytterligere opplysninger.',
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('Bekreft at søknaden skal avslås')).toBeInTheDocument();

    await userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
  });
});
