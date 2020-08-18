import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import FagsakProfilSakIndex from '@fpsak-frontend/sak-fagsak-profil';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import fagsakStatus from '@fpsak-frontend/kodeverk/src/fagsakStatus';
import BehandlingVelgerSakIndex from '@fpsak-frontend/sak-behandling-velger';
import { Fagsak } from '@fpsak-frontend/types';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';

import { requestApi, FpsakApiKeys } from '../data/fpsakApi';
import { FagsakProfileIndex } from './FagsakProfileIndex';
import BehandlingAppKontekst from '../behandling/behandlingAppKontekstTsType';

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

  it('skal rendre komponent og vise alle behandlinger når ingen behandling er valgt', () => {
    requestApi.mock(FpsakApiKeys.KODEVERK, alleKodeverk);
    requestApi.mock(FpsakApiKeys.KODEVERK_FPTILBAKE, {});
    requestApi.mock(FpsakApiKeys.RISIKO_AKSJONSPUNKT, {});
    requestApi.mock(FpsakApiKeys.KONTROLLRESULTAT, {});

    const wrapper = shallow(<FagsakProfileIndex
      fagsak={fagsak as Fagsak}
      alleBehandlinger={[behandling] as BehandlingAppKontekst[]}
      harHentetBehandlinger
      shouldRedirectToBehandlinger={false}
      location={locationMock}
      oppfriskBehandlinger={sinon.spy()}
    />);

    const fagsakProfile = wrapper.find(FagsakProfilSakIndex);
    expect(fagsakProfile).has.length(1);

    const behandlingVelger = fagsakProfile.renderProp('renderBehandlingVelger')().find(BehandlingVelgerSakIndex);
    expect(behandlingVelger).has.length(1);
    expect(behandlingVelger.prop('showAll')).is.true;
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
      shouldRedirectToBehandlinger={false}
      location={locationMock}
      oppfriskBehandlinger={sinon.spy()}
      selectedBehandlingId={1}
    />);

    const fagsakProfile = wrapper.find(FagsakProfilSakIndex);
    expect(fagsakProfile).has.length(1);

    const behandlingVelger = fagsakProfile.renderProp('renderBehandlingVelger')().find(BehandlingVelgerSakIndex);
    expect(behandlingVelger).has.length(1);
    expect(behandlingVelger.prop('showAll')).is.false;
  });
});
