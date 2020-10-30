import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import fagsakStatus from '@fpsak-frontend/kodeverk/src/fagsakStatus';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import MenySakIndex from '@fpsak-frontend/sak-meny';
import { BehandlingAppKontekst, Fagsak } from '@fpsak-frontend/types';

import * as useHistory from '../app/useHistory';
import * as useLocation from '../app/useLocation';
import { VergeBehandlingmenyValg } from '../behandling/behandlingRettigheterTsType';
import { BehandlingMenuIndex } from './BehandlingMenuIndex';
import { requestApi, FpsakApiKeys } from '../data/fpsakApi';

const navAnsatt = {
  brukernavn: 'Test',
  kanBehandleKode6: false,
  kanBehandleKode7: false,
  kanBehandleKodeEgenAnsatt: false,
  kanBeslutte: true,
  kanOverstyre: false,
  kanSaksbehandle: true,
  kanVeilede: false,
  navn: 'Test',
};

const fagsak = {
  saksnummer: 123,
  sakstype: {
    kode: fagsakYtelseType.FORELDREPENGER,
    kodeverk: 'BEHANDLING_TYPE',
  },
  status: {
    kode: fagsakStatus.UNDER_BEHANDLING,
    kodeverk: '',
  },
  skalBehandlesAvInfotrygd: false,
};

const alleBehandlinger = [{
  id: 1,
  versjon: 2,
  uuid: '423223',
  behandlingKoet: false,
  behandlingPaaVent: false,
  kanHenleggeBehandling: true,
  type: {
    kode: behandlingType.REVURDERING,
    kodeverk: 'BEHANDLING_TYPE',
  },
  status: {
    kode: behandlingStatus.BEHANDLING_UTREDES,
    kodeverk: 'BEHANDLING_STATUS',
  },
  behandlendeEnhetId: '2323',
  behandlendeEnhetNavn: 'NAV Viken',
  erAktivPapirsoknad: false,
}];

const locationMock = {
  pathname: 'test',
  search: 'test',
  state: {},
  hash: 'test',
};

describe('BehandlingMenuIndex', () => {
  let contextStubHistory;
  let contextStubLocation;
  beforeEach(() => {
    // @ts-ignore
    contextStubHistory = sinon.stub(useHistory, 'default').callsFake(() => ({ push: sinon.spy() }));
    contextStubLocation = sinon.stub(useLocation, 'default').callsFake(() => locationMock);
  });

  afterEach(() => {
    contextStubHistory.restore();
    contextStubLocation.restore();
  });

  it('skal vise meny der alle menyhandlinger er synlige', () => {
    requestApi.mock(FpsakApiKeys.INIT_FETCH_FPTILBAKE, {});
    requestApi.mock(FpsakApiKeys.NAV_ANSATT, navAnsatt);
    requestApi.mock(FpsakApiKeys.BEHANDLENDE_ENHETER, []);
    requestApi.mock(FpsakApiKeys.KODEVERK, {});
    requestApi.mock(FpsakApiKeys.KODEVERK_FPTILBAKE, {});
    requestApi.mock(FpsakApiKeys.KAN_TILBAKEKREVING_OPPRETTES, false);
    requestApi.mock(FpsakApiKeys.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES, false);

    const sakRettigheter = {
      sakSkalTilInfotrygd: false,
      behandlingTypeKanOpprettes: [],
    };

    const behandlingRettigheter = {
      behandlingFraBeslutter: false,
      behandlingKanSendeMelding: true,
      behandlingTilGodkjenning: false,
      behandlingKanBytteEnhet: true,
      behandlingKanHenlegges: true,
      behandlingKanGjenopptas: false,
      behandlingKanOpnesForEndringer: true,
      behandlingKanSettesPaVent: true,
      vergeBehandlingsmeny: VergeBehandlingmenyValg.OPPRETT,
    };

    const wrapper = shallow(<BehandlingMenuIndex
      fagsak={fagsak as Fagsak}
      alleBehandlinger={alleBehandlinger as BehandlingAppKontekst[]}
      behandlingId={1}
      behandlingVersjon={2}
      oppfriskBehandlinger={sinon.spy()}
      behandlingRettigheter={behandlingRettigheter}
      sakRettigheter={sakRettigheter}
    />);

    const meny = wrapper.find(MenySakIndex);
    expect(meny).to.have.length(1);
    const data = meny.prop('data');
    expect(data).to.have.length(7);
    expect(data[0].erSynlig).is.false;
    expect(data[0].tekst).is.eql('Fortsett behandlingen');
    expect(data[1].erSynlig).is.true;
    expect(data[1].tekst).is.eql('Sett behandlingen på vent');
    expect(data[2].erSynlig).is.true;
    expect(data[2].tekst).is.eql('Henlegg behandlingen og avslutt');
    expect(data[3].erSynlig).is.true;
    expect(data[3].tekst).is.eql('Endre behandlende enhet');
    expect(data[4].erSynlig).is.true;
    expect(data[4].tekst).is.eql('Åpne behandling for endringer');
    expect(data[5].erSynlig).is.true;
    expect(data[5].tekst).is.eql('Opprett ny behandling');
    expect(data[6].erSynlig).is.true;
    expect(data[6].tekst).is.eql('Opprett verge/fullmektig');
  });
});
