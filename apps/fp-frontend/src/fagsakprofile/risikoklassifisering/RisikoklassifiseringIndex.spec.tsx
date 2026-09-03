import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/react';

import * as stories from './RisikoklassifiseringIndex.stories';

const { FaresignalerOppdaget, VenterPåFaresignalerNårBehandlingIkkeErValgt } = composeStories(stories);

describe('RisikoklassifiseringIndex', () => {
  it('skal vise at faresignaler er oppdaget', async () => {
    await FaresignalerOppdaget.run();
    expect(await screen.findByText('Faresignaler oppdaget')).toBeInTheDocument();
  });

  it('skal vise at en venter på faresignaler når behandling ikke er valgt', async () => {
    await VenterPåFaresignalerNårBehandlingIkkeErValgt.run();
    expect(await screen.findByText('Venter på mulige faresignaler')).toBeInTheDocument();
  });
});
