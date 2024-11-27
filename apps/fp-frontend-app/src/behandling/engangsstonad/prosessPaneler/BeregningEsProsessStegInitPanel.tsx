import React, { useCallback, useState } from 'react';
import { useIntl } from 'react-intl';

import { AksjonspunktKode,VilkarUtfallType } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { BeregningsresultatProsessIndex } from '@navikt/fp-prosess-beregningsresultat';
import { AksessRettigheter, BeregningsresultatEs } from '@navikt/fp-types';

import { BehandlingApiKeys, requestBehandlingApi } from '../../../data/behandlingContextApi';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.OVERSTYR_BEREGNING];

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.BEREGNINGRESULTAT_ENGANGSSTONAD];
type EndepunktPanelData = {
  beregningresultatEngangsstonad: BeregningsresultatEs;
};

interface Props {
  rettigheter: AksessRettigheter;
}

export const BeregningEsProsessStegInitPanel = ({ rettigheter, ...props }: Props & ProsessPanelInitProps) => {
  const [erOverstyrt, setOverstyrt] = useState(false);
  const toggleOverstyring = useCallback(() => setOverstyrt(!erOverstyrt), [erOverstyrt]);

  return (
    <ProsessDefaultInitPanel<EndepunktPanelData>
      {...props}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={ProsessStegCode.BEREGNING}
      prosessPanelMenyTekst={useIntl().formatMessage({ id: 'Behandlingspunkt.Beregning' })}
      skalPanelVisesIMeny={() => true}
      hentOverstyrtStatus={() =>
        requestBehandlingApi.hasPath(BehandlingApiKeys.BEREGNINGRESULTAT_ENGANGSSTONAD.name)
          ? VilkarUtfallType.OPPFYLT
          : VilkarUtfallType.IKKE_VURDERT
      }
      erOverstyrt={erOverstyrt}
      renderPanel={data => (
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
