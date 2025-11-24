import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt } from '@navikt/fp-types';

import { getAlleMerknaderFraBeslutter } from './getAlleMerknaderFraBeslutter';

describe('getAlleMerknaderFraBeslutter', () => {
  const aksjonspunkter: Aksjonspunkt[] = [
    {
      status: 'OPPR',
      definisjon: AksjonspunktKode.AVKLAR_OM_SØKER_HAR_MOTTATT_STØTTE,
      kanLoses: true,
      toTrinnsBehandling: true,
      toTrinnsBehandlingGodkjent: false,
      vilkarType: 'FP_VK_1',
      aksjonspunktType: 'MANU',
    },
  ];

  it('skal hente alle merknader fra beslutter når behandlingstatus er BEHANDLING_UTREDER', () => {
    const merknader = getAlleMerknaderFraBeslutter('UTRED', aksjonspunkter);

    expect(merknader).toEqual({
      [aksjonspunkter[0]!.definisjon]: {
        notAccepted: true,
      },
    });
  });

  it('skal ikke hente merknader  behandlingstatus er ulik BEHANDLING_UTREDER', () => {
    const merknader = getAlleMerknaderFraBeslutter('AVSLU', aksjonspunkter);

    expect(merknader).toEqual({});
  });
});
