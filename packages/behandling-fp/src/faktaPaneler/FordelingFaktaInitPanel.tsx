import React, {
  FunctionComponent, Suspense,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { FaktaPanelCode } from '@fpsak-frontend/konstanter';
import { Aksjonspunkt, ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@fpsak-frontend/types';
import { FaktaPanelInitProps, FaktaDefaultInitPanel } from '@fpsak-frontend/behandling-felles';
import { createIntl } from '@fpsak-frontend/utils';
import { LoadingPanel } from '@fpsak-frontend/shared-components';

import messages from '../../i18n/nb_NO.json';
import { FpBehandlingApiKeys, requestFpApi } from '../data/fpBehandlingApi';

let FordelBeregningsgrunnlagFaktaIndex;
if (process.env.NODE_ENV === 'development') {
  FordelBeregningsgrunnlagFaktaIndex = React.lazy(() => import(
    // @ts-ignore
    'ft_frontend_saksbehandling/FaktaFordelBeregningsgrunnlag' // eslint-disable-line import/no-unresolved
  ));
}
if (process.env.NODE_ENV !== 'development') {
  FordelBeregningsgrunnlagFaktaIndex = React.lazy(() => import('@fpsak-frontend/fakta-fordel-beregningsgrunnlag'));
}

const intl = createIntl(messages);

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.FORDEL_BEREGNINGSGRUNNLAG, aksjonspunktCodes.VURDER_REFUSJON_BERGRUNN];

const ENDEPUNKTER_INIT_DATA = [FpBehandlingApiKeys.AKSJONSPUNKTER];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
}

const ENDEPUNKTER_PANEL_DATA = [FpBehandlingApiKeys.BEREGNINGSGRUNNLAG];
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
    requestApi={requestFpApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.FORDELING}
    faktaPanelMenyTekst={intl.formatMessage({ id: 'FordelBeregningsgrunnlag.Title' })}
    skalPanelVisesIMeny={(initData) => !!initData.aksjonspunkter
      && !!initData.aksjonspunkter.some((ap) => AKSJONSPUNKT_KODER.some((kode) => kode === ap.definisjon))}
    renderPanel={(data) => (
      <Suspense fallback={<LoadingPanel />}>
        <FordelBeregningsgrunnlagFaktaIndex arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId} {...data} />
      </Suspense>
    )}
  />
);

export default FordelingFaktaInitPanel;
