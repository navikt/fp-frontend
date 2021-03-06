import React from 'react';
import sinon, { SinonStub } from 'sinon';
import { shallow } from 'enzyme';

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

let contextStubHistory: SinonStub;
afterEach(() => {
  if (contextStubHistory) {
    contextStubHistory.restore();
  }
});

describe('<Dekorator>', () => {
  it('skal vise søkeskjermbildet, men ikke systemstatuser', () => {
    requestApi.mock(FpsakApiKeys.NAV_ANSATT.name, navAnsatt);

    const wrapper = shallow(<Dekorator
      queryStrings={{}}
      setSiteHeight={sinon.spy()}
    />);
    const header = wrapper.find(HeaderWithErrorPanel);
    expect(header.length).toBe(1);
  });

  it('skal vise feilmeldinger', () => {
    requestApi.mock(FpsakApiKeys.NAV_ANSATT.name, navAnsatt);

    contextStubHistory = sinon.stub(useRestApiError, 'default').returns([{
      type: EventType.REQUEST_ERROR,
      feilmelding: 'Dette er en feilmelding',
    }]);

    const wrapper = shallow(<Dekorator
      queryStrings={{}}
      setSiteHeight={sinon.spy()}
    />);
    const header = wrapper.find(HeaderWithErrorPanel);
    expect(header.prop('errorMessages')).toEqual([{
      type: EventType.REQUEST_ERROR,
      feilmelding: 'Dette er en feilmelding',
    }]);
  });
});
