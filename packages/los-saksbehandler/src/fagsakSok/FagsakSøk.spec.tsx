import React from 'react';

import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import dayjs from 'dayjs';
import { applyRequestHandlers } from 'msw-storybook-addon';

import * as stories from './FagsakSøk.stories';

const { Default, IngentingBleFunnet } = composeStories(stories);

describe('<FagsakSøk>', () => {
  it('skal vise tabell med saksnummer og behandlinger', async () => {
    await applyRequestHandlers(Default.parameters.msw);
    render(<Default />);

    const alder = dayjs().diff('1980-10-10', 'years');

    expect(await screen.findByText('Søk')).toBeInTheDocument();
    expect(screen.getByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText(`${alder} år`)).toBeInTheDocument();
    expect(screen.getByText('12213234')).toBeInTheDocument();
  });

  it('skal ikke finne noe på bruker', async () => {
    await applyRequestHandlers(IngentingBleFunnet.parameters.msw);
    render(<IngentingBleFunnet />);
    expect(await screen.findByText('Søket ga ingen treff eller du mangler tilgang til saken')).toBeInTheDocument();
  });
});
