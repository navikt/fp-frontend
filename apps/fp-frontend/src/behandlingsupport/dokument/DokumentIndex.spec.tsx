import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { applyRequestHandlers, type MswParameters } from 'msw-storybook-addon';

import * as stories from './DokumentIndex.stories';

const { DetFinnesDokumenterPåSak, DetFinnesIngenDokumenterPåSak } = composeStories(stories);

describe('DokumentIndex', () => {
  it('skal vise liste med tre dokumenter', async () => {
    applyRequestHandlers(DetFinnesDokumenterPåSak.parameters['msw'] as MswParameters['msw']);
    render(<DetFinnesDokumenterPåSak />);
    expect(await screen.findAllByRole('row', { hidden: true })).toHaveLength(4);
  });

  it('skal vise tom liste', async () => {
    applyRequestHandlers(DetFinnesIngenDokumenterPåSak.parameters['msw'] as MswParameters['msw']);
    render(<DetFinnesIngenDokumenterPåSak />);
    expect(await screen.findByText('Det finnes ingen dokumenter på saken')).toBeInTheDocument();
  });
});
