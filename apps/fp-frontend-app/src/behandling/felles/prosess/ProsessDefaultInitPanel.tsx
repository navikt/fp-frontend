import React, { ReactElement } from 'react';

import { RestApiState } from '@navikt/fp-rest-api-hooks';
import { RestKey } from '@navikt/fp-rest-api';
import { StandardProsessPanelProps } from '@navikt/fp-types';
import { ProsessStegCode } from '@navikt/fp-konstanter';

import { vilkarUtfallType } from '@navikt/fp-kodeverk';
import ProsessPanelInitProps from '../typer/prosessPanelInitProps';
import useStandardProsessPanelProps from './useStandardProsessPanelProps';
import useProsessMenyRegistrerer from './useProsessMenyRegistrerer';
import ProsessPanelWrapper from './ProsessPanelWrapper';
import { restBehandlingApiHooks } from '../../../data/behandlingContextApi';

export type OwnProps<PANEL_DATA> = {
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
  const standardPanelProps = useStandardProsessPanelProps(aksjonspunktKoder, vilkarKoder, lagringSideEffekter);

  const status = hentOverstyrtStatus ? hentOverstyrtStatus(standardPanelProps) : standardPanelProps.status;

  const skalMarkeresSomAktiv =
    hentSkalMarkeresSomAktiv && hentSkalMarkeresSomAktiv(standardPanelProps) && !behandling.behandlingHenlagt;

  const harApentAksjonspunkt = erOverstyrt || standardPanelProps.isAksjonspunktOpen;

  const erPanelValgt = useProsessMenyRegistrerer(
    registrerProsessPanel,
    prosessPanelKode,
    prosessPanelMenyTekst,
    skalPanelVisesIMeny(standardPanelProps),
    harApentAksjonspunkt,
    status,
    skalMarkeresSomAktiv || harApentAksjonspunkt,
    valgtProsessSteg,
  );

  const formatertePanelEndepunkter = panelEndepunkter.map((e: any) => (e instanceof RestKey ? { key: e } : e));
  const skalIkkeHenteData =
    !erPanelValgt ||
    formatertePanelEndepunkter.length === 0 ||
    (status === vilkarUtfallType.IKKE_VURDERT && !harApentAksjonspunkt);

  const { data: panelData, state: panelDataState } = restBehandlingApiHooks.useMultipleRestApi<PANEL_DATA, any>(
    formatertePanelEndepunkter,
    {
      updateTriggers: [erPanelValgt, behandling.versjon, status, harApentAksjonspunkt],
      suspendRequest: skalIkkeHenteData,
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
      {/* @ts-ignore Fiks */}
      {renderPanel({
        ...panelData,
        ...standardPanelProps,
      })}
    </ProsessPanelWrapper>
  );
};

export default ProsessDefaultInitPanel;
