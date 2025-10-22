import { render, screen } from '@testing-library/react';

import type { FagsakBehandlingDto } from '@navikt/fp-types';

import { BeslutterModalIndex } from './BeslutterModalIndex';

describe('BeslutterModalIndex', () => {
  const behandling = {
    uuid: '1',
    versjon: 2,
    type: 'BT-002',
    status: 'FVED',
    behandlingsresultat: {
      type: 'OPPHØR',
      erRevurderingMedUendretUtfall: true,
    },
  } as FagsakBehandlingDto;

  it('skal vise modal når beslutter sender tilbake til ny vurdering', async () => {
    render(<BeslutterModalIndex behandling={behandling} pushLocation={vi.fn()} allAksjonspunktApproved />);

    expect(await screen.findByText('Resultat: Ingen endring, behandlingen avsluttes')).toBeInTheDocument();
  });
});
