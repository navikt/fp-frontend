import React from 'react';
import { render, screen } from '@testing-library/react';

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import * as Felles from '@fpsak-frontend/behandling-felles/src/utils/prosess/useStandardProsessPanelProps';
import { createRequestApi, RestApiConfigBuilder, RestKey } from '@fpsak-frontend/rest-api';
import { Behandling, Aksjonspunkt } from '@fpsak-frontend/types';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

import ProsessDefaultInitPanel from './ProsessDefaultInitPanel';

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
      kode: aksjonspunktCodes.VURDER_FEILUTBETALING,
      kodeverk: '',
    },
    erAktivt: true,
    kanLoses: true,
  }] as Aksjonspunkt[],
  vilkar: [],
  isAksjonspunktOpen: true,
  setFormData: () => undefined,
};

describe('<ProsessDefaultInitPanel>', () => {
  jest.spyOn(Felles, 'default').mockImplementation(() => defaultProps);
  it('skal rendre panel korrekt', async () => {
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
        <ProsessDefaultInitPanel
          valgtProsessSteg="default"
          behandling={behandling}
          registrerProsessPanel={() => {}}
          requestApi={requestMock}
          initEndepunkter={[AKSJONSPUNKTER_KEY]}
          skalPanelVisesIMeny={() => true}
          renderPanel={() => <div>Dette er komponenten</div>}
          prosessPanelKode={ProsessStegCode.AVREGNING}
          prosessPanelMenyTekst="Dette er en tekst"
        />
      </RestApiMock>,
    );

    expect(await screen.findByText('Dette er komponenten')).toBeInTheDocument();
  });
});
