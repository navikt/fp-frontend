import React from 'react';
import { shallow } from 'enzyme';

import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { TextAreaField } from '@fpsak-frontend/form';

import messages from '../../i18n/nb_NO.json';
import { LagreSoknadPanel } from './LagreSoknadPanel';

const mockProps = {
  intl: getIntlMock(messages),
  pristine: true,
  reset: () => undefined,
  onSubmitUfullstendigsoknad: () => undefined,
  form: '',
  submitting: false,
};

describe('<LagreSoknadPanel>', () => {
  it('skal vise komponent som default', () => {
    const wrapper = shallow(<LagreSoknadPanel {...mockProps} />);
    const infoTextArea = wrapper.find(TextAreaField);
    expect(infoTextArea).toHaveLength(1);
  });
});
