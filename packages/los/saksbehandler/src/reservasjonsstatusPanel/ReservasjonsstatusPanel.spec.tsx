import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { applyRequestHandlers } from 'msw-storybook-addon';

import * as stories from './ReservasjonsstatusPanel.stories';

const { ErIkkeReservert, ErReservertPåAnnenBruker, ErReservertPåInnloggetBruker } = composeStories(stories);

describe('ReservasjonsstatusPanel', () => {
  it('skal kunne reservere når behandlingen ikke allerede er reservert', async () => {
    await applyRequestHandlers(ErIkkeReservert.parameters['msw']);
    await render(<ErIkkeReservert />);
    expect(await screen.findByText('Reserver på meg')).toBeInTheDocument();
  });

  it('skal kunne oppheve reservasjon når reservert på innlogget bruker', async () => {
    await applyRequestHandlers(ErReservertPåInnloggetBruker.parameters['msw']);
    await render(<ErReservertPåInnloggetBruker />);
    expect(await screen.findByText('Opphev reservasjon')).toBeInTheDocument();
  });

  it('skal ikke kunne reservere eller oppheve når behandlingen er reservert på annen bruker', async () => {
    await applyRequestHandlers(ErReservertPåAnnenBruker.parameters['msw']);
    await render(<ErReservertPåAnnenBruker />);
    expect(await screen.findByText('Reservert på Ola Nordmann')).toBeInTheDocument();
  });
});
