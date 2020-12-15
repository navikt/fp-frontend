import React from 'react';
import { WrappedFieldMetaProps } from 'redux-form';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { inputMock, metaMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';

import renderNavField from './renderNavField';

const MockField = () => <div />;
const RenderedMockField = renderNavField(MockField);

const FORMATTED_MESSAGE = 'En formatert melding';

describe('renderNavField', () => {
  it('skal ikke vise feil i utgangspunktet', () => {
    const meta = { ...metaMock, submitFailed: false, error: FORMATTED_MESSAGE } as WrappedFieldMetaProps;

    const wrapper = shallow(<RenderedMockField input={inputMock} meta={meta} label="" />);
    const mockField = wrapper.find(MockField);

    expect(mockField).to.have.length(1);
    expect(mockField.at(0).prop('feil')).to.be.undefined;
  });

  it('skal vise feil hvis submit har feilet', () => {
    const meta = { ...metaMock, submitFailed: true, error: FORMATTED_MESSAGE } as WrappedFieldMetaProps;

    const wrapper = shallow(<RenderedMockField input={inputMock} meta={meta} label="" />);
    const mockField = wrapper.find(MockField);

    expect(mockField).to.have.length(1);
    expect(mockField.at(0).prop('feil')).to.eql(FORMATTED_MESSAGE);
  });
});
