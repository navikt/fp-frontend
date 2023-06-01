import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';

import { vilkarUtfallType, VilkarType, AksjonspunktCode } from '@navikt/fp-kodeverk';
import { OpptjeningFaktaIndex } from '@navikt/fp-fakta-opptjening';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { ArbeidsgiverOpplysningerPerId, Opptjening } from '@navikt/fp-types';

import FaktaPanelInitProps from '../../felles/typer/faktaPanelInitProps';
import FaktaDefaultInitPanel from '../../felles/fakta/FaktaDefaultInitPanel';
import { BehandlingApiKeys } from '../../../data/behandlingContextApi';

const AKSJONSPUNKT_KODER = [AksjonspunktCode.VURDER_PERIODER_MED_OPPTJENING];

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.OPPTJENING];
type EndepunktPanelData = {
  opptjening?: Opptjening;
};

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
    skalPanelVisesIMeny={() =>
      !!props.behandling.vilkår &&
      props.behandling.vilkår.some(v => v.vilkarType === VilkarType.OPPTJENINGSVILKARET) &&
      props.behandling.vilkår.some(
        v => v.vilkarType === VilkarType.MEDLEMSKAPSVILKARET && v.vilkarStatus === vilkarUtfallType.OPPFYLT,
      )
    }
    renderPanel={data => (
      <OpptjeningFaktaIndex arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId} {...data} />
    )}
  />
);

export default OpptjeningsvilkaretFaktaInitPanel;
