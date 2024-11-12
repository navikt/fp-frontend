import React, { FunctionComponent, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useIntl } from 'react-intl';

import { Tabs } from '@navikt/ds-react';
import {
  ClockDashedIcon,
  PersonCheckmarkFillIcon,
  ArrowUndoIcon,
  FolderIcon,
  PaperplaneIcon,
  DocPencilIcon,
} from '@navikt/aksel-icons';
import { getSupportPanelLocationCreator } from '../app/paths';
import HistorikkIndex from './historikk/HistorikkIndex';
import { HistorikkIndex as HistorikkIndexV2 } from './historikk-v2/HistorikkIndex';
import MeldingIndex from './melding/MeldingIndex';
import DokumentIndex from './dokument/DokumentIndex';
import TotrinnskontrollIndex from './totrinnskontroll/TotrinnskontrollIndex';
import useTrackRouteParam from '../app/useTrackRouteParam';
import FagsakData from '../fagsak/FagsakData';
import NotatIndex from './notat/NotatIndex';
import SupportTabs from './supportTabs';

import styles from './behandlingSupportIndex.module.css';

const utledAktivtPanel = (
  skalViseFraBeslutter: boolean,
  skalViseTilGodkjenning: boolean,
  valgtSupportPanel: string,
): string => {
  if (valgtSupportPanel) {
    return valgtSupportPanel;
  }
  if (skalViseFraBeslutter) {
    return SupportTabs.FRA_BESLUTTER;
  }
  if (skalViseTilGodkjenning) {
    return SupportTabs.TIL_BESLUTTER;
  }
  return SupportTabs.HISTORIKK;
};

function getEnvironment() {
  const hostname = window.location.hostname;
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return 'local';
  } else if (hostname.includes('intern.dev.nav.no')) {
    return 'dev';
  }
  return 'production';
}

