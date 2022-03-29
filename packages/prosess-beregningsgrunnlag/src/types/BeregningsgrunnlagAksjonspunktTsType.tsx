import {
  ATFLValues,
  ATFLDekningsgradBegrunnelseValues,
  ATFLTidsbegrensetValues,
  FrilansInntektValues,
} from './ATFLAksjonspunktTsType';
import { NyIArbeidslivetValues, VurderOgFastsettValues } from './NaringAksjonspunktTsType';
import DekningsgradValues from './DekningsgradAksjonspunktTsType';

type BeregningsgrunnlagValues = ATFLDekningsgradBegrunnelseValues
  | ATFLTidsbegrensetValues
  | FrilansInntektValues
  | VurderOgFastsettValues
  | NyIArbeidslivetValues
  | ATFLValues
  | DekningsgradValues;

export default BeregningsgrunnlagValues;
