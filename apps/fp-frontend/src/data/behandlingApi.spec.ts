import type { BeregningOverstyringAP } from '@navikt/ft-fakta-beregning';
import type { FordelBeregningsgrunnlagAP } from '@navikt/ft-fakta-fordel-beregningsgrunnlag';
import { expectTypeOf } from 'vitest';

import type { BeregningsgrunnlagAp, FordelBeregningAp, VurderInnsynAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import type {
  AksjonspunktArgs,
  BekreftetAksjonspunkt,
  MedType,
  OverstyrtAksjonspunkt,
  OverstyrteAksjonspunktArgs,
  UtgåttKode,
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

  it('skal kreve samme kode og @type innenfor en variant med flere koder', () => {
    type Dto5038 = Extract<MedType<BeregningsgrunnlagAp>, { kode: '5038' }>;
    expectTypeOf<Dto5038>().toExtend<BekreftetDto>();
    expectTypeOf<Dto5038['@type']>().toEqualTypeOf<'5038'>();
    expectTypeOf<Omit<Dto5038, '@type'> & { '@type': '5039' }>().not.toExtend<BekreftetDto>();
  });

  it('skal godta mappet fordelingsaksjonspunkt og avvise umappet', () => {
    expectTypeOf<FordelBeregningAp>().toExtend<BekreftetAksjonspunkt>();
    expectTypeOf<FordelBeregningsgrunnlagAP>().not.toExtend<BekreftetAksjonspunkt>();
  });

  it('skal kun ha 5056 og 6012 som utgåtte koder', () => {
    expectTypeOf<UtgåttKode>().toEqualTypeOf<'5056' | '6012'>();
  });
});
