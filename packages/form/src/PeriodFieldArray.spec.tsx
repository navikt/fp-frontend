import React from 'react';
import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { metaMock, MockFields } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { Image } from '@fpsak-frontend/shared-components';
import PeriodFieldArray from './PeriodFieldArray';
import messages from '../i18n/nb_NO.json';

const readOnly = false;

describe('<PeriodFieldArray>', () => {
  it('skal vise en rad og knapp for å legge til periode', () => {
    const fields = new MockFields('perioder', 1);
    const wrapper = shallowWithIntl(
      <PeriodFieldArray
        fields={fields}
        meta={metaMock}
        readOnly={readOnly}
      >
        {() => <span key="1">test</span>}
      </PeriodFieldArray>, messages,
    );

    const span = wrapper.find('span');
    expect(span).toHaveLength(1);

    const div = wrapper.find('div');
    expect(div).toHaveLength(1);
    expect(div.find(Image)).toHaveLength(1);
  });

  it('skal vise to rader der kun rad nummer to har sletteknapp', () => {
    const fields = new MockFields('perioder', 2);

    const wrapper = shallowWithIntl(
      <PeriodFieldArray
        fields={fields}
        meta={metaMock}
        readOnly={readOnly}
      >
        {(_periodeElementFieldId, index, getRemoveButton: () => void) => (
          <div key={index} id={`id_${index}`}>
            test
            {getRemoveButton()}
          </div>
        )}
      </PeriodFieldArray>, messages,
    );
    const row1 = wrapper.find('#id_0');
    expect(row1).toHaveLength(1);
    expect(row1.childAt(0).text()).toEqual('test');

    const row2 = wrapper.find('#id_1');
    expect(row2).toHaveLength(1);
    expect(row2.find('button')).toHaveLength(1);

    expect(wrapper.find('#id_2')).toHaveLength(0);
  });

  it('skal legge til periode ved klikk på legg til periode', () => {
    const fields = new MockFields('perioder', 1);

    const wrapper = shallowWithIntl(
      <PeriodFieldArray
        fields={fields}
        meta={metaMock}
        readOnly={readOnly}
      >
        {() => <span key="1">test</span>}
      </PeriodFieldArray>, messages,
    );

    const addDiv = wrapper.find('div');
    expect(addDiv).toHaveLength(1);

    addDiv.simulate('click');

    expect(fields).toHaveLength(2);
  });

  it('skal slette periode ved klikk på sletteknapp', () => {
    const fields = new MockFields('perioder', 2);

    const wrapper = shallowWithIntl(
      <PeriodFieldArray
        fields={fields}
        meta={metaMock}
        readOnly={readOnly}
      >
        {(_periodeElementFieldId, index, getRemoveButton: () => void) => (
          <div key={index} id={`id_${index}`}>
            test
            {getRemoveButton()}
          </div>
        )}
      </PeriodFieldArray>, messages,
    );

    const btn = wrapper.find('button');
    expect(btn).toHaveLength(1);

    btn.simulate('click');

    expect(fields).toHaveLength(1);
  });

  it('skal ikke vise knapp for å legge til rad', () => {
    const fields = new MockFields('perioder', 1);

    const wrapper = shallowWithIntl(
      <PeriodFieldArray
        fields={fields}
        shouldShowAddButton={false}
        readOnly={readOnly}
      >
        {() => <span key="1">test</span>}
      </PeriodFieldArray>, messages,
    );

    expect(wrapper.find(Image)).toHaveLength(0);
    expect(wrapper.find('button')).toHaveLength(0);
  });

  it('skal vise knapp for å legge til i steden for bildelenke', () => {
    const fields = new MockFields('perioder', 1);

    const wrapper = shallowWithIntl(
      <PeriodFieldArray
        fields={fields}
        createAddButtonInsteadOfImageLink
        readOnly={readOnly}
      >
        {() => <span key="1">test</span>}
      </PeriodFieldArray>, messages,
    );

    expect(wrapper.find(Image)).toHaveLength(0);
    expect(wrapper.find('button')).toHaveLength(1);
  });
});
