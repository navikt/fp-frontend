import React from 'react';
import { shallow } from 'enzyme';
import { Location } from 'history';
import { Checkbox } from 'nav-frontend-skjema';

import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import History from './History';
import Snakkeboble from './maler/felles/snakkeboble';
import messages from '../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

const historikkFpSak = [{
  behandlingUuid: '999951',
  type: {
    kode: 'NYE_REGOPPLYSNINGER',
    kodeverk: 'HISTORIKKINNSLAG_TYPE',
  },
  aktoer: {
    kode: 'VL',
    kodeverk: 'HISTORIKK_AKTOER',
  },
  kjoenn: {
    kode: '-',
    kodeverk: 'BRUKER_KJOENN',
  },
  opprettetAv: 'Srvengangsstonad',
  opprettetTidspunkt: '2019-09-19T12:16:14.499',
  dokumentLinks: [],
  historikkinnslagDeler: [],
},
{
  behandlingUuid: '999952',
  type: {
    kode: 'INNSYN_OPPR',
    kodeverk: 'HISTORIKKINNSLAG_TYPE',
  },
  aktoer: {
    kode: 'SBH',
    kodeverk: 'HISTORIKK_AKTOER',
  },
  kjoenn: {
    kode: '-',
    kodeverk: 'BRUKER_KJOENN',
  },
  opprettetAv: 'Z991110',
  opprettetTidspunkt: '2019-09-18T15:25:31.291',
  dokumentLinks: [],
  historikkinnslagDeler: [],
}];

describe('<History>', () => {
  it('skal ikke vise checkbox for filtrering av historikk når behandling ikke er valgt', () => {
    const wrapper = shallow(<History
      intl={intlMock}
      historikkFpSak={[]}
      historikkFpTilbake={[]}
      alleKodeverkFpTilbake={{} as any}
      alleKodeverkFpSak={{} as any}
      saksnummer="123"
      getBehandlingLocation={() => ({} as Location)}
      createLocationForSkjermlenke={() => ({} as Location)}
    />);

    expect(wrapper.find(Checkbox)).toHaveLength(0);
  });

  it('skal vise checkbox for filtrering av historikk når behandling er valgt', () => {
    const wrapper = shallow(<History
      intl={intlMock}
      historikkFpSak={[]}
      historikkFpTilbake={[]}
      alleKodeverkFpTilbake={{} as any}
      alleKodeverkFpSak={{} as any}
      saksnummer="123"
      getBehandlingLocation={() => ({} as Location)}
      createLocationForSkjermlenke={() => ({} as Location)}
      valgtBehandlingUuid="999951"
    />);

    expect(wrapper.find(Checkbox)).toHaveLength(1);
  });

  it('skal vise alle historikk-element når en ikke filtrerer på behandling', () => {
    const wrapper = shallow(<History
      intl={intlMock}
      historikkFpSak={historikkFpSak}
      historikkFpTilbake={[]}
      alleKodeverkFpTilbake={{} as any}
      alleKodeverkFpSak={{} as any}
      saksnummer="123"
      getBehandlingLocation={() => ({} as Location)}
      createLocationForSkjermlenke={() => ({} as Location)}
      valgtBehandlingUuid="999951"
    />);

    expect(wrapper.find(Snakkeboble)).toHaveLength(2);
  });

  it('skal vise kun behandlingens historikk-element når en filtrerer på behandling', () => {
    const wrapper = shallow(<History
      intl={intlMock}
      historikkFpSak={historikkFpSak}
      historikkFpTilbake={[]}
      alleKodeverkFpTilbake={{} as any}
      alleKodeverkFpSak={{} as any}
      saksnummer="123"
      getBehandlingLocation={() => ({} as Location)}
      createLocationForSkjermlenke={() => ({} as Location)}
      valgtBehandlingUuid="999951"
    />);

    // @ts-ignore
    wrapper.find(Checkbox).props().onChange({} as React.ChangeEvent<any>);

    expect(wrapper.find(Snakkeboble)).toHaveLength(1);
  });
});
