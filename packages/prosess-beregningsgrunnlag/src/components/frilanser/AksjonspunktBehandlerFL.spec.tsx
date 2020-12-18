import React from 'react';

import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import AksjonspunktBehandlerFL from './AksjonspunktBehandlerFL';

describe('<AksjonspunktBehandlerFL>', () => {
  it('Skal teste tabellen får korrekte rader readonly=false', () => {
    const wrapper = shallowWithIntl(<AksjonspunktBehandlerFL
      readOnly={false}
    />);
    const rows = wrapper.find('Row');
    const lblTekst = rows.first().find('FormattedMessage');
    expect(lblTekst.props().id).toBe('Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandlerFL');
    const inputField = rows.first().find('InputField');
    expect(inputField).toHaveLength(1);
    expect(inputField.props().readOnly).toBe(false);
  });
});
