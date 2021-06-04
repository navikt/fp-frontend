import React, {
  FunctionComponent, useCallback, useMemo, useState,
} from 'react';
import { useHistory } from 'react-router-dom';

import SupportMenySakIndex, { SupportTabs } from '@fpsak-frontend/sak-support-meny';
import { Fagsak, BehandlingAppKontekst } from '@fpsak-frontend/types';

import { getSupportPanelLocationCreator } from '../app/paths';
import HistorikkIndex from './historikk/HistorikkIndex';
import MeldingIndex from './melding/MeldingIndex';
import DokumentIndex from './dokument/DokumentIndex';
import TotrinnskontrollIndex from './totrinnskontroll/TotrinnskontrollIndex';
import useTrackRouteParam from '../app/useTrackRouteParam';
import styles from './behandlingSupportIndex.less';
import BehandlingRettigheter from '../behandling/behandlingRettigheterTsType';

export const hentSynligePaneler = (behandlingRettigheter?: BehandlingRettigheter): string[] => Object.values(SupportTabs)
  .filter((supportPanel) => {
    switch (supportPanel) {
      case SupportTabs.TIL_BESLUTTER:
        return behandlingRettigheter && behandlingRettigheter.behandlingTilGodkjenning;
      case SupportTabs.FRA_BESLUTTER:
        return behandlingRettigheter && behandlingRettigheter.behandlingFraBeslutter;
      default:
        return true;
    }
  });

export const hentValgbarePaneler = (
  synligePaneler: string[], sendMeldingErRelevant: boolean, behandlingRettigheter?: BehandlingRettigheter,
): string[] => synligePaneler
  .filter((supportPanel) => {
    if (supportPanel === SupportTabs.MELDINGER) {
      return behandlingRettigheter && sendMeldingErRelevant ? behandlingRettigheter.behandlingKanSendeMelding : false;
    }
    return true;
  });

interface OwnProps {
  fagsak: Fagsak;
  alleBehandlinger: BehandlingAppKontekst[];
  behandlingUuid?: string;
  behandlingVersjon?: number;
  behandlingRettigheter?: BehandlingRettigheter;
}

/**
 * BehandlingSupportIndex
 *
 * Har ansvar for å lage navigasjonsrad med korrekte navigasjonsvalg, og route til rett
 * støttepanelkomponent ihht. gitt parameter i URL-en.
 */
const BehandlingSupportIndex: FunctionComponent<OwnProps> = ({
  fagsak,
  alleBehandlinger,
  behandlingUuid,
  behandlingVersjon,
  behandlingRettigheter,
}) => {
  const { selected: valgtSupportPanel, location } = useTrackRouteParam<string>({
    paramName: 'stotte',
    isQueryParam: true,
  });

  const [meldingFormData, setMeldingForData] = useState();
  const [beslutterFormData, setBeslutterForData] = useState();

  const behandling = alleBehandlinger.find((b) => b.uuid === behandlingUuid);

  const history = useHistory();

  const erPaVent = behandling ? behandling.behandlingPaaVent : false;
  const erSendMeldingRelevant = fagsak && !erPaVent;

  const synligeSupportPaneler = useMemo(() => hentSynligePaneler(behandlingRettigheter),
    [behandlingRettigheter]);
  const valgbareSupportPaneler = useMemo(() => hentValgbarePaneler(synligeSupportPaneler, erSendMeldingRelevant, behandlingRettigheter),
    [synligeSupportPaneler, erSendMeldingRelevant, behandlingRettigheter]);

  const defaultSupportPanel = valgbareSupportPaneler.find(() => true) || SupportTabs.HISTORIKK;
  const aktivtSupportPanel = valgbareSupportPaneler.includes(valgtSupportPanel) ? valgtSupportPanel : defaultSupportPanel;

  const changeRouteCallback = useCallback((index) => {
    const supportPanel = synligeSupportPaneler[index];
    const getSupportPanelLocation = getSupportPanelLocationCreator(location);
    history.push(getSupportPanelLocation(supportPanel));
  }, [location, synligeSupportPaneler]);

  return (
    <>
      <div className={styles.meny}>
        <SupportMenySakIndex
          tilgjengeligeTabs={synligeSupportPaneler}
          valgbareTabs={valgbareSupportPaneler}
          valgtIndex={synligeSupportPaneler.findIndex((p) => p === aktivtSupportPanel)}
          onClick={changeRouteCallback}
        />
      </div>
      <div className={(aktivtSupportPanel === SupportTabs.HISTORIKK ? styles.containerHistorikk : styles.container)}>
        {behandling && (aktivtSupportPanel === SupportTabs.TIL_BESLUTTER || aktivtSupportPanel === SupportTabs.FRA_BESLUTTER) && (
          <TotrinnskontrollIndex
            fagsak={fagsak}
            valgtBehandling={behandling}
            beslutterFormData={beslutterFormData}
            setBeslutterForData={setBeslutterForData}
          />
        )}
        {aktivtSupportPanel === SupportTabs.HISTORIKK && (
          <HistorikkIndex
            saksnummer={fagsak.saksnummer}
            behandlingUuid={behandlingUuid}
            behandlingVersjon={behandlingVersjon}
          />
        )}
        {behandling && aktivtSupportPanel === SupportTabs.MELDINGER && (
          <MeldingIndex
            fagsak={fagsak}
            valgtBehandling={behandling}
            meldingFormData={meldingFormData}
            setMeldingForData={setMeldingForData}
          />
        )}
        {aktivtSupportPanel === SupportTabs.DOKUMENTER && (
          <DokumentIndex
            saksnummer={fagsak.saksnummer}
            behandlingUuid={behandlingUuid}
            behandlingVersjon={behandlingVersjon}
          />
        )}
      </div>
    </>
  );
};

export default BehandlingSupportIndex;
