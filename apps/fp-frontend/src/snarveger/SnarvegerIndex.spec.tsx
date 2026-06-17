import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import * as stories from './SnarvegerIndex.stories';

const { Default } = composeStories(stories);

describe('SnarvegerIndex', () => {
  it('skal vise tittel og gruppene med snarveier', async () => {
    render(<Default />);

    expect(await screen.findByRole('heading', { level: 1, name: 'Tastatursnarveier' })).toBeInTheDocument();
    expect(screen.getByText('Generelt')).toBeInTheDocument();
    expect(screen.getByText('I en behandling')).toBeInTheDocument();
  });

  it('skal liste opp både globale og behandlingsspesifikke handlinger', () => {
    render(<Default />);

    expect(screen.getByText('Gå til oppgavelisten')).toBeInTheDocument();
    expect(screen.getByText('Vis historikk')).toBeInTheDocument();
    expect(screen.getByText('Utvid eller minsk behandlingsdetaljer')).toBeInTheDocument();
  });

  it('skal la brukeren slå snarveiene av og på', () => {
    render(<Default />);

    const bryter = screen.getByRole('switch', { name: 'Bruk tastatursnarveier' });
    expect(bryter).toBeChecked();
  });
});
