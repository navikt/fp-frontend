import React, {
  FunctionComponent, useCallback, useState,
} from 'react';
import { useIntl } from 'react-intl';

import vilkarUtfallType from '@navikt/fp-kodeverk/src/vilkarUtfallType';
import aksjonspunktCodes from '@navikt/fp-kodeverk/src/aksjonspunktCodes';
import BeregningsresultatProsessIndex from '@navikt/fp-prosess-beregningsresultat';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { AksessRettigheter, BeregningsresultatEs } from '@navikt/fp-types';

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
    <ProsessDefaultInitPanel<EndepunktPanelData>
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
