import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { intlWithMessages } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { TextAreaField } from '@fpsak-frontend/form';
import { Aksjonspunkt } from '@fpsak-frontend/types';

import ProsessStegBegrunnelseTextField from './ProsessStegBegrunnelseTextField';
import * as useIntl from './useIntl';

describe('<ProsessStegBegrunnelseTextField>', () => {
  let contextStub;
  beforeEach(() => {
    contextStub = sinon.stub(useIntl, 'default').callsFake(() => intlWithMessages());
  });

  afterEach(() => {
    contextStub.restore();
  });

  it('skal vise tekstfelt som ikke readOnly', () => {
    const wrapper = shallow(<ProsessStegBegrunnelseTextField
      readOnly={false}
    />);

    const textField = wrapper.find(TextAreaField);
    expect(textField).to.have.length(1);
    expect(textField.prop('readOnly')).is.false;
  });

  it('skal vise tekstfelt som readOnly', () => {
    const wrapper = shallow(<ProsessStegBegrunnelseTextField
      readOnly
    />);

    const textField = wrapper.find(TextAreaField);
    expect(textField).to.have.length(1);
    expect(textField.prop('readOnly')).is.true;
  });

  it('skal vise default tekstkode', () => {
    const wrapper = shallow(<ProsessStegBegrunnelseTextField
      readOnly={false}
    />);

    const textField = wrapper.find(TextAreaField);
    expect(textField.prop('label')).is.eql('ProsessStegBegrunnelseTextField.ExplanationRequired');
  });

  it('skal vise gitt tekstkode', () => {
    const wrapper = shallow(<ProsessStegBegrunnelseTextField
      readOnly={false}
      textCode="Klage.ResolveKlage.ExplanationRequiredBrev"
    />);

    const textField = wrapper.find(TextAreaField);
    expect(textField.prop('label')).is.eql('Begrunnelse/tekst i brev');
  });

  it('skal hente begrunnelse fra første aksjonspunkt', () => {
    const aksjonspunkter = [{
      begrunnelse: 'test &amp;',
    }] as Aksjonspunkt[];
    const initalValues = ProsessStegBegrunnelseTextField.buildInitialValues(aksjonspunkter);
    expect(initalValues).is.eql({ begrunnelse: 'test &' });
  });
});
