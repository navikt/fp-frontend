import React from 'react';
import { shallow } from 'enzyme';

import { CheckboxField } from '@fpsak-frontend/form';

import { VirksomhetTypeNaringPanel } from './VirksomhetTypeNaringPanel';

describe('<VirksomhetTypeNaringPanel>', () => {
  const naringTyper = [
    { navn: 'Fiske', kode: 'FISKE', kodeverk: '' },
    { navn: 'Frilanser', kode: 'FRILANSER', kodeverk: '' },
  ];

  it('skal rendre korrekt ved default props', () => {
    const wrapper = shallow(<VirksomhetTypeNaringPanel
      naringvirksomhetTyper={naringTyper}
      readOnly={false}
      alleKodeverk={{}}
    />);

    const undertekst = wrapper.find('Undertekst');
    expect(undertekst).toHaveLength(1);

    const checkboxes = wrapper.find(CheckboxField);
    expect(checkboxes).toHaveLength(2);
  });
});
