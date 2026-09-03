import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/react';

import * as stories from './BehandlingSupportIndex.stories';

const { NårBehandlingErValgt, SkalViseFraBeslutter } = composeStories(stories);

describe('BehandlingSupportIndex', () => {
  it('skal vise historikk-panelet som default', async () => {
    await NårBehandlingErValgt.run();

    expect(await screen.findAllByText('Historikk')).toHaveLength(2);
    expect(screen.getByLabelText('Utvid behandling detaljer panel')).toBeInTheDocument();
    expect(screen.getByText('Filtrer på behandling')).toBeInTheDocument();

    expect(screen.getByText('Send melding')).toBeInTheDocument();
    expect(screen.getByText('Dokumenter')).toBeInTheDocument();
    expect(screen.getByText('Notatblokk')).toBeInTheDocument();
  });

  it('skal vise beslutter-panel', async () => {
    await SkalViseFraBeslutter.run();

    expect(await screen.findByTitle('Fra beslutter')).toBeInTheDocument();

    expect(screen.getByText('Historikk')).toBeInTheDocument();
    expect(screen.getByText('Send melding')).toBeInTheDocument();
    expect(screen.getByText('Dokumenter')).toBeInTheDocument();
    expect(screen.getByText('Notatblokk')).toBeInTheDocument();
  });
});
