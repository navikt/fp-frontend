import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/react';

import * as stories from './DokumentIndex.stories';

const { DetFinnesDokumenterPåSak, DetFinnesIngenDokumenterPåSak } = composeStories(stories);

describe('DokumentIndex', () => {
  it('skal vise liste med tre dokumenter', async () => {
    await DetFinnesDokumenterPåSak.run();
    expect(await screen.findAllByRole('row', { hidden: true })).toHaveLength(4);
  });

  it('skal vise tom liste', async () => {
    await DetFinnesIngenDokumenterPåSak.run();
    expect(await screen.findByText('Det finnes ingen dokumenter på saken')).toBeInTheDocument();
  });
});
