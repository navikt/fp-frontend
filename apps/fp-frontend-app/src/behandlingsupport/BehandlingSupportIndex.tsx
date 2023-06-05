import React, { FunctionComponent, useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { SupportMenySakIndex, SupportTabs } from '@navikt/ft-sak-support-meny';

import { BehandlingTillatteOperasjoner } from '@navikt/fp-types';
import { useRestApiErrorDispatcher } from '@navikt/fp-rest-api-hooks';

import { getSupportPanelLocationCreator } from '../app/paths';
import HistorikkIndex from './historikk/HistorikkIndex';
import MeldingIndex from './melding/MeldingIndex';
import DokumentIndex from './dokument/DokumentIndex';
import TotrinnskontrollIndex from './totrinnskontroll/TotrinnskontrollIndex';
import useTrackRouteParam from '../app/useTrackRouteParam';
import FagsakData from '../fagsak/FagsakData';
import ErrorBoundary from '../app/ErrorBoundary';

import styles from './behandlingSupportIndex.module.css';
import NotatIndex from './notat/NotatIndex';

export const hentSynligePaneler = (behandlingTillatteOperasjoner?: BehandlingTillatteOperasjoner): string[] =>
  Object.values(SupportTabs).filter(supportPanel => {
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
  synligePaneler: string[],
  sendMeldingErRelevant: boolean,
  behandlingTillatteOperasjoner?: BehandlingTillatteOperasjoner,
): string[] =>
  synligePaneler.filter(supportPanel => {
    if (supportPanel === SupportTabs.MELDINGER) {
      return behandlingTillatteOperasjoner && sendMeldingErRelevant
        ? behandlingTillatteOperasjoner.behandlingKanSendeMelding
        : false;
    }
    return true;
  });

interface OwnProps {
  fagsakData: FagsakData;
  behandlingUuid?: string;
  behandlingVersjon?: number;
  hentOgSettBehandling: () => void;
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
  hentOgSettBehandling,
}) => {
  const intl = useIntl();

  const { selected: valgtSupportPanel, location } = useTrackRouteParam<string>({
    paramName: 'stotte',
    isQueryParam: true,
  });

  const [meldingFormData, setMeldingForData] = useState();
  const [beslutterFormData, setBeslutterForData] = useState();

  const fagsak = fagsakData.getFagsak();
  const behandling = fagsakData.getBehandling(behandlingUuid);

  const navigate = useNavigate();

  const { addErrorMessage } = useRestApiErrorDispatcher();

  const erPaVent = behandling ? behandling.behandlingPaaVent : false;
  const behandlingTillatteOperasjoner = behandling?.behandlingTillatteOperasjoner;
  const erSendMeldingRelevant = fagsakData && !erPaVent;

  const synligeSupportPaneler = useMemo(
    () => hentSynligePaneler(behandlingTillatteOperasjoner),
    [behandlingTillatteOperasjoner],
  );
  const valgbareSupportPaneler = useMemo(
    () => hentValgbarePaneler(synligeSupportPaneler, erSendMeldingRelevant, behandlingTillatteOperasjoner),
    [synligeSupportPaneler, erSendMeldingRelevant, behandlingTillatteOperasjoner],
  );

  const defaultSupportPanel = valgbareSupportPaneler.find(() => true) || SupportTabs.HISTORIKK;
  const aktivtSupportPanel = valgbareSupportPaneler.includes(valgtSupportPanel)
    ? valgtSupportPanel
    : defaultSupportPanel;

  const changeRouteCallback = useCallback(
    (index: number) => {
      const supportPanel = synligeSupportPaneler[index];
      const getSupportPanelLocation = getSupportPanelLocationCreator(location);
      navigate(getSupportPanelLocation(supportPanel));
    },
    [location, synligeSupportPaneler],
  );

  return (
    <>
      <div className={styles.meny}>
        <SupportMenySakIndex
          tilgjengeligeTabs={synligeSupportPaneler}
          valgbareTabs={valgbareSupportPaneler}
          valgtIndex={synligeSupportPaneler.findIndex(p => p === aktivtSupportPanel)}
          onClick={changeRouteCallback}
        />
      </div>
      <ErrorBoundary
        errorMessageCallback={addErrorMessage}
        errorMessage={intl.formatMessage({ id: 'ErrorBoundary.Error' }, { name: 'Support' })}
      >
        <div className={aktivtSupportPanel === SupportTabs.HISTORIKK ? styles.containerHistorikk : styles.container}>
          {behandling &&
            (aktivtSupportPanel === SupportTabs.TIL_BESLUTTER || aktivtSupportPanel === SupportTabs.FRA_BESLUTTER) && (
              <TotrinnskontrollIndex
                fagsakData={fagsakData}
                valgtBehandlingUuid={behandling.uuid}
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
              kjønn={fagsak.bruker.kjønn}
            />
          )}
          {behandling && aktivtSupportPanel === SupportTabs.MELDINGER && (
            <MeldingIndex
              fagsakData={fagsakData}
              valgtBehandlingUuid={behandling.uuid}
              meldingFormData={meldingFormData}
              setMeldingForData={setMeldingForData}
              hentOgSettBehandling={hentOgSettBehandling}
            />
          )}
          {aktivtSupportPanel === SupportTabs.DOKUMENTER && (
            <DokumentIndex
              saksnummer={fagsak.saksnummer}
              behandlingUuid={behandlingUuid}
              behandlingVersjon={behandlingVersjon}
            />
          )}
          {aktivtSupportPanel === SupportTabs.DOKUMENTER && <NotatIndex fagsak={fagsak} />}
        </div>
      </ErrorBoundary>
    </>
  );
};

export default BehandlingSupportIndex;
