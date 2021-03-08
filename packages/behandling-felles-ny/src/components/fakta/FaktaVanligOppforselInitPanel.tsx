import React, {
  ReactElement,
} from 'react';

import { MulipleRestApiInterface } from '@fpsak-frontend/rest-api-hooks';
import StandardFaktaPanelProps from '@fpsak-frontend/types/src/standardFaktaPanelPropsTsType';

import FaktaPanelInitProps from '../../types/faktaPanelInitProps';
import useStandardFaktaPanelProps from '../../utils/fakta/useStandardFaktaPanelProps';
import useFaktaMenyRegistrerer from '../../utils/fakta/useFaktaMenyRegistrerer';
import FaktaPanelWrapper from './FaktaPanelWrapper';

type OwnProps<INIT_DATA, PANEL_DATA> = {
  useMultipleRestApi: MulipleRestApiInterface<INIT_DATA | PANEL_DATA>;
  initEndepunkter: string[];
  panelEndepunkter?: string[];
  aksjonspunktKoder?: string[];
  overstyringApKoder?: string[];
  skalVisesFn: (data: INIT_DATA) => boolean;
  render: (data: INIT_DATA & PANEL_DATA & StandardFaktaPanelProps) => ReactElement;
  faktaPanelKode: string;
  faktaPanelTekst: string;
}

const FaktaVanligOppforselInitPanel = <INIT_DATA, PANEL_DATA = void, >({
  valgtFaktaSteg,
  behandlingVersjon,
  registrerFaktaPanel,
  useMultipleRestApi,
  initEndepunkter,
  panelEndepunkter = [],
  aksjonspunktKoder,
  overstyringApKoder,
  skalVisesFn,
  render,
  faktaPanelKode,
  faktaPanelTekst,
}: OwnProps<INIT_DATA, PANEL_DATA> & FaktaPanelInitProps) => {
  const formaterteEndepunkter = initEndepunkter.map((e) => ({ key: e }));
  const { data: initData, state: initState } = useMultipleRestApi(formaterteEndepunkter, {
    updateTriggers: [behandlingVersjon],
    isCachingOn: true,
  });

  const standardPanelProps = useStandardFaktaPanelProps(initData, aksjonspunktKoder, overstyringApKoder) as StandardFaktaPanelProps;

  const erPanelValgt = useFaktaMenyRegistrerer(
    registrerFaktaPanel,
    initState,
    faktaPanelKode,
    faktaPanelTekst,
    valgtFaktaSteg,
    skalVisesFn(initData as INIT_DATA),
    standardPanelProps.harApneAksjonspunkter,
  );

  const formatertePanelEndepunkter = panelEndepunkter.map((e) => ({ key: e }));
  const { data: panelData, state: panelDataState } = useMultipleRestApi(formatertePanelEndepunkter, {
    updateTriggers: [erPanelValgt, behandlingVersjon],
    suspendRequest: !erPanelValgt || formatertePanelEndepunkter.length === 0,
    isCachingOn: true,
  });

  return (
    <FaktaPanelWrapper erPanelValgt={erPanelValgt} dataState={formatertePanelEndepunkter.length > 0 ? panelDataState : initState}>
      {render({
        ...initData as INIT_DATA,
        ...panelData as PANEL_DATA,
        ...standardPanelProps,
      })}
    </FaktaPanelWrapper>
  );
};

export default FaktaVanligOppforselInitPanel;
