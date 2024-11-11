import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { composeStories } from '@storybook/react';
import * as stories from './SøkForm.stories';

const { Søkeskjema } = composeStories(stories);

describe('<SøkForm>', () => {
  it('skal skrive inn ugyldig fødselsnummer og vise feilmelding', async () => {
    const onSubmitMock = vi.fn();
    render(<Søkeskjema onSubmit={onSubmitMock} />);

    expect(await screen.findAllByText('Søk')).toHaveLength(2);

    const saksnrEllerFødselsnrInput = screen.getAllByLabelText('Søk')[0];
    await userEvent.type(saksnrEllerFødselsnrInput, 'Dette er ikke et gyldig nr');

    await userEvent.click(screen.getAllByText('Søk')[1]);

    expect(await screen.findByText('Ugyldig saksnummer eller fødselsnummer')).toBeInTheDocument();

    expect(onSubmitMock).toHaveBeenCalledTimes(0);
  });

  it('skal skrive inn gyldig fødselsnummer og sende inn resultat', async () => {
    const onSubmitMock = vi.fn();
    render(<Søkeskjema onSubmit={onSubmitMock} />);

    expect(await screen.findAllByText('Søk')).toHaveLength(2);

    const saksnrEllerFødselsnrInput = screen.getAllByLabelText('Søk')[0];
    await userEvent.type(saksnrEllerFødselsnrInput, '07078518434');

    await userEvent.click(screen.getAllByText('Søk')[1]);

    await waitFor(() => expect(screen.queryByText('Ugyldig saksnummer eller fødselsnummer')).not.toBeInTheDocument());

    expect(onSubmitMock).toHaveBeenCalledTimes(1);
    expect(onSubmitMock).toHaveBeenNthCalledWith(1, {
      searchString: '07078518434',
      skalReservere: undefined,
    });
  });

  it('skal reservere behandling ved søk', async () => {
    const onSubmitMock = vi.fn();
    render(<Søkeskjema onSubmit={onSubmitMock} />);

    expect(await screen.findAllByText('Søk')).toHaveLength(2);

    const saksnrEllerFødselsnrInput = screen.getAllByLabelText('Søk')[0];
    await userEvent.type(saksnrEllerFødselsnrInput, '07078518434');

    await userEvent.click(screen.getByText('Reserver behandlingen ved søk'));

    await userEvent.click(screen.getAllByText('Søk')[1]);

    await waitFor(() => expect(screen.queryByText('Ugyldig saksnummer eller fødselsnummer')).not.toBeInTheDocument());

    expect(onSubmitMock).toHaveBeenCalledTimes(1);
    expect(onSubmitMock).toHaveBeenNthCalledWith(1, {
      searchString: '07078518434',
      skalReservere: true,
    });
  });
});
