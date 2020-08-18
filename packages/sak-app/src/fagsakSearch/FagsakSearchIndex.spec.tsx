import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import { Fagsak } from '@fpsak-frontend/types';
import FagsakSokSakIndex from '@fpsak-frontend/sak-sok';

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
    person: {
      navn: 'Espen',
      alder: 38,
      personnummer: '123456789',
      erKvinne: true,
      erDod: false,
      personstatusType: {
        kode: 'TEst',
        kodeverk: 'test',
      },
    },
    opprettet: '13‎.‎02‎.‎2017‎ ‎09‎:‎54‎:‎22',
    dekningsgrad: 100,
  };
  const fagsak2: Partial<Fagsak> = {
    ...fagsak,
    saksnummer: 23456,
  };
  const fagsaker = [fagsak, fagsak2];

  it('skal søke opp fagsaker', () => {
    requestApi.mock(FpsakApiKeys.KODEVERK, {});
    requestApi.mock(FpsakApiKeys.SEARCH_FAGSAK, fagsaker);

    const wrapper = shallow(<FagsakSearchIndex.WrappedComponent
      push={sinon.spy()}
    />);

    const fagsakSearchIndex = wrapper.find(FagsakSokSakIndex);
    expect(fagsakSearchIndex).to.have.length(1);

    expect(fagsakSearchIndex.prop('fagsaker')).to.eql([]);

    const sok = fagsakSearchIndex.prop('searchFagsakCallback');
    sok();

    expect(wrapper.find(FagsakSokSakIndex).prop('fagsaker')).to.eql(fagsaker);
  });

  it('skal gå til valgt fagsak', () => {
    requestApi.mock(FpsakApiKeys.KODEVERK, {});
    requestApi.mock(FpsakApiKeys.SEARCH_FAGSAK, fagsaker);

    const pushCallback = sinon.spy();
    const wrapper = shallow(<FagsakSearchIndex.WrappedComponent
      push={pushCallback}
    />);

    const fagsakSearchIndex = wrapper.find(FagsakSokSakIndex);
    const velgFagsak = fagsakSearchIndex.prop('selectFagsakCallback') as (event: any, saksnummer: number) => undefined;
    velgFagsak('', fagsak.saksnummer);

    expect(pushCallback.calledOnce).to.be.true;
    const { args } = pushCallback.getCalls()[0];
    expect(args).to.have.length(1);
    expect(args[0]).to.eql(`/fagsak/${fagsak.saksnummer}/`);
  });
});
