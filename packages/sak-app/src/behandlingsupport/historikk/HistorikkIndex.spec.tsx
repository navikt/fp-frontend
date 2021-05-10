import React from 'react';
import { shallow } from 'enzyme';

import HistorikkSakIndex from '@fpsak-frontend/sak-historikk';

import { requestApi, FpsakApiKeys } from '../../data/fpsakApi';
import HistorikkIndex from './HistorikkIndex';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useLocation: () => ({
    pathname: 'test',
    search: 'test',
    state: {},
    hash: 'test',
  }),
}));

describe('<HistorikkIndex>', () => {
  it('skal slå sammen og sortere historikk for fpsak og fptilbake', () => {
    requestApi.mock(FpsakApiKeys.INIT_FETCH_FPTILBAKE.name, {});
    requestApi.mock(FpsakApiKeys.KODEVERK.name, {});
    requestApi.mock(FpsakApiKeys.KODEVERK_FPTILBAKE.name, {});
    requestApi.mock(FpsakApiKeys.HISTORY_FPSAK.name, [{
      opprettetTidspunkt: '2019-01-01',
      historikkinnslagDeler: [],
      type: {
        kode: 'Test fpsak 1',
      },
    }, {
      opprettetTidspunkt: '2019-01-06',
      historikkinnslagDeler: [],
      type: {
        kode: 'Test fpsak 2',
      },
    }]);
    requestApi.mock(FpsakApiKeys.HISTORY_FPTILBAKE.name, [{
      opprettetTidspunkt: '2019-01-04',
      historikkinnslagDeler: [],
      type: {
        kode: 'Test fptilbake',
      },
    }]);

    const wrapper = shallow(<HistorikkIndex
      saksnummer="12345"
      behandlingUuid="1"
      behandlingVersjon={2}
    />);

    const index = wrapper.find(HistorikkSakIndex);
    expect(index).toHaveLength(1);

    const { historikkFpSak, historikkFpTilbake } = index.props();

    expect(historikkFpSak).toHaveLength(2);
    expect(historikkFpTilbake).toHaveLength(1);
  });
});
