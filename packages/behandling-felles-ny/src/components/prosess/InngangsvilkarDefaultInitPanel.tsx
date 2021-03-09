import React, {
  ReactElement,
} from 'react';

import { MulipleRestApiInterface, RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { LoadingPanel } from '@fpsak-frontend/shared-components';
import { StandardProsessPanelProps } from '@fpsak-frontend/types';

import InngangsvilkarPanelInitProps from '../../types/inngangsvilkarPanelInitProps';
import useStandardProsessPanelProps from '../../utils/prosess/useStandardProsessPanelProps';
import skalViseProsessPanel from '../../utils/prosess/skalViseProsessPanel';
import useInngangsvilkarRegistrerer from '../../utils/prosess/useInngangsvilkarRegistrerer';

type OwnProps<INIT_DATA, PANEL_DATA> = {
  behandlingVersjon: number;
  useMultipleRestApi: MulipleRestApiInterface<INIT_DATA | PANEL_DATA>;
  initEndepunkter: string[];
  panelEndepunkter?: string[];
  aksjonspunktKoder?: string[];
  vilkarKoder?: string[];
  render: (data: INIT_DATA & PANEL_DATA & StandardProsessPanelProps, erOverstyrt: boolean, toggleOverstyring: () => void) => ReactElement;
  inngangsvilkarPanelKode: string;
  inngangsvilkarPanelTekstFn: (data: StandardProsessPanelProps) => string;
}

const InngangsvilkarDefaultInitPanel = <INIT_DATA, PANEL_DATA = void, >({
  erPanelValgt,
  behandlingVersjon,
  setPanelInfo,
  useMultipleRestApi,
  initEndepunkter,
  panelEndepunkter = [],
  aksjonspunktKoder,
  vilkarKoder,
  render,
  inngangsvilkarPanelKode,
  inngangsvilkarPanelTekstFn,
}: OwnProps<INIT_DATA, PANEL_DATA> & InngangsvilkarPanelInitProps) => {
  const formaterteEndepunkter = initEndepunkter.map((e) => ({ key: e }));
  const { data: initData, state: initState } = useMultipleRestApi(formaterteEndepunkter, {
    updateTriggers: [behandlingVersjon],
    isCachingOn: true,
  });
  const erDataFerdighentet = initState === RestApiState.SUCCESS;

  const standardPanelProps = useStandardProsessPanelProps(initData, aksjonspunktKoder, vilkarKoder) as StandardProsessPanelProps;

  const skalVises = skalViseProsessPanel(standardPanelProps.aksjonspunkter, vilkarKoder, standardPanelProps.vilkar);

  const { erOverstyrt, toggleOverstyring } = useInngangsvilkarRegistrerer(
    setPanelInfo,
    behandlingVersjon,
    inngangsvilkarPanelKode,
    inngangsvilkarPanelTekstFn(standardPanelProps),
    erDataFerdighentet && skalVises,
    standardPanelProps.isAksjonspunktOpen,
    standardPanelProps.status,
  );

  const formatertePanelEndepunkter = panelEndepunkter.map((e) => ({ key: e }));
  const { data: panelData, state: panelDataState } = useMultipleRestApi(formatertePanelEndepunkter, {
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

  return render({
    ...initData as INIT_DATA,
    ...panelData as PANEL_DATA,
    ...standardPanelProps,
  }, erOverstyrt, toggleOverstyring);
};

export default InngangsvilkarDefaultInitPanel;
