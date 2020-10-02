import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { FieldArrayFieldsProps } from 'redux-form';

import opplysningsKilde from '@fpsak-frontend/kodeverk/src/opplysningsKilde';

import ForeldrePanel from './ForeldrePanel';

const getMockedFields = (fieldNames: any, children: any) => {
  const field = {
    get: (idx: any) => children[idx],
  };
  return {
    map: (callback: any) => fieldNames.map((fieldname: any, idx: any) => callback(fieldname, idx, field)),
  } as FieldArrayFieldsProps<any>;
};

describe('<ForeldrePanel>', () => {
  it('skal kunne endre dødsdatoer når foreldre ikke er bekreftet av TPS', () => {
    const fieldNames = ['foreldre[0]', 'foreldre[1]'];
    const parents = [{
      erMor: true,
      id: 1,
      navn: 'Petra Utvikler',
      adresse: undefined,
      dodsdato: '10-01-2017',
      opplysningsKilde: opplysningsKilde.SOKNAD,
    }, {
      erMor: false,
      id: 2,
      navn: 'Espen Utvikler',
      adresse: undefined,
      dodsdato: '10-01-2017',
      opplysningsKilde: opplysningsKilde.SOKNAD,
    }];

    const wrapper = shallow(<ForeldrePanel
      fields={getMockedFields(fieldNames, parents)}
      alleMerknaderFraBeslutter={{}}
    />);

    const DatepickerField = wrapper.find('DatepickerField');
    expect(DatepickerField).to.have.length(2);
    const DateLabel = wrapper.find('DateLabel');
    expect(DateLabel).to.have.length(0);
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
      opplysningsKilde: opplysningsKilde.SOKNAD,
    }, {
      erMor: false,
      id: 2,
      navn: 'Espen Utvikler',
      adresse: undefined,
      dodsdato: '10-01-2017',
      originalDodsdato: undefined,
      opplysningsKilde: opplysningsKilde.SOKNAD,
    }];

    const wrapper = shallow(<ForeldrePanel
      fields={getMockedFields(fieldNames, parents)}
      alleMerknaderFraBeslutter={{}}
    />);

    const DatepickerField = wrapper.find('DatepickerField');
    expect(DatepickerField).to.have.length(2);
    const DateLabel = wrapper.find('DateLabel');
    expect(DateLabel).to.have.length(0);
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

    const wrapper = shallow(<ForeldrePanel
      fields={getMockedFields(fieldNames, parents)}
      alleMerknaderFraBeslutter={{}}
    />);

    const DatepickerField = wrapper.find('DatepickerField');
    expect(DatepickerField).to.have.length(0);
    const DateLabel = wrapper.find('DateLabel');
    expect(DateLabel).to.have.length(2);
  });
});
