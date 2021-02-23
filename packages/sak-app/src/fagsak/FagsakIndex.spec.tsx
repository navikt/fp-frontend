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
    saksnummerString: '123456',
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
      selected: 123456,
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
    requestApi.mock(FpsakApiKeys.KODEVERK, {});
    requestApi.mock(FpsakApiKeys.FETCH_FAGSAK, fagsak);
    requestApi.mock(FpsakApiKeys.SAK_PERSONER, {});
    requestApi.mock(FpsakApiKeys.SAK_RETTIGHETER, {
      behandlingTypeKanOpprettes: [],
    });
    requestApi.mock(FpsakApiKeys.SAK_RETTIGHETER_FPTILBAKE, {
      behandlingTypeKanOpprettes: [],
    });
    requestApi.mock(FpsakApiKeys.INIT_FETCH_FPTILBAKE, {});
    requestApi.mock(FpsakApiKeys.KODEVERK_FPTILBAKE, {});
    requestApi.mock(FpsakApiKeys.BEHANDLINGER_FPSAK, [behandling]);
    requestApi.mock(FpsakApiKeys.BEHANDLINGER_FPTILBAKE, [behandling2]);

    const wrapper = shallow(<FagsakIndex />);

    const grid = wrapper.find(FagsakGrid);
    expect(grid).toHaveLength(1);

    const fagsakProfileIndex = grid.prop('profileAndNavigationContent');

    // @ts-ignore
    expect(fagsakProfileIndex.props.alleBehandlinger).toEqual([behandling, behandling2]);
  });
});
