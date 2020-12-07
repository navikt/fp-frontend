import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { TableColumn, TableRow } from '@fpsak-frontend/shared-components';

import AktivitetskravFaktaTabell from './AktivitetskravFaktaTabell';

describe('<AktivitetskravFaktaTabell>', () => {
  const aktivitetskravAvklaringer = [{
    kode: 'test',
    navn: 'Dette er en testavklaring',
    kodeverk: 'test',
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
    }, {
      fom: '2021-01-08',
      tom: '2021-01-13',
    }, {
      fom: '2021-01-14',
      tom: '2021-01-20',
    }];

    const wrapper = shallow(<AktivitetskravFaktaTabell
      aktivitetskrav={uttakKontrollerAktivitetskrav}
      valgtAktivitetskravFom={uttakKontrollerAktivitetskrav[1].fom}
      velgAktivitetskrav={() => undefined}
      aktivitetskravAvklaringer={aktivitetskravAvklaringer}
    />);

    const rader = wrapper.find(TableRow);
    expect(rader).to.have.length(3);

    expect(rader.first().prop('isSelected')).is.false;
    expect(rader.first().prop('isApLeftBorder')).is.false;

    const kolonnerForRad1 = rader.first().find(TableColumn);
    expect(kolonnerForRad1.first().childAt(0).text()).is.eql('01.01.2021 - 07.01.2021');
    expect(kolonnerForRad1.at(1).childAt(0).text()).is.eql('Dette er en testavklaring');
    expect(kolonnerForRad1.last().childAt(0).text()).is.eql('Dette er en beskrivelse');

    expect(rader.at(1).prop('isSelected')).is.true;
    expect(rader.at(1).prop('isApLeftBorder')).is.true;

    const kolonnerForRad2 = rader.at(1).find(TableColumn);
    expect(kolonnerForRad2.first().childAt(0).text()).is.eql('08.01.2021 - 13.01.2021');

    expect(rader.last().prop('isSelected')).is.false;
    expect(rader.last().prop('isApLeftBorder')).is.true;

    const kolonnerForRad3 = rader.last().find(TableColumn);
    expect(kolonnerForRad3.first().childAt(0).text()).is.eql('14.01.2021 - 20.01.2021');
  });
});
