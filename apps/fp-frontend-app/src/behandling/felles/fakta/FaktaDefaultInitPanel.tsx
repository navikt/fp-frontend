import React, { ReactElement } from 'react';

import { RestApiState } from '@navikt/fp-rest-api-hooks';
import { StandardFaktaPanelProps } from '@navikt/fp-types';
import { RestKey } from '@navikt/fp-rest-api';
import { FaktaPanelCode } from '@navikt/fp-konstanter';

import FaktaPanelInitProps from '../typer/faktaPanelInitProps';
import useStandardFaktaPanelProps from './useStandardFaktaPanelProps';
import useFaktaMenyRegistrerer from './useFaktaMenyRegistrerer';
import FaktaPanelWrapper from './FaktaPanelWrapper';
import { restBehandlingApiHooks } from '../../../data/behandlingContextApi';

type Env = 'local' | 'dev' | 'production';

function getEnvironment(): Env {
  const hostname = window.location.hostname;

  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return 'local';
  } else if (hostname.includes('intern.dev.nav.no')) {
    return 'dev';
  }
  return 'production';
}

function isCurrentEnvironment(env: Env): boolean {
  return env === getEnvironment();
}

export type OwnProps<PANEL_DATA> = {
  panelEndepunkter?: RestKey<any, any>[];
  aksjonspunktKoder?: string[];
  overstyringApKoder?: string[];
  skalPanelVisesIMeny: (erGjeldendeEnv: typeof isCurrentEnvironment) => boolean;
  renderPanel: (data: PANEL_DATA & StandardFaktaPanelProps) => ReactElement;
  faktaPanelKode: FaktaPanelCode;
  faktaPanelMenyTekst: string;
};

const FaktaDefaultInitPanel = <PANEL_DATA,>({
  valgtFaktaSteg,
  behandling,
  registrerFaktaPanel,
  panelEndepunkter = [],
  aksjonspunktKoder,
  overstyringApKoder,
  skalPanelVisesIMeny,
  renderPanel,
  faktaPanelKode,
  faktaPanelMenyTekst,
}: OwnProps<PANEL_DATA> & FaktaPanelInitProps) => {
  const standardPanelProps = useStandardFaktaPanelProps(aksjonspunktKoder, overstyringApKoder);

  const erPanelValgt = useFaktaMenyRegistrerer(
    registrerFaktaPanel,
    faktaPanelKode,
    faktaPanelMenyTekst,
    skalPanelVisesIMeny(isCurrentEnvironment),
    standardPanelProps.harApneAksjonspunkter,
    valgtFaktaSteg,
  );

  const formatertePanelEndepunkter = panelEndepunkter.map(e => ({ key: e }));
  const { data: panelData, state: panelDataState } = restBehandlingApiHooks.useMultipleRestApi<PANEL_DATA, any>(
    formatertePanelEndepunkter,
    {
      updateTriggers: [erPanelValgt, behandling?.versjon],
      suspendRequest: !erPanelValgt || formatertePanelEndepunkter.length === 0,
      isCachingOn: true,
    },
  );

  return (
    <FaktaPanelWrapper
      erPanelValgt={erPanelValgt}
      dataState={formatertePanelEndepunkter.length > 0 ? panelDataState : RestApiState.SUCCESS}
    >
      {renderPanel({
        ...(panelData as PANEL_DATA),
        ...standardPanelProps,
      })}
    </FaktaPanelWrapper>
  );
};

export default FaktaDefaultInitPanel;
