import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { mswWrapper } from '@navikt/fp-utils-test';

import * as stories from './BehandlingstypeVelger.stories';

const { Default } = composeStories(stories);

describe('BehandlingstypeVelger', () => {
  it(
    'skal vise checkboxer for behandlingstyper',
    mswWrapper(async ({ setHandlers }) => {
      setHandlers(Default.parameters['msw']);
      const { getByLabelText } = render(<Default />);
      expect(await screen.findByText('Behandlingstype')).toBeInTheDocument();
      expect(getByLabelText('Førstegangsbehandling')).toBeChecked();
      expect(getByLabelText('Klage')).not.toBeChecked();
    }),
  );

  it(
    'skal velge klage',
    mswWrapper(async ({ setHandlers }) => {
      setHandlers(Default.parameters['msw']);
      const { getByLabelText } = render(<Default />);
      expect(await screen.findByText('Behandlingstype')).toBeInTheDocument();
      expect(getByLabelText('Klage')).not.toBeChecked();

      await userEvent.click(screen.getByText('Klage'));

      await waitFor(() => expect(getByLabelText('Klage')).toBeChecked());
    }),
  );
});
