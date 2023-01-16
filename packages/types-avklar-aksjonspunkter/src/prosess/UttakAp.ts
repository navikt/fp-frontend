import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { PeriodeSoker } from '@fpsak-frontend/types';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type UttakAp = {
  perioder: PeriodeSoker[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.FASTSETT_UTTAKPERIODER
 | AksjonspunktKode.OVERSTYRING_AV_UTTAKPERIODER
 | AksjonspunktKode.TILKNYTTET_STORTINGET
 | AksjonspunktKode.ANNENPART_EØS
 | AksjonspunktKode.TETTE_SAKER
 | AksjonspunktKode.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE
 | AksjonspunktKode.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN
 | AksjonspunktKode.KONTROLLER_OPPLYSNINGER_OM_DØD
 | AksjonspunktKode.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST
 | AksjonspunktKode.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET
 | AksjonspunktKode.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT>;

export default UttakAp;
