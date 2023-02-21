import React from 'react';
import { render, screen } from '@testing-library/react';
import { Aksjonspunkt } from '@navikt/ft-types';
import { BehandlingStatus } from '@navikt/ft-kodeverk';

import { createRequestApi, RestApiConfigBuilder, RestKey } from '@navikt/fp-rest-api';
import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { Behandling } from '@navikt/fp-types';
import { alleKodeverk } from '@navikt/fp-storybook-utils';

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
  const submitCallback = vi.fn();
  vi.spyOn(Felles, 'default').mockImplementation(() => ({
    behandling,
    submitCallback,
    alleKodeverk: kodeverk,
    readOnly: false,
    aksjonspunkter: [{
      definisjon: AksjonspunktCode.BEHANDLE_KLAGE_NFP,
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
        faktaPanelKode={FaktaPanelCode.UTTAK}
        faktaPanelMenyTekst="Dette er en tekst"
      />,
    );

    expect(await screen.findByText('Dette er et panel')).toBeInTheDocument();
  });
});
