import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import FagsakGrid from './components/FagsakGrid';
import * as useTrackRouteParam from '../app/useTrackRouteParam';
import { requestApi, FpsakApiKeys } from '../data/fpsakApi';

import FagsakIndex from './FagsakIndex';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'test',
    search: 'test',
    state: {},
    hash: 'test',
  }),
}));

describe('<FagsakIndex>', () => {
  const fagsak = {
    saksnummer: '123456',
  };

  const behandling = {
    id: 1,
  };
  const behandling2 = {
    id: 2,
  };

  let contextStub;
  beforeEach(() => {
    contextStub = sinon.stub(useTrackRouteParam, 'default').callsFake(() => ({
      selected: '123456',
      location: {
        pathname: 'test',
        search: 'test',
        state: {},
        hash: 'test',
      },
    }));
  });

  afterEach(() => {
    contextStub.restore();
  });

  it('skal hente alle behandlinger fra fpsak og fptilbake', () => {
    requestApi.mock(FpsakApiKeys.KODEVERK.name, {});
    requestApi.mock(FpsakApiKeys.FETCH_FAGSAK.name, fagsak);
    requestApi.mock(FpsakApiKeys.SAK_PERSONER.name, {});
    requestApi.mock(FpsakApiKeys.SAK_RETTIGHETER.name, {
      behandlingTypeKanOpprettes: [],
    });
    requestApi.mock(FpsakApiKeys.SAK_RETTIGHETER_FPTILBAKE.name, {
      behandlingTypeKanOpprettes: [],
    });
    requestApi.mock(FpsakApiKeys.INIT_FETCH_FPTILBAKE.name, {});
    requestApi.mock(FpsakApiKeys.ANNEN_PART_BEHANDLING.name, {});
    requestApi.mock(FpsakApiKeys.KODEVERK_FPTILBAKE.name, {});
    requestApi.mock(FpsakApiKeys.BEHANDLINGER_FPSAK.name, [behandling]);
    requestApi.mock(FpsakApiKeys.BEHANDLINGER_FPTILBAKE.name, [behandling2]);

    const wrapper = shallow(<FagsakIndex />);

    const grid = wrapper.find(FagsakGrid);
    expect(grid).toHaveLength(1);

    const behandlingSupportIndex = grid.prop('supportContent');

    // @ts-ignore
    expect(behandlingSupportIndex.props.alleBehandlinger).toEqual([behandling, behandling2]);
  });
});
