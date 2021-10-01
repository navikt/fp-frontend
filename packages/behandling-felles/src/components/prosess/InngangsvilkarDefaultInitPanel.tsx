import React, {
  ReactElement, useMemo,
} from 'react';

import { RestApiHooks, RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { RequestApi, RestKey } from '@fpsak-frontend/rest-api';
import { LoadingPanel } from '@fpsak-frontend/shared-components';
import { StandardProsessPanelProps } from '@fpsak-frontend/types';

import InngangsvilkarPanelInitProps from '../../types/inngangsvilkarPanelInitProps';
import useStandardProsessPanelProps from '../../utils/prosess/useStandardProsessPanelProps';
import skalViseProsessPanel from '../../utils/prosess/skalViseProsessPanel';
import useInngangsvilkarRegistrerer from '../../utils/prosess/useInngangsvilkarRegistrerer';

export type OwnProps<INIT_DATA, PANEL_DATA> = {
  behandlingVersjon: number;
  requestApi: RequestApi;
  initEndepunkter: RestKey<any, any>[];
  panelEndepunkter?: RestKey<any, any>[];
  aksjonspunktKoder?: string[];
  vilkarKoder?: string[];
  renderPanel: (data: INIT_DATA & PANEL_DATA & StandardProsessPanelProps, erOverstyrt: boolean, toggleOverstyring: () => void) => ReactElement;
  inngangsvilkarPanelKode: string;
  hentInngangsvilkarPanelTekst: (data: StandardProsessPanelProps) => string;
}

const InngangsvilkarDefaultInitPanel = <INIT_DATA, PANEL_DATA = void, >({
  erPanelValgt,
  behandlingVersjon,
  registrerInngangsvilkarPanel,
  requestApi,
  initEndepunkter,
  panelEndepunkter = [],
  aksjonspunktKoder,
  vilkarKoder,
  renderPanel,
  inngangsvilkarPanelKode,
  hentInngangsvilkarPanelTekst,
}: OwnProps<INIT_DATA, PANEL_DATA> & InngangsvilkarPanelInitProps) => {
  const restApiHooks = useMemo(() => RestApiHooks.initHooks(requestApi), [requestApi]);

  const formaterteEndepunkter = initEndepunkter.map((e) => ({ key: e }));
  const { data: initData, state: initState } = restApiHooks.useMultipleRestApi<INIT_DATA, any>(formaterteEndepunkter, {
    updateTriggers: [behandlingVersjon],
    isCachingOn: true,
  });
  const erDataFerdighentet = initState === RestApiState.SUCCESS;

  const standardPanelProps = useStandardProsessPanelProps(initData, aksjonspunktKoder, vilkarKoder);

  const skalVises = skalViseProsessPanel(standardPanelProps.aksjonspunkter, vilkarKoder, standardPanelProps.vilkar);

  const { erOverstyrt, toggleOverstyring } = useInngangsvilkarRegistrerer(
    registrerInngangsvilkarPanel,
    behandlingVersjon,
    inngangsvilkarPanelKode,
    hentInngangsvilkarPanelTekst(standardPanelProps),
    erDataFerdighentet && skalVises,
    standardPanelProps.isAksjonspunktOpen,
    standardPanelProps.status,
  );

  const formatertePanelEndepunkter = panelEndepunkter.map((e) => ({ key: e }));
  const { data: panelData, state: panelDataState } = restApiHooks.useMultipleRestApi<PANEL_DATA, any>(formatertePanelEndepunkter, {
    updateTriggers: [erPanelValgt, behandlingVersjon],
    suspendRequest: !erPanelValgt || formatertePanelEndepunkter.length === 0,
    isCachingOn: true,
  });

  if (!erPanelValgt || !skalVises) {
    return null;
  }

  if (!erDataFerdighentet || (formatertePanelEndepunkter.length > 0 && panelDataState !== RestApiState.SUCCESS)) {
    return <LoadingPanel />;
  }

  return renderPanel({
    ...initData,
    ...panelData,
    ...standardPanelProps,
  }, erOverstyrt, toggleOverstyring);
};

export default InngangsvilkarDefaultInitPanel;
