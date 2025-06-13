import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import { mswTest } from '@navikt/fp-utils-test';

import * as stories from './RisikoklassifiseringIndex.stories';

const { FaresignalerOppdaget, VenterPåFaresignalerNårBehandlingIkkeErValgt } = composeStories(stories);

describe('RisikoklassifiseringIndex', () => {
  mswTest('skal vise at faresignaler er oppdaget', async ({ setHandlers }) => {
    setHandlers(FaresignalerOppdaget.parameters['msw']);
    render(<FaresignalerOppdaget />);
    expect(await screen.findByText('Faresignaler oppdaget')).toBeInTheDocument();
  });

  mswTest('skal vise at en venter på faresignaler når behandling ikke er valgt', async ({ setHandlers }) => {
    setHandlers(VenterPåFaresignalerNårBehandlingIkkeErValgt.parameters['msw']);
    render(<VenterPåFaresignalerNårBehandlingIkkeErValgt />);
    expect(await screen.findByText('Venter på mulige faresignaler')).toBeInTheDocument();
  });
});
