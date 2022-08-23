import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';

import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import SokersOpplysningspliktVilkarProsessIndex from '@fpsak-frontend/prosess-vilkar-sokers-opplysningsplikt';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import {
  Aksjonspunkt, ArbeidsgiverOpplysningerPerId, Soknad, Vilkar,
} from '@fpsak-frontend/types';

import skalViseProsessPanel from '../../../felles/prosess/skalViseProsessPanel';
import ProsessDefaultInitPanel from '../../../felles/prosess/ProsessDefaultInitPanel';
import ProsessPanelInitProps from '../../../felles/typer/prosessPanelInitProps';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.SOKERS_OPPLYSNINGSPLIKT_OVST,
  aksjonspunktCodes.SOKERS_OPPLYSNINGSPLIKT_MANU,
];

const VILKAR_KODER = [vilkarType.SOKERSOPPLYSNINGSPLIKT];

const ENDEPUNKTER_INIT_DATA = [BehandlingFellesApiKeys.AKSJONSPUNKTER, BehandlingFellesApiKeys.VILKAR];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

const ENDEPUNKTER_PANEL_DATA = [BehandlingFellesApiKeys.SOKNAD];
type EndepunktPanelData = {
  soknad: Soknad;
}

interface OwnProps {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const OpplysningspliktProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  arbeidsgiverOpplysningerPerId,
  ...props
}) => (
  <ProsessDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
    {...props}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    vilkarKoder={VILKAR_KODER}
    prosessPanelKode={ProsessStegCode.OPPLYSNINGSPLIKT}
    prosessPanelMenyTekst={useIntl().formatMessage({ id: 'Behandlingspunkt.Opplysningsplikt' })}
    skalPanelVisesIMeny={(data) => {
      const defaultSkalVises = skalViseProsessPanel(data.aksjonspunkter, VILKAR_KODER, data.vilkar);
      const isRevurdering = behandlingType.REVURDERING === data.behandling.type;
      const hasAp = data.aksjonspunkter.some((ap) => ap.definisjon === aksjonspunktCodes.SOKERS_OPPLYSNINGSPLIKT_MANU);
      return !(isRevurdering && !hasAp) || defaultSkalVises;
    }}
    renderPanel={(data) => (
      <SokersOpplysningspliktVilkarProsessIndex
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        {...data}
      />
    )}
  />
);

export default OpplysningspliktProsessStegInitPanel;
