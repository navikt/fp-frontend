import React from 'react';
import { render, screen } from '@testing-library/react';
import { BehandlingResultatType, BehandlingType, BehandlingStatus } from '@navikt/ft-kodeverk';

import { BehandlingAppKontekst } from '@navikt/fp-types';

import BeslutterModalIndex from './BeslutterModalIndex';

describe('<BeslutterModalIndex>', () => {
  const behandling = {
    uuid: '1',
    versjon: 2,
    type: BehandlingType.FORSTEGANGSSOKNAD,
    status: BehandlingStatus.FATTER_VEDTAK,
    behandlingsresultat: {
      type: BehandlingResultatType.OPPHOR,
      erRevurderingMedUendretUtfall: true,
    },
  } as BehandlingAppKontekst;

  it('skal vise modal når beslutter sender tilbake til ny vurdering', async () => {
    render(<BeslutterModalIndex behandling={behandling} pushLocation={vi.fn()} allAksjonspunktApproved />);

    expect(await screen.findByText('Resultat: Ingen endring, behandlingen avsluttes')).toBeInTheDocument();
  });
});
