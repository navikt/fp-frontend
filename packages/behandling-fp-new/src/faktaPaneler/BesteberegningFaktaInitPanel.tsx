import React, {
  FunctionComponent,
} from 'react';

import BesteberegningFaktaIndex from '@fpsak-frontend/fakta-besteberegning';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@fpsak-frontend/types';
import { FaktaPanelInitProps, FaktaVanligOppforselInitPanel } from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import { FpBehandlingApiKeys, restApiFpHooks } from '../data/fpBehandlingApi';

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
  <FaktaVanligOppforselInitPanel<EndepunktInitData>
    {...props}
    useMultipleRestApi={restApiFpHooks.useMultipleRestApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    faktaPanelKode={faktaPanelCodes.BESTEBEREGNING}
    faktaPanelTekst={getPackageIntl().formatMessage({ id: 'BesteberegningInfoPanel.Title' })}
    skalVisesFn={(initData) => !!initData?.beregningsgrunnlag?.ytelsesspesifiktGrunnlag?.besteberegninggrunnlag}
    render={(data) => <BesteberegningFaktaIndex arbeidsgiverOpplysninger={arbeidsgiverOpplysningerPerId} {...data} />}
  />
);

export default BesteberegningFaktaInitPanel;
