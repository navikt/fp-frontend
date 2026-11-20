import type { ReactNode } from 'react';

import { type BeregningOverstyringAP, FaktaBeregningAvklaringsbehovCode } from '@navikt/ft-fakta-beregning';
import { renderHook } from '@testing-library/react';
import { vi } from 'vitest';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { alleKodeverk, lagBehandling, lagFagsak } from '@navikt/fp-storybook-utils';
import type { BehandlingFpSak } from '@navikt/fp-types';
import type {
  AvklarDekningsgradAp,
  OverstyringAvklarStartdatoForPeriodenAp,
} from '@navikt/fp-types-avklar-aksjonspunkter';

import { BehandlingDataProvider } from '../context/BehandlingDataContext';
import { useStandardFaktaPanelProps } from './useStandardFaktaPanelProps';

const behandling = lagBehandling();

const bekreftet: AvklarDekningsgradAp = {
  kode: AksjonspunktKode.AVKLAR_DEKNINGSGRAD,
  dekningsgrad: 100,
};

const overstyrt: OverstyringAvklarStartdatoForPeriodenAp = {
  kode: AksjonspunktKode.OVERSTYRING_AV_AVKLART_STARTDATO,
  opprinneligDato: '2026-01-01',
  startdatoFraSøknad: '2026-02-01',
};

const rendreHook = () => {
  const lagreAksjonspunkter = vi.fn(() => Promise.resolve<BehandlingFpSak>(behandling));
  const lagreOverstyrteAksjonspunkter = vi.fn(() => Promise.resolve<BehandlingFpSak>(behandling));

  const wrapper = ({ children }: { children: ReactNode }) => (
    <BehandlingDataProvider
      behandling={behandling}
      alleBehandlinger={[]}
      fagsak={lagFagsak()}
      rettigheter={{
        writeAccess: { isEnabled: true, employeeHasAccess: true },
        kanOverstyreAccess: { isEnabled: true, employeeHasAccess: true },
      }}
      alleKodeverk={alleKodeverk}
      lagreAksjonspunkter={lagreAksjonspunkter}
      lagreOverstyrteAksjonspunkter={lagreOverstyrteAksjonspunkter}
      setSkalOppdatereEtterBekreftelseAvAp={vi.fn()}
      hentOgSettBehandling={vi.fn()}
      oppdaterProsessStegOgFaktaPanelIUrl={vi.fn()}
    >
      <>{children}</>
    </BehandlingDataProvider>
  );

  const { result } = renderHook(
    () =>
      useStandardFaktaPanelProps([
        AksjonspunktKode.AVKLAR_DEKNINGSGRAD,
        AksjonspunktKode.OVERSTYRING_AV_AVKLART_STARTDATO,
      ]),
    { wrapper },
  );

  return { submitCallback: result.current.submitCallback, lagreAksjonspunkter, lagreOverstyrteAksjonspunkter };
};

describe('useStandardFaktaPanelProps', () => {
  beforeEach(() => {
    vi.stubGlobal('scrollTo', vi.fn());
  });

  it('skal sende 6045 alene til overstyr-endepunktet', async () => {
    const { submitCallback, lagreAksjonspunkter, lagreOverstyrteAksjonspunkter } = rendreHook();

    await submitCallback(overstyrt);

    expect(lagreOverstyrteAksjonspunkter).toHaveBeenCalledWith(
      expect.objectContaining({ overstyrteAksjonspunktDtoer: [overstyrt] }),
    );
    expect(lagreAksjonspunkter).not.toHaveBeenCalled();
  });

  it('skal sende bekreftet aksjonspunkt til bekreft-endepunktet', async () => {
    const { submitCallback, lagreAksjonspunkter, lagreOverstyrteAksjonspunkter } = rendreHook();

    await submitCallback(bekreftet);

    expect(lagreAksjonspunkter).toHaveBeenCalledWith(
      expect.objectContaining({ bekreftedeAksjonspunktDtoer: [bekreftet] }),
    );
    expect(lagreOverstyrteAksjonspunkter).not.toHaveBeenCalled();
  });

  it.each([
    ['overstyrt først', [overstyrt, bekreftet]],
    ['bekreftet først', [bekreftet, overstyrt]],
  ])('skal avvise blandet liste med %s uten å lagre', (_, aksjonspunkter) => {
    const { submitCallback, lagreAksjonspunkter, lagreOverstyrteAksjonspunkter } = rendreHook();

    expect(() => submitCallback(aksjonspunkter)).toThrow('kan ikke lagre aksjonspunkter med kodene');
    expect(lagreAksjonspunkter).not.toHaveBeenCalled();
    expect(lagreOverstyrteAksjonspunkter).not.toHaveBeenCalled();
  });

  it('skal avvise umappet aksjonspunkt fra ft-fakta-beregning', () => {
    const { submitCallback, lagreAksjonspunkter, lagreOverstyrteAksjonspunkter } = rendreHook();
    const umappet: BeregningOverstyringAP = {
      kode: FaktaBeregningAvklaringsbehovCode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
      grunnlag: [],
    };

    expect(() => submitCallback(umappet)).toThrow('OVST_INNTEKT');
    expect(lagreAksjonspunkter).not.toHaveBeenCalled();
    expect(lagreOverstyrteAksjonspunkter).not.toHaveBeenCalled();
  });

  it.each([AksjonspunktKode.UTGÅTT_5056, AksjonspunktKode.UTGÅTT_6012])(
    'skal avvise utgått kode %s uten å lagre',
    kode => {
      const { submitCallback, lagreAksjonspunkter, lagreOverstyrteAksjonspunkter } = rendreHook();
      const utgått = { kode } as unknown as Parameters<typeof submitCallback>[0];

      expect(() => submitCallback(utgått)).toThrow(kode);
      expect(lagreAksjonspunkter).not.toHaveBeenCalled();
      expect(lagreOverstyrteAksjonspunkter).not.toHaveBeenCalled();
    },
  );
});
