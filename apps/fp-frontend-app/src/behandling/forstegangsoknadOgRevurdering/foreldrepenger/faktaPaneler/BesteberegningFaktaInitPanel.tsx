import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';

import { BesteberegningFaktaIndex } from '@navikt/fp-fakta-besteberegning';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@navikt/fp-types';

import { AksjonspunktCode } from '@navikt/fp-kodeverk';

import FaktaPanelInitProps from '../../../felles/typer/faktaPanelInitProps';
import FaktaDefaultInitPanel from '../../../felles/fakta/FaktaDefaultInitPanel';
import { BehandlingApiKeys, requestBehandlingApi } from '../../../../data/behandlingContextApi';

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.BEREGNINGSGRUNNLAG];
type EndepunktPanelData = {
  beregningsgrunnlag: Beregningsgrunnlag;
};

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
  <FaktaDefaultInitPanel<EndepunktPanelData>
    {...props}
    aksjonspunktKoder={[
      AksjonspunktCode.KONTROLLER_AUTOMATISK_BESTEBEREGNING,
      AksjonspunktCode.MANUELL_KONTROLL_AV_BESTEBEREGNING,
    ]}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    faktaPanelKode={FaktaPanelCode.BESTEBEREGNING}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'BesteberegningInfoPanel.Title' })}
    skalPanelVisesIMeny={() => requestBehandlingApi.hasPath(BehandlingApiKeys.BEREGNINGSGRUNNLAG_BESTEBEREGNING.name)}
    renderPanel={data => (
      <BesteberegningFaktaIndex arbeidsgiverOpplysninger={arbeidsgiverOpplysningerPerId} {...data} />
    )}
  />
);

export default BesteberegningFaktaInitPanel;
