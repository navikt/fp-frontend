import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { KontrollresultatKode } from '@navikt/ft-sak-risikoklassifisering';

import { RestApiMock } from '@navikt/fp-utils-test';
import { Fagsak, BehandlingAppKontekst } from '@navikt/fp-types';

import * as useTrackRouteParam from '../../app/useTrackRouteParam';
import RisikoklassifiseringIndex from './RisikoklassifiseringIndex';
import { requestApi, FpsakApiKeys } from '../../data/fpsakApi';
import FagsakData from '../../fagsak/FagsakData';

const lagRisikoklassifisering = (kode: string) => ({
  kontrollresultat: kode,
  medlFaresignaler: undefined,
  iayFaresignaler: undefined,
});

const behandling = {
  uuid: '1',
  kontrollResultat: lagRisikoklassifisering(KontrollresultatKode.HOY),
} as BehandlingAppKontekst;

const fagsak = {
  saksnummer: '123456',
  behandlinger: [behandling],
} as Fagsak;

const location = {
  key: '1',
  hash: '23',
  pathname: '/test/',
  state: {},
  search: '',
};

const navAnsatt = { navn: 'Ann S. Att', kanSaksbehandle: true };

describe('<RisikoklassifiseringIndex>', () => {
  vi.spyOn(useTrackRouteParam, 'default').mockImplementation(() => ({
    selected: true,
    location,
  }));

  it('skal rendere komponent', async () => {
    const data = [
      { key: FpsakApiKeys.INIT_FETCH.name, global: true, data: { innloggetBruker: navAnsatt } },
      { key: FpsakApiKeys.KODEVERK.name, global: true, data: {} },
    ];

    render(
      <RestApiMock data={data} requestApi={requestApi}>
        <MemoryRouter>
          <RisikoklassifiseringIndex
            fagsakData={new FagsakData(fagsak)}
            behandlingVersjon={1}
            behandlingUuid="1"
          />
        </MemoryRouter>
      </RestApiMock>,
    );
    expect(await screen.findByText('Faresignaler oppdaget')).toBeInTheDocument();
  });
});
