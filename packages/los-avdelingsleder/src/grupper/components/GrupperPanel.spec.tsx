import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import * as stories from './GrupperPanel.stories';

const { Default } = composeStories(stories);

describe('<GrupperPanel>', () => {
  it('skal vise gruppe i tabell', async () => {
    render(<Default />);
    expect(await screen.findByText('Grupper')).toBeInTheDocument();
    expect(screen.getByText('Id')).toBeInTheDocument();
    expect(screen.getByText('Navn')).toBeInTheDocument();
    expect(screen.getByText('Antall saksbehandlere')).toBeInTheDocument();
  });

  it('skal opprette ny gruppe', async () => {
    render(<Default />);
    expect(await screen.findByText('Grupper')).toBeInTheDocument();
    expect(screen.getAllByText('1')).toHaveLength(2);
    expect(screen.queryByText('2')).not.toBeInTheDocument();

    await userEvent.click(screen.getByText('Opprett gruppe'));

    expect(await screen.findByText('2')).toBeInTheDocument();
  });

  it('skal slette gruppe', async () => {
    render(<Default />);
    expect(await screen.findByText('Grupper')).toBeInTheDocument();
    expect(screen.getAllByText('1')).toHaveLength(2);

    await userEvent.click(screen.getAllByRole('img')[1]);

    expect(await screen.findByText('Ingen grupper')).toBeInTheDocument();
  });

  it('skal legge til saksbehandlere', async () => {
    render(<Default />);
    expect(await screen.findByText('Grupper')).toBeInTheDocument();
    expect(screen.getAllByText('1')).toHaveLength(2);

    await userEvent.click(screen.getAllByRole('img')[0]);
    await userEvent.click(screen.getByText('Klara Utvikler (ident3)'));

    expect(await screen.findByText('Placholder for navn i story (ident3)')).toBeInTheDocument();
  });
});
