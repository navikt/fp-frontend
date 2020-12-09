import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { Hovedknapp } from 'nav-frontend-knapper';
import Modal from 'nav-frontend-modal';

import shallowWithIntl from '../i18n/intl-enzyme-test-helper-shared-components';
import Image from './Image';

import AdvarselModal from './AdvarselModal';

describe('<AdvarselModal>', () => {
  it('skal rendre modal', () => {
    const wrapper = shallowWithIntl(
      <AdvarselModal
        bodyText="Åpne behandling"
        showModal
        submit={sinon.spy()}
      />,
    );

    const modal = wrapper.find(Modal);
    expect(modal).to.have.length(1);
    expect(modal.prop('isOpen')).is.true;
    expect(modal.prop('contentLabel')).is.eql('Åpne behandling');

    const image = wrapper.find(Image);
    expect(image).to.have.length(1);
    expect(image.prop('alt')).to.have.length.above(3);

    const knapp = wrapper.find(Hovedknapp);
    expect(knapp).to.have.length(1);
    expect(knapp.childAt(0).text()).is.eql('OK');
  });
});
