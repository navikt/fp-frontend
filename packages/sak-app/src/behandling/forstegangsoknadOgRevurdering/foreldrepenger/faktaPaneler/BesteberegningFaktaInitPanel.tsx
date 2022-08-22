import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';

import BesteberegningFaktaIndex from '@fpsak-frontend/fakta-besteberegning';
import { FaktaPanelCode } from '@fpsak-frontend/konstanter';
import { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@fpsak-frontend/types';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import FaktaPanelInitProps from '../../../felles/types/faktaPanelInitProps';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';
import FaktaDefaultInitPanel from '../../../felles/components/fakta/FaktaDefaultInitPanel';

const ENDEPUNKTER_INIT_DATA = [BehandlingFellesApiKeys.AKSJONSPUNKTER, BehandlingFellesApiKeys.BEREGNINGSGRUNNLAG];
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
    aksjonspunktKoder={[aksjonspunktCodes.KONTROLLER_AUTOMATISK_BESTEBEREGNING, aksjonspunktCodes.MANUELL_KONTROLL_AV_BESTEBEREGNING]}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    faktaPanelKode={FaktaPanelCode.BESTEBEREGNING}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'BesteberegningInfoPanel.Title' })}
    skalPanelVisesIMeny={(initData) => !!initData?.beregningsgrunnlag?.ytelsesspesifiktGrunnlag?.besteberegninggrunnlag}
    renderPanel={(data) => (
      <BesteberegningFaktaIndex
        arbeidsgiverOpplysninger={arbeidsgiverOpplysningerPerId}
        // @ts-ignore Eg trur denne feilar grunna feil i typescript-pakka. Sjekk på eit seinare tidspunkt om denne er retta
        {...data}
      />
    )}
  />
);

export default BesteberegningFaktaInitPanel;
