import React from 'react';
import { RawIntlProvider } from 'react-intl';
import { MemoryRouter } from 'react-router-dom';

import { createIntl } from '@navikt/ft-utils';
import { render, screen } from '@testing-library/react';

import { BehandlingStatus, BehandlingType, FagsakStatus, FagsakYtelseType } from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { Saksnotat } from '@navikt/fp-types';
import { RestApiMock } from '@navikt/fp-utils-test';

import * as All from '../app/useTrackRouteParam';
import { FagsakApiKeys,requestFagsakApi } from '../data/fagsakContextApi';
import { FagsakIndex } from './FagsakIndex';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

describe('<FagsakIndex>', () => {
  const behandling = {
    id: 1,
    uuid: 'test',
    type: BehandlingType.FORSTEGANGSSOKNAD,
    status: BehandlingStatus.OPPRETTET,
    behandlendeEnhetId: 'test',
    behandlendeEnhetNavn: 'Nav Vikafossen',
    opprettet: '2017-08-02T00:54:25.455',
  };
  const behandling2 = {
    id: 2,
    uuid: 'test2',
    type: BehandlingType.FORSTEGANGSSOKNAD,
    status: BehandlingStatus.OPPRETTET,
    behandlendeEnhetId: 'test',
    behandlendeEnhetNavn: 'Nav Vikafossen',
    opprettet: '2017-08-02T00:54:25.455',
  };

  const fagsak = {
    saksnummer: '123456',
    status: FagsakStatus.LOPENDE,
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    behandlinger: [behandling, behandling2],
    behandlingTypeKanOpprettes: [],
    bruker: {
      kjønn: 'K',
    },
    notater: [] as Saksnotat[],
  };

  const fagsakFpTilbake = {
    behandlingTypeKanOpprettes: [],
    behandlinger: [],
  };

  const navAnsatt = {
    brukernavn: 'Peder',
    kanBehandleKode6: false,
    kanOverstyre: false,
    kanSaksbehandle: true,
    kanVeilede: false,
    navn: 'Peder Pjokk',
  };

  vi.spyOn(All, 'useTrackRouteParam').mockImplementation(() => ({
    selected: '123456',
    location: {
      key: '1',
      pathname: 'test',
      search: 'test',
      state: {},
      hash: 'test',
    },
  }));

  // Se på hvorfor denne feiler
  it.skip('skal vise ventikon', async () => {
    const data = [
      { key: FagsakApiKeys.KODEVERK.name, global: true, data: alleKodeverk },
      { key: FagsakApiKeys.FETCH_FAGSAK.name, data: fagsak },
      { key: FagsakApiKeys.INIT_FETCH_FPTILBAKE.name, global: true, data: {} },
      { key: FagsakApiKeys.KODEVERK_FPTILBAKE.name, global: true, data: alleKodeverk },
    ];

    render(
      <RawIntlProvider value={intl}>
        <RestApiMock data={data} requestApi={requestFagsakApi}>
          <MemoryRouter>
            <FagsakIndex />
          </MemoryRouter>
        </RestApiMock>
      </RawIntlProvider>,
    );

    expect(await screen.findByText('venter...')).toBeInTheDocument();
  });

  it('skal hente alle behandlinger fra fpsak og fptilbake', async () => {
    const data = [
      { key: FagsakApiKeys.KODEVERK.name, global: true, data: alleKodeverk },
      { key: FagsakApiKeys.FETCH_FAGSAK.name, data: fagsak },
      { key: FagsakApiKeys.INIT_FETCH_FPTILBAKE.name, global: true, data: {} },
      { key: FagsakApiKeys.FETCH_FAGSAKDATA_FPTILBAKE.name, data: fagsakFpTilbake },
      { key: FagsakApiKeys.KODEVERK_FPTILBAKE.name, global: true, data: alleKodeverk },
      { key: FagsakApiKeys.INIT_FETCH.name, global: true, data: { innloggetBruker: navAnsatt } },
    ];

    render(
      <RawIntlProvider value={intl}>
        <RestApiMock data={data} requestApi={requestFagsakApi}>
          <MemoryRouter initialEntries={['/behandling']}>
            <FagsakIndex />
          </MemoryRouter>
        </RestApiMock>
      </RawIntlProvider>,
    );

    expect(await screen.findByText('123456 - Løpende')).toBeInTheDocument();
  });
});
