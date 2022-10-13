import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Behandling } from '@navikt/ft-types';
import { KontrollresultatKode } from '@navikt/ft-sak-risikoklassifisering';

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import { Fagsak } from '@fpsak-frontend/types';

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
} as Behandling;

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
  jest.spyOn(useTrackRouteParam, 'default').mockImplementation(() => ({
    selected: true,
    location,
  }));

  it('skal rendere komponent', async () => {
    const data = [
      { key: FpsakApiKeys.NAV_ANSATT.name, global: true, data: navAnsatt },
      { key: FpsakApiKeys.KODEVERK.name, global: true, data: {} },
    ];

    render(
      <RestApiMock data={data} requestApi={requestApi}>
        <MemoryRouter>
          <RisikoklassifiseringIndex
            fagsakData={new FagsakData(fagsak)}
            kontrollresultat={lagRisikoklassifisering(KontrollresultatKode.HOY)}
            behandlingVersjon={1}
            behandlingUuid="1"
          />
        </MemoryRouter>
      </RestApiMock>,
    );
    expect(await screen.findByText('Faresignaler oppdaget')).toBeInTheDocument();
  });
});
