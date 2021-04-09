import React from 'react';
import { shallow } from 'enzyme';

import { TableColumn, TableRow } from '@fpsak-frontend/shared-components';
import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import AktivitetskravFaktaTabell from './AktivitetskravFaktaTabell';
import messages from '../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<AktivitetskravFaktaTabell>', () => {
  const aktivitetskravAvklaringer = [{
    kode: 'test',
    navn: 'Dette er en testavklaring',
    kodeverk: 'test',
  }];

  const morsAktiviteter = [{
    kode: 'mors aktivitet 1',
    navn: 'Dette er mors aktivitet 1',
    kodeverk: 'MORS_AKTIVITET',
  }];

  it('skal vise en tabellrad for hver aktivitetskrav der andre rad er markert som valgt', () => {
    const uttakKontrollerAktivitetskrav = [{
      fom: '2021-01-01',
      tom: '2021-01-07',
      avklaring: {
        kode: 'test',
        kodeverk: 'test',
      },
      begrunnelse: 'Dette er en beskrivelse',
      morsAktivitet: {
        kode: 'mors aktivitet 1',
        kodeverk: 'MORS_AKTIVITET',
      },
      endret: false,
    }, {
      fom: '2021-01-08',
      tom: '2021-01-13',
      morsAktivitet: {
        kode: 'mors aktivitet 1',
        kodeverk: 'MORS_AKTIVITET',
      },
      endret: false,
    }, {
      fom: '2021-01-14',
      tom: '2021-01-20',
      morsAktivitet: {
        kode: 'mors aktivitet 1',
        kodeverk: 'MORS_AKTIVITET',
      },
      endret: false,
    }];

    const wrapper = shallow(<AktivitetskravFaktaTabell.WrappedComponent
      intl={intlMock}
      aktivitetskrav={uttakKontrollerAktivitetskrav}
      valgtAktivitetskravFom={uttakKontrollerAktivitetskrav[1].fom}
      velgAktivitetskrav={() => undefined}
      aktivitetskravAvklaringer={aktivitetskravAvklaringer}
      morsAktiviteter={morsAktiviteter}
    />);

    const rader = wrapper.find(TableRow);
    expect(rader).toHaveLength(3);

    expect(rader.first().prop('isSelected')).toBe(false);
    expect(rader.first().prop('isApLeftBorder')).toBe(false);

    const kolonnerForRad1 = rader.first().find(TableColumn);
    expect(kolonnerForRad1.first().childAt(0).text()).toEqual('01.01.2021 - 07.01.2021');
    expect(kolonnerForRad1.at(1).childAt(0).text()).toEqual('Dette er mors aktivitet 1');
    expect(kolonnerForRad1.at(2).childAt(0).text()).toEqual('Dette er en testavklaring');

    expect(rader.at(1).prop('isSelected')).toBe(true);
    expect(rader.at(1).prop('isApLeftBorder')).toBe(true);

    const kolonnerForRad2 = rader.at(1).find(TableColumn);
    expect(kolonnerForRad2.first().childAt(0).text()).toEqual('08.01.2021 - 13.01.2021');
    expect(kolonnerForRad2.at(1).childAt(0).text()).toEqual('Dette er mors aktivitet 1');

    expect(rader.last().prop('isSelected')).toBe(false);
    expect(rader.last().prop('isApLeftBorder')).toBe(true);

    const kolonnerForRad3 = rader.last().find(TableColumn);
    expect(kolonnerForRad3.first().childAt(0).text()).toEqual('14.01.2021 - 20.01.2021');
    expect(kolonnerForRad3.at(1).childAt(0).text()).toEqual('Dette er mors aktivitet 1');
  });
});
