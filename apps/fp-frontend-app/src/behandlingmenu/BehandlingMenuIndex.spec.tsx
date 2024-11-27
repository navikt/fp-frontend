import React from 'react';
import { RawIntlProvider } from 'react-intl';
import { MemoryRouter } from 'react-router-dom';

import { createIntl } from '@navikt/ft-utils';
import { render, screen } from '@testing-library/react';

import { BehandlingStatus, BehandlingType, FagsakStatus, FagsakYtelseType } from '@navikt/fp-kodeverk';
import { BehandlingOppretting,Fagsak, VergeBehandlingmenyValg } from '@navikt/fp-types';
import { RestApiMock } from '@navikt/fp-utils-test';

import { FagsakApiKeys,requestFagsakApi } from '../data/fagsakContextApi';
import { FagsakData } from '../fagsak/FagsakData';
import { BehandlingMenuIndex } from './BehandlingMenuIndex';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

const navAnsatt = {
  brukernavn: 'Test',
  kanBehandleKode6: false,
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

const alleBehandlinger = [
  {
    versjon: 2,
    uuid: '1',
    behandlingKoet: false,
    behandlingPaaVent: false,
    kanHenleggeBehandling: true,
    type: BehandlingType.REVURDERING,
    status: BehandlingStatus.BEHANDLING_UTREDES,
    behandlendeEnhetId: '2323',
    behandlendeEnhetNavn: 'Nav Vikafossen',
    erAktivPapirsoknad: false,
    behandlingTillatteOperasjoner,
  },
];

const fagsak = {
  saksnummer: '123',
  fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
  status: FagsakStatus.UNDER_BEHANDLING,
  behandlinger: alleBehandlinger,
  sakSkalTilInfotrygd: false,
  behandlingTypeKanOpprettes: [] as BehandlingOppretting[],
};

describe('BehandlingMenuIndex', () => {
  it('skal vise meny der alle menyhandlinger er synlige', async () => {
    const data = [
      { key: FagsakApiKeys.INIT_FETCH_FPTILBAKE.name, global: true, data: {} },
      {
        key: FagsakApiKeys.INIT_FETCH.name,
        global: true,
        data: { innloggetBruker: navAnsatt, behandlendeEnheter: [] },
      },
      { key: FagsakApiKeys.KODEVERK.name, global: true, data: {} },
      { key: FagsakApiKeys.KODEVERK_FPTILBAKE.name, global: true, data: {} },
      { key: FagsakApiKeys.KAN_TILBAKEKREVING_OPPRETTES.name, data: false },
      { key: FagsakApiKeys.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES.name, data: false },
    ];

    render(
      <RawIntlProvider value={intl}>
        <RestApiMock data={data} requestApi={requestFagsakApi}>
          <MemoryRouter>
            <BehandlingMenuIndex
              fagsakData={new FagsakData(fagsak as Fagsak)}
              behandlingUuid="1"
              setBehandling={vi.fn()}
              oppdaterFagsak={vi.fn()}
              hentOgSettBehandling={vi.fn()}
            />
          </MemoryRouter>
        </RestApiMock>
      </RawIntlProvider>,
    );
    expect(await screen.findByText('Sett behandlingen på vent')).toBeInTheDocument();
    expect(screen.getByText('Henlegg behandlingen og avslutt')).toBeInTheDocument();
    expect(screen.getByText('Endre behandlende enhet')).toBeInTheDocument();
    expect(screen.getByText('Åpne behandling for endringer')).toBeInTheDocument();
    expect(screen.getByText('Opprett ny behandling')).toBeInTheDocument();
    expect(screen.getByText('Opprett verge/fullmektig')).toBeInTheDocument();
  });
});
