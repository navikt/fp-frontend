import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { applyRequestHandlers } from 'msw-storybook-addon';

import * as stories from './NyeOgFerdigstilteOppgaverForIdagPanel.stories';

const { Default } = composeStories(stories);

describe('<NyeOgFerdigstilteOppgaverForIdagPanel>', () => {
  it('skal rendre graf', async () => {
    await applyRequestHandlers(Default.parameters['msw']);
    render(<Default />);
    expect(await screen.findByText('For i dag')).toBeInTheDocument();
  });
});
