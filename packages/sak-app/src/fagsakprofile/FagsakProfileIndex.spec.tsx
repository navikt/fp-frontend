import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import FagsakProfilSakIndex from '@fpsak-frontend/sak-fagsak-profil';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import fagsakStatus from '@fpsak-frontend/kodeverk/src/fagsakStatus';
import BehandlingVelgerSakIndex from '@fpsak-frontend/sak-behandling-velger';
import { BehandlingAppKontekst, Fagsak } from '@fpsak-frontend/types';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';

import * as useLocation from '../app/useLocation';
import * as useRouteMatch from '../app/useRouteMatch';
import { requestApi, FpsakApiKeys } from '../data/fpsakApi';
import { FagsakProfileIndex } from './FagsakProfileIndex';

describe('<FagsakProfileIndex>', () => {
  const locationMock = {
    pathname: 'test',
    search: 'test',
    state: {},
    hash: 'test',
  };

  const fagsak = {
    saksnummer: 123,
    sakstype: {
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

  let contextStubLocation;
  let contextStubMatch;
  beforeEach(() => {
    contextStubLocation = sinon.stub(useLocation, 'default').callsFake(() => locationMock);
    // @ts-ignore
    contextStubMatch = sinon.stub(useRouteMatch, 'default').callsFake(() => ({ isExact: false }));
  });

  afterEach(() => {
    contextStubLocation.restore();
    contextStubMatch.restore();
  });

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
