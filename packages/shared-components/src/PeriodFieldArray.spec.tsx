import React from 'react';
import { expect } from 'chai';
import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { metaMock, MockFields } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import Image from './Image';
import PeriodFieldArray from './PeriodFieldArray';

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
        {() => <span>test</span>}
      </PeriodFieldArray>,
    );

    const span = wrapper.find('span');
    expect(span).to.have.length(1);

    const div = wrapper.find('div');
    expect(div).to.have.length(1);
    expect(div.find(Image)).to.have.length(1);
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
      </PeriodFieldArray>,
    );
    const row1 = wrapper.find('#id_0');
    expect(row1).has.length(1);
    expect(row1.childAt(0).text()).is.eql('test');

    const row2 = wrapper.find('#id_1');
    expect(row2).has.length(1);
    expect(row2.find('button')).has.length(1);

    expect(wrapper.find('#id_2')).has.length(0);
  });

  it('skal legge til periode ved klikk på legg til periode', () => {
    const fields = new MockFields('perioder', 1);

    const wrapper = shallowWithIntl(
      <PeriodFieldArray
        fields={fields}
        meta={metaMock}
        readOnly={readOnly}
      >
        {() => <span>test</span>}
      </PeriodFieldArray>,
    );

    const addDiv = wrapper.find('div');
    expect(addDiv).has.length(1);

    addDiv.simulate('click');

    expect(fields).has.length(2);
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
      </PeriodFieldArray>,
    );

    const btn = wrapper.find('button');
    expect(btn).has.length(1);

    btn.simulate('click');

    expect(fields).has.length(1);
  });

  it('skal ikke vise knapp for å legge til rad', () => {
    const fields = new MockFields('perioder', 1);

    const wrapper = shallowWithIntl(
      <PeriodFieldArray
        fields={fields}
        shouldShowAddButton={false}
        readOnly={readOnly}
      >
        {() => <span>test</span>}
      </PeriodFieldArray>,
    );

    expect(wrapper.find(Image)).has.length(0);
    expect(wrapper.find('button')).has.length(0);
  });

  it('skal vise knapp for å legge til i steden for bildelenke', () => {
    const fields = new MockFields('perioder', 1);

    const wrapper = shallowWithIntl(
      <PeriodFieldArray
        fields={fields}
        createAddButtonInsteadOfImageLink
        readOnly={readOnly}
      >
        {() => <span>test</span>}
      </PeriodFieldArray>,
    );

    expect(wrapper.find(Image)).has.length(0);
    expect(wrapper.find('button')).has.length(1);
  });
});
