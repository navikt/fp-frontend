import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './SøkForm.stories';

const { Søkeskjema } = composeStories(stories);

describe('SøkForm', () => {
  it('skal skrive inn ugyldig fødselsnummer og vise feilmelding', async () => {
    const onSubmitMock = vi.fn();
    render(<Søkeskjema onSubmit={onSubmitMock} />);

    const søkefelt = screen.getAllByLabelText('Søk')[0];
    const søkIcon = screen.getAllByText('Søk')[1];
    await userEvent.type(søkefelt, 'Dette er ikke et gyldig nr');

    await userEvent.click(søkIcon);

    expect(await screen.findByText('Ugyldig saksnummer eller fødselsnummer')).toBeInTheDocument();

    expect(onSubmitMock).toHaveBeenCalledTimes(0);
  });

  it('skal skrive inn gyldig fødselsnummer og sende inn resultat', async () => {
    const onSubmitMock = vi.fn();
    render(<Søkeskjema onSubmit={onSubmitMock} />);

    const søkefelt = screen.getAllByLabelText('Søk')[0];
    const søkIcon = screen.getAllByText('Søk')[1];

    await userEvent.type(søkefelt, '07078518434');

    await userEvent.click(søkIcon);

    await waitFor(() => expect(screen.queryByText('Ugyldig saksnummer eller fødselsnummer')).not.toBeInTheDocument());

    expect(onSubmitMock).toHaveBeenNthCalledWith(1, {
      searchString: '07078518434',
      skalReservere: undefined,
    });
  });

  it('skal reservere behandling ved søk', async () => {
    const onSubmitMock = vi.fn();
    render(<Søkeskjema onSubmit={onSubmitMock} />);

    const søkefelt = screen.getAllByLabelText('Søk')[0];
    await userEvent.type(søkefelt, '07078518434');

    await userEvent.click(screen.getByText('Reserver behandlingen ved søk'));

    const søkIcon = screen.getAllByText('Søk')[1];
    await userEvent.click(søkIcon);

    await waitFor(() => expect(screen.queryByText('Ugyldig saksnummer eller fødselsnummer')).not.toBeInTheDocument());

    expect(onSubmitMock).toHaveBeenNthCalledWith(1, {
      searchString: '07078518434',
      skalReservere: true,
    });
  });
});
