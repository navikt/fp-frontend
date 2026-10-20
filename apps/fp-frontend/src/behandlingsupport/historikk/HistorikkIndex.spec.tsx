import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './HistorikkIndex.stories';

const { Default } = composeStories(stories);

describe('HistorikkIndex', () => {
  it('skal vise historikk-panel', async () => {
    await Default.run();
    expect(await screen.findByText('Historikk')).toBeInTheDocument();
    expect(await screen.findByText('Filtrer på behandling')).toBeInTheDocument();
    expect(screen.getByLabelText('Utvid behandling detaljer panel')).toBeInTheDocument();
  });

  it('skal vise oversatt tooltip for utvid-knappen fra appens meldinger', async () => {
    await Default.run();
    await userEvent.hover(await screen.findByLabelText('Utvid behandling detaljer panel'));
    expect(await screen.findByText('Utvid')).toBeInTheDocument();
    expect(screen.queryByText('BehandlingSupportIndex.Utvid')).not.toBeInTheDocument();
  });
});
