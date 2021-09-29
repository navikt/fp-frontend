import React from 'react';
import sinon from 'sinon';
import { render, screen } from '@testing-library/react';

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import fagsakStatus from '@fpsak-frontend/kodeverk/src/fagsakStatus';
import { BehandlingAppKontekst, Fagsak } from '@fpsak-frontend/types';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';

import { requestApi, FpsakApiKeys } from '../data/fpsakApi';
import { FagsakProfileIndex } from './FagsakProfileIndex';

describe('<FagsakProfileIndex>', () => {
  const fagsak = {
    saksnummer: '123',
    fagsakYtelseType: {
      kode: fagsakYtelseType.FORELDREPENGER,
      kodeverk: 'FAGSAK_YTELSE',
    },
    status: {
      kode: fagsakStatus.OPPRETTET,
      kodeverk: 'FAGSAK_STATUS',
    },
  };

  const alleKodeverk = {
    [kodeverkTyper.FAGSAK_YTELSE]: [{
      kode: fagsakYtelseType.FORELDREPENGER,
      kodeverk: 'FAGSAK_YTELSE',
      navn: 'Foreldrepenger',
    }],
    [kodeverkTyper.FAGSAK_STATUS]: [{
      kode: fagsakStatus.OPPRETTET,
      kodeverk: 'FAGSAK_STATUS',
      navn: 'Opprettet',
    }],
  };

  const behandling = {
    uuid: '1',
  };

  const fagsakRettigheter = {
    sakSkalTilInfotrygd: true,
    behandlingTypeKanOpprettes: [],
  };

  it('skal rendre komponent og vise alle behandlinger når ingen behandling er valgt', async () => {
    const data = [
      { key: FpsakApiKeys.KODEVERK.name, global: true, data: alleKodeverk },
      { key: FpsakApiKeys.KODEVERK_FPTILBAKE.name, global: true, data: {} },
      { key: FpsakApiKeys.RISIKO_AKSJONSPUNKT.name, data: {} },
      { key: FpsakApiKeys.KONTROLLRESULTAT.name, data: {} },
    ];

    render(
      <RestApiMock data={data} requestApi={requestApi}>
        <FagsakProfileIndex
          fagsak={fagsak as Fagsak}
          alleBehandlinger={[behandling] as BehandlingAppKontekst[]}
          harHentetBehandlinger
          oppfriskBehandlinger={sinon.spy()}
          fagsakRettigheter={fagsakRettigheter}
        />
      </RestApiMock>,
    );

    expect(await screen.findByText('Behandlingen settes på vent med frist')).toBeInTheDocument();

    // const fagsakProfile = wrapper.find(FagsakProfilSakIndex);
    // expect(fagsakProfile).toHaveLength(1);

    // const behandlingVelger = fagsakProfile.renderProp('renderBehandlingVelger')().find(BehandlingVelgerSakIndex);
    // expect(behandlingVelger).toHaveLength(1);
    // expect(behandlingVelger.prop('showAll')).toBe(true);
  });

  it('skal ikke vise alle behandlinger når behandling er valgt', async () => {
    const data = [
      { key: FpsakApiKeys.KODEVERK.name, global: true, data: alleKodeverk },
      { key: FpsakApiKeys.KODEVERK_FPTILBAKE.name, global: true, data: {} },
      { key: FpsakApiKeys.RISIKO_AKSJONSPUNKT.name, data: {} },
      { key: FpsakApiKeys.KONTROLLRESULTAT.name, data: {} },
    ];

    render(
      <RestApiMock data={data} requestApi={requestApi}>
        <FagsakProfileIndex
          fagsak={fagsak as Fagsak}
          alleBehandlinger={[behandling] as BehandlingAppKontekst[]}
          harHentetBehandlinger
          oppfriskBehandlinger={sinon.spy()}
          behandlingUuid="1"
          fagsakRettigheter={fagsakRettigheter}
        />
      </RestApiMock>,
    );

    expect(await screen.findByText('Behandlingen settes på vent med frist')).toBeInTheDocument();

    // const fagsakProfile = wrapper.find(FagsakProfilSakIndex);
    // expect(fagsakProfile).toHaveLength(1);

    // const behandlingVelger = fagsakProfile.renderProp('renderBehandlingVelger')().find(BehandlingVelgerSakIndex);
    // expect(behandlingVelger).toHaveLength(1);
    // expect(behandlingVelger.prop('showAll')).toBe(false);
  });
});
