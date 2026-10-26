import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/react';

import * as stories from './BehandlingSupportIndex.stories';

const { NårBehandlingErValgt, SkalViseFraBeslutter } = composeStories(stories);

describe('BehandlingSupportIndex', () => {
  it('skal vise historikk-panelet som default', async () => {
    await NårBehandlingErValgt.run();

    expect(await screen.findByRole('tab', { name: 'Historikk', selected: true })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Historikk' })).toBeInTheDocument();
    expect(screen.getByLabelText('Utvid behandling detaljer panel')).toBeInTheDocument();
    expect(screen.getByText('Filtrer på behandling')).toBeInTheDocument();

    expect(screen.getByRole('tab', { name: 'Send melding' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Dokumenter' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Notatblokk' })).toBeInTheDocument();
  });

  it('skal vise beslutter-panel', async () => {
    await SkalViseFraBeslutter.run();

    expect(await screen.findByRole('tab', { name: 'Fra beslutter', selected: true })).toBeInTheDocument();

    expect(screen.getByRole('tab', { name: 'Historikk' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Send melding' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Dokumenter' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Notatblokk' })).toBeInTheDocument();
  });
});
