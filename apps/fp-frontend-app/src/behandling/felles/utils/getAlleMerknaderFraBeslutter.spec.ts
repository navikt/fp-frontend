import { AksjonspunktKode,AksjonspunktStatus, BehandlingStatus, BehandlingType } from '@navikt/fp-kodeverk';
import { Behandling } from '@navikt/fp-types';

import { getAlleMerknaderFraBeslutter } from './getAlleMerknaderFraBeslutter';

describe('<getAlleMerknaderFraBeslutter>', () => {
  const behandling = {
    uuid: '1',
    versjon: 1,
    status: BehandlingStatus.BEHANDLING_UTREDES,
    type: BehandlingType.FORSTEGANGSSOKNAD,
    behandlingPaaVent: false,
    behandlingHenlagt: false,
  };

  const aksjonspunkter = [
    {
      status: AksjonspunktStatus.OPPRETTET,
      definisjon: AksjonspunktKode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
      kanLoses: true,
      toTrinnsBehandling: true,
      toTrinnsBehandlingGodkjent: false,
    },
  ];

  it('skal hente alle merknader fra beslutter når behandlingstatus er BEHANDLING_UTREDER', () => {
    const merknader = getAlleMerknaderFraBeslutter(behandling as Behandling, aksjonspunkter);

    expect(merknader).toEqual({
      [aksjonspunkter[0].definisjon]: {
        notAccepted: true,
      },
    });
  });

  it('skal ikke hente merknader  behandlingstatus er ulik BEHANDLING_UTREDER', () => {
    const behandlingMedAnnenStatus = {
      ...behandling,
      status: BehandlingStatus.AVSLUTTET,
    };
    const merknader = getAlleMerknaderFraBeslutter(behandlingMedAnnenStatus as Behandling, aksjonspunkter);

    expect(merknader).toEqual({});
  });
});
