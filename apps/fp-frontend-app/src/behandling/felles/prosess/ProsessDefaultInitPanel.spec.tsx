import React from 'react';
import { render, screen } from '@testing-library/react';

import { ProsessStegCode } from '@navikt/fp-konstanter';
import { Aksjonspunkt, Behandling, Fagsak } from '@navikt/fp-types';
import { BehandlingStatus, VilkarUtfallType, AksjonspunktKode } from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';

import * as Felles from './useStandardProsessPanelProps';
import { ProsessDefaultInitPanel } from './ProsessDefaultInitPanel';

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
  aksjonspunkter: [
    {
      definisjon: AksjonspunktKode.VURDER_FEILUTBETALING,
      kanLoses: true,
    },
  ] as Aksjonspunkt[],
  vilkar: [],
  isAksjonspunktOpen: true,
  setFormData: () => undefined,
  fagsak: {} as Fagsak,
};

describe('<ProsessDefaultInitPanel>', () => {
  vi.spyOn(Felles, 'useStandardProsessPanelProps').mockImplementation(() => defaultProps);
  it('skal rendre panel korrekt', async () => {
    render(
      <ProsessDefaultInitPanel
        valgtProsessSteg="default"
        behandling={behandling}
        registrerProsessPanel={() => {}}
        skalPanelVisesIMeny={() => true}
        renderPanel={() => <div>Dette er komponenten</div>}
        prosessPanelKode={ProsessStegCode.SIMULERING}
        prosessPanelMenyTekst="Dette er en tekst"
      />,
    );

    expect(await screen.findByText('Dette er komponenten')).toBeInTheDocument();
  });
});
