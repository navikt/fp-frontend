import React from 'react';
import { RawIntlProvider } from 'react-intl';
import { createIntl } from '@navikt/ft-utils';
import { render, screen } from '@testing-library/react';

import EventType from '@fpsak-frontend/rest-api/src/requestApi/eventType';
import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';

import Dekorator from './Dekorator';
import { requestApi, FpsakApiKeys } from '../../data/fpsakApi';
import messages from '../../../i18n/nb_NO.json';

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

const intl = createIntl(messages);

describe('<Dekorator>', () => {
  it('skal vise dekorator', async () => {
    const data = [
      { key: FpsakApiKeys.NAV_ANSATT.name, global: true, data: navAnsatt },
    ];

    render(
      <RawIntlProvider value={intl}>
        <RestApiMock data={data} requestApi={requestApi}>
          <Dekorator
            queryStrings={{}}
            setSiteHeight={jest.fn()}
          />
        </RestApiMock>
      </RawIntlProvider>,
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
      <RawIntlProvider value={intl}>
        <RestApiMock data={data} requestApi={requestApi} errors={errors}>
          <Dekorator
            queryStrings={{}}
            setSiteHeight={jest.fn()}
          />
        </RestApiMock>
      </RawIntlProvider>,
    );

    expect(await screen.findByText('Dette er en feilmelding')).toBeInTheDocument();
  });
});
