import React from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { reducer as formReducer, reduxForm } from 'redux-form';
import { mount } from 'enzyme';

import DatepickerField from './DatepickerField';

const MockForm = reduxForm({ form: 'mock' })(({ handleSubmit, children }) => <form onSubmit={handleSubmit}>{children}</form>);
const mountFieldInForm = (field, initialValues) => mount(
  <Provider store={createStore(combineReducers({ form: formReducer }))}>
    <IntlProvider locale="nb-NO" messages={{}}>
      <MockForm initialValues={initialValues}>
        {field}
      </MockForm>
    </IntlProvider>
  </Provider>,
);

describe('<DatepickerField>', () => {
  it('skal formatere fra ISO-format til norsk datoformat', () => {
    const wrapper = mountFieldInForm(<DatepickerField name="testDato" />, { testDato: '2017-02-01' });

    const input = wrapper.find('Input');
    expect(input).toHaveLength(1);
    expect(input.props().value).toEqual('01.02.2017');
  });
});
