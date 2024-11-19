import React from 'react';
import { useIntl } from 'react-intl';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { AnkeResultatProsessIndex } from '@navikt/fp-prosess-anke-resultat';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { AnkeVurdering } from '@navikt/fp-types';

import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';
import { BehandlingApiKeys } from '../../../data/behandlingContextApi';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.FORESLA_VEDTAK,
  AksjonspunktKode.FATTER_VEDTAK,
  AksjonspunktKode.FORESLA_VEDTAK_MANUELT,
];

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.ANKE_VURDERING];
type EndepunktPanelData = {
  ankeVurdering: AnkeVurdering;
};

export const AnkeResultatProsessStegInitPanel = ({ ...props }: ProsessPanelInitProps) => {
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
