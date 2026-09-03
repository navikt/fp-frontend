import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/react';

import * as stories from './ReservasjonsstatusPanel.stories';

const { ErIkkeReservert, ErReservertPåAnnenBruker, ErReservertPåInnloggetBruker } = composeStories(stories);

describe('ReservasjonsstatusPanel', () => {
  it('skal kunne reservere når behandlingen ikke allerede er reservert', async () => {
    await ErIkkeReservert.run();
    expect(await screen.findByText('Reserver på meg')).toBeInTheDocument();
  });

  it('skal kunne oppheve reservasjon når reservert på innlogget bruker', async () => {
    await ErReservertPåInnloggetBruker.run();
    expect(await screen.findByText('Opphev reservasjon')).toBeInTheDocument();
  });

  it('skal ikke kunne reservere eller oppheve når behandlingen er reservert på annen bruker', async () => {
    await ErReservertPåAnnenBruker.run();
    expect(await screen.findByText('Reservert på Ola Nordmann')).toBeInTheDocument();
  });
});
