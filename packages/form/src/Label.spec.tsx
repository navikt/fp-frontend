import React from 'react';
import { shallow } from 'enzyme';
import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { Undertekst } from 'nav-frontend-typografi';

import { Label } from './Label';

const intlMock = getIntlMock({});

const FORMATTED_MESSAGE = 'En formatert melding';
const intl = { ...intlMock, formatMessage: () => FORMATTED_MESSAGE };

describe('<Label>', () => {
  it('skal ikke formatere input hvis den er en node', () => {
    const wrapper = shallow(<Label input="Hei" intl={intl} />);
    let typoElement = wrapper.find(Undertekst);

    expect(typoElement).toHaveLength(1);
    expect(typoElement.at(0).props().children).toEqual('Hei');

    const spanInput = <span>Hei</span>;
    wrapper.setProps({ input: spanInput });
    wrapper.update();
    typoElement = wrapper.find(Undertekst);

    expect(typoElement).toHaveLength(1);
    expect(typoElement.at(0).props().children).toEqual(spanInput);
  });

  it('skal formatere input hvis den er en meldingsdefinisjon', () => {
    const wrapper = shallow(<Label input={{ id: 'Hei' }} intl={intl} />);
    const typoElement = wrapper.find(Undertekst);

    expect(typoElement).toHaveLength(1);
    expect(typoElement.at(0).props().children).toEqual(FORMATTED_MESSAGE);
  });

  it('skal rendre null hvis input er tom', () => {
    const wrapper = shallow(<Label intl={intl} />);
    expect(wrapper.html()).toBeNull();
  });
});
