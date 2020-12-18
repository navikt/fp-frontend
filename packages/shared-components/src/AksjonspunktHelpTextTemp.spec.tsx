import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';

import AksjonspunktHelpTextHTML from './AksjonspunktHelpTextHTML';
import AksjonspunktHelpTextTemp from './AksjonspunktHelpTextTemp';

describe('<AksjonspunktHelpTextTemp>', () => {
  it('skal vise komponent for åpent aksjonspunkt', () => {
    const wrapper = shallow(
      <AksjonspunktHelpTextTemp isAksjonspunktOpen>
        {[<FormattedMessage key="1" id="HelpText.Aksjonspunkt" />]}
      </AksjonspunktHelpTextTemp>,
    );
    expect(wrapper.find(AksjonspunktHelpTextHTML)).toHaveLength(1);
    expect(wrapper.find(Normaltekst)).toHaveLength(0);
  });

  it('skal tekst når aksjonspunkt er lukket', () => {
    const wrapper = shallow(
      <AksjonspunktHelpTextTemp isAksjonspunktOpen={false}>
        {[<FormattedMessage key="1" id="HelpText.Aksjonspunkt" />]}
      </AksjonspunktHelpTextTemp>,
    );
    expect(wrapper.find(AksjonspunktHelpTextHTML)).toHaveLength(0);
    expect(wrapper.find(Normaltekst)).toHaveLength(1);
  });
});
