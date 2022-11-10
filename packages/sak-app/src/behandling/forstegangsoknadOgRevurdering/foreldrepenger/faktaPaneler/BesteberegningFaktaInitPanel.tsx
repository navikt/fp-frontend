import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';

import BesteberegningFaktaIndex from '@fpsak-frontend/fakta-besteberegning';
import { FaktaPanelCode } from '@fpsak-frontend/konstanter';
import { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@fpsak-frontend/types';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import FaktaPanelInitProps from '../../../felles/typer/faktaPanelInitProps';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';
import FaktaDefaultInitPanel from '../../../felles/fakta/FaktaDefaultInitPanel';
import { FpBehandlingApiKeys, requestFpApi } from '../data/fpBehandlingApi';

const ENDEPUNKTER_PANEL_DATA = [BehandlingFellesApiKeys.BEREGNINGSGRUNNLAG];
type EndepunktPanelData = {
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
  <FaktaDefaultInitPanel<Record<string, never>, EndepunktPanelData>
    {...props}
    aksjonspunktKoder={[aksjonspunktCodes.KONTROLLER_AUTOMATISK_BESTEBEREGNING, aksjonspunktCodes.MANUELL_KONTROLL_AV_BESTEBEREGNING]}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    faktaPanelKode={FaktaPanelCode.BESTEBEREGNING}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'BesteberegningInfoPanel.Title' })}
    skalPanelVisesIMeny={() => requestFpApi.hasPath(FpBehandlingApiKeys.BEREGNINGSGRUNNLAG_BESTEBEREGNING.name)}
    renderPanel={(data) => (
      <BesteberegningFaktaIndex
        arbeidsgiverOpplysninger={arbeidsgiverOpplysningerPerId}
        {...data}
      />
    )}
  />
);

export default BesteberegningFaktaInitPanel;
