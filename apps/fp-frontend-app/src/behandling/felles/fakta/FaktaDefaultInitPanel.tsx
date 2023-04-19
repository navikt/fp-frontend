import React, { ReactElement, useMemo } from 'react';

import { RestApiHooks, RestApiState } from '@navikt/fp-rest-api-hooks';
import { StandardFaktaPanelProps } from '@navikt/fp-types';
import { RequestApi, RestKey } from '@navikt/fp-rest-api';
import { FaktaPanelCode } from '@navikt/fp-konstanter';

import FaktaPanelInitProps from '../typer/faktaPanelInitProps';
import useStandardFaktaPanelProps from './useStandardFaktaPanelProps';
import useFaktaMenyRegistrerer from './useFaktaMenyRegistrerer';
import FaktaPanelWrapper from './FaktaPanelWrapper';

export type OwnProps<PANEL_DATA> = {
  requestApi: RequestApi;
  panelEndepunkter?: RestKey<any, any>[];
  aksjonspunktKoder?: string[];
  overstyringApKoder?: string[];
  skalPanelVisesIMeny: () => boolean;
  renderPanel: (data: PANEL_DATA & StandardFaktaPanelProps) => ReactElement;
  faktaPanelKode: FaktaPanelCode;
  faktaPanelMenyTekst: string;
};

const FaktaDefaultInitPanel = <PANEL_DATA = void,>({
  valgtFaktaSteg,
  behandling,
  registrerFaktaPanel,
  requestApi,
  panelEndepunkter = [],
  aksjonspunktKoder,
  overstyringApKoder,
  skalPanelVisesIMeny,
  renderPanel,
  faktaPanelKode,
  faktaPanelMenyTekst,
}: OwnProps<PANEL_DATA> & FaktaPanelInitProps) => {
  const restApiHooks = useMemo(() => RestApiHooks.initHooks(requestApi), [requestApi]);

  const standardPanelProps = useStandardFaktaPanelProps(aksjonspunktKoder, overstyringApKoder);

  const erPanelValgt = useFaktaMenyRegistrerer(
    registrerFaktaPanel,
    RestApiState.SUCCESS,
    faktaPanelKode,
    faktaPanelMenyTekst,
    skalPanelVisesIMeny(),
    standardPanelProps.harApneAksjonspunkter,
    valgtFaktaSteg,
  );

  const formatertePanelEndepunkter = panelEndepunkter.map(e => ({ key: e }));
  const { data: panelData, state: panelDataState } = restApiHooks.useMultipleRestApi<PANEL_DATA, any>(
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
      {/* @ts-ignore Fiks */}
      {renderPanel({
        ...panelData,
        ...standardPanelProps,
      })}
    </FaktaPanelWrapper>
  );
};

export default FaktaDefaultInitPanel;
