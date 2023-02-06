import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './JournalforingIndex.stories';

const { ViseOppgaverIListe, IngenOppgaver } = composeStories(stories);

describe('<JournalforingIndex>', () => {
  it('skal vise en liste med oppgaver', async () => {
    render(<ViseOppgaverIListe />);
    expect(await screen.findByText('Journalføringsoppgaver')).toBeInTheDocument();

    // Tabell overskrift
    expect(screen.getByText('Opprettet dato')).toBeInTheDocument();
    expect(screen.getByText('Ytelse')).toBeInTheDocument();
    expect(screen.getByText('Beskrivelse')).toBeInTheDocument();
    expect(screen.getByText('Bruker')).toBeInTheDocument();
    expect(screen.getByText('Frist')).toBeInTheDocument();
    expect(screen.getByText('Prioritet')).toBeInTheDocument();
    // Rad 1
    expect(screen.getAllByText('Inntektsmelding')).toHaveLength(2);
    expect(screen.getAllByText('01.01.2022')).toHaveLength(4);
    expect(screen.getAllByText('Foreldrepenger')).toHaveLength(2);
    expect(screen.getByText('11119047182')).toBeInTheDocument();
    expect(screen.getByText('01.02.2022')).toBeInTheDocument();
    expect(screen.getAllByText('NORM')).toHaveLength(2);
  });

  it('skal vise ingen oppgaver', async () => {
    render(<IngenOppgaver />);
    expect(await screen.findByText('Fant ingen journalføringsoppgaver')).toBeInTheDocument();
  });
});
