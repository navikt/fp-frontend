import React from 'react';
import { render, screen } from '@testing-library/react';
import { Aksjonspunkt } from '@navikt/ft-types';
import { BehandlingStatus, BehandlingType } from '@navikt/ft-kodeverk';

import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { Behandling, AlleKodeverk } from '@navikt/fp-types';

import BehandlingPaVent from './BehandlingPaVent';

describe('<BehandlingPaVent>', () => {
  const behandling = {
    uuid: '1',
    versjon: 1,
    status: BehandlingStatus.BEHANDLING_UTREDES,
    type: BehandlingType.FORSTEGANGSSOKNAD,
    behandlingPaaVent: false,
    behandlingHenlagt: false,
    fristBehandlingPåVent: '2030-10-10',
    venteArsakKode: '',
  } as Behandling;
  const aksjonspunkter = [] as Aksjonspunkt[];
  // @ts-ignore
  const kodeverk = alleKodeverk as AlleKodeverk;

  it('skal ikke vise modal når behandling ikke er på vent', async () => {
    render(
      <BehandlingPaVent
        behandling={
          {
            ...behandling,
            aksjonspunkt: aksjonspunkter,
          } as Behandling
        }
        kodeverk={kodeverk}
        opneSokeside={vi.fn()}
      />,
    );

    expect(await screen.findByText('Behandlingen settes på vent')).toBeInTheDocument();
    expect(screen.getByText('Frist')).toBeInTheDocument();
  });
});
