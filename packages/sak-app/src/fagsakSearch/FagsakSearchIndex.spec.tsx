import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import { Fagsak } from '@fpsak-frontend/types';
import FagsakSokSakIndex from '@fpsak-frontend/sak-sok';

import * as useHistory from '../app/useHistory';
import { requestApi, FpsakApiKeys } from '../data/fpsakApi';
import FagsakSearchIndex from './FagsakSearchIndex';

describe('<FagsakSearchIndex>', () => {
  const fagsak: Partial<Fagsak> = {
    saksnummer: 12345,
    sakstype: {
      kode: 'ES',
      kodeverk: 'test',
    },
    status: {
      kode: 'OPPR',
      kodeverk: 'test',
    },
    barnFodt: '10.10.2017',
    antallBarn: 1,
    opprettet: '13‎.‎02‎.‎2017‎ ‎09‎:‎54‎:‎22',
    dekningsgrad: 100,
  };
  const fagsak2: Partial<Fagsak> = {
    ...fagsak,
    saksnummer: 23456,
  };
  const fagsaker = [fagsak, fagsak2];

  const push = sinon.spy();
  let contextStub;
  beforeEach(() => {
    // @ts-ignore
    contextStub = sinon.stub(useHistory, 'default').callsFake(() => ({ push }));
  });

  afterEach(() => {
    contextStub.restore();
    push.resetHistory();
  });

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
    const velgFagsak = fagsakSearchIndex.prop('selectFagsakCallback') as (event: any, saksnummer: number) => undefined;
    velgFagsak('', fagsak.saksnummer);

    expect(push.calledOnce).toBe(true);
    const { args } = push.getCalls()[0];
    expect(args).toHaveLength(1);
    expect(args[0]).toEqual(`/fagsak/${fagsak.saksnummer}/`);
  });
});
