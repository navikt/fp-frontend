import React from 'react';

import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import NyIArbeidslivetSNForm from './NyIArbeidslivetSNForm';
import messages from '../../../../i18n/nb_NO.json';

describe('<NyIArbeidslivetSNForm>', () => {
  it('skal teste at korrekt antall radioknapper vises med korrekte props', () => {
    const wrapper = shallowWithIntl(<NyIArbeidslivetSNForm
      readOnly={false}
      isAksjonspunktClosed={false}
    />, messages);
    const radios = wrapper.find('RadioOption');
    expect(radios).toHaveLength(2);
    expect(radios.last().prop('disabled')).toEqual(false);
  });
});
