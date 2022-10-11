import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { composeStories } from '@storybook/testing-react';
import * as stories from './SistBehandledeSaker.stories';

const { Default, IngenBehandlinger } = composeStories(stories);

describe('<SistBehandledeSaker>', () => {
  it('skal vise sist behandlede saker', async () => {
    await act(async () => {
      render(<Default />);
    });

    expect(await screen.findByText('Siste behandlinger')).toBeInTheDocument();
    expect(await screen.findByText('Espen Utvikler 334342323')).toBeInTheDocument();
  });

  it('skal vise ingen behandlinger', async () => {
    render(<IngenBehandlinger />);
    expect(await screen.findByText('Siste behandlinger')).toBeInTheDocument();
    expect(screen.getByText('Ingen behandlinger')).toBeInTheDocument();
  });
});
