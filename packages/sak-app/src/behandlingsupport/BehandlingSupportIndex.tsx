import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';

import SupportMenySakIndex, { supportTabs } from '@fpsak-frontend/sak-support-meny';
import { Fagsak, BehandlingAppKontekst } from '@fpsak-frontend/types';
import BehandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';

import { getSupportPanelLocationCreator } from '../app/paths';
import HistoryIndex from './history/HistoryIndex';
import MessagesIndex from './messages/MessagesIndex';
import DocumentIndex from './documents/DocumentIndex';
import ApprovalIndex from './approval/ApprovalIndex';
import useTrackRouteParam from '../app/useTrackRouteParam';
import styles from './behandlingSupportIndex.less';
import { FpsakApiKeys, restApiHooks } from '../data/fpsakApi';
import BehandlingRettigheter from '../behandling/behandlingRettigheterTsType';

const renderSupportPanel = (
  supportPanel, totrinnArsaker, totrinnArsakerReadOnly, fagsak, alleBehandlinger, behandlingId, behandlingVersjon,
) => {
  switch (supportPanel) {
    case supportTabs.APPROVAL:
    case supportTabs.RETURNED:
      return (
        <ApprovalIndex
          fagsak={fagsak}
          alleBehandlinger={alleBehandlinger}
          behandlingId={behandlingId}
          behandlingVersjon={behandlingVersjon}
          totrinnskontrollSkjermlenkeContext={totrinnArsaker}
          totrinnskontrollReadOnlySkjermlenkeContext={totrinnArsakerReadOnly}
        />
      );
    case supportTabs.HISTORY:
      return (
        <HistoryIndex
          saksnummer={fagsak.saksnummer}
          behandlingId={behandlingId}
          behandlingVersjon={behandlingVersjon}
        />
      );
    case supportTabs.MESSAGES:
      return (
        <MessagesIndex
          fagsak={fagsak}
          alleBehandlinger={alleBehandlinger}
          behandlingId={behandlingId}
          behandlingVersjon={behandlingVersjon}
        />
      );
    case supportTabs.DOCUMENTS:
      return (
        <DocumentIndex
          saksnummer={fagsak.saksnummer}
          behandlingId={behandlingId}
          behandlingVersjon={behandlingVersjon}
        />
      );
    default:
      return null;
  }
};

type TotrinnskontrollAksjonspunkt = {
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: {
    aksjonspunktKode: string;
  };
}

interface OwnProps {
  fagsak: Fagsak;
  alleBehandlinger: BehandlingAppKontekst[];
  behandlingId?: number;
  behandlingVersjon?: number;
  behandlingRettigheter?: BehandlingRettigheter;
}

const getReturnedIsRelevant = (isOnHold, toTrinnsAksjonspunkter: TotrinnskontrollAksjonspunkt[] = [], status) => !isOnHold && toTrinnsAksjonspunkter
  .reduce((a, b) => a.concat(b.totrinnskontrollAksjonspunkter), [])
  .some((ap) => ap.totrinnskontrollGodkjent === false) && status && status.kode === BehandlingStatus.BEHANDLING_UTREDES;

export const getAccessibleSupportPanels = (returnIsRelevant, approvalIsRelevant, behandlingRettigheter: BehandlingRettigheter) => Object.values(supportTabs)
  .filter((supportPanel) => {
    switch (supportPanel) {
      case supportTabs.MESSAGES:
        return behandlingRettigheter ? behandlingRettigheter.behandlingKanSendeMelding : false;
      case supportTabs.APPROVAL:
        return behandlingRettigheter ? approvalIsRelevant && behandlingRettigheter.behandlingTilGodkjenning : false;
      case supportTabs.RETURNED:
        return behandlingRettigheter ? returnIsRelevant && behandlingRettigheter.behandlingFraBeslutter : false;
      default:
        return true;
    }
  });

export const getEnabledSupportPanels = (
  accessibleSupportPanels, sendMessageIsRelevant, behandlingRettigheter?: BehandlingRettigheter,
) => accessibleSupportPanels
  .filter((supportPanel) => {
    switch (supportPanel) {
      case supportTabs.MESSAGES:
        return behandlingRettigheter ? sendMessageIsRelevant && behandlingRettigheter.behandlingKanSendeMelding : false;
      case supportTabs.APPROVAL:
        return behandlingRettigheter ? behandlingRettigheter.behandlingTilGodkjenning : false;
      case supportTabs.RETURNED:
        return behandlingRettigheter ? behandlingRettigheter.behandlingFraBeslutter : false;
      default:
        return true;
    }
  });

