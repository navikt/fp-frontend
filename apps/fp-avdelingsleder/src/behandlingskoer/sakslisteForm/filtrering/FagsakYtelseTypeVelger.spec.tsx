import { composeStories } from '@storybook/react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './FagsakYtelseTypeVelger.stories';

const { Default } = composeStories(stories);

describe('FagsakYtelseTypeVelger', () => {
  it('skal vise checkboxer for stønadstyper og så velge engangsstønad', async () => {
    await Default.run();
    expect(await screen.findByText('Stønadstype')).toBeInTheDocument();
    expect(screen.getByLabelText('Foreldrepenger')).toBeChecked();
    expect(screen.getByLabelText('Engangsstønad')).toBeChecked();

    await userEvent.click(screen.getByText('Engangsstønad'));

    await waitFor(() => expect(screen.getByLabelText('Engangsstønad')).not.toBeChecked());
    expect(screen.getByLabelText('Foreldrepenger')).toBeChecked();
  });
});
