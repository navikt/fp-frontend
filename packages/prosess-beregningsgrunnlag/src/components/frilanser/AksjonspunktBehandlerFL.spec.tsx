import React from 'react';
import { FormattedMessage } from 'react-intl';

import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import AksjonspunktBehandlerFL from './AksjonspunktBehandlerFL';
import messages from '../../../i18n/nb_NO.json';

describe('<AksjonspunktBehandlerFL>', () => {
  it('Skal teste tabellen får korrekte rader readonly=false', () => {
    const wrapper = shallowWithIntl(<AksjonspunktBehandlerFL
      readOnly={false}
    />, messages);
    const rows = wrapper.find('Row');
    const lblTekst = rows.first().find(FormattedMessage);
    expect(lblTekst.props().id).toBe('Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandlerFL');
    const inputField = rows.first().find('InputField');
    expect(inputField).toHaveLength(1);
    expect(inputField.props().readOnly).toBe(false);
  });
});
