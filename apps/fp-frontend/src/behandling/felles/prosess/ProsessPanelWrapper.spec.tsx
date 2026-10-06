import { render, screen } from '@testing-library/react';

import { ProsessStegCode } from '@navikt/fp-konstanter';

import { ProsessPanelWrapper } from './ProsessPanelWrapper';

describe('ProsessPanelWrapper', () => {
  it('skal annonsere prosesspanelet med en skjult overskrift', () => {
    render(
      <ProsessPanelWrapper
        erPanelValgt
        harÅpentAksjonspunkt={false}
        status="OPPFYLT"
        prosessPanelKode={ProsessStegCode.SIMULERING}
        prosessPanelTittel="Simulering"
      >
        <div>Panelinnhold</div>
      </ProsessPanelWrapper>,
    );

    const heading = screen.getByRole('heading', { level: 2, name: 'Simulering' });
    expect(heading).toHaveAttribute('data-prosess-steg-code', ProsessStegCode.SIMULERING);
  });
});
