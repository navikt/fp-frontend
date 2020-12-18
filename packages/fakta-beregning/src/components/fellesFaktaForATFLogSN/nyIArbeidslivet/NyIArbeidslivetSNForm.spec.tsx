import React from 'react';

import NyIArbeidslivetSNForm from './NyIArbeidslivetSNForm';
import shallowWithIntl from '../../../../i18n/intl-enzyme-test-helper-fakta-beregning';

describe('<NyIArbeidslivetSNForm>', () => {
  it('skal teste at korrekt antall radioknapper vises med korrekte props', () => {
    const wrapper = shallowWithIntl(<NyIArbeidslivetSNForm
      readOnly={false}
      isAksjonspunktClosed={false}
    />);
    const radios = wrapper.find('RadioOption');
    expect(radios).toHaveLength(2);
    expect(radios.last().prop('disabled')).toEqual(false);
  });
});
