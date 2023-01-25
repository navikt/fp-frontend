import React, {
  ReactElement, useMemo,
} from 'react';

import { RestApiHooks, RestApiState } from '@navikt/fp-rest-api-hooks';
import { RequestApi, RestKey } from '@navikt/fp-rest-api';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { StandardProsessPanelProps } from '@navikt/fp-types';

import InngangsvilkarPanelInitProps from '../typer/inngangsvilkarPanelInitProps';
import useStandardProsessPanelProps from './useStandardProsessPanelProps';
import skalViseProsessPanel from './skalViseProsessPanel';
import useInngangsvilkarRegistrerer from './useInngangsvilkarRegistrerer';

export type OwnProps<PANEL_DATA> = {
  behandlingVersjon: number;
  requestApi: RequestApi;
  panelEndepunkter?: RestKey<any, any>[];
  aksjonspunktKoder?: string[];
  vilkarKoder?: string[];
  renderPanel: (data: PANEL_DATA & StandardProsessPanelProps, erOverstyrt: boolean, toggleOverstyring: () => void) => ReactElement;
  inngangsvilkarPanelKode: string;
  hentInngangsvilkarPanelTekst: (data: StandardProsessPanelProps) => string;
}

const InngangsvilkarDefaultInitPanel = <PANEL_DATA = void, >({
  erPanelValgt,
  behandlingVersjon,
  registrerInngangsvilkarPanel,
  requestApi,
  panelEndepunkter = [],
  aksjonspunktKoder,
  vilkarKoder,
  renderPanel,
  inngangsvilkarPanelKode,
  hentInngangsvilkarPanelTekst,
}: OwnProps<PANEL_DATA> & InngangsvilkarPanelInitProps) => {
  const restApiHooks = useMemo(() => RestApiHooks.initHooks(requestApi), [requestApi]);

  const standardPanelProps = useStandardProsessPanelProps(aksjonspunktKoder, vilkarKoder);

  const skalVises = skalViseProsessPanel(standardPanelProps.aksjonspunkter, vilkarKoder, standardPanelProps.vilkar);

  const { erOverstyrt, toggleOverstyring } = useInngangsvilkarRegistrerer(
    registrerInngangsvilkarPanel,
    behandlingVersjon,
    inngangsvilkarPanelKode,
    hentInngangsvilkarPanelTekst(standardPanelProps),
    skalVises,
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

  if (formatertePanelEndepunkter.length > 0 && panelDataState !== RestApiState.SUCCESS) {
    return <LoadingPanel />;
  }

  return renderPanel({
    ...panelData,
    ...standardPanelProps,
  }, erOverstyrt, toggleOverstyring);
};

export default InngangsvilkarDefaultInitPanel;
