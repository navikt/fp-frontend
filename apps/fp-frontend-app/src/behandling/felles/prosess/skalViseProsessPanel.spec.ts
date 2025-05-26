import { AksjonspunktKode, VilkarType } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, Vilkar } from '@navikt/fp-types';

import { skalViseProsessPanel } from './skalViseProsessPanel';

describe('skalViseProsessPanel', () => {
  it('skal vise prosesspanel når en har aksjonspunkt men ikke har tilknyttet noen vilkår', () => {
    const aksjonspunkter = [
      {
        definisjon: AksjonspunktKode.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR,
      },
    ] as Aksjonspunkt[];

    const skalVise = skalViseProsessPanel(aksjonspunkter);

    expect(skalVise).toBe(true);
  });

  it('skal ikke vise prosesspanel når en ikke har aksjonspunkt og ikke har tilknyttet noen vilkår', () => {
    const skalVise = skalViseProsessPanel();
    expect(skalVise).toBe(false);
  });

  it('skal vise prosesspanel når en har vilkar men ikke aksjonspunkt', () => {
    const vilkar = [
      {
        vilkarType: VilkarType.MEDLEMSKAPSVILKÅRET_LØPENDE,
      } as Vilkar,
    ];
    const skalVise = skalViseProsessPanel([], [VilkarType.MEDLEMSKAPSVILKÅRET_LØPENDE], vilkar);

    expect(skalVise).toBe(true);
  });

  it('skal vise prosesspanel når en har både vilkar og aksjonspunkt', () => {
    const aksjonspunkter = [
      {
        definisjon: AksjonspunktKode.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR,
      },
    ] as Aksjonspunkt[];
    const vilkar = [
      {
        vilkarType: VilkarType.MEDLEMSKAPSVILKÅRET_LØPENDE,
      } as Vilkar,
    ];

    const skalVise = skalViseProsessPanel(aksjonspunkter, [VilkarType.MEDLEMSKAPSVILKÅRET_LØPENDE], vilkar);

    expect(skalVise).toBe(true);
  });

  it('skal ikke vise prosesspanel når en har tilknyttet et vilkår men ingen aktive vilkår', () => {
    const aksjonspunkter = [
      {
        definisjon: AksjonspunktKode.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR,
      },
    ] as Aksjonspunkt[];

    const skalVise = skalViseProsessPanel(aksjonspunkter, [VilkarType.MEDLEMSKAPSVILKÅRET_LØPENDE], []);

    expect(skalVise).toBe(false);
  });
});
