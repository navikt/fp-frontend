import React from 'react';
import sinon from 'sinon';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import { BehandlingAppKontekst, Fagsak, Behandling } from '@navikt/ft-types';
import {
  BehandlingStatus, BehandlingType, FagsakYtelseType, FagsakStatus,
} from '@navikt/ft-kodeverk';

import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';

import { requestApi, FpsakApiKeys } from '../data/fpsakApi';
import { FagsakProfileIndex } from './FagsakProfileIndex';

describe('<FagsakProfileIndex>', () => {
  const fagsak = {
    saksnummer: '123',
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    status: FagsakStatus.OPPRETTET,
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
    type: BehandlingType.FORSTEGANGSSOKNAD,
    status: BehandlingStatus.OPPRETTET,
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

    await act(async () => {
      render(
        <RestApiMock data={data} requestApi={requestApi}>
          <MemoryRouter>
            <FagsakProfileIndex
              fagsak={fagsak as Fagsak}
              alleBehandlinger={[behandling] as BehandlingAppKontekst[]}
              harHentetBehandlinger
              oppfriskBehandlinger={sinon.spy()}
              fagsakRettigheter={fagsakRettigheter}
              brukerManglerAdresse={false}
            />
          </MemoryRouter>
        </RestApiMock>,
      );
    });

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

    await act(async () => {
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
              brukerManglerAdresse={false}
            />
          </MemoryRouter>
        </RestApiMock>,
      );
    });

    expect(await screen.findByText('123 - Opprettet')).toBeInTheDocument();
    expect(screen.queryByText('Førstegangsbehandling')).not.toBeInTheDocument();
  });
});
