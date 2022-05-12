import React, {
  FunctionComponent,
} from 'react';

import FordelBeregningsgrunnlagFaktaIndex, { FaktaFordelBeregningAksjonspunktCode } from '@navikt/ft-fakta-fordel-beregningsgrunnlag';
import { Beregningsgrunnlag } from '@navikt/ft-types';
import { FaktaPanelCode } from '@fpsak-frontend/konstanter';
import { Aksjonspunkt, ArbeidsgiverOpplysningerPerId } from '@fpsak-frontend/types';
import { FaktaPanelInitProps, FaktaDefaultInitPanel } from '@fpsak-frontend/behandling-felles';
import { createIntl } from '@navikt/ft-utils';

import messages from '../../i18n/nb_NO.json';
import { requestSvpApi, SvpBehandlingApiKeys } from '../data/svpBehandlingApi';

const intl = createIntl(messages);

const AKSJONSPUNKT_KODER = [FaktaFordelBeregningAksjonspunktCode.FORDEL_BEREGNINGSGRUNNLAG, FaktaFordelBeregningAksjonspunktCode.VURDER_REFUSJON_BERGRUNN];

const ENDEPUNKTER_INIT_DATA = [SvpBehandlingApiKeys.AKSJONSPUNKTER];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
}

const ENDEPUNKTER_PANEL_DATA = [SvpBehandlingApiKeys.BEREGNINGSGRUNNLAG];
type EndepunktPanelData = {
  beregningsgrunnlag: Beregningsgrunnlag;
}

interface OwnProps {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

/**
 * FordelingFaktaInitPanel
 */
const FordelingFaktaInitPanel: FunctionComponent<OwnProps & FaktaPanelInitProps> = ({
  arbeidsgiverOpplysningerPerId,
  ...props
}) => (
  <FaktaDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
    {...props}
    requestApi={requestSvpApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.FORDELING}
    faktaPanelMenyTekst={intl.formatMessage({ id: 'FordelBeregningsgrunnlag.Title' })}
    skalPanelVisesIMeny={(initData) => !!initData.aksjonspunkter
      && !!initData.aksjonspunkter.some((ap) => AKSJONSPUNKT_KODER.some((kode) => kode === ap.definisjon))}
    renderPanel={(data) => (
      <FordelBeregningsgrunnlagFaktaIndex arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId} {...data} />
    )}
  />
);

export default FordelingFaktaInitPanel;
