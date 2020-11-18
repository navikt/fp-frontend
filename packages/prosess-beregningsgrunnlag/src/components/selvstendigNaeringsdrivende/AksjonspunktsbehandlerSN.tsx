import React, { FunctionComponent } from 'react';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import Aksjonspunkt from '@fpsak-frontend/types/src/aksjonspunktTsType';
import VurderOgFastsettSN from './VurderOgFastsettSN';

const {
  FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
  VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
} = aksjonspunktCodes;

const skalFastsetteSN = (aksjonspunkter) => aksjonspunkter && aksjonspunkter.some(
  (ap) => ap.definisjon.kode === VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE
    || ap.definisjon.kode === FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
);

type OwnProps = {
    readOnly: boolean;
    aksjonspunkter: Aksjonspunkt[];
    behandlingId: number;
    behandlingVersjon: number;
    erNyArbLivet?: boolean;
    erVarigEndring?: boolean;
    erNyoppstartet?: boolean;
    endretTekst?: React.ReactNode;
};

const AksjonspunktBehandlerSN: FunctionComponent<OwnProps> = ({
  readOnly,
  aksjonspunkter,
  behandlingId,
  behandlingVersjon,
  erNyArbLivet,
  erVarigEndring,
  erNyoppstartet,
  endretTekst,
}) => (
  <>
    { skalFastsetteSN(aksjonspunkter)
      && (
        <VurderOgFastsettSN
          gjeldendeAksjonspunkter={aksjonspunkter}
          readOnly={readOnly}
          behandlingId={behandlingId}
          behandlingVersjon={behandlingVersjon}
          erNyArbLivet={erNyArbLivet}
          erVarigEndring={erVarigEndring}
          erNyoppstartet={erNyoppstartet}
          endretTekst={endretTekst}
        />
      )}
  </>
);
AksjonspunktBehandlerSN.defaultProps = {
  erNyArbLivet: false,
  erVarigEndring: false,
  erNyoppstartet: false,
};

export default AksjonspunktBehandlerSN;
