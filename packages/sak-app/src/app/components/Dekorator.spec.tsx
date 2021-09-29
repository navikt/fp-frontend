import React from 'react';
import { render, screen } from '@testing-library/react';

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';

import Dekorator from './Dekorator';
import { requestApi, FpsakApiKeys } from '../../data/fpsakApi';

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

describe('<Dekorator>', () => {
  it('skal vise søkeskjermbildet, men ikke systemstatuser', async () => {
    const data = [
      { key: FpsakApiKeys.NAV_ANSATT.name, global: true, data: navAnsatt },
    ];

    render(
      <RestApiMock data={data} requestApi={requestApi}>
        <Dekorator
          queryStrings={{}}
          setSiteHeight={jest.fn()}
        />
      </RestApiMock>,
    );

    expect(await screen.findByText('Behandlingen settes på vent med frist')).toBeInTheDocument();
  });

  it('skal vise feilmeldinger', async () => {
    const data = [
      { key: FpsakApiKeys.NAV_ANSATT.name, global: true, data: navAnsatt },
    ];

    // contextStubHistory = sinon.stub(useRestApiError, 'default').returns([{
    //   type: EventType.REQUEST_ERROR,
    //   feilmelding: 'Dette er en feilmelding',
    // }]);

    render(
      <RestApiMock data={data} requestApi={requestApi}>
        <Dekorator
          queryStrings={{}}
          setSiteHeight={jest.fn()}
        />
      </RestApiMock>,
    );

    expect(await screen.findByText('Behandlingen settes på vent med frist')).toBeInTheDocument();
    // expect(header.prop('errorMessages')).toEqual([{
    //   type: EventType.REQUEST_ERROR,
    //   feilmelding: 'Dette er en feilmelding',
    // }]);
  });
});
