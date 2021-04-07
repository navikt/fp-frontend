import React from 'react';
import { shallow } from 'enzyme';
import Modal from 'nav-frontend-modal';

import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import messages from '../../i18n/nb_NO.json';
import { SoknadRegistrertModal } from './SoknadRegistrertModal';

const intlMock = getIntlMock(messages);

describe('<SoknadRegistrertModal>', () => {
  it('skal vise modal for registrert søknad', () => {
    const wrapper = shallow(<SoknadRegistrertModal
      isOpen
      intl={intlMock}
    />);

    expect(wrapper.find(Modal).prop('isOpen')).toBe(true);
    expect(wrapper.find('AlertStripeSuksess')).toHaveLength(1);
    expect(wrapper.find('Hovedknapp')).toHaveLength(1);
  });
});
