import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import * as stories from './Adventslys.stories';

const { FørsteSøndagIAdvent, TredjeSøndagIAdvent, Jul, UtenforAdvent } = composeStories(stories);

describe('Adventslys', () => {
  it('skal vise hvilken søndag i advent det er', () => {
    render(<FørsteSøndagIAdvent />);
    expect(screen.getByRole('img', { name: '1. søndag i advent' })).toBeInTheDocument();
  });

  it('skal vise tredje søndag i advent', () => {
    render(<TredjeSøndagIAdvent />);
    expect(screen.getByRole('img', { name: '3. søndag i advent' })).toBeInTheDocument();
  });

  it('skal ønske god jul etter julaften', () => {
    render(<Jul />);
    expect(screen.getByRole('img', { name: 'God jul' })).toBeInTheDocument();
  });

  it('skal ikke vise lys utenfor advent og jul', () => {
    render(<UtenforAdvent />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
});
