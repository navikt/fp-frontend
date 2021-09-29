import React from 'react';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';

import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import fagsakStatus from '@fpsak-frontend/kodeverk/src/fagsakStatus';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import { BehandlingAppKontekst, Fagsak } from '@fpsak-frontend/types';
import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';

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
  saksnummer: '123',
  fagsakYtelseType: {
    kode: fagsakYtelseType.FORELDREPENGER,
    kodeverk: 'BEHANDLING_TYPE',
  },
  status: {
    kode: fagsakStatus.UNDER_BEHANDLING,
    kodeverk: '',
  },
};

const alleBehandlinger = [{
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

describe('BehandlingMenuIndex', () => {
  it('skal vise meny der alle menyhandlinger er synlige', async () => {
    const data = [
      { key: FpsakApiKeys.INIT_FETCH_FPTILBAKE.name, global: true, data: {} },
      { key: FpsakApiKeys.NAV_ANSATT.name, global: true, data: navAnsatt },
      { key: FpsakApiKeys.BEHANDLENDE_ENHETER.name, global: true, data: [] },
      { key: FpsakApiKeys.KODEVERK.name, global: true, data: {} },
      { key: FpsakApiKeys.KODEVERK_FPTILBAKE.name, global: true, data: {} },
      { key: FpsakApiKeys.KAN_TILBAKEKREVING_OPPRETTES.name, data: false },
      { key: FpsakApiKeys.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES.name, data: false },
    ];

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

    render(
      <RestApiMock data={data} requestApi={requestApi}>
        <Router history={createMemoryHistory()}>
          <BehandlingMenuIndex
            fagsak={fagsak as Fagsak}
            alleBehandlinger={alleBehandlinger as BehandlingAppKontekst[]}
            behandlingUuid="1"
            behandlingVersjon={2}
            oppfriskBehandlinger={jest.fn()}
            behandlingRettigheter={behandlingRettigheter}
            sakRettigheter={sakRettigheter}
          />
        </Router>
      </RestApiMock>,
    );

    expect(await screen.findByText('Behandlingen settes på vent med frist')).toBeInTheDocument();
    // const meny = wrapper.find(MenySakIndex);
    // expect(meny).toHaveLength(1);
    // const data = meny.prop('data');
    // expect(data).toHaveLength(7);
    // expect(data[0].erSynlig).toBe(false);
    // expect(data[0].tekst).toEqual('Fortsett behandlingen');
    // expect(data[1].erSynlig).toBe(true);
    // expect(data[1].tekst).toEqual('Sett behandlingen på vent');
    // expect(data[2].erSynlig).toBe(true);
    // expect(data[2].tekst).toEqual('Henlegg behandlingen og avslutt');
    // expect(data[3].erSynlig).toBe(true);
    // expect(data[3].tekst).toEqual('Endre behandlende enhet');
    // expect(data[4].erSynlig).toBe(true);
    // expect(data[4].tekst).toEqual('Åpne behandling for endringer');
    // expect(data[5].erSynlig).toBe(true);
    // expect(data[5].tekst).toEqual('Opprett ny behandling');
    // expect(data[6].erSynlig).toBe(true);
    // expect(data[6].tekst).toEqual('Opprett verge/fullmektig');
  });
});
