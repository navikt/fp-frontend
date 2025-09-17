import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { applyRequestHandlers, type MswParameters } from 'msw-storybook-addon';

import * as stories from './ReservasjonsstatusPanel.stories';

const { ErIkkeReservert, ErReservertPåAnnenBruker, ErReservertPåInnloggetBruker } = composeStories(stories);

describe('ReservasjonsstatusPanel', () => {
  it('skal kunne reservere når behandlingen ikke allerede er reservert', async () => {
    applyRequestHandlers(ErIkkeReservert.parameters['msw'] as MswParameters['msw']);
    await render(<ErIkkeReservert />);
    expect(await screen.findByText('Reserver på meg')).toBeInTheDocument();
  });

  it('skal kunne oppheve reservasjon når reservert på innlogget bruker', async () => {
    applyRequestHandlers(ErReservertPåInnloggetBruker.parameters['msw'] as MswParameters['msw']);
    await render(<ErReservertPåInnloggetBruker />);
    expect(await screen.findByText('Opphev reservasjon')).toBeInTheDocument();
  });

  it('skal ikke kunne reservere eller oppheve når behandlingen er reservert på annen bruker', async () => {
    applyRequestHandlers(ErReservertPåAnnenBruker.parameters['msw'] as MswParameters['msw']);
    await render(<ErReservertPåAnnenBruker />);
    expect(await screen.findByText('Reservert på Ola Nordmann')).toBeInTheDocument();
  });
});
