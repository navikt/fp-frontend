import React, {
  ReactElement, useMemo,
} from 'react';

import { RestApiHooks, RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { AbstractRequestApi } from '@fpsak-frontend/rest-api';
import StandardProsessPanelProps from '@fpsak-frontend/types/src/standardProsessPanelPropsTsType';

import ProsessPanelInitProps from '../../types/prosessPanelInitProps';
import useStandardProsessPanelProps from '../../utils/prosess/useStandardProsessPanelProps';
import useProsessMenyRegistrerer from '../../utils/prosess/useProsessMenyRegistrerer';
import ProsessPanelWrapper from './ProsessPanelWrapper';

export type OwnProps<INIT_DATA, PANEL_DATA> = {
  requestApi: AbstractRequestApi;
  initEndepunkter: string[];
  panelEndepunkter?: string[];
  aksjonspunktKoder?: string[];
  vilkarKoder?: string[];
  skalPanelVisesIMeny: (data: Partial<INIT_DATA> & StandardProsessPanelProps, state: RestApiState) => boolean;
  hentOverstyrtStatus?: (data: Partial<INIT_DATA> & StandardProsessPanelProps) => string;
  renderPanel: (data: INIT_DATA & PANEL_DATA & StandardProsessPanelProps) => ReactElement;
  prosessPanelKode: string;
  prosessPanelMenyTekst: string;
  lagringSideEffekter?: (aksjonspunktModeller: any) => () => void,
  erOverstyrt?: boolean;
}

const ProsessDefaultInitPanel = <INIT_DATA, PANEL_DATA = void, >({
  valgtProsessSteg,
  behandlingVersjon,
  registrerProsessPanel,
  requestApi,
  initEndepunkter,
  panelEndepunkter = [],
  aksjonspunktKoder,
  vilkarKoder,
  skalPanelVisesIMeny,
  renderPanel,
  prosessPanelKode,
  prosessPanelMenyTekst,
  lagringSideEffekter,
  hentOverstyrtStatus,
  erOverstyrt = false,
}: OwnProps<INIT_DATA, PANEL_DATA> & ProsessPanelInitProps) => {
  const restApiHooks = useMemo(() => RestApiHooks.initHooks(requestApi), [requestApi]);

  const formaterteEndepunkter = initEndepunkter.map((e) => ({ key: e }));
  const { data: initData, state: initState } = restApiHooks.useMultipleRestApi<INIT_DATA>(formaterteEndepunkter, {
    updateTriggers: [behandlingVersjon],
    isCachingOn: true,
  });

  const standardPanelProps = useStandardProsessPanelProps(initData, aksjonspunktKoder, vilkarKoder, lagringSideEffekter);

  const data = {
    ...initData,
    ...standardPanelProps,
  };

  const status = hentOverstyrtStatus ? hentOverstyrtStatus(data) : standardPanelProps.status;

  const erPanelValgt = useProsessMenyRegistrerer(
    registrerProsessPanel,
    initState,
    prosessPanelKode,
    prosessPanelMenyTekst,
    valgtProsessSteg,
    skalPanelVisesIMeny(data, initState),
    erOverstyrt || standardPanelProps.isAksjonspunktOpen,
    status,
  );

  const formatertePanelEndepunkter = panelEndepunkter.map((e) => ({ key: e }));
  const { data: panelData, state: panelDataState } = restApiHooks.useMultipleRestApi<PANEL_DATA>(formatertePanelEndepunkter, {
    updateTriggers: [erPanelValgt, behandlingVersjon],
    suspendRequest: !erPanelValgt || formatertePanelEndepunkter.length === 0,
    isCachingOn: true,
  });

  return (
    <ProsessPanelWrapper
      erPanelValgt={erPanelValgt}
      erAksjonspunktOpent={standardPanelProps.isAksjonspunktOpen}
      status={status}
      dataState={panelDataState}
    >
      {renderPanel({
        ...initData,
        ...panelData,
        ...standardPanelProps,
      })}
    </ProsessPanelWrapper>
  );
};

export default ProsessDefaultInitPanel;
