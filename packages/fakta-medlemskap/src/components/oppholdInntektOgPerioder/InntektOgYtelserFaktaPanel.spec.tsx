import React from 'react';
import sinon from 'sinon';

import { FagsakPerson } from '@fpsak-frontend/types';

import InntektOgYtelserFaktaPanel from './InntektOgYtelserFaktaPanel';
import shallowWithIntl, { intlMock } from '../../../i18n/intl-enzyme-test-helper-fakta-medlemskap';
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
      id="1"
      behandlingId={2}
      behandlingVersjon={3}
      inntekter={inntekter}
    />);

    const table = wrapper.find('Table');
    expect(table).toHaveLength(1);
    expect(table.find('TableRow')).toHaveLength(2);
  });

  it('skal ikke vise tabell når det ikke finnes inntekter', () => {
    const inntekter: any = [];

    const wrapper = shallowWithIntl(<InntektOgYtelserFaktaPanel.WrappedComponent
      id="1"
      behandlingId={2}
      behandlingVersjon={3}
      inntekter={inntekter}
    />);

    const table = wrapper.find('Table');
    expect(table).toHaveLength(0);
  });

  it('skal sette opp initielle verdier med visning av søker først og så sortert etter startdato', () => {
    const arbeidsgiverOpplysningerPerId = {
      Steria: {
        erPrivatPerson: false,
        identifikator: 'Steria',
        navn: 'Espen Utvikler',
      },
      Nav: {
        erPrivatPerson: false,
        identifikator: 'Nav',
        navn: 'Frida',
      },
    };

    const person = {
      navn: 'Espen Utvikler',
    } as FagsakPerson;
    const inntekt = [
      {
        utbetaler: 'Steria',
        fom: '2017-07-20',
        tom: '2017-07-31',
        ytelse: true,
        belop: 4,
      }, {
        utbetaler: 'Nav',
        fom: '2017-08-10',
        tom: '2017-08-20',
        ytelse: true,
        belop: 2,
      }, {
        utbetaler: 'Steria',
        fom: '2017-08-20',
        tom: '2017-08-31',
        ytelse: true,
        belop: 1,
      },
    ];

    const initialValues = InntektOgYtelserFaktaPanel.buildInitialValues(person, inntekt, arbeidsgiverOpplysningerPerId);

    expect(initialValues).toEqual({
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
