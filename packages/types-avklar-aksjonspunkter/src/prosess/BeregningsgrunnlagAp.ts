import type { BeregningAksjonspunktSubmitType } from '@navikt/ft-prosess-beregningsgrunnlag';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type BeregningsgrunnlagAp = BeregningAksjonspunktSubmitType['grunnlag'][number] &
  AksjonspunktTilBekreftelse<
    | AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS
    | AksjonspunktKode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NÆRING_SELVSTENDIG_NÆRINGSDRIVENDE
    | AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD
    | AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_FOR_SN_NY_I_ARBEIDSLIVET
  >;
