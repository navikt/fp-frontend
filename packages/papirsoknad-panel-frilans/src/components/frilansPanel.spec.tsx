import React from 'react';
import { expect } from 'chai';

// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__utils-test... Remove this comment to see the full error message
import { intlMock, shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';

import FrilansPanel from './FrilansPanel';

describe('<FrilansPanel>', () => {
  it('Skal rendre panel korrekt', () => {
    const wrapper = shallowWithIntl(<FrilansPanel.WrappedComponent intl={intlMock} readOnly={false} formName="test" />);

    const radioGroupField = wrapper.find(RadioGroupField);
    expect(radioGroupField).has.length(3);
    expect(radioGroupField.first().prop('readOnly')).is.false;

    const options = wrapper.find(RadioOption);
    expect(options).has.length(6);
    expect(options.first().prop('label')).is.eql('Registrering.Frilans.No');
    expect(options.at(1).prop('label')).is.eql('Registrering.Frilans.Yes');
  });

  it('Skal rendre panel ved readOnly', () => {
    const wrapper = shallowWithIntl(<FrilansPanel.WrappedComponent intl={intlMock} readOnly formName="test" />);

    const radioGroupField = wrapper.find(RadioGroupField);
    expect(radioGroupField).has.length(3);
    expect(radioGroupField.first().prop('readOnly')).is.true;
  });

  it('Skal lage defaultperiode', () => {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'buildInitialValues' does not exist on ty... Remove this comment to see the full error message
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

    // @ts-expect-error ts-migrate(2339) FIXME: Property 'validate' does not exist on type 'FC<Wit... Remove this comment to see the full error message
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

    // @ts-expect-error ts-migrate(2339) FIXME: Property 'validate' does not exist on type 'FC<Wit... Remove this comment to see the full error message
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
