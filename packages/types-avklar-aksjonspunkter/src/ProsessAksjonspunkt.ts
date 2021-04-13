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
  | Foreldreansvarsvilkar2Ap;

export default ProsessAksjonspunkt;
