import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';

import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import InntektOgYtelserFaktaPanel from './InntektOgYtelserFaktaPanel';
import shallowWithIntl from '../../../i18n/intl-enzyme-test-helper-fakta-medlemskap';
import * as useIntl from '../../useIntl';

describe('<InntektOgYtelserFaktaPanel>', () => {
  let contextStub;
  beforeEach(() => {
    contextStub = sinon.stub(useIntl, 'default').callsFake(() => intlMock);
  });

  afterEach(() => {
    contextStub.restore();
  });

  it('skal vise tabell med inntekter', () => {
    const inntekter = [{
      person: 'Espen Utvikler',
      employer: 'Steria',
      fom: '2017-08-20',
      tom: '2017-08-31',
      amount: 1,
    }, {
      person: 'Espen Utvikler',
      employer: 'Steria',
      fom: '2017-08-10',
      tom: '2017-08-11',
      amount: 2,
    }];

    const wrapper = shallowWithIntl(<InntektOgYtelserFaktaPanel.WrappedComponent
      inntekter={inntekter}
    />);

    const table = wrapper.find('Table');
    expect(table).to.have.length(1);
    expect(table.find('TableRow')).to.length(2);
  });

  it('skal ikke vise tabell når det ikke finnes inntekter', () => {
    const inntekter: any = [];

    const wrapper = shallowWithIntl(<InntektOgYtelserFaktaPanel.WrappedComponent
      inntekter={inntekter}
    />);

    const table = wrapper.find('Table');
    expect(table).to.have.length(0);
  });

  it('skal sette opp initielle verdier med visning av søker først og så sortert etter startdato', () => {
    const person = {
      navn: 'Espen Utvikler',
    };
    const inntekt = [
      {
        navn: 'Espen Utvikler',
        utbetaler: 'Steria',
        fom: '2017-07-20',
        tom: '2017-07-31',
        ytelse: true,
        belop: 4,
      }, {
        navn: 'Frida',
        utbetaler: 'Nav',
        fom: '2017-08-10',
        tom: '2017-08-20',
        ytelse: true,
        belop: 2,
      }, {
        navn: 'Espen Utvikler',
        utbetaler: 'Steria',
        fom: '2017-08-20',
        tom: '2017-08-31',
        ytelse: true,
        belop: 1,
      },
    ];

    const initialValues = InntektOgYtelserFaktaPanel.buildInitialValues(person, inntekt);

    expect(initialValues).to.eql({
      inntekter: [{
        person: 'Espen Utvikler',
        employer: 'Steria',
        fom: '2017-08-20',
        tom: '2017-08-31',
        amount: 1,
      }, {
        person: 'Espen Utvikler',
        employer: 'Steria',
        fom: '2017-07-20',
        tom: '2017-07-31',
        amount: 4,
      }, {
        person: 'Frida',
        employer: 'Nav',
        fom: '2017-08-10',
        tom: '2017-08-20',
        amount: 2,
      }],
    });
  });
});
