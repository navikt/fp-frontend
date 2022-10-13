import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import { Modal } from '@navikt/ds-react';
import * as stories from './FatterVedtakApprovalModalSakIndex.stories';

const {
  EtterGodkjenning, EtterGodkjenningAvKlage, EtterTilbakesendingTilSaksbehandler, EtterFatterVedtakOgGodkjent,
} = composeStories(stories);

describe('<FatterVedtakApprovalModalSakIndex>', () => {
  if (Modal.setAppElement) {
    Modal.setAppElement('body');
  }

  it('skal vise modal etter godkjenning', async () => {
    render(<EtterGodkjenning />);

    expect(await screen.findByText('Vedtaket er opphørt.')).toBeInTheDocument();
    expect(screen.getByText('Du kommer nå til forsiden.')).toBeInTheDocument();
  });

  it('skal vise modal etter godkjenning av klage', async () => {
    render(<EtterGodkjenningAvKlage />);

    expect(await screen.findByText('Resultatet av klagebehandlingen blir iverksatt')).toBeInTheDocument();
    expect(screen.getByText('Du kommer nå til forsiden.')).toBeInTheDocument();
  });

  it('skal vise modal etter tilbakesending til saksbehandler', async () => {
    render(<EtterTilbakesendingTilSaksbehandler />);

    expect(await screen.findByText('Vedtak returneres til saksbehandler for ny vurdering.')).toBeInTheDocument();
    expect(screen.getByText('Du kommer nå til forsiden.')).toBeInTheDocument();
  });

  it('skal vise modal etter fatter vedtak og godkjenning', async () => {
    render(<EtterFatterVedtakOgGodkjent />);

    expect(await screen.findByText('Vedtaket er innvilget og blir iverksatt')).toBeInTheDocument();
    expect(screen.getByText('Du kommer nå til forsiden.')).toBeInTheDocument();
  });
});
