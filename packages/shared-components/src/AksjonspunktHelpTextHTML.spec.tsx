import React from 'react';
import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { FormattedMessage } from 'react-intl';
import AksjonspunktHelpTextHTML from './AksjonspunktHelpTextHTML';

describe('<AksjonspunktHelpTextHTML>', () => {
  it('Skal teste at aksjonspunkt hjelp viser riktig', () => {
    const wrapper = shallowWithIntl(
      <AksjonspunktHelpTextHTML>
        {[<FormattedMessage
          key="1"
          id="Beregningsgrunnlag.Helptext.Arbeidstaker2"
          values={{ verdi: 23 }}
        />]}
      </AksjonspunktHelpTextHTML>,
    );
    const flexContainer = wrapper.find('FlexContainer');
    const messages = flexContainer.first().find('FormattedMessage');
    expect(messages.at(0).prop('id')).toEqual('Beregningsgrunnlag.Helptext.Arbeidstaker2');
    expect(messages.at(0).prop('values')).toEqual({ verdi: 23 });
    const image = flexContainer.first().find('Image');
    expect(image.length).toBe(1);
  });
  it('Skal teste at aksjonspunkt hjelp ikke vises når ikke aksjonspunkt', () => {
    const wrapper = shallowWithIntl(
      <AksjonspunktHelpTextHTML>
        {[]}
      </AksjonspunktHelpTextHTML>,
    );
    const flexContainer = wrapper.find('FlexContainer');
    expect(flexContainer.length).toBe(0);
  });
});
