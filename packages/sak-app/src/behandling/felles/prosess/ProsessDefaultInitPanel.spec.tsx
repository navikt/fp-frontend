import React from 'react';
import { render, screen } from '@testing-library/react';
import { Aksjonspunkt } from '@navikt/ft-types';
import { BehandlingStatus, VilkarUtfallType } from '@navikt/ft-kodeverk';

import { createRequestApi, RestApiConfigBuilder, RestKey } from '@navikt/fp-rest-api';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { Behandling } from '@navikt/fp-types';
import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';

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
  submitCallback: vi.fn(),
  status: VilkarUtfallType.IKKE_VURDERT,
  alleKodeverk: kodeverk,
  isReadOnly: false,
  readOnlySubmitButton: false,
  aksjonspunkter: [{
    definisjon: AksjonspunktCode.VURDER_FEILUTBETALING,
    kanLoses: true,
  }] as Aksjonspunkt[],
  vilkar: [],
  isAksjonspunktOpen: true,
  setFormData: () => undefined,
};

describe('<ProsessDefaultInitPanel>', () => {
  vi.spyOn(Felles, 'default').mockImplementation(() => defaultProps);
  it('skal rendre panel korrekt', async () => {
    const BEHANDLING_KEY = new RestKey<Behandling, void>('BEHANDLING_KEY');

    const endpoints = new RestApiConfigBuilder()
      .withRel('behandling', BEHANDLING_KEY)
      .build();

    const requestMock = createRequestApi(endpoints);

    render(
      <ProsessDefaultInitPanel
        valgtProsessSteg="default"
        behandling={behandling}
        registrerProsessPanel={() => {}}
        requestApi={requestMock}
        skalPanelVisesIMeny={() => true}
        renderPanel={() => <div>Dette er komponenten</div>}
        prosessPanelKode={ProsessStegCode.AVREGNING}
        prosessPanelMenyTekst="Dette er en tekst"
      />,
    );

    expect(await screen.findByText('Dette er komponenten')).toBeInTheDocument();
  });
});
