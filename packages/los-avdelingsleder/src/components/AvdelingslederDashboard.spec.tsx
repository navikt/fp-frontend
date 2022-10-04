import React from 'react';
import { render, screen } from '@testing-library/react';

import AvdelingslederDashboard from './AvdelingslederDashboard';

describe('<AvdelingslederDashboard>', () => {
  it('skal vise dashboard', async () => {
    render(
      <AvdelingslederDashboard>
        <div>test</div>
      </AvdelingslederDashboard>,
    );

    expect(await screen.findByText('test')).toBeInTheDocument();
  });
});
