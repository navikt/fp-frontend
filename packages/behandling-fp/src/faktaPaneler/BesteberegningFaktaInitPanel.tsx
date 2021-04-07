import React, {
  FunctionComponent,
} from 'react';

import BesteberegningFaktaIndex from '@fpsak-frontend/fakta-besteberegning';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@fpsak-frontend/types';
import { FaktaPanelInitProps, FaktaDefaultInitPanel } from '@fpsak-frontend/behandling-felles';
import { createIntl } from '@fpsak-frontend/utils';

import messages from '../../i18n/nb_NO.json';
import { FpBehandlingApiKeys, requestFpApi } from '../data/fpBehandlingApi';

const intl = createIntl(messages);

const ENDEPUNKTER_INIT_DATA = [FpBehandlingApiKeys.BEREGNINGSGRUNNLAG];
type EndepunktInitData = {
  beregningsgrunnlag: Beregningsgrunnlag;
}

interface OwnProps {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

/**
 * BesteberegningFaktaInitPanel
 */
const BesteberegningFaktaInitPanel: FunctionComponent<OwnProps & FaktaPanelInitProps> = ({
  arbeidsgiverOpplysningerPerId,
  ...props
}) => (
  <FaktaDefaultInitPanel<EndepunktInitData>
    {...props}
    requestApi={requestFpApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    faktaPanelKode={faktaPanelCodes.BESTEBEREGNING}
    faktaPanelMenyTekst={intl.formatMessage({ id: 'BesteberegningInfoPanel.Title' })}
    skalPanelVisesIMeny={(initData) => !!initData?.beregningsgrunnlag?.ytelsesspesifiktGrunnlag?.besteberegninggrunnlag}
    renderPanel={(data) => <BesteberegningFaktaIndex arbeidsgiverOpplysninger={arbeidsgiverOpplysningerPerId} {...data} />}
  />
);

export default BesteberegningFaktaInitPanel;
