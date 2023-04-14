import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { Aksjonspunkt } from '@navikt/ft-types';
import { BehandlingStatus, BehandlingType } from '@navikt/ft-kodeverk';
import { Modal } from '@navikt/ds-react';

import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { Behandling, AlleKodeverk } from '@navikt/fp-types';
import { createRequestApi, RestApiConfigBuilder } from '@navikt/fp-rest-api';

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

  const PA_VENT_KEY = BehandlingFellesApiKeys.UPDATE_ON_HOLD;

  const endpoints = new RestApiConfigBuilder().withRel('test_pa', PA_VENT_KEY).build();

  const requestMock = createRequestApi(endpoints);

  it('skal ikke vise modal når behandling ikke er på vent', async () => {
    render(
      <BehandlingPaVent
        behandling={
          {
            ...behandling,
            aksjonspunkt: aksjonspunkter,
          } as Behandling
        }
        requestApi={requestMock}
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
          behandling={
            {
              ...behandling,
              aksjonspunkt: aksjonspunkter,
              behandlingPaaVent: true,
            } as Behandling
          }
          requestApi={requestMock}
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
        behandling={
          {
            ...behandling,
            aksjonspunkt: aksjonspunkter,
            behandlingPaaVent: true,
          } as Behandling
        }
        requestApi={requestMock}
        kodeverk={kodeverk}
        hentBehandling={vi.fn()}
      />,
    );

    expect(await screen.findByText('Behandlingen settes på vent med frist')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Lukk'));

    await waitFor(() => expect(screen.queryByText('Behandlingen settes på vent med frist')).not.toBeInTheDocument());
  });
});
