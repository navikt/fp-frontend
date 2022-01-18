import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './AksjonspunktHelpTextTemp.stories';

const { HjelpeteksterNårAksjonspunktetErÅpent, HjelpeteksterNårAksjonspunktetErLukket } = composeStories(stories);

describe('<AksjonspunktHelpTextTemp>', () => {
  it('skal vise åpne aksjonspunkter', async () => {
    render(<HjelpeteksterNårAksjonspunktetErÅpent />);
    expect(await screen.findByText('Dette er en aksjonspunktmelding')).toBeInTheDocument();
    expect(screen.getByText('Dette er en annen aksjonspunktmelding')).toBeInTheDocument();
  });

  it('skal vise at aksjonspunktene er behandlet', async () => {
    render(<HjelpeteksterNårAksjonspunktetErLukket />);
    expect(await screen.findAllByText('Behandlet aksjonspunkt:')).toHaveLength(2);
    expect(screen.getByText('Dette er en aksjonspunktmelding')).toBeInTheDocument();
    expect(screen.getByText('Dette er en annen aksjonspunktmelding')).toBeInTheDocument();
  });
});
