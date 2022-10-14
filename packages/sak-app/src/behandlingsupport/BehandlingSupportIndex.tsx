import React, {
  FunctionComponent, useCallback, useMemo, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import SupportMenySakIndex, { SupportTabs } from '@navikt/ft-sak-support-meny';

import { BehandlingTillatteOperasjoner } from '@fpsak-frontend/types';

import { getSupportPanelLocationCreator } from '../app/paths';
import HistorikkIndex from './historikk/HistorikkIndex';
import MeldingIndex from './melding/MeldingIndex';
import DokumentIndex from './dokument/DokumentIndex';
import TotrinnskontrollIndex from './totrinnskontroll/TotrinnskontrollIndex';
import useTrackRouteParam from '../app/useTrackRouteParam';
import FagsakData from '../fagsak/FagsakData';
import styles from './behandlingSupportIndex.less';

import '@navikt/ft-sak-support-meny/dist/style.css';

export const hentSynligePaneler = (behandlingTillatteOperasjoner?: BehandlingTillatteOperasjoner): string[] => Object.values(SupportTabs)
  .filter((supportPanel) => {
    switch (supportPanel) {
      case SupportTabs.TIL_BESLUTTER:
        return behandlingTillatteOperasjoner && behandlingTillatteOperasjoner.behandlingTilGodkjenning;
      case SupportTabs.FRA_BESLUTTER:
        return behandlingTillatteOperasjoner && behandlingTillatteOperasjoner.behandlingFraBeslutter;
      default:
        return true;
    }
  });

export const hentValgbarePaneler = (
  synligePaneler: string[], sendMeldingErRelevant: boolean, behandlingTillatteOperasjoner?: BehandlingTillatteOperasjoner,
): string[] => synligePaneler
  .filter((supportPanel) => {
    if (supportPanel === SupportTabs.MELDINGER) {
      return behandlingTillatteOperasjoner && sendMeldingErRelevant ? behandlingTillatteOperasjoner.behandlingKanSendeMelding : false;
    }
    return true;
  });

interface OwnProps {
  fagsakData: FagsakData;
  behandlingUuid?: string;
  behandlingVersjon?: number;
}

/**
 * BehandlingSupportIndex
 *
 * Har ansvar for å lage navigasjonsrad med korrekte navigasjonsvalg, og route til rett
 * støttepanelkomponent ihht. gitt parameter i URL-en.
 */
const BehandlingSupportIndex: FunctionComponent<OwnProps> = ({
  fagsakData,
  behandlingUuid,
  behandlingVersjon,
}) => {
  const { selected: valgtSupportPanel, location } = useTrackRouteParam<string>({
    paramName: 'stotte',
    isQueryParam: true,
  });

  const [meldingFormData, setMeldingForData] = useState();
  const [beslutterFormData, setBeslutterForData] = useState();

  const fagsak = fagsakData.getFagsak();
  const behandling = fagsakData.getBehandling(behandlingUuid);

  const navigate = useNavigate();

  const erPaVent = behandling ? behandling.behandlingPaaVent : false;
  const behandlingTillatteOperasjoner = behandling?.behandlingTillatteOperasjoner;
  const erSendMeldingRelevant = fagsakData && !erPaVent;

  const synligeSupportPaneler = useMemo(() => hentSynligePaneler(behandlingTillatteOperasjoner),
    [behandlingTillatteOperasjoner]);
  const valgbareSupportPaneler = useMemo(() => hentValgbarePaneler(synligeSupportPaneler, erSendMeldingRelevant, behandlingTillatteOperasjoner),
    [synligeSupportPaneler, erSendMeldingRelevant, behandlingTillatteOperasjoner]);

  const defaultSupportPanel = valgbareSupportPaneler.find(() => true) || SupportTabs.HISTORIKK;
  const aktivtSupportPanel = valgbareSupportPaneler.includes(valgtSupportPanel) ? valgtSupportPanel : defaultSupportPanel;

  const changeRouteCallback = useCallback((index) => {
    const supportPanel = synligeSupportPaneler[index];
    const getSupportPanelLocation = getSupportPanelLocationCreator(location);
    navigate(getSupportPanelLocation(supportPanel));
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
            fagsakData={fagsakData}
            valgtBehandlingUuid={behandlingUuid}
            beslutterFormData={beslutterFormData}
            setBeslutterForData={setBeslutterForData}
          />
        )}
        {aktivtSupportPanel === SupportTabs.HISTORIKK && (
          <HistorikkIndex
            saksnummer={fagsak.saksnummer}
            behandlingUuid={behandlingUuid}
            behandlingVersjon={behandlingVersjon}
            historikkinnslagFpSak={fagsakData.getHistorikkFpSak()}
            historikkinnslagFpTilbake={fagsakData.getHistorikkFpTilbake()}
          />
        )}
        {behandling && aktivtSupportPanel === SupportTabs.MELDINGER && (
          <MeldingIndex
            fagsakData={fagsakData}
            valgtBehandlingUuid={behandlingUuid}
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
