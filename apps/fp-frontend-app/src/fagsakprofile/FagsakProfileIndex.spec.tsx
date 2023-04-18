import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { RawIntlProvider } from 'react-intl';
import { createIntl } from '@navikt/ft-utils';
import { MemoryRouter } from 'react-router-dom';
import { BehandlingStatus, BehandlingType, FagsakYtelseType, FagsakStatus } from '@navikt/ft-kodeverk';

import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { Fagsak, BehandlingAppKontekst, BehandlingOppretting } from '@navikt/fp-types';
import { RestApiMock } from '@navikt/fp-utils-test';

import { requestApi, FpsakApiKeys } from '../data/fpsakApi';
import FagsakProfileIndex from './FagsakProfileIndex';
import FagsakData from '../fagsak/FagsakData';
import messages from '../../i18n/nb_NO.json';

describe('<FagsakProfileIndex>', () => {
  const behandling = {
    uuid: 'test',
    type: BehandlingType.FORSTEGANGSSOKNAD,
    status: BehandlingStatus.OPPRETTET,
    behandlendeEnhetId: 'test',
    behandlendeEnhetNavn: 'NAV Viken',
    opprettet: '2017-08-02T00:54:25.455',
  } as BehandlingAppKontekst;

  const fagsak = {
    saksnummer: '123',
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    status: FagsakStatus.OPPRETTET,
    behandlinger: [behandling] as BehandlingAppKontekst[],
    behandlingTypeKanOpprettes: [] as BehandlingOppretting[],
    brukerManglerAdresse: false,
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

  const intl = createIntl(messages);

  it('skal rendre komponent og vise alle behandlinger når ingen behandling er valgt', async () => {
    const data = [
      { key: FpsakApiKeys.KODEVERK.name, global: true, data: alleKodeverk },
      { key: FpsakApiKeys.KODEVERK_FPTILBAKE.name, global: true, data: {} },
      { key: FpsakApiKeys.INIT_FETCH.name, global: true, data: { innloggetBruker: navAnsatt } },
    ];

    await act(async () => {
      render(
        <RawIntlProvider value={intl}>
          <RestApiMock data={data} requestApi={requestApi}>
            <MemoryRouter>
              <FagsakProfileIndex fagsakData={new FagsakData(fagsak as Fagsak)} hentFagsakdataPåNytt={vi.fn()} />
            </MemoryRouter>
          </RestApiMock>
        </RawIntlProvider>,
      );
    });

    expect(await screen.findByText('123 - Opprettet')).toBeInTheDocument();
    expect(screen.getByText('Førstegangsbehandling')).toBeInTheDocument();
  });

  it('skal ikke vise alle behandlinger når behandling er valgt', async () => {
    const data = [
      { key: FpsakApiKeys.KODEVERK.name, global: true, data: alleKodeverk },
      { key: FpsakApiKeys.KODEVERK_FPTILBAKE.name, global: true, data: {} },
      { key: FpsakApiKeys.INIT_FETCH.name, global: true, data: { innloggetBruker: navAnsatt } },
    ];

    await act(async () => {
      render(
        <RawIntlProvider value={intl}>
          <RestApiMock data={data} requestApi={requestApi}>
            <MemoryRouter>
              <FagsakProfileIndex
                fagsakData={new FagsakData(fagsak as Fagsak)}
                hentFagsakdataPåNytt={vi.fn()}
                behandlingUuid="1"
              />
            </MemoryRouter>
          </RestApiMock>
        </RawIntlProvider>,
      );
    });

    expect(await screen.findByText('123 - Opprettet')).toBeInTheDocument();
    expect(screen.queryByText('Førstegangsbehandling')).not.toBeInTheDocument();
  });
});
