import React from 'react';
import { shallow } from 'enzyme';

import { Fagsak } from '@fpsak-frontend/types';
import FagsakSokSakIndex from '@fpsak-frontend/sak-sok';

import { requestApi, FpsakApiKeys } from '../data/fpsakApi';
import FagsakSearchIndex from './FagsakSearchIndex';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('<FagsakSearchIndex>', () => {
  const fagsak: Partial<Fagsak> = {
    saksnummerString: '12345',
    sakstype: {
      kode: 'ES',
      kodeverk: 'test',
    },
    status: {
      kode: 'OPPR',
      kodeverk: 'test',
    },
    dekningsgrad: 100,
  };
  const fagsak2: Partial<Fagsak> = {
    ...fagsak,
    saksnummerString: '23456',
  };
  const fagsaker = [fagsak, fagsak2];

  it('skal søke opp fagsaker', () => {
    requestApi.mock(FpsakApiKeys.KODEVERK, {});
    requestApi.mock(FpsakApiKeys.SEARCH_FAGSAK, fagsaker);

    const wrapper = shallow(<FagsakSearchIndex />);

    const fagsakSearchIndex = wrapper.find(FagsakSokSakIndex);
    expect(fagsakSearchIndex).toHaveLength(1);

    expect(fagsakSearchIndex.prop('fagsaker')).toEqual([]);

    const sok = fagsakSearchIndex.prop('searchFagsakCallback');
    sok();

    expect(wrapper.find(FagsakSokSakIndex).prop('fagsaker')).toEqual(fagsaker);
  });

  it('skal gå til valgt fagsak', () => {
    requestApi.mock(FpsakApiKeys.KODEVERK, {});
    requestApi.mock(FpsakApiKeys.SEARCH_FAGSAK, fagsaker);

    const wrapper = shallow(<FagsakSearchIndex />);

    const fagsakSearchIndex = wrapper.find(FagsakSokSakIndex);
    const velgFagsak = fagsakSearchIndex.prop('selectFagsakCallback') as (event: any, saksnummer: string) => undefined;
    velgFagsak('', fagsak.saksnummerString);

    expect(mockHistoryPush).toHaveBeenCalledWith(`/fagsak/${fagsak.saksnummerString}/`);
  });
});
