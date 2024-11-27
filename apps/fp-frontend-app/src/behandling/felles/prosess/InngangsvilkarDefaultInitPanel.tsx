import React, { ReactElement } from 'react';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';

import { RestKey } from '@navikt/fp-rest-api';
import { RestApiState } from '@navikt/fp-rest-api-hooks';
import { StandardProsessPanelProps } from '@navikt/fp-types';

import { restBehandlingApiHooks } from '../../../data/behandlingContextApi';
import { InngangsvilkarPanelInitProps } from '../typer/inngangsvilkarPanelInitProps';
import { skalViseProsessPanel } from './skalViseProsessPanel';
import { useInngangsvilkarRegistrerer } from './useInngangsvilkarRegistrerer';
import { useStandardProsessPanelProps } from './useStandardProsessPanelProps';

export type Props<PANEL_DATA> = {
  behandlingVersjon: number;
  panelEndepunkter?: RestKey<any, any>[];
  aksjonspunktKoder?: string[];
  vilkarKoder?: string[];
  renderPanel: (
    data: PANEL_DATA & StandardProsessPanelProps,
    erOverstyrt: boolean,
    toggleOverstyring: () => void,
  ) => ReactElement;
  inngangsvilkarPanelKode: string;
  hentInngangsvilkarPanelTekst: (data: StandardProsessPanelProps) => string;
};

export const InngangsvilkarDefaultInitPanel = <PANEL_DATA,>({
  erPanelValgt,
  behandlingVersjon,
  registrerInngangsvilkarPanel,
  panelEndepunkter = [],
  aksjonspunktKoder,
  vilkarKoder,
  renderPanel,
  inngangsvilkarPanelKode,
  hentInngangsvilkarPanelTekst,
}: Props<PANEL_DATA> & InngangsvilkarPanelInitProps) => {
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

  const formatertePanelEndepunkter = panelEndepunkter.map(e => ({ key: e }));
  const { data: panelData, state: panelDataState } = restBehandlingApiHooks.useMultipleRestApi<PANEL_DATA, any>(
    formatertePanelEndepunkter,
    {
      updateTriggers: [erPanelValgt, behandlingVersjon],
      suspendRequest: !erPanelValgt || formatertePanelEndepunkter.length === 0,
      isCachingOn: true,
    },
  );

  if (!erPanelValgt || !skalVises) {
    return null;
  }

  if (formatertePanelEndepunkter.length > 0 && panelDataState !== RestApiState.SUCCESS) {
    return <LoadingPanel />;
  }

  return renderPanel(
    {
      ...(panelData as PANEL_DATA),
      ...standardPanelProps,
    },
    erOverstyrt,
    toggleOverstyring,
  );
};
