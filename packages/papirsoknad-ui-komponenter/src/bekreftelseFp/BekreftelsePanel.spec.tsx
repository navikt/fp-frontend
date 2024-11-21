import { screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';

import * as stories from './BekreftelsePanel.stories';

const { Default, MedObligatoriskFeltFordiAnnenForelderErInformert } = composeStories(stories);

describe('<BekreftelsePanel>', () => {
  it('skal ikke ha behov for å velge når annen forelder ikke er informert', async () => {
    const lagre = vi.fn();
    await Default.run({
      parameters: {
        submitCallback: lagre,
      },
    });

    expect(await screen.findByText('Bekreftelse')).toBeInTheDocument();
    expect(screen.getByLabelText('Annen forelder er kjent med hvilke perioder det er søkt om')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    await waitFor(() => expect(lagre).toHaveBeenCalledOnce());
    expect(lagre).toHaveBeenCalledWith({
      annenForelderInformert: undefined,
    });
  });

  it('skal måtte velge når annen forelder er informert', async () => {
    const lagre = vi.fn();

    await MedObligatoriskFeltFordiAnnenForelderErInformert.run({
      parameters: {
        submitCallback: lagre,
      },
    });

    expect(await screen.findByText('Bekreftelse')).toBeInTheDocument();
    expect(screen.getByLabelText('Annen forelder er kjent med hvilke perioder det er søkt om')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Ja'));

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    await waitFor(() => expect(lagre).toHaveBeenCalledOnce());
    expect(lagre).toHaveBeenCalledWith({
      annenForelderInformert: true,
    });
  });
});
