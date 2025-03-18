import { AksjonspunktKode, AksjonspunktStatus, BehandlingStatus } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt } from '@navikt/fp-types';

import { getAlleMerknaderFraBeslutter } from './getAlleMerknaderFraBeslutter';

describe('getAlleMerknaderFraBeslutter', () => {
  const aksjonspunkter: Aksjonspunkt[] = [
    {
      status: AksjonspunktStatus.OPPRETTET,
      definisjon: AksjonspunktKode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
      begrunnelse: null,
      kanLoses: true,
      toTrinnsBehandling: true,
      toTrinnsBehandlingGodkjent: false,
    },
  ];

  it('skal hente alle merknader fra beslutter når behandlingstatus er BEHANDLING_UTREDER', () => {
    const merknader = getAlleMerknaderFraBeslutter(BehandlingStatus.BEHANDLING_UTREDES, aksjonspunkter);

    expect(merknader).toEqual({
      [aksjonspunkter[0].definisjon]: {
        notAccepted: true,
      },
    });
  });

  it('skal ikke hente merknader  behandlingstatus er ulik BEHANDLING_UTREDER', () => {
    const merknader = getAlleMerknaderFraBeslutter(BehandlingStatus.AVSLUTTET, aksjonspunkter);

    expect(merknader).toEqual({});
  });
});
