import React, {
  FunctionComponent, useCallback, useState,
} from 'react';
import { useIntl } from 'react-intl';

import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import BeregningsresultatProsessIndex from '@fpsak-frontend/prosess-beregningsresultat';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import {
  AksessRettigheter,
  Aksjonspunkt, BeregningsresultatEs, Vilkar,
} from '@fpsak-frontend/types';

import { EsBehandlingApiKeys, requestEsApi } from '../data/esBehandlingApi';

import ProsessDefaultInitPanel from '../../../felles/prosess/ProsessDefaultInitPanel';
import ProsessPanelInitProps from '../../../felles/typer/prosessPanelInitProps';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.OVERSTYR_BEREGNING];

const ENDEPUNKTER_INIT_DATA = [BehandlingFellesApiKeys.AKSJONSPUNKTER, BehandlingFellesApiKeys.VILKAR, EsBehandlingApiKeys.BEREGNINGRESULTAT_ENGANGSSTONAD];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
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
    <ProsessDefaultInitPanel<EndepunktInitData>
      {...props}
      requestApi={requestEsApi}
      initEndepunkter={ENDEPUNKTER_INIT_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={ProsessStegCode.BEREGNING}
      prosessPanelMenyTekst={useIntl().formatMessage({ id: 'Behandlingspunkt.Beregning' })}
      skalPanelVisesIMeny={() => true}
      hentOverstyrtStatus={(initData) => (initData.beregningresultatEngangsstonad ? vilkarUtfallType.OPPFYLT : vilkarUtfallType.IKKE_VURDERT)}
      erOverstyrt={erOverstyrt}
      renderPanel={(data) => (
        <BeregningsresultatProsessIndex
          overrideReadOnly={data.isReadOnly}
          kanOverstyreAccess={rettigheter.kanOverstyreAccess}
          toggleOverstyring={toggleOverstyring}
          // @ts-ignore Eg trur denne feilar grunna feil i typescript-pakka. Sjekk på eit seinare tidspunkt om denne er retta
          {...data}
        />
      )}
    />
  );
};

export default BeregningEsProsessStegInitPanel;
