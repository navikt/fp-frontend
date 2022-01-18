import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import DashboardResolver from './DashboardResolver';

describe('<DashboardResolver>', () => {
  it('skal vise fremsiden til fpsak når miljø er lik development', async () => {
    render(
      <MemoryRouter initialEntries={['/test']}>
        <DashboardResolver />
      </MemoryRouter>,
    );

    expect(await screen.findByText('Søk på sak eller person')).toBeInTheDocument();
  });
});
