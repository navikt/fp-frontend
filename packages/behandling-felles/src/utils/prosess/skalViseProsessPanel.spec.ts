import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { Aksjonspunkt, Vilkar } from '@fpsak-frontend/types';

import skalViseProsessPanel from './skalViseProsessPanel';

describe('skalViseProsessPanel', () => {
  it('skal vise prosesspanel når en har aksjonspunkt men ikke har tilknyttet noen vilkår', () => {
    const aksjonspunkter = [{
      definisjon: {
        kode: aksjonspunktCodes.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR,
        kodeverk: '',
      },
    }] as Aksjonspunkt[];

    const skalVise = skalViseProsessPanel(aksjonspunkter);

    expect(skalVise).toBe(true);
  });

  it('skal ikke vise prosesspanel når en ikke har aksjonspunkt og ikke har tilknyttet noen vilkår', () => {
    const skalVise = skalViseProsessPanel();
    expect(skalVise).toBe(false);
  });

  it('skal vise prosesspanel når en har vilkar men ikke aksjonspunkt', () => {
    const vilkar = [{
      vilkarType: {
        kode: vilkarType.MEDLEMSKAPSVILKÅRET_LØPENDE,
        kodeverk: '',
      },
    } as Vilkar];
    const aksjonspunkter = [] as Aksjonspunkt[];

    const skalVise = skalViseProsessPanel(aksjonspunkter, [vilkarType.MEDLEMSKAPSVILKÅRET_LØPENDE], vilkar);

    expect(skalVise).toBe(true);
  });

  it('skal vise prosesspanel når en har både vilkar og aksjonspunkt', () => {
    const aksjonspunkter = [{
      definisjon: {
        kode: aksjonspunktCodes.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR,
        kodeverk: '',
      },
    }] as Aksjonspunkt[];
    const vilkar = [{
      vilkarType: {
        kode: vilkarType.MEDLEMSKAPSVILKÅRET_LØPENDE,
        kodeverk: '',
      },
    } as Vilkar];

    const skalVise = skalViseProsessPanel(aksjonspunkter, [vilkarType.MEDLEMSKAPSVILKÅRET_LØPENDE], vilkar);

    expect(skalVise).toBe(true);
  });

  it('skal ikke vise prosesspanel når en har tilknyttet et vilkår men ingen aktive vilkår', () => {
    const aksjonspunkter = [{
      definisjon: {
        kode: aksjonspunktCodes.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR,
        kodeverk: '',
      },
    }] as Aksjonspunkt[];
    const vilkar = [] as Vilkar[];

    const skalVise = skalViseProsessPanel(aksjonspunkter, [vilkarType.MEDLEMSKAPSVILKÅRET_LØPENDE], vilkar);

    expect(skalVise).toBe(false);
  });
});
