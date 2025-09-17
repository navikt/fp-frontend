import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { applyRequestHandlers } from 'msw-storybook-addon';

import * as stories from './BehandlingSupportIndex.stories';

const { NårBehandlingErValgt, SkalViseFraBeslutter } = composeStories(stories);

describe('BehandlingSupportIndex', () => {
  it('skal vise historikk-panelet som default', async () => {
    applyRequestHandlers(NårBehandlingErValgt.parameters['msw']);
    render(<NårBehandlingErValgt />);

    expect(await screen.findAllByText('Historikk')).toHaveLength(2);
    expect(screen.getByLabelText('Utvid behandling detaljer panel')).toBeInTheDocument();
    expect(screen.getByText('Filtrer på behandling')).toBeInTheDocument();

    expect(screen.getByText('Send melding')).toBeInTheDocument();
    expect(screen.getByText('Dokumenter')).toBeInTheDocument();
    expect(screen.getByText('Notatblokk')).toBeInTheDocument();
  });

  it('skal vise beslutter-panel', async () => {
    applyRequestHandlers(SkalViseFraBeslutter.parameters['msw']);
    render(<SkalViseFraBeslutter />);

    expect(await screen.findByTitle('Fra beslutter')).toBeInTheDocument();

    expect(screen.getByText('Historikk')).toBeInTheDocument();
    expect(screen.getByText('Send melding')).toBeInTheDocument();
    expect(screen.getByText('Dokumenter')).toBeInTheDocument();
    expect(screen.getByText('Notatblokk')).toBeInTheDocument();
  });
});
