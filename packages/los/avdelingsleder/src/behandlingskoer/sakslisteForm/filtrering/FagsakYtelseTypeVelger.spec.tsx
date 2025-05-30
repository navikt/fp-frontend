import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { applyRequestHandlers } from 'msw-storybook-addon';

import * as stories from './FagsakYtelseTypeVelger.stories';

const { Default } = composeStories(stories);

describe('FagsakYtelseTypeVelger', () => {
  it('skal vise checkboxer for stønadstyper og så velge engangsstønad', async () => {
    await applyRequestHandlers(Default.parameters['msw']);
    const { getByLabelText } = render(<Default />);
    expect(await screen.findByText('Stønadstype')).toBeInTheDocument();
    expect(getByLabelText('Foreldrepenger')).toBeChecked();
    expect(getByLabelText('Engangsstønad')).toBeChecked();

    await userEvent.click(screen.getByText('Engangsstønad'));

    await waitFor(() => expect(getByLabelText('Engangsstønad')).not.toBeChecked());
    expect(getByLabelText('Foreldrepenger')).toBeChecked();
  });
});
