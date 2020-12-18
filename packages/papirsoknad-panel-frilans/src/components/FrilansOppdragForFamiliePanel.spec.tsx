import React from 'react';
import { shallow } from 'enzyme';

import { ArrowBox } from '@fpsak-frontend/shared-components';

import { FrilansOppdragForFamiliePanelImpl } from './FrilansOppdragForFamiliePanel';

describe('<FrilansOppdragForFamiliePanelImpl>', () => {
  it('Skal rendre uten perioder når checkbox ikke er valgt', () => {
    const wrapper = shallow(<FrilansOppdragForFamiliePanelImpl
      readOnly={false}
      formName="test"
      namePrefix="test"
    />);
    expect(wrapper.find(ArrowBox)).toHaveLength(0);
  });

  it('Skal rendre perioder når checkbox er valgt', () => {
    const wrapper = shallow(<FrilansOppdragForFamiliePanelImpl
      readOnly={false}
      harHattOppdragForFamilie
      formName="test"
      namePrefix="test"
    />);
    expect(wrapper.find(ArrowBox)).toHaveLength(1);
  });
});
