import React from 'react';
import { useIntl } from 'react-intl';

import { OpptjeningFaktaIndex } from '@navikt/fp-fakta-opptjening';
import { AksjonspunktKode,VilkarType, VilkarUtfallType } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { ArbeidsgiverOpplysningerPerId, Opptjening } from '@navikt/fp-types';

import { BehandlingApiKeys } from '../../../data/behandlingContextApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { FaktaPanelInitProps } from '../../felles/typer/faktaPanelInitProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.VURDER_PERIODER_MED_OPPTJENING];

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.OPPTJENING];
type EndepunktPanelData = {
  opptjening?: Opptjening;
};

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const OpptjeningsvilkaretFaktaInitPanel = ({
  arbeidsgiverOpplysningerPerId,
  ...props
}: Props & FaktaPanelInitProps) => (
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
        v => v.vilkarType === VilkarType.MEDLEMSKAPSVILKARET && v.vilkarStatus === VilkarUtfallType.OPPFYLT,
      )
    }
    renderPanel={data => (
      <OpptjeningFaktaIndex arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId} {...data} />
    )}
  />
);
