import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';

import FrilansPanel from './FrilansPanel';

describe('<FrilansPanel>', () => {
  it('Skal rendre panel korrekt', () => {
    const wrapper = shallow(<FrilansPanel readOnly={false} formName="test" />);

    const radioGroupField = wrapper.find(RadioGroupField);
    expect(radioGroupField).has.length(3);
    expect(radioGroupField.first().prop('readOnly')).is.false;

    const options = wrapper.find(RadioOption);
    expect(options).has.length(6);
  });

  it('Skal rendre panel ved readOnly', () => {
    const wrapper = shallow(<FrilansPanel readOnly formName="test" />);

    const radioGroupField = wrapper.find(RadioGroupField);
    expect(radioGroupField).has.length(3);
    expect(radioGroupField.first().prop('readOnly')).is.true;
  });

  it('Skal lage defaultperiode', () => {
    const initialValues = FrilansPanel.buildInitialValues();
    expect(initialValues).is.eql({
      frilans: {
        oppdragPerioder: [{
          fomDato: '',
          tomDato: '',
        }],
        perioder: [{
          periodeFom: '',
          periodeTom: '',
        }],
      },
    });
  });

  it('Skal validere periode som korrekt', () => {
    const values = {
      frilans: {
        oppdragPerioder: [],
        perioder: [{
          periodeFom: '2018-10-10',
          periodeTom: '2018-12-10',
        }],
      },
    };

    const validationResult = FrilansPanel.validate(values);

    expect(validationResult).is.eql({
      frilans: {
        oppdragPerioder: null,
        perioder: null,
      },
    });
  });

  it('Skal validere periode som feil', () => {
    const values = {
      frilans: {
        oppdragPerioder: [],
        perioder: [{
          periodeFom: '2018-12-10',
          periodeTom: '2018-10-10',
        }],
      },
    };

    const validationResult = FrilansPanel.validate(values);

    expect(validationResult).is.eql({
      frilans: {
        oppdragPerioder: null,
        perioder: [{
          periodeFom: null,
          periodeTom: [{
            id: 'ValidationMessage.DateNotAfterOrEqual',
          }, {
            limit: '10.12.2018',
          }],
        }],
      },
    });
  });
});
