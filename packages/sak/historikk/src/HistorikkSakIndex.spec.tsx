import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/react';

import * as stories from './HistorikkSakIndex.stories';

const { Default } = composeStories(stories);

describe('HistorikkSakIndex', () => {
  it('skal vise alle historikkinnslag', async () => {
    await Default.run();
    expect(await screen.findAllByTestId('historikkinnslag')).toHaveLength(10);
  });
});
