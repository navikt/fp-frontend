import React, {
  FunctionComponent, useCallback, useState,
} from 'react';
import { useIntl } from 'react-intl';

import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import BeregningsresultatProsessIndex from '@fpsak-frontend/prosess-beregningsresultat';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import { AksessRettigheter, BeregningsresultatEs } from '@fpsak-frontend/types';

import { EsBehandlingApiKeys } from '../data/esBehandlingApi';

import ProsessDefaultInitPanel from '../../../felles/prosess/ProsessDefaultInitPanel';
import ProsessPanelInitProps from '../../../felles/typer/prosessPanelInitProps';

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.OVERSTYR_BEREGNING];

const ENDEPUNKTER_PANEL_DATA = [EsBehandlingApiKeys.BEREGNINGRESULTAT_ENGANGSSTONAD];
type EndepunktPanelData = {
  beregningresultatEngangsstonad: BeregningsresultatEs;
}

interface OwnProps {
  rettigheter: AksessRettigheter;
}

const BeregningEsProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  rettigheter,
  ...props
}) => {
  const [erOverstyrt, setOverstyrt] = useState(false);
  const toggleOverstyring = useCallback(() => setOverstyrt(!erOverstyrt), [erOverstyrt]);

  return (
    <ProsessDefaultInitPanel<Record<string, never>, EndepunktPanelData>
      {...props}
      requestApi={props.requestApi}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={ProsessStegCode.BEREGNING}
      prosessPanelMenyTekst={useIntl().formatMessage({ id: 'Behandlingspunkt.Beregning' })}
      skalPanelVisesIMeny={() => true}
      hentOverstyrtStatus={() => (
        props.requestApi.hasPath(EsBehandlingApiKeys.BEREGNINGRESULTAT_ENGANGSSTONAD.name) ? vilkarUtfallType.OPPFYLT : vilkarUtfallType.IKKE_VURDERT
      )}
      erOverstyrt={erOverstyrt}
      renderPanel={(data) => (
        <BeregningsresultatProsessIndex
          overrideReadOnly={data.isReadOnly}
          kanOverstyreAccess={rettigheter.kanOverstyreAccess}
          toggleOverstyring={toggleOverstyring}
          {...data}
        />
      )}
    />
  );
};

export default BeregningEsProsessStegInitPanel;
