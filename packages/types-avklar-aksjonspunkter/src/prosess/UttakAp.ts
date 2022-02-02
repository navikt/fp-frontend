import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { ArsakKodeverk } from '@fpsak-frontend/types/src/uttaksresultatPeriodeTsType';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type Kodeverk = {
  kode: string;
  kodeverk: string;
}

type UttakAp = {
    perioder: {
    fom: string;
    tom: string;
    aktiviteter: {
      stønadskontoType?: Kodeverk | string;
      trekkdagerDesimaler?: number;
      arbeidsgiver?: {
        identifikator?: string;
        aktørId?: string;
      };
      arbeidsgiverReferanse?: string;
      arbeidsforholdId?: string;
      utbetalingsgrad?: string | number;
      uttakArbeidType?: Kodeverk | string;
    }[];
    begrunnelse?: string;
    periodeResultatType: Kodeverk | string;
    periodeResultatÅrsak: ArsakKodeverk | string;
    oppholdÅrsak: Kodeverk | string;
    flerbarnsdager?: boolean;
    samtidigUttak?: boolean;
    samtidigUttaksprosent?: number;
    graderingInnvilget?: boolean;
    graderingAvslagÅrsak: ArsakKodeverk | string;
  }[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.FASTSETT_UTTAKPERIODER
 | AksjonspunktKode.OVERSTYRING_AV_UTTAKPERIODER
 | AksjonspunktKode.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE
 | AksjonspunktKode.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN
 | AksjonspunktKode.KONTROLLER_OPPLYSNINGER_OM_DØD
 | AksjonspunktKode.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST
 | AksjonspunktKode.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET
 | AksjonspunktKode.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT>;

export default UttakAp;
