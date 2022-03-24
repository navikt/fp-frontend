import React, {
  FunctionComponent, Suspense,
} from 'react';

import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  Aksjonspunkt, ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag, Vilkar,
} from '@fpsak-frontend/types';
import { ProsessDefaultInitPanel, ProsessPanelInitProps } from '@fpsak-frontend/behandling-felles';
import { createIntl } from '@fpsak-frontend/utils';
import { LoadingPanel } from '@fpsak-frontend/shared-components';

import messages from '../../i18n/nb_NO.json';
import { FpBehandlingApiKeys, requestFpApi } from '../data/fpBehandlingApi';

let BeregningsgrunnlagProsessIndex;
if (process.env.NODE_ENV === 'development') {
  BeregningsgrunnlagProsessIndex = React.lazy(() => import(
    // @ts-ignore
    'ft_frontend_saksbehandling/ProsessBeregningsgrunnlag' // eslint-disable-line import/no-unresolved
  ));
}
if (process.env.NODE_ENV !== 'development') {
  BeregningsgrunnlagProsessIndex = React.lazy(() => import('@fpsak-frontend/prosess-beregningsgrunnlag'));
}

const intl = createIntl(messages);

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
  aksjonspunktCodes.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
  aksjonspunktCodes.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,
  aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
  aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
  aksjonspunktCodes.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG,
  aksjonspunktCodes.VURDER_DEKNINGSGRAD,
];

const VILKAR_KODER = [vilkarType.BEREGNINGSGRUNNLAGVILKARET];

const ENDEPUNKTER_INIT_DATA = [FpBehandlingApiKeys.AKSJONSPUNKTER, FpBehandlingApiKeys.VILKAR];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

const ENDEPUNKTER_PANEL_DATA = [FpBehandlingApiKeys.BEREGNINGSGRUNNLAG];
type EndepunktPanelData = {
  beregningsgrunnlag?: Beregningsgrunnlag;
}

interface OwnProps {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const BeregningsgrunnlagProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  arbeidsgiverOpplysningerPerId,
  ...props
}) => (
  <ProsessDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
    {...props}
    requestApi={requestFpApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    vilkarKoder={VILKAR_KODER}
    prosessPanelKode={ProsessStegCode.BEREGNINGSGRUNNLAG}
    prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Beregning' })}
    skalPanelVisesIMeny={(_initData, initState) => initState === RestApiState.SUCCESS}
    renderPanel={(data) => (
      <Suspense fallback={<LoadingPanel />}>
        <BeregningsgrunnlagProsessIndex
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          {...data}
        />
      </Suspense>
    )}
  />
);

export default BeregningsgrunnlagProsessStegInitPanel;
