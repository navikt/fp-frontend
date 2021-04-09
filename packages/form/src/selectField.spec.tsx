import React from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { reducer as formReducer, reduxForm } from 'redux-form';
import { mount } from 'enzyme';
import SelectField from './SelectField';

const selectValues = [
  <option value="true" key="option1">Ja</option>,
  <option value="false" key="option2">Nei</option>,
];

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

describe('<SelectField>', () => {
  it('Skal rendre select', () => {
    const wrapper = mountFieldInForm(<SelectField label="text" name="text" selectValues={selectValues} />);
    expect(wrapper.find('label').text()).toEqual('text');
    const select = wrapper.find('select');
    expect(select).toHaveLength(1);
    expect(select.find('option')).toHaveLength(3);
    expect(select.find('option').first().prop('value')).toEqual('');
    expect(select.find('option').first().text()).toEqual(' ');
  });
  it('Skal rendre disabled select', () => {
    const wrapper = mountFieldInForm(<SelectField label="text" name="text" disabled selectValues={selectValues} />);
    expect(wrapper.find('label').text()).toEqual('text');
    const select = wrapper.find('select');
    expect(select).toHaveLength(1);
    expect(select.prop('disabled')).toBe(true);
  });
});
