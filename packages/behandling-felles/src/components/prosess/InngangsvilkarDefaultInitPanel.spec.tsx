import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import * as Felles from '@fpsak-frontend/behandling-felles/src/utils/prosess/useStandardProsessPanelProps';
import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import { createRequestApi, RestApiConfigBuilder, RestKey } from '@fpsak-frontend/rest-api';
import { Behandling, Vilkar, Aksjonspunkt } from '@fpsak-frontend/types';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

import InngangsvilkarDefaultInitPanel from './InngangsvilkarDefaultInitPanel';

const behandling = {
  uuid: '1',
  versjon: 2,
  status: {
    kode: behandlingStatus.OPPRETTET,
    kodeverk: '',
  },
  behandlingPaaVent: false,
} as Behandling;

// @ts-ignore Fiks
const kodeverk = alleKodeverk as AlleKodeverk;

const defaultProps = {
  behandling,
  alleMerknaderFraBeslutter: {},
  submitCallback: jest.fn(),
  status: vilkarUtfallType.IKKE_VURDERT,
  alleKodeverk: kodeverk,
  isReadOnly: false,
  readOnlySubmitButton: false,
  aksjonspunkter: [{
    definisjon: {
      kode: aksjonspunktCodes.MANUELL_VURDERING_AV_ANKE,
      kodeverk: '',
    },
    erAktivt: true,
    kanLoses: true,
  }] as Aksjonspunkt[],
  vilkar: [],
  isAksjonspunktOpen: true,
  setFormData: () => undefined,
};

afterAll(() => {
  jest.clearAllMocks();
});

describe('<InngangsvilkarDefaultInitPanel>', () => {
  it('skal ikke vise panel når en ikke har åpne aksjonspunkter', async () => {
    jest.spyOn(Felles, 'default').mockImplementation(() => ({
      ...defaultProps,
      aksjonspunkter: [] as Aksjonspunkt[],
    }));
    const AKSJONSPUNKTER_KEY = new RestKey<Aksjonspunkt[], void>('AKSJONSPUNKTER_KEY');

    const endpoints = new RestApiConfigBuilder()
      .withRel('aksjonspunkter', AKSJONSPUNKTER_KEY)
      .build();

    const requestMock = createRequestApi(endpoints);

    const data = [
      { key: AKSJONSPUNKTER_KEY.name, data: [] },
    ];

    render(
      <RestApiMock data={data} requestApi={requestMock}>
        <InngangsvilkarDefaultInitPanel
          erPanelValgt
          behandlingVersjon={1}
          registrerInngangsvilkarPanel={() => {}}
          requestApi={requestMock}
          initEndepunkter={[AKSJONSPUNKTER_KEY]}
          renderPanel={() => <div>Dette er komponenten</div>}
          inngangsvilkarPanelKode="test"
          hentInngangsvilkarPanelTekst={() => 'test'}
          harInngangsvilkarApentAksjonspunkt={false}
        />
      </RestApiMock>,
    );

    await waitFor(() => expect(screen.queryByText('Dette er komponenten')).not.toBeInTheDocument());
  });

  it('skal vise panel', async () => {
    jest.spyOn(Felles, 'default').mockImplementation(() => defaultProps);
    const vilkar = [{
      vilkarType: {
        kode: vilkarType.MEDLEMSKAPSVILKARET,
        kodeverk: '',
      },
    } as Vilkar];
    const aksjonspunkter = [{
      definisjon: {
        kode: aksjonspunktCodes.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR,
        kodeverk: '',
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
        kodeverk: '',
      },
      kanLoses: true,
      erAktivt: true,
    }] as Aksjonspunkt[];

    const AKSJONSPUNKTER_KEY = new RestKey<Aksjonspunkt[], void>('AKSJONSPUNKTER');
    const VILKAR_KEY = new RestKey<Vilkar[], void>('VILKAR');

    const endpoints = new RestApiConfigBuilder()
      .withRel('aksjonspunkter', AKSJONSPUNKTER_KEY)
      .withRel('vilkar', VILKAR_KEY)
      .build();

    const requestMock = createRequestApi(endpoints);

    const data = [
      { key: AKSJONSPUNKTER_KEY.name, data: aksjonspunkter },
      { key: VILKAR_KEY.name, data: vilkar },
    ];

    render(
      <RestApiMock data={data} requestApi={requestMock}>
        <InngangsvilkarDefaultInitPanel
          erPanelValgt
          behandlingVersjon={1}
          registrerInngangsvilkarPanel={() => {}}
          requestApi={requestMock}
          initEndepunkter={[AKSJONSPUNKTER_KEY, VILKAR_KEY]}
          aksjonspunktKoder={[aksjonspunktCodes.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR]}
          renderPanel={() => <div>Dette er komponenten</div>}
          inngangsvilkarPanelKode="test"
          hentInngangsvilkarPanelTekst={() => 'test'}
          harInngangsvilkarApentAksjonspunkt={false}
        />
      </RestApiMock>,
    );

    expect(await screen.findByText('Dette er komponenten')).toBeInTheDocument();
  });
});
