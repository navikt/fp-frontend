import React from 'react';
import sinon, { SinonStub } from 'sinon';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import kontrollresultatKode from '@fpsak-frontend/sak-risikoklassifisering/src/kodeverk/kontrollresultatKode';
import { Fagsak, Behandling } from '@fpsak-frontend/types';

import * as useTrackRouteParam from '../../app/useTrackRouteParam';
import RisikoklassifiseringIndex from './RisikoklassifiseringIndex';
import { requestApi, FpsakApiKeys } from '../../data/fpsakApi';

const lagRisikoklassifisering = (kode: string) => ({
  kontrollresultat: {
    kode,
    kodeverk: 'Kontrollresultat',
  },
  medlFaresignaler: undefined,
  iayFaresignaler: undefined,
});

const fagsak = {
  saksnummer: '123456',
};

const behandling = {
  uuid: '1',
};

const location = {
  hash: '23',
  pathname: '/test/',
  state: {},
  search: '',
};

const navAnsatt = { navn: 'Ann S. Att', kanSaksbehandle: true };

describe('<RisikoklassifiseringIndex>', () => {
  let contextStub: SinonStub;

  beforeEach(() => {
    contextStub = sinon.stub(useTrackRouteParam, 'default').callsFake(() => ({
      selected: true,
      location,
    }));
  });

  afterEach(() => {
    contextStub.restore();
  });

  it('skal rendere komponent', async () => {
    const data = [
      { key: FpsakApiKeys.NAV_ANSATT.name, global: true, data: navAnsatt },
      { key: FpsakApiKeys.KODEVERK.name, global: true, data: {} },
    ];

    render(
      <RestApiMock data={data} requestApi={requestApi}>
        <Router history={createMemoryHistory()}>
          <RisikoklassifiseringIndex
            fagsak={fagsak as Fagsak}
            alleBehandlinger={[behandling] as Behandling[]}
            kontrollresultat={lagRisikoklassifisering(kontrollresultatKode.HOY)}
            behandlingVersjon={1}
            behandlingUuid="1"
          />
        </Router>
      </RestApiMock>,
    );
    expect(await screen.findByText('Faresignaler oppdaget')).toBeInTheDocument();
  });
});
