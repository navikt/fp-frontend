import React from 'react';
import { shallow } from 'enzyme';

import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import messages from '../../../i18n/nb_NO.json';
import { PermisjonRettigheterPanel } from './PermisjonRettigheterPanel';

const readOnly = false;

const intlMock = getIntlMock(messages);

describe('<PermisjonRettigheterPanel>', () => {
  it('skal kun vise aleneomsrog radioknapper hvis søker velger har aleneomsorg', () => {
    const wrapper = shallow(<PermisjonRettigheterPanel
      readOnly={readOnly}
      intl={intlMock}
      sokerHarAleneomsorg
    />);
    expect(wrapper.find({ name: 'sokerHarAleneomsorg' })).toHaveLength(1);
    expect(wrapper.find({ name: 'denAndreForelderenHarRettPaForeldrepenger' })).toHaveLength(0);
  });

  it('skal vise radioknapper for "andre forelder har rett på foreldrepenger" hvis søker velger har ikke aleneomsorg', () => {
    const wrapper = shallow(<PermisjonRettigheterPanel
      readOnly={readOnly}
      intl={intlMock}
      sokerHarAleneomsorg={false}
    />);
    expect(wrapper.find({ name: 'sokerHarAleneomsorg' })).toHaveLength(1);
    expect(wrapper.find({ name: 'denAndreForelderenHarRettPaForeldrepenger' })).toHaveLength(1);
  });
});
