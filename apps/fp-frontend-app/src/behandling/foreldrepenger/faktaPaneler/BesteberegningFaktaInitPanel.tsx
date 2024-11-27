import React from 'react';
import { useIntl } from 'react-intl';

import { BesteberegningFaktaIndex } from '@navikt/fp-fakta-besteberegning';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@navikt/fp-types';

import { BehandlingApiKeys, requestBehandlingApi } from '../../../data/behandlingContextApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { FaktaPanelInitProps } from '../../felles/typer/faktaPanelInitProps';

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.BEREGNINGSGRUNNLAG];
type EndepunktPanelData = {
  beregningsgrunnlag: Beregningsgrunnlag;
};

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const BesteberegningFaktaInitPanel = ({
  arbeidsgiverOpplysningerPerId,
  ...props
}: Props & FaktaPanelInitProps) => (
  <FaktaDefaultInitPanel<EndepunktPanelData>
    {...props}
    aksjonspunktKoder={[
      AksjonspunktKode.KONTROLLER_AUTOMATISK_BESTEBEREGNING,
      AksjonspunktKode.MANUELL_KONTROLL_AV_BESTEBEREGNING,
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
