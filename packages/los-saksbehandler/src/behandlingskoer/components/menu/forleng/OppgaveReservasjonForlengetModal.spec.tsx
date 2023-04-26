import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './OppgaveReservasjonForlengetModal.stories';

const { Default } = composeStories(stories);

describe('<OppgaveReservasjonForlengetModal>', () => {
  it('skal rendre modal for å gi tilbakemelding om at reservasjon er forlenget', async () => {
    // @ts-ignore Ta vekk når fiksa
    render(<Default />);
    expect(await screen.findByText('Behandlingen er reservert på deg')).toBeInTheDocument();
    expect(screen.getByText('t.o.m. 02.08.2017 - 00:54')).toBeInTheDocument();
  });
});
