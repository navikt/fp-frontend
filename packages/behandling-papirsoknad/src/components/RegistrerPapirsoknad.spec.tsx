import React from 'react';
import sinon from 'sinon';
import { render, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import fagsakStatus from '@fpsak-frontend/kodeverk/src/fagsakStatus';
import { AlleKodeverk, Behandling, Fagsak } from '@fpsak-frontend/types';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

import RegistrerPapirsoknad from './RegistrerPapirsoknad';
import { requestPapirsoknadApi, PapirsoknadApiKeys } from '../data/papirsoknadApi';

import messages from '../../i18n/nb_NO.json';

const fagsak = {
  saksnummer: '123456',
  fagsakYtelseType: {
    kode: fagsakYtelseType.FORELDREPENGER,
    kodeverk: 'YTELSE_TYPE',
  },
  status: {
    kode: fagsakStatus.UNDER_BEHANDLING,
    kodeverk: 'FAGSAK_STATUS',
  },
} as Fagsak;

const behandling = {
  uuid: '1',
  versjon: 2,
  status: {
    kode: behandlingStatus.BEHANDLING_UTREDES,
    kodeverk: 'BEHANDLING_STATUS',
  },
  type: {
    kode: behandlingType.FORSTEGANGSSOKNAD,
    kodeverk: 'BEHANDLING_TYPE',
  },
  behandlingPaaVent: false,
  behandlingHenlagt: false,
} as Behandling;

const rettigheter = {
  writeAccess: {
    isEnabled: true,
    employeeHasAccess: true,
  },
  kanOverstyreAccess: {
    isEnabled: true,
    employeeHasAccess: true,
  },
};

// @ts-ignore
const kodeverk = alleKodeverk as AlleKodeverk;

describe('<RegistrerPapirsoknad>', () => {
  it('skal rendre komponenter', async () => {
    const data = [
      { key: PapirsoknadApiKeys.AKSJONSPUNKTER.name, data: [] },
    ];
    render(
      <IntlProvider locale="nb-NO" messages={messages}>
        <RestApiMock data={data} requestApi={requestPapirsoknadApi}>
          <RegistrerPapirsoknad
            fagsak={fagsak}
            fagsakPersonnummer="12343541"
            behandling={behandling}
            kodeverk={kodeverk}
            rettigheter={rettigheter}
            hentBehandling={sinon.spy()}
            lagreAksjonspunkt={sinon.spy()}
          />
        </RestApiMock>
      </IntlProvider>,
    );

    expect(await screen.findByText('Registrere søknad')).toBeInTheDocument();
    expect(screen.getByText('Registrer inn alle opplysninger fra papirsøknaden')).toBeInTheDocument();
  });

  it('skal rendre komponenter som readonly når veileder', async () => {
    const data = [
      { key: PapirsoknadApiKeys.AKSJONSPUNKTER.name, data: [] },
    ];
    render(
      <IntlProvider locale="nb-NO" messages={messages}>
        <RestApiMock data={data} requestApi={requestPapirsoknadApi}>
          <RegistrerPapirsoknad
            fagsak={fagsak}
            fagsakPersonnummer="12343541"
            behandling={behandling}
            kodeverk={kodeverk}
            rettigheter={{
              ...rettigheter,
              writeAccess: {
                isEnabled: false,
                employeeHasAccess: false,
              },
            }}
            hentBehandling={sinon.spy()}
            lagreAksjonspunkt={sinon.spy()}
          />
        </RestApiMock>
      </IntlProvider>,
    );

    expect(await screen.findByText('Registrere søknad')).toBeInTheDocument();
    expect(screen.queryByText('Registrer inn alle opplysninger fra papirsøknaden')).not.toBeInTheDocument();
  });

  it('skal rendre komponenter som readonly når behandling er satt på vent', async () => {
    const data = [
      { key: PapirsoknadApiKeys.AKSJONSPUNKTER.name, data: [] },
    ];
    render(
      <IntlProvider locale="nb-NO" messages={messages}>
        <RestApiMock data={data} requestApi={requestPapirsoknadApi}>
          <RegistrerPapirsoknad
            fagsak={fagsak}
            fagsakPersonnummer="12343541"
            behandling={{
              ...behandling,
              behandlingPaaVent: true,
            } as Behandling}
            kodeverk={kodeverk}
            rettigheter={rettigheter}
            hentBehandling={sinon.spy()}
            lagreAksjonspunkt={sinon.spy()}
          />
        </RestApiMock>
      </IntlProvider>,
    );

    expect(await screen.findByText('Registrere søknad')).toBeInTheDocument();
    expect(screen.queryByText('Registrer inn alle opplysninger fra papirsøknaden')).not.toBeInTheDocument();
  });
});
