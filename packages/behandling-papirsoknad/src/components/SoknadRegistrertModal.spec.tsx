import React from 'react';
import { shallow } from 'enzyme';
import Modal from 'nav-frontend-modal';

import { intlMock } from '../../i18n/intl-enzyme-test-helper-behandling-papirsoknad';
import { SoknadRegistrertModal } from './SoknadRegistrertModal';

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
