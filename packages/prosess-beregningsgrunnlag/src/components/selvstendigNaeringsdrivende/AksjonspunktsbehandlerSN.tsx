import React, { FunctionComponent } from 'react';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import Aksjonspunkt from '@fpsak-frontend/types/src/aksjonspunktTsType';
import VurderOgFastsettSN from './VurderOgFastsettSN';

const {
  FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
  VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
} = aksjonspunktCodes;

const skalFastsetteSN = (aksjonspunkter: Aksjonspunkt[]): boolean => aksjonspunkter && aksjonspunkter.some(
  (ap) => ap.definisjon === VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE
    || ap.definisjon === FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
);

type OwnProps = {
    readOnly: boolean;
    aksjonspunkter: Aksjonspunkt[];
    erNyArbLivet?: boolean;
    erVarigEndring?: boolean;
    erNyoppstartet?: boolean;
    endretTekst?: React.ReactNode;
};

const AksjonspunktsbehandlerSN: FunctionComponent<OwnProps> = ({
  readOnly,
  aksjonspunkter,
  erNyArbLivet,
  erVarigEndring,
  erNyoppstartet,
  endretTekst,
}) => {
  if (skalFastsetteSN(aksjonspunkter)) {
    return (
      <VurderOgFastsettSN
        gjeldendeAksjonspunkter={aksjonspunkter}
        readOnly={readOnly}
        erNyArbLivet={erNyArbLivet}
        erVarigEndring={erVarigEndring}
        erNyoppstartet={erNyoppstartet}
        endretTekst={endretTekst}
      />
    );
  }
  return null;
};

AksjonspunktsbehandlerSN.defaultProps = {
  erNyArbLivet: false,
  erVarigEndring: false,
  erNyoppstartet: false,
};

export default AksjonspunktsbehandlerSN;
