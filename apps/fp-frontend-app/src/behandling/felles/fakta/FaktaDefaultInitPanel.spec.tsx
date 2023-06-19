import React from 'react';
import { render, screen } from '@testing-library/react';
import { Aksjonspunkt } from '@navikt/ft-types';
import { BehandlingStatus } from '@navikt/ft-kodeverk';

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

describe('<FaktaDefaultInitPanel>', () => {
  const submitCallback = vi.fn();
  vi.spyOn(Felles, 'default').mockImplementation(() => ({
    behandling,
    submitCallback,
    // @ts-ignore Fiks
    alleKodeverk,
    readOnly: false,
    aksjonspunkter: [
      {
        definisjon: AksjonspunktCode.BEHANDLE_KLAGE_NFP,
        kanLoses: true,
      },
    ] as Aksjonspunkt[],
    harApneAksjonspunkter: true,
    alleMerknaderFraBeslutter: {},
    setFormData: () => undefined,
    submittable: true,
  }));

  it('skal rendre panel korrekt', async () => {
    render(
      <FaktaDefaultInitPanel
        valgtFaktaSteg="default"
        behandling={behandling}
        registrerFaktaPanel={() => {}}
        skalPanelVisesIMeny={() => true}
        renderPanel={() => <div>Dette er et panel</div>}
        faktaPanelKode={FaktaPanelCode.UTTAK}
        faktaPanelMenyTekst="Dette er en tekst"
      />,
    );

    expect(await screen.findByText('Dette er et panel')).toBeInTheDocument();
  });
});
