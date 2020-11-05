import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';

import SupportMenySakIndex, { supportTabs } from '@fpsak-frontend/sak-support-meny';
import { Fagsak, BehandlingAppKontekst } from '@fpsak-frontend/types';

import { getSupportPanelLocationCreator } from '../app/paths';
import HistoryIndex from './history/HistoryIndex';
import MessagesIndex from './messages/MessagesIndex';
import DocumentIndex from './documents/DocumentIndex';
import TotrinnskontrollIndex from './totrinnskontroll/TotrinnskontrollIndex';
import useTrackRouteParam from '../app/useTrackRouteParam';
import styles from './behandlingSupportIndex.less';
import BehandlingRettigheter from '../behandling/behandlingRettigheterTsType';

const renderSupportPanel = (
  supportPanel: string,
  fagsak: Fagsak,
  alleBehandlinger: BehandlingAppKontekst[],
  behandlingId: number,
  behandlingVersjon: number,
) => {
  switch (supportPanel) {
    case supportTabs.APPROVAL:
    case supportTabs.RETURNED:
      return (
        <TotrinnskontrollIndex
          fagsak={fagsak}
          alleBehandlinger={alleBehandlinger}
          behandlingId={behandlingId}
          behandlingVersjon={behandlingVersjon}
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

interface OwnProps {
  fagsak: Fagsak;
  alleBehandlinger: BehandlingAppKontekst[];
  behandlingId?: number;
  behandlingVersjon?: number;
  behandlingRettigheter?: BehandlingRettigheter;
}

export const getAccessibleSupportPanels = (behandlingRettigheter?: BehandlingRettigheter) => Object.values(supportTabs)
  .filter((supportPanel) => {
    switch (supportPanel) {
      case supportTabs.APPROVAL:
        return behandlingRettigheter && behandlingRettigheter.behandlingTilGodkjenning;
      case supportTabs.RETURNED:
        return behandlingRettigheter && behandlingRettigheter.behandlingFraBeslutter;
      default:
        return true;
    }
  });

export const getEnabledSupportPanels = (
  accessibleSupportPanels: string[], sendMessageIsRelevant: boolean, behandlingRettigheter?: BehandlingRettigheter,
) => accessibleSupportPanels
  .filter((supportPanel) => {
    switch (supportPanel) {
      case supportTabs.MESSAGES:
        return behandlingRettigheter && sendMessageIsRelevant ? behandlingRettigheter.behandlingKanSendeMelding : false;
      case supportTabs.APPROVAL:
        return behandlingRettigheter ? behandlingRettigheter.behandlingTilGodkjenning : false;
      case supportTabs.RETURNED:
        return behandlingRettigheter ? behandlingRettigheter.behandlingFraBeslutter : false;
      default:
        return true;
    }
  });

interface OwnProps {
  fagsak: Fagsak;
  alleBehandlinger: BehandlingAppKontekst[];
  behandlingId?: number;
  behandlingVersjon?: number;
}

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
  const { selected: valgtSupportPanel, location } = useTrackRouteParam<string>({
    paramName: 'stotte',
    isQueryParam: true,
  });

  const behandling = alleBehandlinger.find((b) => b.id === behandlingId);
  const erPaVent = behandling ? behandling.behandlingPaaVent : false;

  const history = useHistory();
  const getSupportPanelLocation = getSupportPanelLocationCreator(location);

  const erSendMeldingRelevant = useMemo(() => (fagsak && !erPaVent), [fagsak, erPaVent]);

  const tilgjengeligeSupportPaneler = useMemo(() => getAccessibleSupportPanels(behandlingRettigheter),
    [behandlingRettigheter]);
  const valgbareSupportPaneler = useMemo(() => getEnabledSupportPanels(tilgjengeligeSupportPaneler, erSendMeldingRelevant, behandlingRettigheter),
    [tilgjengeligeSupportPaneler, erSendMeldingRelevant, behandlingRettigheter]);

  const defaultSupportPanel = valgbareSupportPaneler.find(() => true) || supportTabs.HISTORY;
  const aktivtSupportPanel = valgbareSupportPaneler.includes(valgtSupportPanel) ? valgtSupportPanel : defaultSupportPanel;

  const changeRouteCallback = useCallback((index) => {
    const supportPanel = tilgjengeligeSupportPaneler[index];
    history.push(getSupportPanelLocation(supportPanel));
  }, [location, tilgjengeligeSupportPaneler]);

  return (
    <>
      <div className={styles.meny}>
        <SupportMenySakIndex
          tilgjengeligeTabs={tilgjengeligeSupportPaneler}
          valgbareTabs={valgbareSupportPaneler}
          valgtIndex={tilgjengeligeSupportPaneler.findIndex((p) => p === aktivtSupportPanel)}
          onClick={changeRouteCallback}
        />
      </div>
      <div className={(aktivtSupportPanel === supportTabs.HISTORY ? styles.containerHistorikk : styles.container)}>
        {renderSupportPanel(
          aktivtSupportPanel,
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
