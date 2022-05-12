import React, {
  FunctionComponent,
} from 'react';

import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import { ProsessBeregningsgrunnlagAksjonspunktCode } from '@navikt/ft-prosess-beregningsgrunnlag';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  Aksjonspunkt, ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag, Vilkar,
} from '@fpsak-frontend/types';
import { ProsessDefaultInitPanel, ProsessPanelInitProps, DynamicLoader } from '@fpsak-frontend/behandling-felles';
import { createIntl } from '@navikt/ft-utils';

import messages from '../../i18n/nb_NO.json';
import { requestSvpApi, SvpBehandlingApiKeys } from '../data/svpBehandlingApi';

// TODO Denne burde ligga sånn til at den kun blir importert når denne pakka dynamisk blir importert
import '@navikt/ft-prosess-beregningsgrunnlag/dist/style.css';

const intl = createIntl(messages);

const AKSJONSPUNKT_KODER = [
  ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
  ProsessBeregningsgrunnlagAksjonspunktCode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
  ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,
  ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
  ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
  ProsessBeregningsgrunnlagAksjonspunktCode.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG,
  ProsessBeregningsgrunnlagAksjonspunktCode.VURDER_DEKNINGSGRAD,
];

const VILKAR_KODER = [vilkarType.BEREGNINGSGRUNNLAGVILKARET];

const ENDEPUNKTER_INIT_DATA = [SvpBehandlingApiKeys.AKSJONSPUNKTER, SvpBehandlingApiKeys.VILKAR];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

const ENDEPUNKTER_PANEL_DATA = [SvpBehandlingApiKeys.BEREGNINGSGRUNNLAG];
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
    requestApi={requestSvpApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    vilkarKoder={VILKAR_KODER}
    prosessPanelKode={ProsessStegCode.BEREGNINGSGRUNNLAG}
    prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Beregning' })}
    skalPanelVisesIMeny={(_initData, initState) => initState === RestApiState.SUCCESS}
    renderPanel={(data) => (
      <DynamicLoader
        importModuleFederationComp={() => {
          if (process.env.NODE_ENV === 'development') {
            // @ts-ignore
            return import('ft_prosess_beregningsgrunnlag/ProsessBeregningsgrunnlag');// eslint-disable-line import/no-unresolved
          }
          return undefined;
        }}
        importPackageComp={() => import('@navikt/ft-prosess-beregningsgrunnlag')}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        {...data}
      />
    )}
  />
);

export default BeregningsgrunnlagProsessStegInitPanel;
