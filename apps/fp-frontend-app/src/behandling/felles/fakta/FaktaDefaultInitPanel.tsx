import React, { ReactElement } from 'react';

import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { RestKey } from '@navikt/fp-rest-api';
import { RestApiState } from '@navikt/fp-rest-api-hooks';
import { StandardFaktaPanelProps } from '@navikt/fp-types';

import { restBehandlingApiHooks } from '../../../data/behandlingContextApi';
import { FaktaPanelInitProps } from '../typer/faktaPanelInitProps';
import { FaktaPanelWrapper } from './FaktaPanelWrapper';
import { useFaktaMenyRegistrerer } from './useFaktaMenyRegistrerer';
import { useStandardFaktaPanelProps } from './useStandardFaktaPanelProps';

export type Props<PANEL_DATA> = {
  panelEndepunkter?: RestKey<any, any>[];
  aksjonspunktKoder?: string[];
  overstyringApKoder?: string[];
  skalPanelVisesIMeny: () => boolean;
  renderPanel: (data: PANEL_DATA & StandardFaktaPanelProps) => ReactElement;
  faktaPanelKode: FaktaPanelCode;
  faktaPanelMenyTekst: string;
};

export const FaktaDefaultInitPanel = <PANEL_DATA,>({
  valgtFaktaSteg,
  behandling,
  registrerFaktaPanel,
  panelEndepunkter = [],
  aksjonspunktKoder,
  overstyringApKoder,
  skalPanelVisesIMeny,
  renderPanel,
  faktaPanelKode,
  faktaPanelMenyTekst,
}: Props<PANEL_DATA> & FaktaPanelInitProps) => {
  const standardPanelProps = useStandardFaktaPanelProps(aksjonspunktKoder, overstyringApKoder);

  const erPanelValgt = useFaktaMenyRegistrerer(
    registrerFaktaPanel,
    faktaPanelKode,
    faktaPanelMenyTekst,
    skalPanelVisesIMeny(),
    standardPanelProps.harApneAksjonspunkter,
    valgtFaktaSteg,
  );

  const formatertePanelEndepunkter = panelEndepunkter.map(e => ({ key: e }));
  const { data: panelData, state: panelDataState } = restBehandlingApiHooks.useMultipleRestApi<PANEL_DATA, any>(
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
      {renderPanel({
        ...(panelData as PANEL_DATA),
        ...standardPanelProps,
      })}
    </FaktaPanelWrapper>
  );
};
