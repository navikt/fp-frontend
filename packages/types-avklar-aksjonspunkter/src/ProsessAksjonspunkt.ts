import { BeregningAksjonspunktSubmitType } from '@navikt/ft-prosess-beregningsgrunnlag';
import BekreftSvangerskapspengervilkarAp from './prosess/BekreftSvangerskapspengervilkarAp';
import SoknadsfristAp from './prosess/SoknadsfristAp';
import BekreftSokersOpplysningspliktManuAp from './prosess/BekreftSokersOpplysningspliktManuAp';
import OverstyringSokersOpplysingspliktAp from './prosess/OverstyringSokersOpplysingspliktAp';
import AvklarOpptjeningsvilkaretAp from './prosess/AvklarOpptjeningsvilkaretAp';
import OmsorgsvilkarAp from './prosess/OmsorgsvilkarAp';
import VurdereYtelseSammeBarnSokerAp from './prosess/VurdereYtelseSammeBarnSokerAp';
import VurdereYtelseSammeBarnAnnenForelderAp from './prosess/VurdereYtelseSammeBarnAnnenForelderAp';
import Foreldreansvarsvilkar1Ap from './prosess/Foreldreansvarsvilkar1Ap';
import Foreldreansvarsvilkar2Ap from './prosess/Foreldreansvarsvilkar2Ap';
import ForeslaVedtakAp from './prosess/ForeslaVedtakAp';
import ForeslaVedtakManueltAp from './prosess/ForeslaVedtakManueltAp';
import VurderFeilutbetalingAp from './prosess/VurderFeilutbetalingAp';
import OverstyringBeregningAp from './prosess/OverstyringBeregningAp';
import KlageFormkravAp from './prosess/KlageFormkravAp';
import VurderInnsynAp from './prosess/VurderInnsynAp';
import KlageVurderingResultatAp from './prosess/KlageVurderingResultatAp';
import VurderSoknadsfristAp from './prosess/VurderSoknadsfristAp';
import VurderTilbaketrekkAp from './prosess/VurderTilbaketrekkAp';
import OverstyringAp from './prosess/OverstyringAp';
import VurdereAnnenYtelseForVedtakAp from './prosess/VurdereAnnenYtelseForVedtakAp';
import OverstyringMedlemskapsvilkaretLopendeAp from './prosess/OverstyringMedlemskapsvilkaretLopendeAp';
import VurdereDokumentForVedtakAp from './prosess/VurdereDokumentForVedtakAp';
import VurdereInntektsmeldingKlageForVedtakAp from './prosess/VurdereInntektsmeldingKlageForVedtakAp';

import KontrollerRevurderingsBehandlingAp from './prosess/KontrollerRevurderingsBehandlingAp';
import KontrollAvManueltOpprettetRevurderingsbehandlingAp from './prosess/KontrollAvManueltOpprettetRevurderingsbehandlingAp';
import VarselRevurderingAp from './prosess/VarselRevurderingAp';
import UttakAp from './prosess/UttakAp';

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
