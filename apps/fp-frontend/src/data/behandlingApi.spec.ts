import type { BeregningOverstyringAP } from '@navikt/ft-fakta-beregning';
import { expectTypeOf } from 'vitest';

import type { VurderInnsynAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import type {
  AksjonspunktArgs,
  BekreftetAksjonspunkt,
  OverstyrtAksjonspunkt,
  OverstyrteAksjonspunktArgs,
} from './behandlingApi';

type BekreftetDto = AksjonspunktArgs['bekreftedeAksjonspunktDtoer'][number];
type OverstyrtDto = OverstyrteAksjonspunktArgs['overstyrteAksjonspunktDtoer'][number];

describe('behandlingApi', () => {
  it('skal avvise umappet aksjonspunkt fra ft-fakta-beregning', () => {
    expectTypeOf<BeregningOverstyringAP>().not.toExtend<BekreftetAksjonspunkt>();
    expectTypeOf<BeregningOverstyringAP>().not.toExtend<OverstyrtAksjonspunkt>();
  });

  it('skal kreve at @type er lik kode', () => {
    expectTypeOf<VurderInnsynAp & { '@type': '5037' }>().toExtend<BekreftetDto>();
    expectTypeOf<VurderInnsynAp & { '@type': '6045' }>().not.toExtend<BekreftetDto>();
    expectTypeOf<VurderInnsynAp & { '@type': '5037' }>().not.toExtend<OverstyrtDto>();
  });
});
