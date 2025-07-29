import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import { mswWrapper } from '@navikt/fp-utils-test';

import * as stories from './HistorikkIndex.stories';

const { Default } = composeStories(stories);

describe('HistorikkIndex', () => {
  it(
    'skal vise historikk-panel',
    mswWrapper(async ({ setHandlers }) => {
      setHandlers(Default.parameters['msw']);
      render(<Default />);
      expect(await screen.findByText('Historikk')).toBeInTheDocument();
      expect(await screen.findByText('Filtrer på behandling')).toBeInTheDocument();
      expect(screen.getByLabelText('Utvid behandling detaljer panel')).toBeInTheDocument();
    }),
  );
});
