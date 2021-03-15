import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import { Behandling } from '@fpsak-frontend/types';
import SettPaVentModalIndex from '@fpsak-frontend/modal-sett-pa-vent';
import { createRequestApi, RestApiConfigBuilder } from '@fpsak-frontend/rest-api';

import BehandlingPaVent from './BehandlingPaVent';

describe('<BehandlingPaVent>', () => {
  const behandling = {
    id: 1,
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
    links: [],
  };
  const aksjonspunkter = [];
  const kodeverk = {};

  const AKSJONSPUNKT_KEY = 'AP';
  const PA_VENT_KEY = 'PA_VENT';

  const endpoints = new RestApiConfigBuilder()
    .withRel('test', AKSJONSPUNKT_KEY)
    .build();

  const requestMock = createRequestApi(endpoints);

  afterEach(() => {
    requestMock.clearAllMockData();
  });

  it('skal ikke vise modal når behandling ikke er på vent', () => {
    requestMock.mock(AKSJONSPUNKT_KEY, aksjonspunkter);

    const wrapper = shallow(<BehandlingPaVent
      behandling={behandling as Behandling}
      requestApi={requestMock}
      oppdaterPaVentKey={PA_VENT_KEY}
      aksjonspunktKey={AKSJONSPUNKT_KEY}
      kodeverk={kodeverk}
      hentBehandling={sinon.spy()}
    />);

    expect(wrapper.find(SettPaVentModalIndex)).toHaveLength(0);
  });

  it('skal vise modal når behandling er på vent', () => {
    requestMock.mock(AKSJONSPUNKT_KEY, aksjonspunkter);

    const wrapper = shallow(<BehandlingPaVent
      behandling={{
        ...behandling,
        behandlingPaaVent: true,
      } as Behandling}
      requestApi={requestMock}
      oppdaterPaVentKey={PA_VENT_KEY}
      aksjonspunktKey={AKSJONSPUNKT_KEY}
      kodeverk={kodeverk}
      hentBehandling={sinon.spy()}
    />);

    const modal = wrapper.find(SettPaVentModalIndex);
    expect(modal).toHaveLength(1);
    expect(modal.prop('hasManualPaVent')).toBe(false);
  });

  it('skal vise modal og så skjule den ved trykk på knapp', () => {
    requestMock.mock(AKSJONSPUNKT_KEY, aksjonspunkter);

    const wrapper = shallow(<BehandlingPaVent
      behandling={{
        ...behandling,
        behandlingPaaVent: true,
      } as Behandling}
      requestApi={requestMock}
      oppdaterPaVentKey={PA_VENT_KEY}
      aksjonspunktKey={AKSJONSPUNKT_KEY}
      kodeverk={kodeverk}
      hentBehandling={sinon.spy()}
    />);

    const modal = wrapper.find(SettPaVentModalIndex);
    expect(modal).toHaveLength(1);

    modal.prop('cancelEvent')();

    expect(wrapper.find(SettPaVentModalIndex)).toHaveLength(0);
  });

  it('skal markeres som automatisk satt på vent når en har åpent aksjonspunkt for auto-manuelt satt på vent', () => {
    requestMock.mock(AKSJONSPUNKT_KEY, [{
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
        kodeverk: 'AKSJONSPUNKT_STATUS',
      },
      definisjon: {
        kode: aksjonspunktCodes.AUTO_MANUELT_SATT_PÅ_VENT,
        kodeverk: 'AKSJONSPUNKT_KODE',
      },
      kanLoses: true,
      erAktivt: true,
    }]);

    const wrapper = shallow(<BehandlingPaVent
      behandling={{
        ...behandling,
        behandlingPaaVent: true,
      } as Behandling}
      requestApi={requestMock}
      oppdaterPaVentKey={PA_VENT_KEY}
      aksjonspunktKey={AKSJONSPUNKT_KEY}
      kodeverk={kodeverk}
      hentBehandling={sinon.spy()}
    />);

    const modal = wrapper.find(SettPaVentModalIndex);
    expect(modal).toHaveLength(1);
    expect(modal.prop('hasManualPaVent')).toBe(true);
  });

  it('skal oppdatere på-vent-informasjon og så hente behandling på nytt', async () => {
    requestMock.mock(AKSJONSPUNKT_KEY, aksjonspunkter);
    requestMock.mock(PA_VENT_KEY);

    const hentBehandlingCallback = sinon.spy();

    const wrapper = shallow(<BehandlingPaVent
      behandling={{
        ...behandling,
        behandlingPaaVent: true,
      } as Behandling}
      requestApi={requestMock}
      oppdaterPaVentKey={PA_VENT_KEY}
      aksjonspunktKey={AKSJONSPUNKT_KEY}
      kodeverk={kodeverk}
      hentBehandling={hentBehandlingCallback}
    />);

    const modal = wrapper.find(SettPaVentModalIndex);

    await modal.prop('submitCallback')({ dato: '10.10.2019' });

    const requestData = requestMock.getRequestMockData(PA_VENT_KEY);
    expect(requestData).toHaveLength(1);
    expect(requestData[0].params).toEqual({
      behandlingId: 1,
      behandlingVersjon: 1,
      dato: '10.10.2019',
    });

    const calls = hentBehandlingCallback.getCalls();
    expect(calls).toHaveLength(1);
    expect(calls[0].args).toHaveLength(1);
    expect(calls[0].args[0]).toBe(false);
  });
});
