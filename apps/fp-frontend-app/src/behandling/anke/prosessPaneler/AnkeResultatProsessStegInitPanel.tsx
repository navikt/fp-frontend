import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';

import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { AnkeResultatProsessIndex } from '@navikt/fp-prosess-anke-resultat';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { AnkeVurdering } from '@navikt/fp-types';

import ProsessDefaultInitPanel from '../../felles/prosess/ProsessDefaultInitPanel';
import ProsessPanelInitProps from '../../felles/typer/prosessPanelInitProps';
import { BehandlingApiKeys } from '../../../data/behandlingContextApi';

const AKSJONSPUNKT_KODER = [
  AksjonspunktCode.FORESLA_VEDTAK,
  AksjonspunktCode.FATTER_VEDTAK,
  AksjonspunktCode.FORESLA_VEDTAK_MANUELT,
];

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.ANKE_VURDERING];
type EndepunktPanelData = {
  ankeVurdering: AnkeVurdering;
};

const AnkeResultatProsessStegInitPanel: FunctionComponent<ProsessPanelInitProps> = ({ ...props }) => {
  const intl = useIntl();
  return (
    <ProsessDefaultInitPanel<EndepunktPanelData>
      {...props}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={ProsessStegCode.ANKE_RESULTAT}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.AnkeResultat' })}
      skalPanelVisesIMeny={() => true}
      renderPanel={data => (
        <AnkeResultatProsessIndex ankeVurdering={data.ankeVurdering} alleKodeverk={data.alleKodeverk} />
      )}
    />
  );
};

export default AnkeResultatProsessStegInitPanel;
