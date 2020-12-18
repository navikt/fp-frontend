import React from 'react';
import { FieldArrayFieldsProps } from 'redux-form';
import sinon from 'sinon';

import opplysningsKilde from '@fpsak-frontend/kodeverk/src/opplysningsKilde';

import * as useIntl from '../useIntl';
import ForeldrePanel from './ForeldrePanel';
import shallowWithIntl, { intlMock } from '../../i18n/intl-enzyme-test-helper-fakta-omsorg-og-foreldreansvar';

const getMockedFields = (fieldNames: any, children: any) => {
  const field = {
    get: (idx: any) => children[idx],
  };
  return {
    map: (callback: any) => fieldNames.map((fieldname: any, idx: any) => callback(fieldname, idx, field)),
  } as FieldArrayFieldsProps<any>;
};

describe('<ForeldrePanel>', () => {
  let contextStub;
  beforeEach(() => {
    contextStub = sinon.stub(useIntl, 'default').callsFake(() => intlMock);
  });

  afterEach(() => {
    contextStub.restore();
  });

  it('skal kunne endre dødsdatoer når foreldre ikke er bekreftet av TPS', () => {
    const fieldNames = ['foreldre[0]', 'foreldre[1]'];
    const parents = [{
      erMor: true,
      id: 1,
      navn: 'Petra Utvikler',
      adresse: undefined,
      dodsdato: '10-01-2017',
      opplysningsKilde: opplysningsKilde.SAKSBEHANDLER,
    }, {
      erMor: false,
      id: 2,
      navn: 'Espen Utvikler',
      adresse: undefined,
      dodsdato: '10-01-2017',
      opplysningsKilde: opplysningsKilde.SAKSBEHANDLER,
    }];

    const wrapper = shallowWithIntl(<ForeldrePanel
      fields={getMockedFields(fieldNames, parents)}
      alleMerknaderFraBeslutter={{}}
    />);

    const DatepickerField = wrapper.find('DatepickerField');
    expect(DatepickerField).toHaveLength(2);
    const DateLabel = wrapper.find('DateLabel');
    expect(DateLabel).toHaveLength(0);
  });

  it('skal kunne endre dødsdatoer når foreldre er bekreftet av TPS men dødsdato ikke er oppgitt', () => {
    const fieldNames = ['foreldre[0]', 'foreldre[1]'];
    const parents = [{
      erMor: true,
      id: 1,
      navn: 'Petra Utvikler',
      adresse: undefined,
      dodsdato: '10-01-2017',
      originalDodsdato: undefined,
      opplysningsKilde: opplysningsKilde.SAKSBEHANDLER,
    }, {
      erMor: false,
      id: 2,
      navn: 'Espen Utvikler',
      adresse: undefined,
      dodsdato: '10-01-2017',
      originalDodsdato: undefined,
      opplysningsKilde: opplysningsKilde.SAKSBEHANDLER,
    }];

    const wrapper = shallowWithIntl(<ForeldrePanel
      fields={getMockedFields(fieldNames, parents)}
      alleMerknaderFraBeslutter={{}}
    />);

    const DatepickerField = wrapper.find('DatepickerField');
    expect(DatepickerField).toHaveLength(2);
    const DateLabel = wrapper.find('DateLabel');
    expect(DateLabel).toHaveLength(0);
  });

  it('skal ikke kunne endre dødsdatoer når foreldre er bekreftet av TPS og dødsdato er oppgitt', () => {
    const fieldNames = ['foreldre[0]', 'foreldre[1]'];
    const parents = [{
      erMor: true,
      id: 1,
      navn: 'Petra Utvikler',
      adresse: undefined,
      dodsdato: '10-01-2017',
      originalDodsdato: '10-01-2017',
      opplysningsKilde: opplysningsKilde.TPS,
    }, {
      erMor: false,
      id: 1,
      navn: 'Espen Utvikler',
      adresse: undefined,
      dodsdato: '10-01-2017',
      originalDodsdato: '10-01-2017',
      opplysningsKilde: opplysningsKilde.TPS,
    }];

    const wrapper = shallowWithIntl(<ForeldrePanel
      fields={getMockedFields(fieldNames, parents)}
      alleMerknaderFraBeslutter={{}}
    />);

    const DatepickerField = wrapper.find('DatepickerField');
    expect(DatepickerField).toHaveLength(0);
    const DateLabel = wrapper.find('DateLabel');
    expect(DateLabel).toHaveLength(2);
  });
});
