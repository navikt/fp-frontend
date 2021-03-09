import React, {
  ReactElement,
} from 'react';

import { MulipleRestApiInterface, RestApiState } from '@fpsak-frontend/rest-api-hooks';
import StandardProsessPanelProps from '@fpsak-frontend/types/src/standardProsessPanelPropsTsType';

import ProsessPanelInitProps from '../../types/prosessPanelInitProps';
import useStandardProsessPanelProps from '../../utils/prosess/useStandardProsessPanelProps';
import useProsessMenyRegistrerer from '../../utils/prosess/useProsessMenyRegistrerer';
import ProsessPanelWrapper from './ProsessPanelWrapper';

type OwnProps<INIT_DATA, PANEL_DATA> = {
  useMultipleRestApi: MulipleRestApiInterface<INIT_DATA | PANEL_DATA>;
  initEndepunkter: string[];
  panelEndepunkter?: string[];
  aksjonspunktKoder?: string[];
  vilkarKoder?: string[];
  skalVisesFn: (data: INIT_DATA & StandardProsessPanelProps, state: RestApiState) => boolean;
  overrideStatusFn?: (data: INIT_DATA & StandardProsessPanelProps) => string;
  render: (data: INIT_DATA & PANEL_DATA & StandardProsessPanelProps) => ReactElement;
  prosessPanelKode: string;
  prosessPanelTekst: string;
  lagringSideEffekter?: (aksjonspunktModeller: any) => () => void,
  erOverstyrt?: boolean;
}

const ProsessDefaultInitPanel = <INIT_DATA, PANEL_DATA = void, >({
  valgtProsessSteg,
  behandlingVersjon,
  registrerProsessPanel,
  useMultipleRestApi,
  initEndepunkter,
  panelEndepunkter = [],
  aksjonspunktKoder,
  vilkarKoder,
  skalVisesFn,
  render,
  prosessPanelKode,
  prosessPanelTekst,
  lagringSideEffekter,
  overrideStatusFn,
  erOverstyrt = false,
}: OwnProps<INIT_DATA, PANEL_DATA> & ProsessPanelInitProps) => {
  const formaterteEndepunkter = initEndepunkter.map((e) => ({ key: e }));
  const { data: initData, state: initState } = useMultipleRestApi(formaterteEndepunkter, {
    updateTriggers: [behandlingVersjon],
    isCachingOn: true,
  });

  const standardPanelProps = useStandardProsessPanelProps(initData, aksjonspunktKoder, vilkarKoder, lagringSideEffekter) as StandardProsessPanelProps;

  const data = {
    ...initData as INIT_DATA,
    ...standardPanelProps as StandardProsessPanelProps,
  };

  const status = overrideStatusFn ? overrideStatusFn(data) : standardPanelProps.status;

  const erPanelValgt = useProsessMenyRegistrerer(
    registrerProsessPanel,
    initState,
    prosessPanelKode,
    prosessPanelTekst,
    valgtProsessSteg,
    skalVisesFn(data, initState),
    erOverstyrt || standardPanelProps.isAksjonspunktOpen,
    status,
  );

  const formatertePanelEndepunkter = panelEndepunkter.map((e) => ({ key: e }));
  const { data: panelData, state: panelDataState } = useMultipleRestApi(formatertePanelEndepunkter, {
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
      {render({
        ...initData as INIT_DATA,
        ...panelData as PANEL_DATA,
        ...standardPanelProps,
      })}
    </ProsessPanelWrapper>
  );
};

export default ProsessDefaultInitPanel;
