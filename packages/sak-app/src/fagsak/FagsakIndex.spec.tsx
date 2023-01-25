import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { RawIntlProvider } from 'react-intl';
import { render, screen } from '@testing-library/react';
import {
  BehandlingType, BehandlingStatus, FagsakStatus, FagsakYtelseType,
} from '@navikt/ft-kodeverk';
import { createIntl } from '@navikt/ft-utils';

import RestApiMock from '@navikt/fp-utils-test/src/rest/RestApiMock';
import { alleKodeverk } from '@navikt/fp-storybook-utils';

import * as useTrackRouteParam from '../app/useTrackRouteParam';
import { requestApi, FpsakApiKeys } from '../data/fpsakApi';
import messages from '../../i18n/nb_NO.json';
import FagsakIndex from './FagsakIndex';

const intl = createIntl(messages);

describe('<FagsakIndex>', () => {
  const behandling = {
    id: 1,
    uuid: 'test',
    type: BehandlingType.FORSTEGANGSSOKNAD,
    status: BehandlingStatus.OPPRETTET,
    behandlendeEnhetId: 'test',
    behandlendeEnhetNavn: 'NAV Viken',
    opprettet: '2017-08-02T00:54:25.455',
  };
  const behandling2 = {
    id: 2,
    uuid: 'test2',
    type: BehandlingType.FORSTEGANGSSOKNAD,
    status: BehandlingStatus.OPPRETTET,
    behandlendeEnhetId: 'test',
    behandlendeEnhetNavn: 'NAV Viken',
    opprettet: '2017-08-02T00:54:25.455',
  };

  const fagsak = {
    saksnummer: '123456',
    status: FagsakStatus.LOPENDE,
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    behandlinger: [behandling, behandling2],
    behandlingTypeKanOpprettes: [],
  };

  const fagsakFpTilbake = {
    behandlingTypeKanOpprettes: [],
    behandlinger: [],
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

  jest.spyOn(useTrackRouteParam, 'default').mockImplementation(() => ({
    selected: '123456',
    location: {
      key: '1',
      pathname: 'test',
      search: 'test',
      state: {},
      hash: 'test',
    },
  }));

  it('skal vise ventikon', async () => {
    const data = [
      { key: FpsakApiKeys.KODEVERK.name, global: true, data: alleKodeverk },
      { key: FpsakApiKeys.FETCH_FAGSAK.name, data: fagsak },
      { key: FpsakApiKeys.INIT_FETCH_FPTILBAKE.name, global: true, data: {} },
      { key: FpsakApiKeys.KODEVERK_FPTILBAKE.name, global: true, data: alleKodeverk },
    ];

    render(
      <RawIntlProvider value={intl}>
        <RestApiMock data={data} requestApi={requestApi}>
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
      { key: FpsakApiKeys.KODEVERK.name, global: true, data: alleKodeverk },
      { key: FpsakApiKeys.FETCH_FAGSAK.name, data: fagsak },
      { key: FpsakApiKeys.INIT_FETCH_FPTILBAKE.name, global: true, data: {} },
      { key: FpsakApiKeys.FETCH_FAGSAKDATA_FPTILBAKE.name, data: fagsakFpTilbake },
      { key: FpsakApiKeys.KODEVERK_FPTILBAKE.name, global: true, data: alleKodeverk },
      { key: FpsakApiKeys.INIT_FETCH.name, global: true, data: { innloggetBruker: navAnsatt } },
    ];

    await act(async () => {
      render(
        <RawIntlProvider value={intl}>
          <RestApiMock data={data} requestApi={requestApi}>
            <MemoryRouter initialEntries={['/behandling']}>
              <FagsakIndex />
            </MemoryRouter>
          </RestApiMock>
        </RawIntlProvider>,
      );
    });

    expect(await screen.findByText('123456 - Løpende')).toBeInTheDocument();
  });
});
