import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import { KontrollresultatKode } from '@navikt/fp-sak-risikoklassifisering';
import { BehandlingAppKontekst,Fagsak } from '@navikt/fp-types';
import { RestApiMock } from '@navikt/fp-utils-test';

import * as All from '../../app/useTrackRouteParam';
import { FagsakApiKeys,requestFagsakApi } from '../../data/fagsakContextApi';
import { FagsakData } from '../../fagsak/FagsakData';
import { RisikoklassifiseringIndex } from './RisikoklassifiseringIndex';

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
  vi.spyOn(All, 'useTrackRouteParam').mockImplementation(() => ({
    selected: true,
    location,
  }));

  it('skal rendere komponent', async () => {
    const data = [
      { key: FagsakApiKeys.INIT_FETCH.name, global: true, data: { innloggetBruker: navAnsatt } },
      { key: FagsakApiKeys.KODEVERK.name, global: true, data: {} },
    ];

    render(
      <RestApiMock data={data} requestApi={requestFagsakApi}>
        <MemoryRouter>
          <RisikoklassifiseringIndex
            fagsakData={new FagsakData(fagsak)}
            behandlingVersjon={1}
            behandlingUuid="1"
            setBehandling={vi.fn()}
          />
        </MemoryRouter>
      </RestApiMock>,
    );
    expect(await screen.findByText('Faresignaler oppdaget')).toBeInTheDocument();
  });
});
