import React from 'react';
import { render, screen } from '@testing-library/react';

import { createRequestApi, RestApiConfigBuilder, RestKey } from '@fpsak-frontend/rest-api';
import { Behandling, Aksjonspunkt } from '@fpsak-frontend/types';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import { FaktaPanelCode } from '@fpsak-frontend/konstanter';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

import * as Felles from '../../utils/fakta/useStandardFaktaPanelProps';
import FaktaDefaultInitPanel from './FaktaDefaultInitPanel';

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

describe('<FaktaDefaultInitPanel>', () => {
  const submitCallback = jest.fn();
  jest.spyOn(Felles, 'default').mockImplementation(() => ({
    behandling,
    submitCallback,
    alleKodeverk: kodeverk,
    readOnly: false,
    aksjonspunkter: [{
      definisjon: {
        kode: aksjonspunktCodes.MANUELL_VURDERING_AV_ANKE,
        kodeverk: '',
      },
      erAktivt: true,
      kanLoses: true,
    }] as Aksjonspunkt[],
    harApneAksjonspunkter: true,
    alleMerknaderFraBeslutter: {},
    setFormData: () => undefined,
    submittable: true,
  }));

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
        <FaktaDefaultInitPanel
          valgtFaktaSteg="default"
          behandlingVersjon={1}
          registrerFaktaPanel={() => {}}
          requestApi={requestMock}
          initEndepunkter={[AKSJONSPUNKTER_KEY]}
          skalPanelVisesIMeny={() => true}
          renderPanel={() => <div>Dette er et panel</div>}
          faktaPanelKode={FaktaPanelCode.AKTIVITETSKRAV}
          faktaPanelMenyTekst="Dette er en tekst"
        />
      </RestApiMock>,
    );

    expect(await screen.findByText('Dette er et panel')).toBeInTheDocument();
  });
});
