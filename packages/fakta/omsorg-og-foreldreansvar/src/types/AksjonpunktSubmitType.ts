import type {
  AvklarFaktaForForeldreansvarAksjonspunktAp,
  AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp,
} from '@navikt/fp-types-avklar-aksjonspunkter';

export type AksjonpunktSubmitType =
  | AvklarFaktaForForeldreansvarAksjonspunktAp
  | AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp;
