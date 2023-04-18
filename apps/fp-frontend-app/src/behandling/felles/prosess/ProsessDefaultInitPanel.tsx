import React, { ReactElement, useMemo } from 'react';

import { RestApiHooks, RestApiState } from '@navikt/fp-rest-api-hooks';
import { RequestApi, RestKey } from '@navikt/fp-rest-api';
import { StandardProsessPanelProps } from '@navikt/fp-types';
import { ProsessStegCode } from '@navikt/fp-konstanter';

import ProsessPanelInitProps from '../typer/prosessPanelInitProps';
import useStandardProsessPanelProps from './useStandardProsessPanelProps';
import useProsessMenyRegistrerer from './useProsessMenyRegistrerer';
import ProsessPanelWrapper from './ProsessPanelWrapper';

export type OwnProps<PANEL_DATA> = {
  requestApi: RequestApi;
  panelEndepunkter?: RestKey<any, any>[] | { key: RestKey<any, any>; params?: any }[];
  aksjonspunktKoder?: string[];
  vilkarKoder?: string[];
  skalPanelVisesIMeny: (data: StandardProsessPanelProps) => boolean;
  hentOverstyrtStatus?: (standardData: StandardProsessPanelProps) => string;
  renderPanel: (data: PANEL_DATA & StandardProsessPanelProps) => ReactElement;
  prosessPanelKode: ProsessStegCode;
  prosessPanelMenyTekst: string;
  lagringSideEffekter?: (aksjonspunktModeller: any) => () => void;
  erOverstyrt?: boolean;
  hentSkalMarkeresSomAktiv?: (standardData: StandardProsessPanelProps) => boolean;
};

const ProsessDefaultInitPanel = <PANEL_DATA = void,>({
  valgtProsessSteg,
  behandling,
  registrerProsessPanel,
  requestApi,
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
}: OwnProps<PANEL_DATA> & ProsessPanelInitProps) => {
  const restApiHooks = useMemo(() => RestApiHooks.initHooks(requestApi), [requestApi]);

  const standardPanelProps = useStandardProsessPanelProps(aksjonspunktKoder, vilkarKoder, lagringSideEffekter);

  const status = hentOverstyrtStatus ? hentOverstyrtStatus(standardPanelProps) : standardPanelProps.status;

  const skalMarkeresSomAktiv = hentSkalMarkeresSomAktiv && hentSkalMarkeresSomAktiv(standardPanelProps);
  const harApentAksjonspunkt = erOverstyrt || standardPanelProps.isAksjonspunktOpen;

  const erPanelValgt = useProsessMenyRegistrerer(
    registrerProsessPanel,
    RestApiState.SUCCESS,
    prosessPanelKode,
    prosessPanelMenyTekst,
    skalPanelVisesIMeny(standardPanelProps),
    harApentAksjonspunkt,
    status,
    skalMarkeresSomAktiv || harApentAksjonspunkt,
    valgtProsessSteg,
  );

  const formatertePanelEndepunkter = panelEndepunkter.map((e: any) => (e instanceof RestKey ? { key: e } : e));
  const { data: panelData, state: panelDataState } = restApiHooks.useMultipleRestApi<PANEL_DATA, any>(
    formatertePanelEndepunkter,
    {
      updateTriggers: [erPanelValgt, behandling.versjon],
      suspendRequest: !erPanelValgt || formatertePanelEndepunkter.length === 0,
      isCachingOn: true,
    },
  );

  return (
    <ProsessPanelWrapper
      erPanelValgt={erPanelValgt}
      erAksjonspunktOpent={standardPanelProps.isAksjonspunktOpen}
      status={status}
      dataState={formatertePanelEndepunkter.length > 0 ? panelDataState : RestApiState.SUCCESS}
    >
      {renderPanel({
        ...panelData,
        ...standardPanelProps,
      })}
    </ProsessPanelWrapper>
  );
};

export default ProsessDefaultInitPanel;
