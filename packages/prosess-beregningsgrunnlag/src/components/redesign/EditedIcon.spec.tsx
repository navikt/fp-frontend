import React from 'react';

import Image from '@fpsak-frontend/shared-components/src/Image';

import shallowWithIntl from '../../../i18n/intl-enzyme-test-helper-prosess-beregningsgrunnlag';
import EditedIcon from './EditedIcon';

jest.mock('react-intl', () => {
  const reactIntl = jest.requireActual('react-intl');
  const mockIntl = jest.requireActual('../../../i18n/intl-enzyme-test-helper-prosess-beregningsgrunnlag');
  return {
    ...reactIntl,
    useIntl: () => mockIntl.intlMock,
  };
});

describe('EditedIcon', () => {
  it('skal vise icon', () => {
    const wrapper = shallowWithIntl(
      <EditedIcon />,
    );
    const image = wrapper.find(Image);
    expect(image.props().alt).toEqual('Saksbehandler har endret feltets verdi');
    expect(image.props().tooltip).toEqual('Saksbehandler har endret feltets verdi');
  });
});
