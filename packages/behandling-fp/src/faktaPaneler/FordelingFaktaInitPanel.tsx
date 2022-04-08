import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { FaktaPanelCode } from '@fpsak-frontend/konstanter';
import { Aksjonspunkt, ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@fpsak-frontend/types';
import { FaktaPanelInitProps, FaktaDefaultInitPanel } from '@fpsak-frontend/behandling-felles';
import { createIntl } from '@navikt/ft-utils';

import { FpBehandlingApiKeys, requestFpApi } from '../data/fpBehandlingApi';
import DynamicLoader from '../DynamicLoader';
import messages from '../../i18n/nb_NO.json';

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
      <DynamicLoader
        // @ts-ignore
        altComp1={() => import('ft_fakta_fordel_beregningsgrunnlag/FaktaFordelBeregningsgrunnlag')}// eslint-disable-line import/no-unresolved
        altComp2={() => import('@fpsak-frontend/fakta-fordel-beregningsgrunnlag')}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        {...data}
      />
    )}
  />
);

export default FordelingFaktaInitPanel;
