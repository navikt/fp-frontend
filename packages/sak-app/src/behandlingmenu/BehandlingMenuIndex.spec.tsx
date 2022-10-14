import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import {
  BehandlingType, FagsakStatus, BehandlingStatus, FagsakYtelseType,
} from '@navikt/ft-kodeverk';

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import { Fagsak, VergeBehandlingmenyValg } from '@fpsak-frontend/types';

import BehandlingMenuIndex from './BehandlingMenuIndex';
import { requestApi, FpsakApiKeys } from '../data/fpsakApi';
import FagsakData from '../fagsak/FagsakData';

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

const behandlingTillatteOperasjoner = {
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

const alleBehandlinger = [{
  versjon: 2,
  uuid: '1',
  behandlingKoet: false,
  behandlingPaaVent: false,
  kanHenleggeBehandling: true,
  type: BehandlingType.REVURDERING,
  status: BehandlingStatus.BEHANDLING_UTREDES,
  behandlendeEnhetId: '2323',
  behandlendeEnhetNavn: 'NAV Viken',
  erAktivPapirsoknad: false,
  behandlingTillatteOperasjoner,
}];

const fagsak = {
  saksnummer: '123',
  fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
  status: FagsakStatus.UNDER_BEHANDLING,
  behandlinger: alleBehandlinger,
  sakSkalTilInfotrygd: false,
  behandlingTypeKanOpprettes: [],
};

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

    render(
      <RestApiMock data={data} requestApi={requestApi}>
        <MemoryRouter>
          <BehandlingMenuIndex
            fagsakData={new FagsakData(fagsak as Fagsak)}
            behandlingUuid="1"
            behandlingVersjon={2}
            oppfriskBehandlinger={jest.fn()}
          />
        </MemoryRouter>
      </RestApiMock>,
    );
    expect(await screen.findByText('Sett behandlingen på vent')).toBeInTheDocument();
    expect(screen.getByText('Henlegg behandlingen og avslutt')).toBeInTheDocument();
    expect(screen.getByText('Endre behandlende enhet')).toBeInTheDocument();
    expect(screen.getByText('Åpne behandling for endringer')).toBeInTheDocument();
    expect(screen.getByText('Opprett ny behandling')).toBeInTheDocument();
    expect(screen.getByText('Opprett verge/fullmektig')).toBeInTheDocument();
  });
});
