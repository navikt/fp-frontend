import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import { Aksjonspunkt, AlleKodeverk, Behandling } from '@fpsak-frontend/types';
import Modal from 'nav-frontend-modal';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import { createRequestApi, RestApiConfigBuilder, RestKey } from '@fpsak-frontend/rest-api';

import BehandlingPaVent, { SettPaVentParams } from './BehandlingPaVent';

describe('<BehandlingPaVent>', () => {
  Modal.setAppElement('body');
  const behandling = {
    uuid: '1',
    versjon: 1,
    status: {
      kode: behandlingStatus.BEHANDLING_UTREDES,
      kodeverk: 'BEHANDLING_STATUS',
    },
    type: {
      kode: behandlingType.FORSTEGANGSSOKNAD,
      kodeverk: 'BEHANDLING_TYPE',
    },
    behandlingPaaVent: false,
    behandlingHenlagt: false,
    fristBehandlingPaaVent: '2030-10-10',
    venteArsakKode: '',
  } as Behandling;
  const aksjonspunkter = [] as Aksjonspunkt[];
  // @ts-ignore
  const kodeverk = alleKodeverk as AlleKodeverk;

  const AKSJONSPUNKT_KEY = new RestKey<Aksjonspunkt[], void>('AP');
  const PA_VENT_KEY = new RestKey<void, SettPaVentParams>('PA_VENT');

  const endpoints = new RestApiConfigBuilder()
    .withRel('test', AKSJONSPUNKT_KEY)
    .withRel('test_pa', PA_VENT_KEY)
    .build();

  const requestMock = createRequestApi(endpoints);

  it('skal ikke vise modal når behandling ikke er på vent', async () => {
    const data = [
      { key: AKSJONSPUNKT_KEY.name, data: aksjonspunkter },
    ];
    render(
      <RestApiMock data={data} requestApi={requestMock}>
        <BehandlingPaVent
          behandling={behandling as Behandling}
          requestApi={requestMock}
          oppdaterPaVentKey={PA_VENT_KEY}
          aksjonspunktKey={AKSJONSPUNKT_KEY}
          kodeverk={kodeverk}
          hentBehandling={jest.fn()}
        />
      </RestApiMock>,
    );

    await waitFor(() => expect(screen.queryByText('Behandlingen settes på vent')).not.toBeInTheDocument());
  });

  it('skal vise modal når behandling er på vent', async () => {
    const data = [
      { key: AKSJONSPUNKT_KEY.name, data: aksjonspunkter },
    ];

    render(
      <RestApiMock data={data} requestApi={requestMock}>
        <BehandlingPaVent
          behandling={{
            ...behandling,
            behandlingPaaVent: true,
          } as Behandling}
          requestApi={requestMock}
          oppdaterPaVentKey={PA_VENT_KEY}
          aksjonspunktKey={AKSJONSPUNKT_KEY}
          kodeverk={kodeverk}
          hentBehandling={jest.fn()}
        />
      </RestApiMock>,
    );

    expect(await screen.findByText('Behandlingen settes på vent med frist')).toBeInTheDocument();
  });

  it('skal vise modal og så skjule den ved trykk på knapp', async () => {
    const data = [
      { key: AKSJONSPUNKT_KEY.name, data: aksjonspunkter },
    ];
    render(
      <RestApiMock data={data} requestApi={requestMock}>
        <BehandlingPaVent
          behandling={{
            ...behandling,
            behandlingPaaVent: true,
          } as Behandling}
          requestApi={requestMock}
          oppdaterPaVentKey={PA_VENT_KEY}
          aksjonspunktKey={AKSJONSPUNKT_KEY}
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
