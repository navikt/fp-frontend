import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import FagsakProfilSakIndex from '@fpsak-frontend/sak-fagsak-profil';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import fagsakStatus from '@fpsak-frontend/kodeverk/src/fagsakStatus';
import BehandlingVelgerSakIndex from '@fpsak-frontend/sak-behandling-velger';
import { BehandlingAppKontekst, Fagsak } from '@fpsak-frontend/types';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';

import { requestApi, FpsakApiKeys } from '../data/fpsakApi';
import { FagsakProfileIndex } from './FagsakProfileIndex';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useRouteMatch: () => ({ isExact: false }),
  useLocation: () => ({
    pathname: 'test',
    search: 'test',
    state: {},
    hash: 'test',
  }),
}));

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
    id: 1,
  };

  const fagsakRettigheter = {
    sakSkalTilInfotrygd: true,
    behandlingTypeKanOpprettes: [],
  };

  it('skal rendre komponent og vise alle behandlinger når ingen behandling er valgt', () => {
    requestApi.mock(FpsakApiKeys.KODEVERK, alleKodeverk);
    requestApi.mock(FpsakApiKeys.KODEVERK_FPTILBAKE, {});
    requestApi.mock(FpsakApiKeys.RISIKO_AKSJONSPUNKT, {});
    requestApi.mock(FpsakApiKeys.KONTROLLRESULTAT, {});

    const wrapper = shallow(<FagsakProfileIndex
      fagsak={fagsak as Fagsak}
      alleBehandlinger={[behandling] as BehandlingAppKontekst[]}
      harHentetBehandlinger
      oppfriskBehandlinger={sinon.spy()}
      fagsakRettigheter={fagsakRettigheter}
    />);

    const fagsakProfile = wrapper.find(FagsakProfilSakIndex);
    expect(fagsakProfile).toHaveLength(1);

    const behandlingVelger = fagsakProfile.renderProp('renderBehandlingVelger')().find(BehandlingVelgerSakIndex);
    expect(behandlingVelger).toHaveLength(1);
    expect(behandlingVelger.prop('showAll')).toBe(true);
  });

  it('skal ikke vise alle behandlinger når behandling er valgt', () => {
    requestApi.mock(FpsakApiKeys.KODEVERK, alleKodeverk);
    requestApi.mock(FpsakApiKeys.KODEVERK_FPTILBAKE, {});
    requestApi.mock(FpsakApiKeys.RISIKO_AKSJONSPUNKT, {});
    requestApi.mock(FpsakApiKeys.KONTROLLRESULTAT, {});

    const wrapper = shallow(<FagsakProfileIndex
      fagsak={fagsak as Fagsak}
      alleBehandlinger={[behandling] as BehandlingAppKontekst[]}
      harHentetBehandlinger
      oppfriskBehandlinger={sinon.spy()}
      behandlingId={1}
      fagsakRettigheter={fagsakRettigheter}
    />);

    const fagsakProfile = wrapper.find(FagsakProfilSakIndex);
    expect(fagsakProfile).toHaveLength(1);

    const behandlingVelger = fagsakProfile.renderProp('renderBehandlingVelger')().find(BehandlingVelgerSakIndex);
    expect(behandlingVelger).toHaveLength(1);
    expect(behandlingVelger.prop('showAll')).toBe(false);
  });
});
