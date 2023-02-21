import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import { Modal } from '@navikt/ds-react';
import { BehandlingType, BehandlingStatus } from '@navikt/ft-kodeverk';

import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { Behandling, AlleKodeverk, Aksjonspunkt } from '@navikt/fp-types';

import BehandlingPaVent from './BehandlingPaVent';

describe('<BehandlingPaVent>', () => {
  Modal.setAppElement('body');
  const behandling = {
    uuid: '1',
    versjon: 1,
    status: BehandlingStatus.BEHANDLING_UTREDES,
    type: BehandlingType.FORSTEGANGSSOKNAD,
    behandlingPaaVent: false,
    behandlingHenlagt: false,
    fristBehandlingPaaVent: '2030-10-10',
    venteArsakKode: '',
  } as Behandling;
  const aksjonspunkter = [] as Aksjonspunkt[];
  // @ts-ignore
  const kodeverk = alleKodeverk as AlleKodeverk;

  it('skal ikke vise modal når behandling ikke er på vent', async () => {
    render(
      <BehandlingPaVent
        behandling={{
          ...behandling,
          aksjonspunkt: aksjonspunkter,
        } as Behandling}
        kodeverk={kodeverk}
        hentBehandling={vi.fn()}
      />,
    );

    await waitFor(() => expect(screen.queryByText('Behandlingen settes på vent')).not.toBeInTheDocument());
  });

  it('skal vise modal når behandling er på vent', async () => {
    await act(async () => {
      render(
        <BehandlingPaVent
          behandling={{
            ...behandling,
            behandlingPaaVent: true,
            aksjonspunkt: aksjonspunkter,
          } as Behandling}
          kodeverk={kodeverk}
          hentBehandling={vi.fn()}
        />,
      );
    });

    expect(await screen.findByText('Behandlingen settes på vent med frist')).toBeInTheDocument();
  });

  it('skal vise modal og så skjule den ved trykk på knapp', async () => {
    render(
      <BehandlingPaVent
        behandling={{
          ...behandling,
          aksjonspunkt: aksjonspunkter,
          behandlingPaaVent: true,
        } as Behandling}
        kodeverk={kodeverk}
        hentBehandling={vi.fn()}
      />,
    );

    expect(await screen.findByText('Behandlingen settes på vent med frist')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Lukk'));

    await waitFor(() => expect(screen.queryByText('Behandlingen settes på vent med frist')).not.toBeInTheDocument());
  });
});