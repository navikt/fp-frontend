import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';

import { VilkarType, behandlingType, AksjonspunktCode } from '@navikt/fp-kodeverk';
import { SokersOpplysningspliktVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-sokers-opplysningsplikt';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { ArbeidsgiverOpplysningerPerId, Soknad } from '@navikt/fp-types';

import skalViseProsessPanel from '../../../felles/prosess/skalViseProsessPanel';
import ProsessDefaultInitPanel from '../../../felles/prosess/ProsessDefaultInitPanel';
import ProsessPanelInitProps from '../../../felles/typer/prosessPanelInitProps';
import { BehandlingApiKeys } from '../../../../data/behandlingContextApi';

const AKSJONSPUNKT_KODER = [
  AksjonspunktCode.SOKERS_OPPLYSNINGSPLIKT_OVST,
  AksjonspunktCode.SOKERS_OPPLYSNINGSPLIKT_MANU,
];

const VILKAR_KODER = [VilkarType.SOKERSOPPLYSNINGSPLIKT];

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.SOKNAD];
type EndepunktPanelData = {
  soknad: Soknad;
};

interface OwnProps {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const OpplysningspliktProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  arbeidsgiverOpplysningerPerId,
  ...props
}) => (
  <ProsessDefaultInitPanel<EndepunktPanelData>
    {...props}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    vilkarKoder={VILKAR_KODER}
    prosessPanelKode={ProsessStegCode.OPPLYSNINGSPLIKT}
    prosessPanelMenyTekst={useIntl().formatMessage({ id: 'Behandlingspunkt.Opplysningsplikt' })}
    skalPanelVisesIMeny={data => {
      const defaultSkalVises = skalViseProsessPanel(data.aksjonspunkter, VILKAR_KODER, data.vilkar);
      const isRevurdering = behandlingType.REVURDERING === data.behandling.type;
      const hasAp = data.aksjonspunkter.some(ap => ap.definisjon === AksjonspunktCode.SOKERS_OPPLYSNINGSPLIKT_MANU);
      return !(isRevurdering && !hasAp) || defaultSkalVises;
    }}
    renderPanel={data => (
      <SokersOpplysningspliktVilkarProsessIndex
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        {...data}
      />
    )}
  />
);

export default OpplysningspliktProsessStegInitPanel;
