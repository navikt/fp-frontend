import React from 'react';
import sinon from 'sinon';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import fagsakStatus from '@fpsak-frontend/kodeverk/src/fagsakStatus';
import { BehandlingAppKontekst, Fagsak, Behandling } from '@fpsak-frontend/types';

import { requestApi, FpsakApiKeys } from '../data/fpsakApi';
import { FagsakProfileIndex } from './FagsakProfileIndex';

describe('<FagsakProfileIndex>', () => {
  const fagsak = {
    saksnummer: '123',
    fagsakYtelseType: fagsakYtelseType.FORELDREPENGER,
    status: fagsakStatus.OPPRETTET,
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

  const behandling = {
    uuid: 'test',
    type: behandlingType.FORSTEGANGSSOKNAD,
    status: behandlingStatus.OPPRETTET,
    behandlendeEnhetId: 'test',
    behandlendeEnhetNavn: 'NAV Viken',
    opprettet: '2017-08-02T00:54:25.455',
  } as Behandling;

  const fagsakRettigheter = {
    sakSkalTilInfotrygd: true,
    behandlingTypeKanOpprettes: [],
  };

  it('skal rendre komponent og vise alle behandlinger når ingen behandling er valgt', async () => {
    const data = [
      { key: FpsakApiKeys.KODEVERK.name, global: true, data: alleKodeverk },
      { key: FpsakApiKeys.KODEVERK_FPTILBAKE.name, global: true, data: {} },
      { key: FpsakApiKeys.RISIKO_AKSJONSPUNKT.name, data: undefined },
      { key: FpsakApiKeys.KONTROLLRESULTAT.name, data: {} },
      { key: FpsakApiKeys.NAV_ANSATT.name, global: true, data: navAnsatt },
    ];

    render(
      <RestApiMock data={data} requestApi={requestApi}>
        <MemoryRouter>
          <FagsakProfileIndex
            fagsak={fagsak as Fagsak}
            alleBehandlinger={[behandling] as BehandlingAppKontekst[]}
            harHentetBehandlinger
            oppfriskBehandlinger={sinon.spy()}
            fagsakRettigheter={fagsakRettigheter}
          />
        </MemoryRouter>
      </RestApiMock>,
    );

    expect(await screen.findByText('123 - Opprettet')).toBeInTheDocument();
    expect(screen.getByText('Førstegangsbehandling')).toBeInTheDocument();
  });

  it('skal ikke vise alle behandlinger når behandling er valgt', async () => {
    const data = [
      { key: FpsakApiKeys.KODEVERK.name, global: true, data: alleKodeverk },
      { key: FpsakApiKeys.KODEVERK_FPTILBAKE.name, global: true, data: {} },
      { key: FpsakApiKeys.RISIKO_AKSJONSPUNKT.name, data: undefined },
      { key: FpsakApiKeys.KONTROLLRESULTAT.name, data: {} },
      { key: FpsakApiKeys.NAV_ANSATT.name, global: true, data: navAnsatt },
    ];

    render(
      <RestApiMock data={data} requestApi={requestApi}>
        <MemoryRouter>
          <FagsakProfileIndex
            fagsak={fagsak as Fagsak}
            alleBehandlinger={[behandling] as BehandlingAppKontekst[]}
            harHentetBehandlinger
            oppfriskBehandlinger={sinon.spy()}
            behandlingUuid="1"
            fagsakRettigheter={fagsakRettigheter}
          />
        </MemoryRouter>
      </RestApiMock>,
    );

    expect(await screen.findByText('123 - Opprettet')).toBeInTheDocument();
    expect(screen.queryByText('Førstegangsbehandling')).not.toBeInTheDocument();
  });
});
