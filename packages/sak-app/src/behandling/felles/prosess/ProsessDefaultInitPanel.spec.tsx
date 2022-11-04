import React from 'react';
import { render, screen } from '@testing-library/react';
import { Aksjonspunkt } from '@navikt/ft-types';
import { BehandlingStatus, VilkarUtfallType } from '@navikt/ft-kodeverk';

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import { createRequestApi, RestApiConfigBuilder, RestKey } from '@fpsak-frontend/rest-api';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import { Behandling } from '@fpsak-frontend/types';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

import * as Felles from './useStandardProsessPanelProps';
import ProsessDefaultInitPanel from './ProsessDefaultInitPanel';

const behandling = {
  uuid: '1',
  versjon: 2,
  status: BehandlingStatus.OPPRETTET,
  behandlingPaaVent: false,
} as Behandling;

// @ts-ignore Fiks
const kodeverk = alleKodeverk as AlleKodeverk;

const defaultProps = {
  behandling,
  alleMerknaderFraBeslutter: {},
  submitCallback: jest.fn(),
  status: VilkarUtfallType.IKKE_VURDERT,
  alleKodeverk: kodeverk,
  isReadOnly: false,
  readOnlySubmitButton: false,
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.VURDER_FEILUTBETALING,
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
    const BEHANDLING_KEY = new RestKey<Behandling, void>('BEHANDLING_KEY');

    const endpoints = new RestApiConfigBuilder()
      .withRel('behandling', BEHANDLING_KEY)
      .build();

    const requestMock = createRequestApi(endpoints);

    const data = [
      { key: BEHANDLING_KEY.name, data: [] },
    ];

    render(
      <RestApiMock data={data} requestApi={requestMock}>
        <ProsessDefaultInitPanel
          valgtProsessSteg="default"
          behandling={behandling}
          registrerProsessPanel={() => {}}
          requestApi={requestMock}
          initEndepunkter={[BEHANDLING_KEY]}
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
