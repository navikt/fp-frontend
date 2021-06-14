import {
  ATFLValues,
  ATFLDekningsgradBegrunnelseValues,
  ATFLTidsbegrensetValues,
  FrilansInntektValues,
} from './ATFLAksjonspunktTsType';
import { NyIArbeidslivetValues, VurderOgFastsettValues } from './NæringAksjonspunktTsType';
import { DekningsgradValues } from './DekningsgradAksjonspunktTsType';

type BeregningsgrunnlagValues = ATFLDekningsgradBegrunnelseValues
  & ATFLTidsbegrensetValues
  & FrilansInntektValues
  & VurderOgFastsettValues
  & NyIArbeidslivetValues
  & ATFLValues
  & DekningsgradValues;

export default BeregningsgrunnlagValues;
