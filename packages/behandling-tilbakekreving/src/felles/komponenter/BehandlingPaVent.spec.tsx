import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from 'nav-frontend-modal';
import { BehandlingType, BehandlingStatus } from '@navikt/ft-kodeverk';
import { Aksjonspunkt, AlleKodeverk, Behandling } from '@navikt/ft-types';

import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';

import { requestTilbakekrevingApi, TilbakekrevingBehandlingApiKeys } from '../../data/tilbakekrevingBehandlingApi';

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
    const data = [
      { key: TilbakekrevingBehandlingApiKeys.AKSJONSPUNKTER.name, data: aksjonspunkter },
    ];
    render(
      <RestApiMock data={data} requestApi={requestTilbakekrevingApi}>
        <BehandlingPaVent
          behandling={behandling as Behandling}
          kodeverk={kodeverk}
          hentBehandling={jest.fn()}
        />
      </RestApiMock>,
    );

    await waitFor(() => expect(screen.queryByText('Behandlingen settes på vent')).not.toBeInTheDocument());
  });

  it('skal vise modal når behandling er på vent', async () => {
    const data = [
      { key: TilbakekrevingBehandlingApiKeys.AKSJONSPUNKTER.name, data: aksjonspunkter },
    ];

    render(
      <RestApiMock data={data} requestApi={requestTilbakekrevingApi}>
        <BehandlingPaVent
          behandling={{
            ...behandling,
            behandlingPaaVent: true,
          } as Behandling}
          kodeverk={kodeverk}
          hentBehandling={jest.fn()}
        />
      </RestApiMock>,
    );

    expect(await screen.findByText('Behandlingen settes på vent med frist')).toBeInTheDocument();
  });

  it('skal vise modal og så skjule den ved trykk på knapp', async () => {
    const data = [
      { key: TilbakekrevingBehandlingApiKeys.AKSJONSPUNKTER.name, data: aksjonspunkter },
    ];
    render(
      <RestApiMock data={data} requestApi={requestTilbakekrevingApi}>
        <BehandlingPaVent
          behandling={{
            ...behandling,
            behandlingPaaVent: true,
          } as Behandling}
          kodeverk={kodeverk}
          hentBehandling={jest.fn()}
        />
      </RestApiMock>,
    );

    expect(await screen.findByText('Behandlingen settes på vent med frist')).toBeInTheDocument();

    userEvent.click(screen.getByText('Lukk'));

    await waitFor(() => expect(screen.queryByText('Behandlingen settes på vent med frist')).not.toBeInTheDocument());
  });
});
