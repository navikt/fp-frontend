import React from 'react';
import { render, screen } from '@testing-library/react';

import EventType from '@fpsak-frontend/rest-api/src/requestApi/eventType';
import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';

import Dekorator from './Dekorator';
import { requestApi, FpsakApiKeys } from '../../data/fpsakApi';

const navAnsatt = {
  brukernavn: 'Peder',
  kanBehandleKode6: false,
  kanBehandleKode7: false,
  kanBehandleKodeEgenAnsatt: false,
  kanBeslutte: true,
  kanOverstyre: false,
  kanSaksbehandle: true,
  kanVeilede: false,
  navn: 'Peder Pjokk',
};

describe('<Dekorator>', () => {
  it('skal vise dekorator', async () => {
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

    expect(await screen.findByText('Svangerskap, fødsel og adopsjon')).toBeInTheDocument();
  });

  it('skal vise feilmeldinger', async () => {
    const data = [
      { key: FpsakApiKeys.NAV_ANSATT.name, global: true, data: navAnsatt },
    ];

    const errors = [{
      type: EventType.REQUEST_ERROR,
      feilmelding: 'Dette er en feilmelding',
    }];

    render(
      <RestApiMock data={data} requestApi={requestApi} errors={errors}>
        <Dekorator
          queryStrings={{}}
          setSiteHeight={jest.fn()}
        />
      </RestApiMock>,
    );

    expect(await screen.findByText('Dette er en feilmelding')).toBeInTheDocument();
    // expect(header.prop('errorMessages')).toEqual([{
    //   type: EventType.REQUEST_ERROR,
    //   feilmelding: 'Dette er en feilmelding',
    // }]);
  });
});
