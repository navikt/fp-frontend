import { BeregningAksjonspunktSubmitType } from '@navikt/ft-prosess-beregningsgrunnlag';

import AvklarOpptjeningsvilkaretAp from './prosess/AvklarOpptjeningsvilkaretAp';
import BekreftSokersOpplysningspliktManuAp from './prosess/BekreftSokersOpplysningspliktManuAp';
import BekreftSvangerskapspengervilkarAp from './prosess/BekreftSvangerskapspengervilkarAp';
import Foreldreansvarsvilkar1Ap from './prosess/Foreldreansvarsvilkar1Ap';
import Foreldreansvarsvilkar2Ap from './prosess/Foreldreansvarsvilkar2Ap';
import ForeslaVedtakAp from './prosess/ForeslaVedtakAp';
import ForeslaVedtakManueltAp from './prosess/ForeslaVedtakManueltAp';
import KlageFormkravAp from './prosess/KlageFormkravAp';
import KlageVurderingResultatAp from './prosess/KlageVurderingResultatAp';
import KontrollAvManueltOpprettetRevurderingsbehandlingAp from './prosess/KontrollAvManueltOpprettetRevurderingsbehandlingAp';
import KontrollerRevurderingsBehandlingAp from './prosess/KontrollerRevurderingsBehandlingAp';
import OmsorgsvilkarAp from './prosess/OmsorgsvilkarAp';
import OverstyringAp from './prosess/OverstyringAp';
import OverstyringBeregningAp from './prosess/OverstyringBeregningAp';
import OverstyringMedlemskapsvilkaretLopendeAp from './prosess/OverstyringMedlemskapsvilkaretLopendeAp';
import OverstyringSokersOpplysingspliktAp from './prosess/OverstyringSokersOpplysingspliktAp';
import SoknadsfristAp from './prosess/SoknadsfristAp';
import UttakAp from './prosess/UttakAp';
import VarselRevurderingAp from './prosess/VarselRevurderingAp';
import VurdereAnnenYtelseForVedtakAp from './prosess/VurdereAnnenYtelseForVedtakAp';
import VurdereDokumentForVedtakAp from './prosess/VurdereDokumentForVedtakAp';
import VurdereInntektsmeldingKlageForVedtakAp from './prosess/VurdereInntektsmeldingKlageForVedtakAp';
import VurdereYtelseSammeBarnAnnenForelderAp from './prosess/VurdereYtelseSammeBarnAnnenForelderAp';
import VurdereYtelseSammeBarnSokerAp from './prosess/VurdereYtelseSammeBarnSokerAp';
import VurderFeilutbetalingAp from './prosess/VurderFeilutbetalingAp';
import VurderInnsynAp from './prosess/VurderInnsynAp';
import VurderSoknadsfristAp from './prosess/VurderSoknadsfristAp';
import VurderTilbaketrekkAp from './prosess/VurderTilbaketrekkAp';

export type ProsessAksjonspunkt =
  | BekreftSvangerskapspengervilkarAp
  | SoknadsfristAp
  | BekreftSokersOpplysningspliktManuAp
  | OverstyringSokersOpplysingspliktAp
  | AvklarOpptjeningsvilkaretAp
  | OmsorgsvilkarAp
  | VurdereYtelseSammeBarnSokerAp
  | VurdereYtelseSammeBarnAnnenForelderAp
  | Foreldreansvarsvilkar1Ap
  | Foreldreansvarsvilkar2Ap
  | ForeslaVedtakAp
  | ForeslaVedtakManueltAp
  | VurderInnsynAp
  | OverstyringBeregningAp
  | VurderFeilutbetalingAp
  | KlageFormkravAp
  | KlageVurderingResultatAp
  | VurderSoknadsfristAp
  | VurderTilbaketrekkAp
  | OverstyringAp
  | KontrollerRevurderingsBehandlingAp
  | VarselRevurderingAp
  | KontrollAvManueltOpprettetRevurderingsbehandlingAp
  | OverstyringMedlemskapsvilkaretLopendeAp
  | VurdereAnnenYtelseForVedtakAp
  | UttakAp
  | BeregningAksjonspunktSubmitType
  | VurdereDokumentForVedtakAp
  | VurdereInntektsmeldingKlageForVedtakAp;

export default ProsessAksjonspunkt;
