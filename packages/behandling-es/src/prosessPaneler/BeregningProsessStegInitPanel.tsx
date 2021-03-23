import React, {
  FunctionComponent, useCallback, useState,
} from 'react';

import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import BeregningsresultatProsessIndex from '@fpsak-frontend/prosess-beregningsresultat';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import {
  AksessRettigheter,
  Aksjonspunkt, BeregningsresultatEs, Vilkar,
} from '@fpsak-frontend/types';
import { ProsessDefaultInitPanel, ProsessPanelInitProps } from '@fpsak-frontend/behandling-felles';

import getPackageIntl from '../../i18n/getPackageIntl';
import { EsBehandlingApiKeys, requestEsApi } from '../data/esBehandlingApi';

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.OVERSTYR_BEREGNING];

const ENDEPUNKTER_INIT_DATA = [EsBehandlingApiKeys.AKSJONSPUNKTER, EsBehandlingApiKeys.VILKAR, EsBehandlingApiKeys.BEREGNINGRESULTAT_ENGANGSSTONAD];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
  beregningresultatEngangsstonad: BeregningsresultatEs;
}

interface OwnProps {
  rettigheter: AksessRettigheter;
}

const BeregningProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
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
      prosessPanelKode={prosessStegCodes.BEREGNING}
      prosessPanelMenyTekst={getPackageIntl().formatMessage({ id: 'Behandlingspunkt.Beregning' })}
      skalPanelVisesIMeny={() => true}
      hentOverstyrtStatus={(initData) => (initData?.beregningresultatEngangsstonad ? vilkarUtfallType.OPPFYLT : vilkarUtfallType.IKKE_VURDERT)}
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

export default BeregningProsessStegInitPanel;
