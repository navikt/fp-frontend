import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import * as stories from './OppgaveReservasjonForlengetModal.stories';

const { Default } = composeStories(stories);

describe('OppgaveReservasjonForlengetModal', () => {
  it('skal rendre modal for å gi tilbakemelding om at reservasjon er forlenget', async () => {
    render(<Default />);
    expect(await screen.findAllByText('Behandlingen er reservert på deg')).toHaveLength(2);
    expect(screen.getByText('t.o.m. 02.08.2017 - 00:54')).toBeInTheDocument();
  });
});
