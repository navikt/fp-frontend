import React from 'react';
import { shallow } from 'enzyme';
import sinon, { SinonStub } from 'sinon';

import RisikoklassifiseringSakIndex from '@fpsak-frontend/sak-risikoklassifisering';
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
  id: 1,
};

const location = {
  hash: '23',
  pathname: '/test/',
  state: {},
  search: '',
};

const navAnsatt = { navn: 'Ann S. Att', kanSaksbehandle: true };

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useHistory: () => ({
    push: jest.fn(),
  }),
  useLocation: () => ({
    hash: '23',
    pathname: '/test/',
    state: {},
    search: '',
  }),
}));

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

  it('skal rendere komponent', () => {
    requestApi.mock(FpsakApiKeys.NAV_ANSATT.name, navAnsatt);
    requestApi.mock(FpsakApiKeys.KODEVERK.name, {});
    const wrapper = shallow(<RisikoklassifiseringIndex
      fagsak={fagsak as Fagsak}
      alleBehandlinger={[behandling] as Behandling[]}
      kontrollresultat={lagRisikoklassifisering(kontrollresultatKode.HOY)}
      behandlingVersjon={1}
      behandlingId={1}
    />);
    expect(wrapper.find(RisikoklassifiseringSakIndex)).toHaveLength(1);
  });
});
