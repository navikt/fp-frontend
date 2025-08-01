import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './SøkForm.stories';

const { Søkeskjema } = composeStories(stories);

describe('SøkForm', () => {
  it('skal rendre søke-komponent korrekt', async () => {
    render(<Søkeskjema />);
    expect(screen.getByTitle('Søk')).toBeInTheDocument();
    expect(screen.getByText('Du kan søke saksnummer, fødselsnummer eller D-nummer.')).toBeInTheDocument();
    expect(screen.getByRole('searchbox', { name: 'Søk' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Søk' })).toBeDisabled();
    expect(screen.getByLabelText('Reserver behandlingen ved søk')).not.toBeChecked();
  });

  it('skal skrive inn ugyldig fødselsnummer og vise feilmelding', async () => {
    const onSubmitMock = vi.fn();
    render(<Søkeskjema onSubmit={onSubmitMock} />);

    await userEvent.type(screen.getByRole('searchbox', { name: 'Søk' }), 'Dette er ikke et gyldig nr');

    await userEvent.click(screen.getByRole('button', { name: 'Søk' }));

    expect(await screen.findByText('Ugyldig saksnummer eller fødselsnummer')).toBeInTheDocument();

    expect(onSubmitMock).toHaveBeenCalledTimes(0);
  });

  it('skal skrive inn gyldig fødselsnummer og sende inn resultat', async () => {
    const onSubmitMock = vi.fn();
    render(<Søkeskjema onSubmit={onSubmitMock} />);

    await userEvent.type(screen.getByRole('searchbox', { name: 'Søk' }), '07078518434');

    await userEvent.click(screen.getByRole('button', { name: 'Søk' }));

    await waitFor(() => expect(screen.queryByText('Ugyldig saksnummer eller fødselsnummer')).not.toBeInTheDocument());

    expect(onSubmitMock).toHaveBeenNthCalledWith(1, {
      searchString: '07078518434',
      skalReservere: undefined,
    });
  });

  it('skal reservere behandling ved søk', async () => {
    const onSubmitMock = vi.fn();
    render(<Søkeskjema onSubmit={onSubmitMock} />);

    await userEvent.type(screen.getByRole('searchbox', { name: 'Søk' }), '07078518434');

    await userEvent.click(screen.getByText('Reserver behandlingen ved søk'));

    await userEvent.click(screen.getByRole('button', { name: 'Søk' }));

    expect(onSubmitMock).toHaveBeenNthCalledWith(1, {
      searchString: '07078518434',
      skalReservere: true,
    });

    expect(screen.queryByText('Ugyldig saksnummer eller fødselsnummer')).not.toBeInTheDocument();
  });
});
