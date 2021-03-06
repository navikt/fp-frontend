import React from 'react';
import sinon from 'sinon';

import { shallowWithIntl, getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';

import { SearchForm } from './SearchForm';
import messages from '../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<Search>', () => {
  it('skal ha et søkefelt og en søkeknapp', () => {
    const wrapper = shallowWithIntl(<SearchForm
      intl={intlMock}
      searchString=""
      searchStarted
      {...reduxFormPropsMock}
      error=""
    />, messages);

    expect(wrapper.find('InputField')).toHaveLength(1);
    expect(wrapper.find('Hovedknapp')).toHaveLength(1);
  });

  it('skal utføre søk når en trykker på søkeknapp', () => {
    const onButtonClick = sinon.spy();

    const wrapper = shallowWithIntl(<SearchForm
      intl={intlMock}
      searchString=""
      searchStarted
      {...reduxFormPropsMock}
      error=""
      handleSubmit={onButtonClick}
    />, messages);

    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault() { return undefined; } });

    expect(onButtonClick).toHaveProperty('callCount', 1);
  });
});
