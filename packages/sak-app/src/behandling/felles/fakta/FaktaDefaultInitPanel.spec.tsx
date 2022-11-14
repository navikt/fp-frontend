import React from 'react';
import { render, screen } from '@testing-library/react';
import { Aksjonspunkt } from '@navikt/ft-types';
import { BehandlingStatus } from '@navikt/ft-kodeverk';

import { createRequestApi, RestApiConfigBuilder, RestKey } from '@fpsak-frontend/rest-api';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { FaktaPanelCode } from '@fpsak-frontend/konstanter';
import { Behandling } from '@fpsak-frontend/types';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

import * as Felles from './useStandardFaktaPanelProps';
import FaktaDefaultInitPanel from './FaktaDefaultInitPanel';

const behandling = {
  uuid: '1',
  versjon: 2,
  status: BehandlingStatus.OPPRETTET,
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
      definisjon: aksjonspunktCodes.BEHANDLE_KLAGE_NFP,
      erAktivt: true,
      kanLoses: true,
    }] as Aksjonspunkt[],
    harApneAksjonspunkter: true,
    alleMerknaderFraBeslutter: {},
    setFormData: () => undefined,
    submittable: true,
  }));

  it('skal rendre panel korrekt', async () => {
    const BEHANDLING_KEY = new RestKey<Behandling, void>('BEHANDLING_KEY');

    const endpoints = new RestApiConfigBuilder()
      .withRel('behandling', BEHANDLING_KEY)
      .build();

    const requestMock = createRequestApi(endpoints);

    render(
      <FaktaDefaultInitPanel
        valgtFaktaSteg="default"
        behandling={behandling}
        registrerFaktaPanel={() => {}}
        requestApi={requestMock}
        skalPanelVisesIMeny={() => true}
        renderPanel={() => <div>Dette er et panel</div>}
        faktaPanelKode={FaktaPanelCode.AKTIVITETSKRAV}
        faktaPanelMenyTekst="Dette er en tekst"
      />,
    );

    expect(await screen.findByText('Dette er et panel')).toBeInTheDocument();
  });
});
