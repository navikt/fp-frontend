import React from 'react';

import { FaktaOmBeregning } from '@fpsak-frontend/types';
import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import VurderMilitaer, { vurderMilitaerField } from './VurderMilitaer';
import messages from '../../../../i18n/nb_NO.json';

const mockBGMedStatus = (mili) => ({
  vurderMilitaer: {
    harMilitaer: mili,
  },
});

describe('<VurderMilitaer>', () => {
  it('Skal teste at komponenten vises korrekt med radioknapper', () => {
    const wrapper = shallowWithIntl(<VurderMilitaer
      readOnly={false}
      isAksjonspunktClosed={false}
    />, messages);
    const radios = wrapper.find('RadioOption');
    expect(radios).toHaveLength(2);
  });

  it('Skal teste at buildInitialvalues bygges korrekt når vi ikke har satt verdi i fakta om beregning', () => {
    const faktaBg = {
      vurderMilitaer: null,
    };
    const acutalValues = VurderMilitaer.buildInitialValues(faktaBg as FaktaOmBeregning);
    expect(acutalValues).toEqual({});
  });

  it('Skal teste at buildInitialvalues bygges korrekt når militær er satt til true', () => {
    const values = VurderMilitaer.buildInitialValues(mockBGMedStatus(true) as FaktaOmBeregning);
    const testobj = {
      [vurderMilitaerField]: true,
    };
    expect(values).toEqual(testobj);
  });

  it('Skal teste at buildInitialvalues bygges korrekt når aksjonspunktet er løst og militær er satt til false', () => {
    const values = VurderMilitaer.buildInitialValues(mockBGMedStatus(false) as FaktaOmBeregning);
    const testobj = {
      [vurderMilitaerField]: false,
    };
    expect(values).toEqual(testobj);
  });

  it('Skal teste at transformValues bygger korrekt objekt gitt at vurderMilitaerField er true', () => {
    const values = {
      [vurderMilitaerField]: true,
    };
    const transformedValues = VurderMilitaer.transformValues(values);
    const expectedValues = {
      vurderMilitaer: {
        harMilitaer: true,
      },
    };
    expect(transformedValues).toEqual(expectedValues);
  });

  it('Skal teste at transformValues bygger korrekt objekt gitt at vurderMilitaerField er false', () => {
    const values = {
      [vurderMilitaerField]: false,
    };
    const transformedValues = VurderMilitaer.transformValues(values);
    const expectedValues = {
      vurderMilitaer: {
        harMilitaer: false,
      },
    };
    expect(transformedValues).toEqual(expectedValues);
  });
});
