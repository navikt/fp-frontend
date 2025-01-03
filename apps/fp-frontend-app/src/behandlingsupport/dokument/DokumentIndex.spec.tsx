import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { applyRequestHandlers } from 'msw-storybook-addon';

import * as stories from './DokumentIndex.stories';

const { DetFinnesDokumenterPåSak, DetFinnesIngenDokumenterPåSak } = composeStories(stories);

describe('DokumentIndex', () => {
  it('skal vise liste med tre dokumenter', async () => {
    await applyRequestHandlers(DetFinnesDokumenterPåSak.parameters.msw);
    render(<DetFinnesDokumenterPåSak />);
    expect(await screen.findAllByRole('row', { hidden: true })).toHaveLength(4);
  });

  it('skal vise tom liste', async () => {
    await applyRequestHandlers(DetFinnesIngenDokumenterPåSak.parameters.msw);
    render(<DetFinnesIngenDokumenterPåSak />);
    expect(await screen.findByText('Det finnes ingen dokumenter på saken')).toBeInTheDocument();
  });
});
