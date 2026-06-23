import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import * as stories from './SnarvegerHjelpModal.stories';

const { Åpen } = composeStories(stories);

describe('SnarvegerHjelpModal', () => {
  it('skal vise snarveghjelpa i modal', async () => {
    render(<Åpen />);

    expect(await screen.findByRole('dialog', { name: 'Tastatursnarveier' })).toBeInTheDocument();
    expect(screen.getByText('Gå til oppgavelisten')).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: 'Bruk tastatursnarveier' })).toBeChecked();
  });
});
