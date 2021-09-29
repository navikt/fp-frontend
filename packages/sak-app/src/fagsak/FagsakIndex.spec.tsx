import React from 'react';
import { createMemoryHistory } from 'history';
import sinon, { SinonStub } from 'sinon';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';

import * as useTrackRouteParam from '../app/useTrackRouteParam';
import { requestApi, FpsakApiKeys } from '../data/fpsakApi';

import FagsakIndex from './FagsakIndex';

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

  let contextStub: SinonStub;
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

  it('skal hente alle behandlinger fra fpsak og fptilbake', async () => {
    const data = [
      { key: FpsakApiKeys.KODEVERK.name, global: true, data: {} },
      { key: FpsakApiKeys.FETCH_FAGSAK.name, data: fagsak },
      { key: FpsakApiKeys.SAK_PERSONER.name, global: true, data: {} },
      { key: FpsakApiKeys.SAK_RETTIGHETER.name, data: { behandlingTypeKanOpprettes: [] } },
      { key: FpsakApiKeys.INIT_FETCH_FPTILBAKE.name, global: true, data: {} },
      { key: FpsakApiKeys.ANNEN_PART_BEHANDLING.name, data: {} },
      { key: FpsakApiKeys.KODEVERK_FPTILBAKE.name, global: true, data: {} },
      { key: FpsakApiKeys.BEHANDLINGER_FPSAK.name, data: [behandling] },
      { key: FpsakApiKeys.BEHANDLINGER_FPTILBAKE.name, data: [behandling2] },
    ];

    render(
      <RestApiMock data={data} requestApi={requestApi}>
        <Router history={createMemoryHistory()}>
          <FagsakIndex />
        </Router>
      </RestApiMock>,
    );

    expect(await screen.findByText('Behandlingen settes på vent med frist')).toBeInTheDocument();

    // const wrapper = shallow(<FagsakIndex />);

    // const grid = wrapper.find(FagsakGrid);
    // expect(grid).toHaveLength(1);

    // const behandlingSupportIndex = grid.prop('supportContent');

    // // @ts-ignore
    // expect(behandlingSupportIndex.props.alleBehandlinger).toEqual([behandling, behandling2]);
  });
});
