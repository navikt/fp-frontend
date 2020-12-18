import React from 'react';

import Image from '@fpsak-frontend/shared-components/src/Image';

import { mountWithIntl } from '../../../i18n/intl-enzyme-test-helper-prosess-beregningsgrunnlag';
import EditedIcon from './EditedIcon';

describe('EditedIcon', () => {
  it('skal vise icon', () => {
    const wrapper = mountWithIntl(
      <EditedIcon />,
    );
    const komponent = wrapper.find('EditedIcon');
    expect(komponent.length).toBe(1);
    const image = komponent.find(Image);
    expect(image.props().alt.length).toBeGreaterThan(10);
    expect(image.props().tooltip.length).toBeGreaterThan(10);
  });
});
