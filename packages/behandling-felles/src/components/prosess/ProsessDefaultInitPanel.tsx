import React, {
  ReactElement, useMemo,
} from 'react';

import { RestApiHooks, RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { AbstractRequestApi, RestKey } from '@fpsak-frontend/rest-api';
import StandardProsessPanelProps from '@fpsak-frontend/types/src/standardProsessPanelPropsTsType';

import ProsessPanelInitProps from '../../types/prosessPanelInitProps';
import useStandardProsessPanelProps from '../../utils/prosess/useStandardProsessPanelProps';
import useProsessMenyRegistrerer from '../../utils/prosess/useProsessMenyRegistrerer';
import ProsessPanelWrapper from './ProsessPanelWrapper';

export type OwnProps<INIT_DATA, PANEL_DATA> = {
  requestApi: AbstractRequestApi;
  initEndepunkter: RestKey<any, any>[] | { key: RestKey<INIT_DATA, any>, params?: any }[];
  panelEndepunkter?: RestKey<any, any>[] | { key: RestKey<any, any>, params?: any }[];
  aksjonspunktKoder?: string[];
  vilkarKoder?: string[];
  skalPanelVisesIMeny: (data: Partial<INIT_DATA> & StandardProsessPanelProps, state: RestApiState) => boolean;
  hentOverstyrtStatus?: (initData: Partial<INIT_DATA>, standardData: StandardProsessPanelProps) => string;
  renderPanel: (data: INIT_DATA & PANEL_DATA & StandardProsessPanelProps, initData?: Partial<INIT_DATA>) => ReactElement;
  prosessPanelKode: string;
  prosessPanelMenyTekst: string;
  lagringSideEffekter?: (aksjonspunktModeller: any) => () => void,
  erOverstyrt?: boolean;
  hentSkalMarkeresSomAktiv?: (initData: Partial<INIT_DATA>, standardData: StandardProsessPanelProps) => boolean;
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
  hentSkalMarkeresSomAktiv,
}: OwnProps<INIT_DATA, PANEL_DATA> & ProsessPanelInitProps) => {
  const restApiHooks = useMemo(() => RestApiHooks.initHooks(requestApi), [requestApi]);

  const formaterteEndepunkter = initEndepunkter.map((e) => (e instanceof RestKey ? ({ key: e }) : e));
  const { data: initData, state: initState } = restApiHooks.useMultipleRestApi<INIT_DATA, any>(formaterteEndepunkter, {
    updateTriggers: [behandlingVersjon],
    isCachingOn: true,
  });

  const standardPanelProps = useStandardProsessPanelProps(initData, aksjonspunktKoder, vilkarKoder, lagringSideEffekter);

  const status = hentOverstyrtStatus ? hentOverstyrtStatus(initData, standardPanelProps) : standardPanelProps.status;

  const data = {
    ...initData,
    ...standardPanelProps,
  };

  const skalMarkeresSomAktiv = hentSkalMarkeresSomAktiv && hentSkalMarkeresSomAktiv(initData, standardPanelProps) ? true : undefined;

  const erPanelValgt = useProsessMenyRegistrerer(
    registrerProsessPanel,
    initState,
    prosessPanelKode,
    prosessPanelMenyTekst,
    valgtProsessSteg,
    skalPanelVisesIMeny(data, initState),
    erOverstyrt || standardPanelProps.isAksjonspunktOpen,
    status,
    skalMarkeresSomAktiv,
  );

  const formatertePanelEndepunkter = panelEndepunkter.map((e) => (e instanceof RestKey ? ({ key: e }) : e));
  const { data: panelData, state: panelDataState } = restApiHooks.useMultipleRestApi<PANEL_DATA, any>(formatertePanelEndepunkter, {
    updateTriggers: [erPanelValgt, behandlingVersjon],
    suspendRequest: !erPanelValgt || formatertePanelEndepunkter.length === 0,
    isCachingOn: true,
  });

  return (
    <ProsessPanelWrapper
      erPanelValgt={erPanelValgt}
      erAksjonspunktOpent={standardPanelProps.isAksjonspunktOpen}
      status={status}
      dataState={formatertePanelEndepunkter.length > 0 ? panelDataState : initState}
    >
      {renderPanel({
        ...initData,
        ...panelData,
        ...standardPanelProps,
      }, initData)}
    </ProsessPanelWrapper>
  );
};

export default ProsessDefaultInitPanel;
