import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { applyRequestHandlers, type MswParameters } from 'msw-storybook-addon';

import * as stories from './FagsakSearchIndex.stories';

const { Default } = composeStories(stories);

describe('FagsakSearchIndex', () => {
  it('skal søke med saksnummer og få opp treff i liste', async () => {
    applyRequestHandlers(Default.parameters['msw'] as MswParameters['msw']);
    const utils = render(<Default />);

    expect(await screen.findByText('Søk på sak eller person')).toBeInTheDocument();

    const nrInput = utils.getByLabelText('Saksnummer eller fødselsnummer/D-nummer');
    await userEvent.type(nrInput, '123');

    expect(await screen.findByText('Søk')).toBeEnabled();

    await userEvent.click(screen.getByText('Søk'));

    expect(await screen.findByText('Saksnummer')).toBeInTheDocument();
    expect(screen.getByText('12345')).toBeInTheDocument();
    expect(screen.getByText('23456')).toBeInTheDocument();
  });
});
