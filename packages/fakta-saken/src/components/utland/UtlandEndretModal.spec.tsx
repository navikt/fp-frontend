import React from 'react';
import sinon from 'sinon';
import { Hovedknapp } from 'nav-frontend-knapper';

import { shallowWithIntl, getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import messages from '../../../i18n/nb_NO.json';
import UtlandEndretModal from './UtlandEndretModal';

const intlMock = getIntlMock(messages);

describe('<UtlandEndretModal>', () => {
  it('skal vise rendre komponent korrekt og utføre klikk på knapp', () => {
    const lagreOgLukk = sinon.spy();

    const wrapper = shallowWithIntl(<UtlandEndretModal.WrappedComponent
      intl={intlMock}
      visModal
      lagreOgLukk={lagreOgLukk}
    />, messages);

    const knapp = wrapper.find(Hovedknapp);
    expect(knapp).toHaveLength(1);

    knapp.prop('onClick')({} as React.MouseEvent<any>);

    expect(lagreOgLukk.getCalls()).toHaveLength(1);
  });
});
