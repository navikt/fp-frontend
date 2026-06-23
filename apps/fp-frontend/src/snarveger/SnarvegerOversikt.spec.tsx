import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import * as stories from './SnarvegerOversikt.stories';

const { Default } = composeStories(stories);

const renderSnarvegerOversikt = () => render(<Default />);

describe('SnarvegerOversikt', () => {
  it('skal vise gruppene med snarveier', () => {
    renderSnarvegerOversikt();

    expect(screen.getByText('Generelt')).toBeInTheDocument();
    expect(screen.getByText('I en behandling')).toBeInTheDocument();
    expect(screen.getByRole('table', { name: 'Generelt' })).toBeInTheDocument();
    expect(screen.getByRole('table', { name: 'I en behandling' })).toBeInTheDocument();
  });

  it('skal liste opp både globale og behandlingsspesifikke handlinger', () => {
    renderSnarvegerOversikt();

    expect(screen.getByText('Gå til oppgavelisten')).toBeInTheDocument();
    expect(screen.getByText('Vis historikk')).toBeInTheDocument();
    expect(screen.getByText('Utvid eller minsk behandlingsdetaljer')).toBeInTheDocument();
  });

  it('skal la brukeren slå snarveiene av og på', () => {
    renderSnarvegerOversikt();

    const bryter = screen.getByRole('checkbox', { name: 'Bruk tastatursnarveier' });
    expect(bryter).toBeChecked();
  });

  it('skal vise sekvens-snarveier med pluss mellom tastene', () => {
    renderSnarvegerOversikt();

    const separatorer = screen.getAllByLabelText('deretter');
    expect(separatorer).toHaveLength(4);
    separatorer.forEach(separator => expect(separator).toHaveTextContent('+'));
  });
});
