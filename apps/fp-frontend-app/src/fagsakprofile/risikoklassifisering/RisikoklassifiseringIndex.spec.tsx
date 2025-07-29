import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import { mswWrapper } from '@navikt/fp-utils-test';

import * as stories from './RisikoklassifiseringIndex.stories';

const { FaresignalerOppdaget, VenterPåFaresignalerNårBehandlingIkkeErValgt } = composeStories(stories);

describe('RisikoklassifiseringIndex', () => {
  it(
    'skal vise at faresignaler er oppdaget',
    mswWrapper(async ({ setHandlers }) => {
      setHandlers(FaresignalerOppdaget.parameters['msw']);
      render(<FaresignalerOppdaget />);
      expect(await screen.findByText('Faresignaler oppdaget')).toBeInTheDocument();
    }),
  );

  it(
    'skal vise at en venter på faresignaler når behandling ikke er valgt',
    mswWrapper(async ({ setHandlers }) => {
      setHandlers(VenterPåFaresignalerNårBehandlingIkkeErValgt.parameters['msw']);
      render(<VenterPåFaresignalerNårBehandlingIkkeErValgt />);
      expect(await screen.findByText('Venter på mulige faresignaler')).toBeInTheDocument();
    }),
  );
});
