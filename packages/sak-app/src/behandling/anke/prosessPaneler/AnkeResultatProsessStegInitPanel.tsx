import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import AnkeResultatProsessIndex from '@fpsak-frontend/prosess-anke-resultat';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import { AnkeVurdering } from '@fpsak-frontend/types';

import ProsessDefaultInitPanel from '../../felles/prosess/ProsessDefaultInitPanel';
import ProsessPanelInitProps from '../../felles/typer/prosessPanelInitProps';
import { requestAnkeApi, AnkeBehandlingApiKeys } from '../data/ankeBehandlingApi';

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.FORESLA_VEDTAK,
  aksjonspunktCodes.FATTER_VEDTAK,
  aksjonspunktCodes.FORESLA_VEDTAK_MANUELT,
  aksjonspunktCodes.VEDTAK_UTEN_TOTRINNSKONTROLL,
];

const ENDEPUNKTER_PANEL_DATA = [AnkeBehandlingApiKeys.ANKE_VURDERING];
type EndepunktPanelData = {
  ankeVurdering: AnkeVurdering;
}

const AnkeResultatProsessStegInitPanel: FunctionComponent<ProsessPanelInitProps> = ({
  ...props
}) => {
  const intl = useIntl();
  return (
    <ProsessDefaultInitPanel<Record<string, never>, EndepunktPanelData>
      {...props}
      requestApi={requestAnkeApi}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={ProsessStegCode.ANKE_RESULTAT}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.AnkeResultat' })}
      skalPanelVisesIMeny={() => true}
      renderPanel={(data) => (
        <AnkeResultatProsessIndex
          ankeVurdering={data.ankeVurdering}
          alleKodeverk={data.alleKodeverk}
        />
      )}
    />
  );
};

export default AnkeResultatProsessStegInitPanel;
