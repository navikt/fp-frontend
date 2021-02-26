import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import fagsakStatus from '@fpsak-frontend/kodeverk/src/fagsakStatus';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import MenySakIndex from '@fpsak-frontend/sak-meny';
import { BehandlingAppKontekst, Fagsak } from '@fpsak-frontend/types';

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
  saksnummerString: '123',
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

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: jest.fn(),
  }),
  useLocation: () => ({
    pathname: 'test',
    search: 'test',
    state: {},
    hash: 'test',
  }),
}));

describe('BehandlingMenuIndex', () => {
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
    expect(meny).toHaveLength(1);
    const data = meny.prop('data');
    expect(data).toHaveLength(7);
    expect(data[0].erSynlig).toBe(false);
    expect(data[0].tekst).toEqual('Fortsett behandlingen');
    expect(data[1].erSynlig).toBe(true);
    expect(data[1].tekst).toEqual('Sett behandlingen på vent');
    expect(data[2].erSynlig).toBe(true);
    expect(data[2].tekst).toEqual('Henlegg behandlingen og avslutt');
    expect(data[3].erSynlig).toBe(true);
    expect(data[3].tekst).toEqual('Endre behandlende enhet');
    expect(data[4].erSynlig).toBe(true);
    expect(data[4].tekst).toEqual('Åpne behandling for endringer');
    expect(data[5].erSynlig).toBe(true);
    expect(data[5].tekst).toEqual('Opprett ny behandling');
    expect(data[6].erSynlig).toBe(true);
    expect(data[6].tekst).toEqual('Opprett verge/fullmektig');
  });
});
