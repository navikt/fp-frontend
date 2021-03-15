import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import FagsakSearch from './FagsakSearch';
import FagsakList from './FagsakList';
import SearchForm from './SearchForm';

describe('<FagsakSearch>', () => {
  const fagsak = {
    saksnummer: '12345',
    fagsakYtelseType: {
      kode: 'TEST',
      kodeverk: '',
    },
    relasjonsRolleType: {
      kode: 'TEST',
      kodeverk: '',
    },
    status: {
      kode: 'UBEH',
      kodeverk: '',
    },
    dekningsgrad: 100,
  };

  it('skal kun vise søkefelt før søk er startet', () => {
    const searchFagsakFunction = sinon.spy();
    const wrapper = shallow(<FagsakSearch
      fagsaker={[]}
      searchFagsakCallback={searchFagsakFunction}
      searchResultReceived={false}
      selectFagsakCallback={sinon.spy()}
      searchStarted
      alleKodeverk={{}}
    />);

    const searchComp = wrapper.find(SearchForm);
    expect(searchComp).toHaveLength(1);
    expect(wrapper.find('Label')).toHaveLength(0);
    expect(wrapper.find(FagsakList)).toHaveLength(0);
  });

  it('skal vise søkefelt og label for ingen søketreff når ingen fagsaker blir hentet', () => {
    const wrapper = shallow(<FagsakSearch
      fagsaker={[]}
      searchFagsakCallback={sinon.spy()}
      searchResultReceived
      selectFagsakCallback={sinon.spy()}
      searchStarted
      alleKodeverk={{}}
    />);

    expect(wrapper.find(SearchForm)).toHaveLength(1);
    const labelComp = wrapper.find('Normaltekst');
    expect(labelComp).toHaveLength(1);
    expect(labelComp.find('FormattedMessage').prop('id')).toEqual('FagsakSearch.ZeroSearchResults');
  });

  it('skal vise søkefelt og søketreff der to fagsaker blir vist', () => {
    const searchFagsakFunction = sinon.spy();
    const selectFagsakFunction = sinon.spy();
    const wrapper = shallow(<FagsakSearch
      fagsaker={[fagsak, fagsak]}
      searchFagsakCallback={searchFagsakFunction}
      searchResultReceived
      selectFagsakCallback={selectFagsakFunction}
      searchStarted
      alleKodeverk={{}}
    />);

    expect(wrapper.find(SearchForm)).toHaveLength(1);
    expect(wrapper.find('Label')).toHaveLength(0);

    const fagsakListComp = wrapper.find(FagsakList);
    expect(fagsakListComp).toHaveLength(1);
    expect(fagsakListComp.prop('fagsaker')).toEqual([fagsak, fagsak]);
    expect(fagsakListComp.prop('selectFagsakCallback')).toEqual(selectFagsakFunction);
  });
});
