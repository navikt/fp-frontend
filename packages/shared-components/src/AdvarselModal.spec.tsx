import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { Hovedknapp } from 'nav-frontend-knapper';
import Modal from 'nav-frontend-modal';

import Image from './Image';

import AdvarselModal from './AdvarselModal';

describe('<AdvarselModal>', () => {
  it('skal rendre modal', () => {
    const wrapper = shallow(
      <AdvarselModal
        bodyText="Åpne behandling"
        showModal
        submit={sinon.spy()}
      />,
    );

    const modal = wrapper.find(Modal);
    expect(modal).toHaveLength(1);
    expect(modal.prop('isOpen')).toBe(true);
    expect(modal.prop('contentLabel')).toEqual('Åpne behandling');

    const image = wrapper.find(Image);
    expect(image).toHaveLength(1);
    expect(image.prop('alt')).toEqual('Åpne behandling');

    const knapp = wrapper.find(Hovedknapp);
    expect(knapp).toHaveLength(1);
    expect(knapp.childAt(0).text()).toEqual('OK');
  });
});
