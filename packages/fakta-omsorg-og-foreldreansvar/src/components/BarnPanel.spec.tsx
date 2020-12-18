import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import { FieldArrayFieldsProps } from 'redux-form';

import { DatepickerField } from '@fpsak-frontend/form';
import opplysningsKilde from '@fpsak-frontend/kodeverk/src/opplysningsKilde';
import { DateLabel } from '@fpsak-frontend/shared-components';
import { ISO_DATE_FORMAT } from '@fpsak-frontend/utils';

import { intlMock } from '../../i18n/intl-enzyme-test-helper-fakta-omsorg-og-foreldreansvar';
import BarnPanel from './BarnPanel';

const getMockedFields = (fieldNames: any, children: any) => {
  const field = {
    get: (idx: any) => children[idx],
  };
  return {
    map: (callback: any) => fieldNames.map((fieldname: any, idx: any) => callback(fieldname, idx, field)),
  } as FieldArrayFieldsProps<any>;
};

describe('<BarnPanel>', () => {
  it('skal kunne endre fødselsdatoer når barna ikke er bekreftet av TPS', () => {
    const fieldNames = ['barn[0]', 'barn[1]'];
    const children = [{
      id: 1,
      navn: 'Espen Utvikler',
      fodselsdato: '10-10-2017',
      adresse: undefined,
      opplysningsKilde: opplysningsKilde.SAKSBEHANDLER,
    }, {
      id: 2,
      navn: 'Petra Utvikler',
      fodselsdato: '10-01-2017',
      adresse: undefined,
      opplysningsKilde: opplysningsKilde.SAKSBEHANDLER,
    }];
    const wrapper = shallow(<BarnPanel
      intl={intlMock}
      readOnly
      fields={getMockedFields(fieldNames, children)}
      antallBarn={2}
      alleMerknaderFraBeslutter={{}}
    />);

    const datepickerField = wrapper.find(DatepickerField);
    expect(datepickerField).toHaveLength(2);
    const dateLabel = wrapper.find(DateLabel);
    expect(dateLabel).toHaveLength(0);
  });

  it('skal ikke kunne endre fødselsdatoer når barna er bekreftet av TPS', () => {
    const fieldNames = ['barn[0]', 'barn[1]'];
    const children = [{
      id: 1,
      navn: 'Espen Utvikler',
      fodselsdato: '10-10-2017',
      adresse: undefined,
      opplysningsKilde: opplysningsKilde.TPS,
    }, {
      id: 2,
      navn: 'Petra Utvikler',
      fodselsdato: '10-01-2017',
      adresse: undefined,
      opplysningsKilde: opplysningsKilde.TPS,
    }];
    const wrapper = shallow(<BarnPanel
      intl={intlMock}
      readOnly
      fields={getMockedFields(fieldNames, children)}
      antallBarn={2}
      alleMerknaderFraBeslutter={{}}
    />);

    const datepickerField = wrapper.find(DatepickerField);
    expect(datepickerField).toHaveLength(0);
    const dateLabel = wrapper.find(DateLabel);
    expect(dateLabel).toHaveLength(2);
  });

  it('skal vise korrekt alder på barn', () => {
    const fodselsdato1 = moment().subtract(2, 'years').add(1, 'days').format(ISO_DATE_FORMAT);
    const fodselsdato2 = moment().subtract(2, 'years').format(ISO_DATE_FORMAT);

    const fieldNames = ['barn[0]', 'barn[1]'];
    const children = [
      {
        id: 1,
        navn: 'Espen Utvikler',
        adresse: undefined,
        opplysningsKilde: opplysningsKilde.TPS,
        fodselsdato: fodselsdato1,
      },
      {
        id: 2,
        navn: 'Espen Askeladd',
        adresse: undefined,
        opplysningsKilde: opplysningsKilde.TPS,
        fodselsdato: fodselsdato2,
      },
    ];

    const wrapper = shallow(<BarnPanel
      intl={intlMock}
      readOnly={false}
      fields={getMockedFields(fieldNames, children)}
      antallBarn={2}
      alleMerknaderFraBeslutter={{}}
    />);

    const alderMessage = wrapper.find({ id: 'BarnPanel.Age' });
    expect(alderMessage).toHaveLength(2);
    expect(alderMessage.at(0).props().values.age).toEqual('1');
    expect(alderMessage.at(1).props().values.age).toEqual('2');
  });
});
