import React from 'react';
import { render, screen } from '@testing-library/react';

import FagsakGrid from './FagsakGrid';

describe('<FagsakGrid>', () => {
  it('skal vise fagsakgrid med underkomponenter', async () => {
    render(<FagsakGrid
      behandlingContent={<div>behandlingContent</div>}
      profileAndNavigationContent={<div>profileContent</div>}
      supportContent={<div>supportContent</div>}
      visittkortContent={() => <div>visittkort</div>}
    />);

    expect(await screen.findByText('behandlingContent')).toBeInTheDocument();
    expect(screen.getByText('profileContent')).toBeInTheDocument();
    expect(screen.getByText('supportContent')).toBeInTheDocument();
  });
});
