import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import { mswWrapper } from '@navikt/fp-utils-test';

import * as stories from './NyeOgFerdigstilteOppgaverForIdagPanel.stories';

const { Default } = composeStories(stories);

describe('NyeOgFerdigstilteOppgaverForIdagPanel', () => {
  it(
    'skal rendre graf',
    mswWrapper(async ({ setHandlers }) => {
      setHandlers(Default.parameters['msw']);
      render(<Default />);
      expect(await screen.findByText('For i dag')).toBeInTheDocument();
    }),
  );
});
