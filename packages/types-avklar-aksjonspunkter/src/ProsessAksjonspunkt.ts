import AnkeVurderingResultatAp from './prosess/AnkeVurderingResultatAp';
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
import BekreftVedtakUtenTotrinnskontrollAp from './prosess/BekreftVedtakUtenTotrinnskontrollAp';
import ForeslaVedtakManueltAp from './prosess/ForeslaVedtakManueltAp';
import VurderFeilutbetalingAp from './prosess/VurderFeilutbetalingAp';
import AnkeMerknaderResultatAp from './prosess/AnkeMerknaderResultatAp';
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
import KontrollerRevurderingsBehandlingAp from './prosess/KontrollerRevurderingsBehandlingAp';
import KontrollAvManueltOpprettetRevurderingsbehandlingAp from './prosess/KontrollAvManueltOpprettetRevurderingsbehandlingAp';
import VarselRevurderingAp from './prosess/VarselRevurderingAp';
import UttakAp from './prosess/UttakAp';
import ForeslaVedtakTilbakekrevingAp from './prosess/tilbakekreving/ForeslaVedtakTilbakekrevingAp';
import VilkarsVurderingAp from './prosess/tilbakekreving/VilkarsVurderingAp';
import VurderForeldelseAp from './prosess/tilbakekreving/VurderForeldelseAp';

export type ProsessAksjonspunkt = AnkeVurderingResultatAp
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
  | BekreftVedtakUtenTotrinnskontrollAp
  | ForeslaVedtakManueltAp
  | ForeslaVedtakTilbakekrevingAp
  | VilkarsVurderingAp
  | VurderForeldelseAp
  | VurderInnsynAp
  | AnkeMerknaderResultatAp
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
  | VurdereDokumentForVedtakAp;

export default ProsessAksjonspunkt;