/**
 * BehandlingSupportIndex
 *
 * Containerkomponent for behandlingsstøttepanelet.
 * Har ansvar for å lage navigasjonsrad med korrekte navigasjonsvalg, og route til rett
 * støttepanelkomponent ihht. gitt parameter i URL-en.
 */
const BehandlingSupportIndex: FunctionComponent<OwnProps> = ({
  fagsak,
  alleBehandlinger,
  behandlingId,
  behandlingVersjon,
  behandlingRettigheter,
}) => {
  const { selected: selectedSupportPanel, location } = useTrackRouteParam<string>({
    paramName: 'stotte',
    isQueryParam: true,
  });

  const behandling = alleBehandlinger.find((b) => b.id === behandlingId);
  const erPaVent = behandling ? behandling.behandlingPaaVent : false;

  const isInnsynBehandling = behandling && behandling.type.kode === BehandlingType.DOKUMENTINNSYN;

  const history = useHistory();
  const getSupportPanelLocation = getSupportPanelLocationCreator(location);

  const behandlingStatusKode = behandling ? behandling.status.kode : undefined;
  const { data: totrinnArsaker } = restApiHooks.useRestApi<TotrinnskontrollAksjonspunkt[]>(
    FpsakApiKeys.TOTRINNSAKSJONSPUNKT_ARSAKER, undefined, {
      updateTriggers: [behandlingId, behandlingStatusKode],
      suspendRequest: !!isInnsynBehandling || !(behandlingStatusKode === BehandlingStatus.FATTER_VEDTAK),
    },
  );
  const { data: totrinnArsakerReadOnly } = restApiHooks.useRestApi<TotrinnskontrollAksjonspunkt[]>(
    FpsakApiKeys.TOTRINNSAKSJONSPUNKT_ARSAKER_READONLY, undefined, {
      updateTriggers: [behandlingId, behandlingStatusKode],
      suspendRequest: !!isInnsynBehandling || !(behandlingStatusKode === BehandlingStatus.BEHANDLING_UTREDES),
    },
  );

  const returnedIsRelevant = useMemo(() => getReturnedIsRelevant(erPaVent, totrinnArsakerReadOnly, behandling?.status),
    [behandling?.id, behandling?.versjon, totrinnArsakerReadOnly]);
  const approvalIsRelevant = useMemo(() => !erPaVent && behandlingStatusKode === BehandlingStatus.FATTER_VEDTAK, [behandling?.id, behandling?.versjon]);
  const acccessibleSupportPanels = useMemo(() => getAccessibleSupportPanels(returnedIsRelevant, approvalIsRelevant, behandlingRettigheter),
    [returnedIsRelevant, approvalIsRelevant, behandlingRettigheter]);
  const sendMessageIsRelevant = useMemo(() => (fagsak && !erPaVent), [fagsak, erPaVent]);
  const enabledSupportPanels = useMemo(() => getEnabledSupportPanels(acccessibleSupportPanels, sendMessageIsRelevant, behandlingRettigheter),
    [acccessibleSupportPanels, sendMessageIsRelevant, behandlingRettigheter]);
  const defaultSupportPanel = enabledSupportPanels.find(() => true) || supportTabs.HISTORY;
  const activeSupportPanel = enabledSupportPanels.includes(selectedSupportPanel) ? selectedSupportPanel : defaultSupportPanel;

  const changeRouteCallback = useCallback((index) => {
    const supportPanel = acccessibleSupportPanels[index];
    history.push(getSupportPanelLocation(supportPanel));
  }, [location, acccessibleSupportPanels]);

  return (
    <>
      <div className={styles.meny}>
        <SupportMenySakIndex
          tilgjengeligeTabs={acccessibleSupportPanels}
          valgbareTabs={enabledSupportPanels}
          valgtIndex={acccessibleSupportPanels.findIndex((p) => p === activeSupportPanel)}
          onClick={changeRouteCallback}
        />
      </div>
      <div className={(activeSupportPanel === supportTabs.HISTORY ? styles.containerHistorikk : styles.container)}>
        {renderSupportPanel(
          activeSupportPanel,
          totrinnArsaker,
          totrinnArsakerReadOnly,
          fagsak,
          alleBehandlinger,
          behandlingId,
          behandlingVersjon,
        )}
      </div>
    </>
  );
};

export default BehandlingSupportIndex;
