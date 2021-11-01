import React from 'react';
import Modal from 'nav-frontend-modal';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Image.stories';

const { Default, KlikkbartIkon } = composeStories(stories);

describe('<Image>', () => {
  Modal.setAppElement('body');
  it('skal vise et ikon', async () => {
    render(<Default />);

    expect(await screen.findByRole('img', { hidden: true })).toBeInTheDocument();
  });

  it('skal åpne en modal når en trykker på ikon', async () => {
    render(<KlikkbartIkon />);

    expect(await screen.findByRole('img', { hidden: true })).toBeInTheDocument();

    userEvent.click(screen.getByRole('img', { hidden: true }));

    expect(await screen.findByText('OK')).toBeInTheDocument();
  });
});
