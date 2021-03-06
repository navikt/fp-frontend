import React from 'react';
import { shallow } from 'enzyme';

import { metaMock, MockFields } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { PeriodFieldArray, DatepickerField } from '@fpsak-frontend/form';

import FrilansOppdragForFamilieFieldArray from './FrilansOppdragForFamilieFieldArray';

const fields = new MockFields('perioder', 1);

const getRemoveButton = () => <button id="avslutt" type="button" />;

describe('<FrilansOppdragForFamilieFieldArray>', () => {
  it('Skal rendre FrilansOppdragForFamilieFieldArray', () => {
    const wrapper = shallow(<FrilansOppdragForFamilieFieldArray
      fields={fields}
      meta={metaMock}
      readOnly={false}
    />);

    const fieldArray = wrapper.find(PeriodFieldArray);
    expect(fieldArray).toHaveLength(1);

    const fn = fieldArray.prop('children');
    const comp = fn('fieldId1', 0, getRemoveButton);

    // @ts-ignore Fiks
    const innerWrapper = shallow(comp);

    const dateFields = innerWrapper.find(DatepickerField);
    expect(dateFields).toHaveLength(2);
    expect(dateFields.first().prop('name')).toEqual('fieldId1.fomDato');
    expect(dateFields.first().prop('label')).toEqual({ id: 'Registrering.FrilansOppdrag.FieldArray.periodeFom' });
    expect(dateFields.last().prop('name')).toEqual('fieldId1.tomDato');
    expect(dateFields.last().prop('label')).toEqual({ id: 'Registrering.FrilansOppdrag.FieldArray.periodeTom' });
    expect(innerWrapper.find('#avslutt')).toHaveLength(1);
  });

  it('Skal ikke feile når fomDato er etter tomDato', () => {
    const values = {
      oppdragPerioder: [{
        fomDato: '2018-10-10',
        tomDato: '2018-11-10',
      }],
      perioder: [{
        periodeFom: '',
      }],
    };

    const res = FrilansOppdragForFamilieFieldArray.validate(values);
    expect(res).toBeNull();
  });

  it('Skal ikke feile når fomDato er lik tomDato', () => {
    const values = {
      oppdragPerioder: [{
        fomDato: '2018-10-10',
        tomDato: '2018-10-10',
      }],
      perioder: [{
        periodeFom: '',
      }],
    };

    const res = FrilansOppdragForFamilieFieldArray.validate(values);
    expect(res).toBeNull();
  });

  it('Skal feile når fomDato er før tomDato', () => {
    const values = {
      oppdragPerioder: [{
        fomDato: '2018-10-10',
        tomDato: '2018-06-10',
      }],
      perioder: [{
        periodeFom: '',
      }],
    };

    const res = FrilansOppdragForFamilieFieldArray.validate(values);
    expect(res).toEqual([{
      tomDato: 'Dato må være etter eller lik 10.10.2018',
    }]);
  });

  it('Skal ikke feile når fomDato er etter første periodeFom', () => {
    const values = {
      oppdragPerioder: [{
        fomDato: '2018-01-05',
        tomDato: '2018-10-10',
      }],
      perioder: [{
        periodeFom: '2018-01-10',
      }, {
        periodeFom: '2018-01-01',
      }],
    };

    const res = FrilansOppdragForFamilieFieldArray.validate(values);
    expect(res).toBeNull();
  });

  it('Skal ikke feile når fomDato er lik første periodeFom', () => {
    const values = {
      oppdragPerioder: [{
        fomDato: '2018-01-01',
        tomDato: '2018-10-10',
      }],
      perioder: [{
        periodeFom: '2018-01-10',
      }, {
        periodeFom: '2018-01-01',
      }],
    };

    const res = FrilansOppdragForFamilieFieldArray.validate(values);
    expect(res).toBeNull();
  });

  it('Skal feile når fomDato er før første periodeFom', () => {
    const values = {
      oppdragPerioder: [{
        fomDato: '2017-12-31',
        tomDato: '2018-10-10',
      }],
      perioder: [{
        periodeFom: '2018-01-10',
      }, {
        periodeFom: '2018-01-01',
      }],
    };

    const res = FrilansOppdragForFamilieFieldArray.validate(values);
    expect(res).toEqual([{
      fomDato: [{
        id: 'Registrering.FrilansOppdrag.FieldArray.BeforeFomValidation',
      }],
    }]);
  });
});
