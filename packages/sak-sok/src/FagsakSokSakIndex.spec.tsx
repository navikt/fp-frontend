import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './FagsakSokSakIndex.stories';

const { Default, IkkeAdgang, IngenTreff } = composeStories(stories);

describe('<FagsakSokSakIndex>', () => {
  it('skal skrive inn ikke gyldig saksnummer og få feilmelding', async () => {
    const utils = render(<Default />);
    expect(await screen.findByText('Søk på sak eller person')).toBeInTheDocument();
    expect(screen.getByText('Søk')).toBeDisabled();

    const nrInput = utils.getByLabelText('Saksnummer eller fødselsnummer/D-nummer');
    userEvent.type(nrInput, 'TEST');

    await waitFor(() => expect(screen.queryByText('Søk')).not.toBeDisabled());

    userEvent.click(screen.getByText('Søk'));

    expect(await screen.findByText('Ugyldig saksnummer eller fødselsnummer')).toBeInTheDocument();
  });

  it('skal skrive inn gyldig saksnummer og få opp to treff', async () => {
    const utils = render(<Default />);
    expect(await screen.findByText('Søk på sak eller person')).toBeInTheDocument();
    expect(screen.getByText('Søk')).toBeDisabled();

    const nrInput = utils.getByLabelText('Saksnummer eller fødselsnummer/D-nummer');
    userEvent.type(nrInput, '123');

    await waitFor(() => expect(screen.queryByText('Søk')).not.toBeDisabled());

    userEvent.click(screen.getByText('Søk'));

    expect(await screen.findByText('Saksnummer')).toBeInTheDocument();
    expect(await screen.findByText('1')).toBeInTheDocument();
    expect(await screen.findByText('2')).toBeInTheDocument();
    expect(await screen.findByText('Sakstype')).toBeInTheDocument();
    expect(await screen.findByText('Foreldrepenger')).toBeInTheDocument();
    expect(await screen.findByText('Engangsstønad')).toBeInTheDocument();
    expect(await screen.findByText('Status')).toBeInTheDocument();
  });

  it('skal ikke kunne søke når en ikke har adgang', async () => {
    render(<IkkeAdgang />);
    expect(await screen.findByText('Har ikke adgang')).toBeInTheDocument();
  });

  it('skal ikke få noen treff på søk', async () => {
    const utils = render(<IngenTreff />);

    expect(await screen.findByText('Søk på sak eller person')).toBeInTheDocument();
    expect(screen.getByText('Søk')).toBeDisabled();

    const nrInput = utils.getByLabelText('Saksnummer eller fødselsnummer/D-nummer');
    userEvent.type(nrInput, '123');

    await waitFor(() => expect(screen.queryByText('Søk')).not.toBeDisabled());

    userEvent.click(screen.getByText('Søk'));

    expect(await screen.findByText('Søket ga ingen treff')).toBeInTheDocument();
  });
});
