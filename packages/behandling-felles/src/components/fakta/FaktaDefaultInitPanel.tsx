import React, {
  ReactElement, useMemo,
} from 'react';

import { RestApiHooks } from '@fpsak-frontend/rest-api-hooks';
import StandardFaktaPanelProps from '@fpsak-frontend/types/src/standardFaktaPanelPropsTsType';
import { RequestApi, RestKey } from '@fpsak-frontend/rest-api';
import { FaktaPanelCode } from '@fpsak-frontend/konstanter';

import FaktaPanelInitProps from '../../types/faktaPanelInitProps';
import useStandardFaktaPanelProps from '../../utils/fakta/useStandardFaktaPanelProps';
import useFaktaMenyRegistrerer from '../../utils/fakta/useFaktaMenyRegistrerer';
import FaktaPanelWrapper from './FaktaPanelWrapper';

const DEFAULT_INIT_DATA = {};

export type OwnProps<INIT_DATA, PANEL_DATA> = {
  requestApi: RequestApi;
  initEndepunkter: RestKey<any, any>[];
  panelEndepunkter?: RestKey<any, any>[];
  aksjonspunktKoder?: string[];
  overstyringApKoder?: string[];
  skalPanelVisesIMeny: (data: Partial<INIT_DATA>) => boolean;
  renderPanel: (data: INIT_DATA & PANEL_DATA & StandardFaktaPanelProps) => ReactElement;
  faktaPanelKode: FaktaPanelCode;
  faktaPanelMenyTekst: string;
}

const FaktaDefaultInitPanel = <INIT_DATA, PANEL_DATA = void, >({
  valgtFaktaSteg,
  behandlingVersjon,
  registrerFaktaPanel,
  requestApi,
  initEndepunkter,
  panelEndepunkter = [],
  aksjonspunktKoder,
  overstyringApKoder,
  skalPanelVisesIMeny,
  renderPanel,
  faktaPanelKode,
  faktaPanelMenyTekst,
}: OwnProps<INIT_DATA, PANEL_DATA> & FaktaPanelInitProps) => {
  const restApiHooks = useMemo(() => RestApiHooks.initHooks(requestApi), [requestApi]);

  const formaterteEndepunkter = initEndepunkter.map((e) => ({ key: e }));
  const { data: initData = DEFAULT_INIT_DATA as INIT_DATA, state: initState } = restApiHooks.useMultipleRestApi<INIT_DATA, any>(formaterteEndepunkter, {
    updateTriggers: [behandlingVersjon],
    isCachingOn: true,
  });

  const standardPanelProps = useStandardFaktaPanelProps(initData, aksjonspunktKoder, overstyringApKoder);

  const erPanelValgt = useFaktaMenyRegistrerer(
    registrerFaktaPanel,
    initState,
    faktaPanelKode,
    faktaPanelMenyTekst,
    valgtFaktaSteg,
    skalPanelVisesIMeny(initData),
    standardPanelProps.harApneAksjonspunkter,
  );

  const formatertePanelEndepunkter = panelEndepunkter.map((e) => ({ key: e }));
  const { data: panelData, state: panelDataState } = restApiHooks.useMultipleRestApi<PANEL_DATA, any>(formatertePanelEndepunkter, {
    updateTriggers: [erPanelValgt, behandlingVersjon],
    suspendRequest: !erPanelValgt || formatertePanelEndepunkter.length === 0,
    isCachingOn: true,
  });

  return (
    <FaktaPanelWrapper erPanelValgt={erPanelValgt} dataState={formatertePanelEndepunkter.length > 0 ? panelDataState : initState}>
      {renderPanel({
        ...initData,
        ...panelData,
        ...standardPanelProps,
      })}
    </FaktaPanelWrapper>
  );
};

export default FaktaDefaultInitPanel;
