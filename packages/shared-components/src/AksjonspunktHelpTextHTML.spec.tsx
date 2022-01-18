import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './AksjonspunktHelpTextHTML.stories';

const { Default } = composeStories(stories);

describe('<AksjonspunktHelpTextHTML>', () => {
  it('Skal teste at aksjonspunkt-hjelpetekster viser riktig', async () => {
    render(<Default />);
    expect(await screen.findByText('Dette er en aksjonspunktmelding')).toBeInTheDocument();
    expect(screen.getByText('Dette er en annen aksjonspunktmelding')).toBeInTheDocument();
  });
});
