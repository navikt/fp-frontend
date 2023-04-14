import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './UkjentAdresseMeldingIndex.stories';

const { IngenAdresse } = composeStories(stories);

describe('<IngenAdresse>', () => {
  it('skal vise panelet om brukeren mangler adresse', async () => {
    render(<IngenAdresse />);
    expect(
      await screen.findByText(
        'Brukeren har ikke en registrert adresse. Utsendelse av brev kan feile om brukeren ikke er digital.',
      ),
    ).toBeInTheDocument();
  });
});