interface OwnProps {
  fagsakData: FagsakData;
  behandlingUuid?: string;
  behandlingVersjon?: number;
  hentOgSettBehandling: () => void;
  oppdaterFagsak: () => void;
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
  oppdaterFagsak,
}) => {
  const intl = useIntl();

  const { selected: valgtSupportPanel, location } = useTrackRouteParam<string>({
    paramName: 'stotte',
    isQueryParam: true,
  });

  const skalViseHistorikkV2 = ['local', 'dev'].includes(getEnvironment());

  const [meldingFormData, setMeldingFormData] = useState();
  const [beslutterFormData, setBeslutterFormData] = useState();

  const fagsak = fagsakData.getFagsak();
  const behandling = fagsakData.getBehandling(behandlingUuid);

  const navigate = useNavigate();

  const behandlingTillatteOperasjoner = behandling?.behandlingTillatteOperasjoner;

  const skalViseFraBeslutter = !!behandlingTillatteOperasjoner?.behandlingFraBeslutter;
  const skalViseTilGodkjenning = !!behandlingTillatteOperasjoner?.behandlingTilGodkjenning;

  const aktivtSupportPanel = utledAktivtPanel(skalViseFraBeslutter, skalViseTilGodkjenning, valgtSupportPanel);

  const changeRouteCallback = useCallback(
    (supportPanel: string) => {
      const getSupportPanelLocation = getSupportPanelLocationCreator(location);
      navigate(getSupportPanelLocation(supportPanel));
    },
    [location],
  );

  return (
    <Tabs value={aktivtSupportPanel} onChange={changeRouteCallback}>
      <Tabs.List className={styles.tabContainer}>
        {skalViseFraBeslutter && (
          <Tabs.Tab
            className={styles.tab}
            value={SupportTabs.FRA_BESLUTTER}
            icon={<ArrowUndoIcon title={intl.formatMessage({ id: 'BehandlingSupportIndex.FraBeslutter' })} />}
          />
        )}
        {skalViseTilGodkjenning && (
          <Tabs.Tab
            className={styles.tab}
            value={SupportTabs.TIL_BESLUTTER}
            icon={<PersonCheckmarkFillIcon title={intl.formatMessage({ id: 'BehandlingSupportIndex.Godkjenning' })} />}
          />
        )}
        <Tabs.Tab
          className={styles.tab}
          value={SupportTabs.HISTORIKK}
          icon={<ClockDashedIcon title={intl.formatMessage({ id: 'BehandlingSupportIndex.Historikk' })} />}
        />
        {skalViseHistorikkV2 && (
          <Tabs.Tab
            className={styles.tab}
            value={SupportTabs.HISTORIKK_V2}
            icon={<ClockDashedIcon title={intl.formatMessage({ id: 'BehandlingSupportIndex.HistorikkV2' })} />}
          />
        )}
        <Tabs.Tab
          className={styles.tab}
          value={SupportTabs.MELDINGER}
          icon={<PaperplaneIcon title={intl.formatMessage({ id: 'BehandlingSupportIndex.Melding' })} />}
        />
        <Tabs.Tab
          className={styles.tab}
          value={SupportTabs.DOKUMENTER}
          icon={<FolderIcon title={intl.formatMessage({ id: 'BehandlingSupportIndex.Dokumenter' })} />}
        />
        <Tabs.Tab
          className={styles.tab}
          value={SupportTabs.NOTATER}
          icon={
            <div className={styles.pencilSvgContainer}>
              {fagsak.notater.length > 0 && <div className={styles.ulesteNotater}>{fagsak.notater.length}</div>}
              <DocPencilIcon title={intl.formatMessage({ id: 'BehandlingSupportIndex.Notatblokk' })} />
            </div>
          }
        />
      </Tabs.List>
      <Tabs.Panel value={SupportTabs.TIL_BESLUTTER}>
        {behandling && (
          <TotrinnskontrollIndex
            fagsakData={fagsakData}
            valgtBehandlingUuid={behandling.uuid}
            beslutterFormData={beslutterFormData}
            setBeslutterFormData={setBeslutterFormData}
          />
        )}
      </Tabs.Panel>
      <Tabs.Panel value={SupportTabs.FRA_BESLUTTER}>
        {behandling && (
          <TotrinnskontrollIndex
            fagsakData={fagsakData}
            valgtBehandlingUuid={behandling.uuid}
            beslutterFormData={beslutterFormData}
            setBeslutterFormData={setBeslutterFormData}
          />
        )}
      </Tabs.Panel>
      <Tabs.Panel value={SupportTabs.HISTORIKK}>
        <HistorikkIndex
          saksnummer={fagsak.saksnummer}
          behandlingUuid={behandlingUuid}
          behandlingVersjon={behandlingVersjon}
          historikkinnslagFpSak={fagsakData.getHistorikkFpSak()}
          historikkinnslagFpTilbake={fagsakData.getHistorikkFpTilbake()}
          kjønn={fagsak.bruker.kjønn}
        />
      </Tabs.Panel>
      {skalViseHistorikkV2 && (
        <Tabs.Panel value={SupportTabs.HISTORIKK_V2}>
          <HistorikkIndexV2
            saksnummer={fagsak.saksnummer}
            behandlingUuid={behandlingUuid}
            behandlingVersjon={behandlingVersjon}
            historikkinnslagFpSak={fagsakData.getHistorikkV2FpSak()}
            historikkinnslagFpTilbake={fagsakData.getHistorikkV2FpTilbake()}
            kjønn={fagsak.bruker.kjønn}
          />
        </Tabs.Panel>
      )}
      <Tabs.Panel value={SupportTabs.MELDINGER}>
        {behandling && (
          <MeldingIndex
            fagsakData={fagsakData}
            valgtBehandlingUuid={behandling.uuid}
            meldingFormData={meldingFormData}
            setMeldingFormData={setMeldingFormData}
            hentOgSettBehandling={hentOgSettBehandling}
          />
        )}
      </Tabs.Panel>
      <Tabs.Panel value={SupportTabs.DOKUMENTER}>
        <DokumentIndex
          saksnummer={fagsak.saksnummer}
          behandlingUuid={behandlingUuid}
          behandlingVersjon={behandlingVersjon}
        />
      </Tabs.Panel>
      ;
      <Tabs.Panel value={SupportTabs.NOTATER}>
        <NotatIndex fagsak={fagsak} oppdaterFagsak={oppdaterFagsak} />
      </Tabs.Panel>
      ;
    </Tabs>
  );
};

export default BehandlingSupportIndex;
