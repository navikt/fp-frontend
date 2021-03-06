import React from 'react';
import sinon from 'sinon';

import { shallowWithIntl, getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { Normaltekst, Undertekst } from 'nav-frontend-typografi';
import ErrorMessageDetailsModal from './ErrorMessageDetailsModal';
import messages from '../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<ErrorMessageDetailsModal>', () => {
  it('skal vise feildetaljer', () => {
    const errorDetails = {
      feilmelding: 'Dette er feil',
      url: 'test',
    };
    const wrapper = shallowWithIntl(<ErrorMessageDetailsModal.WrappedComponent
      intl={intlMock}
      showModal={false}
      closeModalFn={sinon.spy()}
      errorDetails={errorDetails}
    />, messages);

    const undertekst = wrapper.find(Undertekst);
    expect(undertekst).toHaveLength(2);
    expect(undertekst.first().childAt(0).text()).toEqual('Feilmelding:');
    expect(undertekst.last().childAt(0).text()).toEqual('Url:');

    const normaltekst = wrapper.find(Normaltekst);
    expect(normaltekst).toHaveLength(2);
    expect(normaltekst.first().childAt(0).text()).toEqual('Dette er feil');
    expect(normaltekst.last().childAt(0).text()).toEqual('test');
  });
});
