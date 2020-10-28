import React from 'react';
import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { expect } from 'chai';

import AksjonspunktGodkjenningArsakPanel from './AksjonspunktGodkjenningArsakPanel';
import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-sak-totrinnskontroll';

describe('<AksjonspunktGodkjenningArsakPanel>', () => {
  it('skal vise korrekt antall element', () => {
    const wrapper = shallowWithIntl(<AksjonspunktGodkjenningArsakPanel.WrappedComponent
      fieldName="test"
      showOnlyBegrunnelse={false}
      godkjentHosKA={false}
      intl={intlMock}
    />);

    const navFieldGroup = wrapper.find('NavFieldGroup');
    expect(navFieldGroup).to.have.length(1);

    const radioGroup = wrapper.find('CheckboxField');
    expect(radioGroup).to.have.length(4);
  });
});
