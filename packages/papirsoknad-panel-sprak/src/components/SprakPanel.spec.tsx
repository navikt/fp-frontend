import React from 'react';
import { shallow } from 'enzyme';

import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { RadioOption } from '@fpsak-frontend/form';

import messages from '../../i18n/nb_NO.json';
import SprakPanel from './SprakPanel';

describe('<SprakPanel>', () => {
  it('skal vise komponent korrekt', () => {
    /* @ts-ignore Fiks cannot be used as a JSX component */
    const wrapper = shallow(<SprakPanel.WrappedComponent intl={getIntlMock(messages)} readOnly={false} />);
    const sprakValg = wrapper.find(RadioOption);
    expect(sprakValg).toHaveLength(3);
    expect(sprakValg.at(0).props().label).toBe('Bokmål');
    expect(sprakValg.at(1).props().label).toBe('Nynorsk');
    expect(sprakValg.at(2).props().label).toBe('Engelsk');
  });
});
