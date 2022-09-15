import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { Aksjonspunkt, AlleKodeverk, Behandling } from '@navikt/ft-types';
import { BehandlingStatus, BehandlingType } from '@navikt/ft-kodeverk';
import { Modal } from '@navikt/ds-react';

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import { createRequestApi, RestApiConfigBuilder } from '@fpsak-frontend/rest-api';

import BehandlingPaVent from './BehandlingPaVent';
import { BehandlingFellesApiKeys } from '../../data/behandlingFellesApi';

describe('<BehandlingPaVent>', () => {
  Modal.setAppElement('body');
  const behandling = {
    uuid: '1',
    versjon: 1,
    status: BehandlingStatus.BEHANDLING_UTREDES,
    type: BehandlingType.FORSTEGANGSSOKNAD,
    behandlingPaaVent: false,
    behandlingHenlagt: false,
    fristBehandlingPåVent: '2030-10-10',
    venteArsakKode: '',
  } as Behandling;
  const aksjonspunkter = [] as Aksjonspunkt[];
  // @ts-ignore
  const kodeverk = alleKodeverk as AlleKodeverk;

  const AKSJONSPUNKT_KEY = BehandlingFellesApiKeys.AKSJONSPUNKTER;
  const PA_VENT_KEY = BehandlingFellesApiKeys.UPDATE_ON_HOLD;

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

    await act(async () => {
      render(
        <RestApiMock data={data} requestApi={requestMock}>
          <BehandlingPaVent
            behandling={{
              ...behandling,
              behandlingPaaVent: true,
            } as Behandling}
            requestApi={requestMock}
            kodeverk={kodeverk}
            hentBehandling={jest.fn()}
          />
        </RestApiMock>,
      );
    });

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
          kodeverk={kodeverk}
          hentBehandling={jest.fn()}
        />
      </RestApiMock>,
    );

    expect(await screen.findByText('Behandlingen settes på vent med frist')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Lukk'));

    await waitFor(() => expect(screen.queryByText('Behandlingen settes på vent med frist')).not.toBeInTheDocument());
  });
});
