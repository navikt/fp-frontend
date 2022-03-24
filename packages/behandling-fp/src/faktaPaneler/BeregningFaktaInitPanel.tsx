import React, {
  FunctionComponent, Suspense,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { FaktaPanelCode } from '@fpsak-frontend/konstanter';
import {
  AksessRettigheter, Aksjonspunkt, ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag,
} from '@fpsak-frontend/types';
import { FaktaDefaultInitPanel, FaktaPanelInitProps } from '@fpsak-frontend/behandling-felles';
import { createIntl } from '@fpsak-frontend/utils';
import { LoadingPanel } from '@fpsak-frontend/shared-components';

import messages from '../../i18n/nb_NO.json';
import { FpBehandlingApiKeys, requestFpApi } from '../data/fpBehandlingApi';

let BeregningFaktaIndex;
if (process.env.NODE_ENV === 'development') {
  BeregningFaktaIndex = React.lazy(() => import(
    // @ts-ignore
    'ft_frontend_saksbehandling/FaktaBeregning' // eslint-disable-line import/no-unresolved
  ));
}
if (process.env.NODE_ENV !== 'development') {
  BeregningFaktaIndex = React.lazy(() => import('@fpsak-frontend/fakta-beregning'));
}

const intl = createIntl(messages);

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.VURDER_FAKTA_FOR_ATFL_SN,
  aksjonspunktCodes.AVKLAR_AKTIVITETER,
  aksjonspunktCodes.OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
  aksjonspunktCodes.OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
];

const OVERSTYRING_AP_CODES = [aksjonspunktCodes.OVERSTYRING_AV_BEREGNINGSAKTIVITETER, aksjonspunktCodes.OVERSTYRING_AV_BEREGNINGSGRUNNLAG];

const ENDEPUNKTER_INIT_DATA = [FpBehandlingApiKeys.AKSJONSPUNKTER, FpBehandlingApiKeys.BEREGNINGSGRUNNLAG];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  beregningsgrunnlag: Beregningsgrunnlag;
}

interface OwnProps {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  rettigheter: AksessRettigheter;
}

/**
 * BeregningFaktaInitPanel
 */
const BeregningFaktaInitPanel: FunctionComponent<OwnProps & FaktaPanelInitProps> = ({
  arbeidsgiverOpplysningerPerId,
  rettigheter,
  ...props
}) => (
  <FaktaDefaultInitPanel<EndepunktInitData>
    {...props}
    requestApi={requestFpApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    overstyringApKoder={OVERSTYRING_AP_CODES}
    faktaPanelKode={FaktaPanelCode.BEREGNING}
    faktaPanelMenyTekst={intl.formatMessage({ id: 'BeregningInfoPanel.Title' })}
    skalPanelVisesIMeny={(initData) => !!initData?.beregningsgrunnlag}
    renderPanel={(data) => (
      <Suspense fallback={<LoadingPanel />}>
        <BeregningFaktaIndex
          erOverstyrer={rettigheter.kanOverstyreAccess.isEnabled}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          {...data}
        />
      </Suspense>
    )}
  />
);

export default BeregningFaktaInitPanel;
