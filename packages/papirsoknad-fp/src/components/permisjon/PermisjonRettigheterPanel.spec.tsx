import React from 'react';

import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import shallowWithIntl from '../../../i18n/intl-enzyme-test-helper-papirsoknad-fp';
import { PermisjonRettigheterPanel } from './PermisjonRettigheterPanel';

const readOnly = false;

describe('<PermisjonRettigheterPanel>', () => {
  it('skal kun vise aleneomsrog radioknapper hvis søker velger har aleneomsorg', () => {
    const wrapper = shallowWithIntl(<PermisjonRettigheterPanel
      readOnly={readOnly}
      intl={intlMock}
      sokerHarAleneomsorg
    />);
    expect(wrapper.find({ name: 'sokerHarAleneomsorg' })).toHaveLength(1);
    expect(wrapper.find({ name: 'denAndreForelderenHarRettPaForeldrepenger' })).toHaveLength(0);
  });

  it('skal vise radioknapper for "andre forelder har rett på foreldrepenger" hvis søker velger har ikke aleneomsorg', () => {
    const wrapper = shallowWithIntl(<PermisjonRettigheterPanel
      readOnly={readOnly}
      intl={intlMock}
      sokerHarAleneomsorg={false}
    />);
    expect(wrapper.find({ name: 'sokerHarAleneomsorg' })).toHaveLength(1);
    expect(wrapper.find({ name: 'denAndreForelderenHarRettPaForeldrepenger' })).toHaveLength(1);
  });
});
