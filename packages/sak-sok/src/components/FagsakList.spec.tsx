import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import fagsakStatus from '@fpsak-frontend/kodeverk/src/fagsakStatus';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { Table } from '@fpsak-frontend/shared-components';
import { KodeverkMedNavn } from '@fpsak-frontend/types';

import FagsakList from './FagsakList';

const FAGSAK_STATUS_KODEVERK = 'FAGSAK_STATUS';
const FAGSAK_YTELSE_KODEVERK = 'FAGSAK_YTELSE';

const alleKodeverk = {
  [kodeverkTyper.FAGSAK_STATUS]: [{
    kode: fagsakStatus.UNDER_BEHANDLING,
    navn: 'Under behandling',
    kodeverk: FAGSAK_STATUS_KODEVERK,
  }, {
    kode: fagsakStatus.AVSLUTTET,
    navn: 'Avsluttet',
    kodeverk: FAGSAK_STATUS_KODEVERK,
  }],
  [kodeverkTyper.FAGSAK_YTELSE]: [{
    kode: fagsakYtelseType.ENGANGSSTONAD,
    navn: 'Engangsstønad',
    kodeverk: FAGSAK_YTELSE_KODEVERK,
  }],
};

describe('<FagsakList>', () => {
  const fagsak = {
    saksnummer: '12345',
    fagsakYtelseType: {
      kode: 'ES',
      kodeverk: FAGSAK_YTELSE_KODEVERK,
    },
    relasjonsRolleType: {
      kode: 'TEST',
      kodeverk: '',
    },
    status: {
      kode: fagsakStatus.UNDER_BEHANDLING,
      kodeverk: FAGSAK_STATUS_KODEVERK,
    },
    dekningsgrad: 100,
  };

  const fagsak2 = {
    saksnummer: '23456',
    fagsakYtelseType: {
      kode: 'ES',
      kodeverk: FAGSAK_YTELSE_KODEVERK,
    },
    relasjonsRolleType: {
      kode: 'TEST',
      kodeverk: '',
    },
    status: {
      kode: fagsakStatus.AVSLUTTET,
      kodeverk: FAGSAK_STATUS_KODEVERK,
    },
    dekningsgrad: 100,
  };

  const headerTextCodes = [
    'FagsakList.Saksnummer',
    'FagsakList.Sakstype',
    'FagsakList.Status',
  ];

  it('skal vise en tabell med to rader og tilhørende kolonnedata', () => {
    const clickFunction = sinon.spy();
    const wrapper = shallow(<FagsakList
      fagsaker={[fagsak, fagsak2]}
      selectFagsakCallback={clickFunction}
      alleKodeverk={alleKodeverk as {[key: string]: [KodeverkMedNavn]}}
    />);

    const table = wrapper.find(Table);
    expect(table).toHaveLength(1);

    expect(table.prop('headerTextCodes')).toEqual(headerTextCodes);

    const tableRows = table.children();
    expect(tableRows).toHaveLength(2);

    const tableColumns1 = tableRows.first().children();
    expect(tableColumns1).toHaveLength(3);
    expect(tableColumns1.first().childAt(0).text()).toEqual('12345');
    expect(tableColumns1.at(1).childAt(0).text()).toEqual('Engangsstønad');
    expect(tableColumns1.at(2).childAt(0).text()).toEqual('Under behandling');

    const tableColumns2 = tableRows.last().children();
    expect(tableColumns2).toHaveLength(3);
    expect(tableColumns2.first().childAt(0).text()).toEqual('23456');
    expect(tableColumns2.at(1).childAt(0).text()).toEqual('Engangsstønad');
    expect(tableColumns2.at(2).childAt(0).text()).toEqual('Avsluttet');
  });
});
