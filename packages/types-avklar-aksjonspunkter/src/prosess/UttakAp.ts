import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { PeriodeSoker } from '@navikt/fp-types';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type UttakAp = {
  perioder: PeriodeSoker[];
} & AksjonspunktTilBekreftelse<
  | AksjonspunktCode.FASTSETT_UTTAKPERIODER
  | AksjonspunktCode.OVERSTYRING_AV_UTTAKPERIODER
  | AksjonspunktCode.TILKNYTTET_STORTINGET
  | AksjonspunktCode.ANNENPART_EØS
  | AksjonspunktCode.TETTE_SAKER
  | AksjonspunktCode.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE
  | AksjonspunktCode.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN
  | AksjonspunktCode.KONTROLLER_OPPLYSNINGER_OM_DØD
  | AksjonspunktCode.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST
  | AksjonspunktCode.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET
  | AksjonspunktCode.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT
>;

export default UttakAp;
