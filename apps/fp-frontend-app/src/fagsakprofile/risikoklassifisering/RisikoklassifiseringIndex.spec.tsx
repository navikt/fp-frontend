import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { applyRequestHandlers } from 'msw-storybook-addon';

import * as stories from './RisikoklassifiseringIndex.stories';

const { FaresignalerOppdaget, VenterPåFaresignalerNårBehandlingIkkeErValgt } = composeStories(stories);

describe('RisikoklassifiseringIndex', () => {
  it('skal vise at faresignaler er oppdaget', async () => {
    await applyRequestHandlers(FaresignalerOppdaget.parameters.msw);
    render(<FaresignalerOppdaget />);
    expect(await screen.findByText('Faresignaler oppdaget')).toBeInTheDocument();
  });

  it('skal vise at en venter på faresignaler når behandling ikke er valgt', async () => {
    await applyRequestHandlers(VenterPåFaresignalerNårBehandlingIkkeErValgt.parameters.msw);
    render(<VenterPåFaresignalerNårBehandlingIkkeErValgt />);
    expect(await screen.findByText('Venter på mulige faresignaler')).toBeInTheDocument();
  });
});
