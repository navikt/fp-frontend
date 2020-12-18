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
    const links = header.prop('iconLinks');
    expect(links).toHaveLength(2);
    expect(links[0].url).toEqual('https://lovdata.no/pro/sso/login/nav');
    expect(links[1].url).toEqual('https://navno.sharepoint.com/sites/fag-og-ytelser-'
      + 'fagsystemer/SitePages/Saksbehandlingsl%C3%B8sningen-for-foreldrepenger-og-engangst%C3%B8nad.aspx');
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
