import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { FormattedMessage } from 'react-intl';

import { Behandling, BehandlingAppKontekst } from '@fpsak-frontend/types';

import BehandlingPickerItem from './BehandlingPickerItem';
import BehandlingPicker, { sortBehandlinger } from './BehandlingPicker';

describe('<BehandlingPicker>', () => {
  const behandlingTemplate = {
    uuid: '1',
    versjon: 123,
    type: {
      kode: '',
      kodeverk: '',
    },
    status: {
      kode: 'FVED',
      kodeverk: '',
    },
    opprettet: '15.10.2017',
    behandlendeEnhetId: '1242424',
    behandlendeEnhetNavn: 'test',
    erAktivPapirsoknad: false,
    links: [{
      href: '/fpsak/test',
      rel: 'test',
      type: 'GET',
    }],
    gjeldendeVedtak: false,
  };

  const locationMock = {
    pathname: 'test',
    search: 'test',
    state: {},
    hash: 'test',
  };

  it('skal vise forklarende tekst når det ikke finnes behandlinger', () => {
    const wrapper = shallow(<BehandlingPicker
      noExistingBehandlinger
      behandlinger={[]}
      getBehandlingLocation={() => locationMock}
      showAll={false}
      toggleShowAll={sinon.spy()}
      getKodeverkFn={sinon.spy()}
    />);

    const message = wrapper.find(FormattedMessage);
    expect(message).toHaveLength(1);
    expect(message.prop('id')).toEqual('BehandlingList.ZeroBehandlinger');
  });

  it('skal vise alle behandlinger sortert med sist opprettet først i listen', () => {
    const behandlinger = [{
      ...behandlingTemplate,
      uid: '1',
      opprettet: '2017-05-01',
    }, {
      ...behandlingTemplate,
      uuid: '2',
      opprettet: '2018-01-01',
    }, {
      ...behandlingTemplate,
      uuid: '3',
      opprettet: '2017-01-01',
    }];
    const wrapper = shallow(<BehandlingPicker
      noExistingBehandlinger={false}
      behandlinger={behandlinger as Behandling[]}
      getBehandlingLocation={() => locationMock}
      showAll
      toggleShowAll={sinon.spy()}
      getKodeverkFn={sinon.spy()}
    />);

    const item = wrapper.find(BehandlingPickerItem);
    expect(item).toHaveLength(3);
    expect(item.first().prop('behandling').uuid).toEqual('2');
    expect(item.at(1).prop('behandling').uuid).toEqual('1');
    expect(item.last().prop('behandling').uuid).toEqual('3');
  });

  it('skal vise alle behandlinger sortert med valgt behandling først i listen', () => {
    const behandlinger = [{
      ...behandlingTemplate,
      uuid: '1',
      opprettet: '2017-05-01',
    }, {
      ...behandlingTemplate,
      uuid: '2',
      opprettet: '2018-01-01',
    }, {
      ...behandlingTemplate,
      uuid: '3',
      opprettet: '2017-01-01',
    }];
    const wrapper = shallow(<BehandlingPicker
      noExistingBehandlinger={false}
      behandlinger={behandlinger as Behandling[]}
      behandlingUuid="2"
      getBehandlingLocation={() => locationMock}
      showAll
      toggleShowAll={sinon.spy()}
      getKodeverkFn={sinon.spy()}
    />);

    const item = wrapper.find(BehandlingPickerItem);
    expect(item).toHaveLength(3);
    expect(item.first().prop('behandling').uuid).toEqual('2');
    expect(item.at(1).prop('behandling').uuid).toEqual('1');
    expect(item.last().prop('behandling').uuid).toEqual('3');
  });

  it('skal sortere behandlingene gitt avsluttet og opprettet datoer', () => {
    const behandlinger = [{
      opprettet: '2019-08-13T13:32:57',
      avsluttet: '2019-08-13T13:32:57',
    }, {
      opprettet: '2019-08-14T13:32:57',
    }, {
      opprettet: '2019-03-13T13:32:57',
      avsluttet: '2019-09-13T13:32:57',
    }, {
      opprettet: '2019-08-13T13:32:57',
    }] as BehandlingAppKontekst[];

    const sorterteBehandlinger = sortBehandlinger(behandlinger);

    expect(sorterteBehandlinger).toEqual([{
      opprettet: '2019-08-14T13:32:57',
    }, {
      opprettet: '2019-08-13T13:32:57',
    }, {
      opprettet: '2019-03-13T13:32:57',
      avsluttet: '2019-09-13T13:32:57',
    }, {
      opprettet: '2019-08-13T13:32:57',
      avsluttet: '2019-08-13T13:32:57',
    }]);
  });
});
