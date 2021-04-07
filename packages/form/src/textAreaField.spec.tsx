import React from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { reducer as formReducer, reduxForm } from 'redux-form';
import { mount } from 'enzyme';
import TextAreaField from './TextAreaField';

const MockForm = reduxForm({ form: 'mock' })(({ handleSubmit, children }) => <form onSubmit={handleSubmit}>{children}</form>);
const mountFieldInForm = (field, initialValues?: any) => mount(
  <Provider store={createStore(combineReducers({ form: formReducer }))}>
    <IntlProvider locale="nb-NO" messages={{}}>
      <MockForm initialValues={initialValues}>
        {field}
      </MockForm>
    </IntlProvider>
  </Provider>,
);

describe('<TextAreaField>', () => {
  it('Skal rendre TextAreaField', () => {
    const wrapper = mountFieldInForm(<TextAreaField name="text" label="name" />);
    expect(wrapper.find('textarea')).toHaveLength(1);
  });
  it('Skal rendre TextAreaField som ren tekst hvis readonly', () => {
    const wrapper = mountFieldInForm(<TextAreaField name="text" label="name" readOnly />, { text: 'tekst' });
    expect(wrapper.find('textarea')).toHaveLength(0);
    expect(wrapper.find('div')).toHaveLength(2);
    expect(wrapper.find('Label')).toHaveLength(1);
    expect(wrapper.find('Label').prop('input')).toEqual('name');
    expect(wrapper.find('Normaltekst')).toHaveLength(1);
    expect(wrapper.find('Normaltekst').text()).toEqual('tekst');
  });
});
