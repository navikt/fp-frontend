import React from 'react';
import Modal from 'nav-frontend-modal';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './OkAvbrytModal.stories';

const { Default } = composeStories(stories);

describe('<OkAvbrytModal>', () => {
  Modal.setAppElement('body');
  it('skal rendre modal', async () => {
    render(<Default />);

    expect(await screen.findByText('Dette er ein test')).toBeInTheDocument();
    expect(screen.getByText('OK')).toBeInTheDocument();
    expect(screen.getByText('Avbryt')).toBeInTheDocument();
  });
});
