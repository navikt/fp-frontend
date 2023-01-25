import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';

import vilkarUtfallType from '@navikt/fp-kodeverk/src/vilkarUtfallType';
import vilkarType from '@navikt/fp-kodeverk/src/vilkarType';
import aksjonspunktCodes from '@navikt/fp-kodeverk/src/aksjonspunktCodes';
import OpptjeningFaktaIndex from '@navikt/fp-fakta-opptjening';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { ArbeidsgiverOpplysningerPerId, Opptjening } from '@navikt/fp-types';

import FaktaPanelInitProps from '../../../felles/typer/faktaPanelInitProps';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';
import FaktaDefaultInitPanel from '../../../felles/fakta/FaktaDefaultInitPanel';

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.VURDER_PERIODER_MED_OPPTJENING];

const ENDEPUNKTER_PANEL_DATA = [BehandlingFellesApiKeys.OPPTJENING, BehandlingFellesApiKeys.UTLAND_DOK_STATUS];
type EndepunktPanelData = {
  opptjening?: Opptjening;
  utlandDokStatus?: {
    dokStatus: string;
  };
}

interface OwnProps {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

/**
 * OpptjeningsvilkaretFaktaInitPanel
 */
const OpptjeningsvilkaretFaktaInitPanel: FunctionComponent<OwnProps & FaktaPanelInitProps> = ({
  arbeidsgiverOpplysningerPerId,
  ...props
}) => (
  <FaktaDefaultInitPanel<EndepunktPanelData>
    {...props}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.OPPTJENINGSVILKARET}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'OpptjeningInfoPanel.KontrollerFaktaForOpptjening' })}
    skalPanelVisesIMeny={() => !!props.behandling.vilkår
      && props.behandling.vilkår.some((v) => v.vilkarType === vilkarType.OPPTJENINGSVILKARET)
      && props.behandling.vilkår.some((v) => v.vilkarType === vilkarType.MEDLEMSKAPSVILKARET && v.vilkarStatus === vilkarUtfallType.OPPFYLT)}
    renderPanel={(data) => <OpptjeningFaktaIndex arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId} {...data} />}
  />
);

export default OpptjeningsvilkaretFaktaInitPanel;
