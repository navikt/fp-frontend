import React from 'react';
import { createMemoryHistory } from 'history';
import sinon, { SinonStub } from 'sinon';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import fagsakStatus from '@fpsak-frontend/kodeverk/src/fagsakStatus';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

import * as useTrackRouteParam from '../app/useTrackRouteParam';
import { requestApi, FpsakApiKeys } from '../data/fpsakApi';

import FagsakIndex from './FagsakIndex';

describe('<FagsakIndex>', () => {
  const fagsak = {
    saksnummer: '123456',
    status: {
      kode: fagsakStatus.LOPENDE,
      kodeverk: 'FAGSAK_STATUS',
    },
    fagsakYtelseType: {
      kode: fagsakYtelseType.FORELDREPENGER,
      kodeverk: 'FAGSAK_YTELSE',
    },
  };

  const behandling = {
    id: 1,
    uuid: 'test',
    type: {
      kode: behandlingType.FORSTEGANGSSOKNAD,
      kodeverk: 'BEHANDLING_TYPE',
    },
    status: {
      kode: behandlingStatus.OPPRETTET,
      kodeverk: 'BEHANDLING_STATUS',
    },
    behandlendeEnhetId: 'test',
    behandlendeEnhetNavn: 'NAV Viken',
    opprettet: '2017-08-02T00:54:25.455',
  };
  const behandling2 = {
    id: 2,
    uuid: 'test2',
    type: {
      kode: behandlingType.FORSTEGANGSSOKNAD,
      kodeverk: 'BEHANDLING_TYPE',
    },
    status: {
      kode: behandlingStatus.OPPRETTET,
      kodeverk: 'BEHANDLING_STATUS',
    },
    behandlendeEnhetId: 'test',
    behandlendeEnhetNavn: 'NAV Viken',
    opprettet: '2017-08-02T00:54:25.455',
  };

  const navAnsatt = {
    brukernavn: 'Peder',
    kanBehandleKode6: false,
    kanBehandleKode7: false,
    kanBehandleKodeEgenAnsatt: false,
    kanBeslutte: true,
    kanOverstyre: false,
    kanSaksbehandle: true,
    kanVeilede: false,
    navn: 'Peder Pjokk',
  };

  let contextStub: SinonStub;
  beforeEach(() => {
    contextStub = sinon.stub(useTrackRouteParam, 'default').callsFake(() => ({
      selected: '123456',
      location: {
        pathname: 'test',
        search: 'test',
        state: {},
        hash: 'test',
      },
    }));
  });

  afterEach(() => {
    contextStub.restore();
  });

  it('skal vise ventikon', async () => {
    const data = [
      { key: FpsakApiKeys.KODEVERK.name, global: true, data: alleKodeverk },
      { key: FpsakApiKeys.FETCH_FAGSAK.name, data: fagsak },
      { key: FpsakApiKeys.SAK_PERSONER.name, global: true, data: {} },
      { key: FpsakApiKeys.SAK_RETTIGHETER.name, data: { behandlingTypeKanOpprettes: [] } },
      { key: FpsakApiKeys.INIT_FETCH_FPTILBAKE.name, global: true, data: {} },
      { key: FpsakApiKeys.ANNEN_PART_BEHANDLING.name, data: {} },
      { key: FpsakApiKeys.KODEVERK_FPTILBAKE.name, global: true, data: alleKodeverk },
      { key: FpsakApiKeys.BEHANDLINGER_FPSAK.name, data: [behandling] },
      { key: FpsakApiKeys.BEHANDLINGER_FPTILBAKE.name, data: [behandling2] },
    ];

    render(
      <RestApiMock data={data} requestApi={requestApi}>
        <Router history={createMemoryHistory()}>
          <FagsakIndex />
        </Router>
      </RestApiMock>,
    );

    expect(await screen.findByText('Venter...')).toBeInTheDocument();
  });

  it('skal hente alle behandlinger fra fpsak og fptilbake', async () => {
    const data = [
      { key: FpsakApiKeys.KODEVERK.name, global: true, data: alleKodeverk },
      { key: FpsakApiKeys.FETCH_FAGSAK.name, data: fagsak },
      { key: FpsakApiKeys.SAK_PERSONER.name, global: true, data: {} },
      { key: FpsakApiKeys.SAK_RETTIGHETER.name, data: { behandlingTypeKanOpprettes: [] } },
      { key: FpsakApiKeys.SAK_RETTIGHETER_FPTILBAKE.name, data: { behandlingTypeKanOpprettes: [] } },
      { key: FpsakApiKeys.INIT_FETCH_FPTILBAKE.name, global: true, data: {} },
      { key: FpsakApiKeys.ANNEN_PART_BEHANDLING.name, data: {} },
      { key: FpsakApiKeys.KODEVERK_FPTILBAKE.name, global: true, data: alleKodeverk },
      { key: FpsakApiKeys.BEHANDLINGER_FPSAK.name, data: [behandling] },
      { key: FpsakApiKeys.BEHANDLINGER_FPTILBAKE.name, data: [behandling2] },
      { key: FpsakApiKeys.RISIKO_AKSJONSPUNKT.name, data: undefined },
      { key: FpsakApiKeys.KONTROLLRESULTAT.name, data: undefined },
      { key: FpsakApiKeys.NAV_ANSATT.name, global: true, data: navAnsatt },
    ];

    render(
      <RestApiMock data={data} requestApi={requestApi}>
        <Router history={createMemoryHistory()}>
          <FagsakIndex />
        </Router>
      </RestApiMock>,
    );

    expect(await screen.findByText('123456 - Løpende')).toBeInTheDocument();
  });
});
