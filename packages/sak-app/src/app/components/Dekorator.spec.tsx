import React from 'react';
import sinon from 'sinon';

import { intlMock, shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import HeaderWithErrorPanel from '@fpsak-frontend/sak-dekorator';
import EventType from '@fpsak-frontend/rest-api/src/requestApi/eventType';
import * as useRestApiError from '@fpsak-frontend/rest-api-hooks/src/error/useRestApiError';

import { requestApi, FpsakApiKeys } from '../../data/fpsakApi';
import Dekorator from './Dekorator';

const navAnsatt = {
  brukernavn: 'Test',
  kanBehandleKode6: false,
  kanBehandleKode7: false,
  kanBehandleKodeEgenAnsatt: false,
  kanBeslutte: true,
  kanOverstyre: false,
  kanSaksbehandle: true,
  kanVeilede: false,
  navn: 'Test',
};

let contextStubHistory;
afterEach(() => {
  if (contextStubHistory) {
    contextStubHistory.restore();
  }
});

describe('<Dekorator>', () => {
  it('skal vise søkeskjermbildet, men ikke systemstatuser', () => {
    requestApi.mock(FpsakApiKeys.NAV_ANSATT, navAnsatt);

    const wrapper = shallowWithIntl(<Dekorator.WrappedComponent
      intl={intlMock}
      queryStrings={{}}
      setSiteHeight={sinon.spy()}
    />);
    const header = wrapper.find(HeaderWithErrorPanel);
    expect(header.length).toBe(1);
    expect(header.prop('iconLinks')).toBeInstanceOf('array');

    header.prop('iconLinks')
      .forEach((iconLink) => {
        expect(iconLink.url)
          .to
          .be
          .a('string').toMatch(// eslint-disable-next-line max-len
            /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/,
          );
      });
  });

  it('skal vise feilmeldinger', () => {
    requestApi.mock(FpsakApiKeys.NAV_ANSATT, navAnsatt);

    contextStubHistory = sinon.stub(useRestApiError, 'default').returns([{
      type: EventType.REQUEST_ERROR,
      feilmelding: 'Dette er en feilmelding',
    }]);

    const wrapper = shallowWithIntl(<Dekorator.WrappedComponent
      intl={intlMock}
      queryStrings={{}}
      setSiteHeight={sinon.spy()}
    />);
    const header = wrapper.find(HeaderWithErrorPanel);
    expect(header.prop('errorMessages')).toEqual([{
      message: 'Dette er en feilmelding',
      additionalInfo: undefined,
    }]);
  });
});
