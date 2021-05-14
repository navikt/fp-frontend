import React from 'react';
import sinon from 'sinon';

import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import EndreBehandlendeEnhetModal from './components/EndreBehandlendeEnhetModal';
import MenyEndreBehandlendeEnhetIndex from './MenyEndreBehandlendeEnhetIndex';
import messages from '../i18n/nb_NO.json';

describe('<MenyEndreBehandlendeEnhetIndex>', () => {
  it('skal vise modal og så lagre ny enhet', () => {
    const nyBehandlendeEnhetCallback = sinon.spy();
    const lukkModalCallback = sinon.spy();

    const wrapper = shallowWithIntl(<MenyEndreBehandlendeEnhetIndex
      behandlingVersjon={1}
      behandlendeEnhetId="NAVV"
      behandlendeEnhetNavn="NAV Viken"
      nyBehandlendeEnhet={nyBehandlendeEnhetCallback}
      behandlendeEnheter={[{
        enhetId: 'NAVV',
        enhetNavn: 'NAV Viken',
      }, {
        enhetId: 'TEST',
        enhetNavn: 'TEST ENHET',
      }]}
      lukkModal={lukkModalCallback}
    />, messages);

    const modal = wrapper.find(EndreBehandlendeEnhetModal);
    expect(modal).toHaveLength(1);

    // @ts-ignore
    modal.prop('onSubmit')({
      nyEnhet: '0',
      begrunnelse: 'Dette er en begrunnelse',
    });

    const kall = nyBehandlendeEnhetCallback.getCalls();
    expect(kall).toHaveLength(1);
    expect(kall[0].args).toHaveLength(1);
    expect(kall[0].args[0]).toEqual({
      enhetNavn: 'TEST ENHET',
      enhetId: 'TEST',
      begrunnelse: 'Dette er en begrunnelse',
    });

    const lukkKall = lukkModalCallback.getCalls();
    expect(lukkKall).toHaveLength(1);
  });
});
