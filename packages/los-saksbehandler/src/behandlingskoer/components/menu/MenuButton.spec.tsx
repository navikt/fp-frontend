import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MenuButton from './MenuButton';

describe('<MenuButton>', () => {
  it('skal rendre meny-knapp', async () => {
    const onClick = jest.fn();

    render(
      <MenuButton
        onClick={onClick}
      >
        test
      </MenuButton>,
    );

    expect(await screen.findByText('test')).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button'));

    await waitFor(() => expect(onClick).toHaveBeenCalledTimes(1));
  });
});
