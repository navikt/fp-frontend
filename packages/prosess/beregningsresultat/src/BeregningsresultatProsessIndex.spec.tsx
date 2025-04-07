import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import * as stories from './BeregningsresultatProsessIndex.stories';

const { Default } = composeStories(stories);

describe('<BeregningsresultatProsessIndex>', () => {
  it('skal vise panel med beregningsinformasjon', async () => {
    render(<Default />);

    expect(await screen.findByText('Beregning')).toBeInTheDocument();
    expect(screen.getByText('Sats')).toBeInTheDocument();
    expect(screen.getAllByText('92 000 kr')).toHaveLength(2);
    expect(screen.getByText('Antall barn')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('Beregnet engangsstønad')).toBeInTheDocument();
  });
});
