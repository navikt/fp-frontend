import { useState } from 'react';
import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import {
  ArrowUndoIcon,
  ClockDashedIcon,
  DocPencilIcon,
  FolderIcon,
  PaperplaneIcon,
  PersonCheckmarkFillIcon,
} from '@navikt/aksel-icons';
import { Tabs } from '@navikt/ds-react';

import { getSupportPanelLocationCreator } from '../app/paths';
import { useTrackRouteParam } from '../app/useTrackRouteParam';
import { FagsakData } from '../fagsak/FagsakData';
import { DokumentIndex } from './dokument/DokumentIndex';
import { HistorikkIndex } from './historikk/HistorikkIndex';
import { MeldingIndex } from './melding/MeldingIndex';
import { NotatIndex } from './notat/NotatIndex';
import { SupportTabs } from './supportTabs';
import { TotrinnskontrollIndex } from './totrinnskontroll/TotrinnskontrollIndex';
import { UtvidEllerMinskKnapp } from './UtvidEllerMinskKnapp.tsx';

import styles from './behandlingSupportIndex.module.css';

interface Props {
  fagsakData: FagsakData;
  behandlingUuid?: string;
  behandlingVersjon?: number;
  hentOgSettBehandling: () => void;
  toggleVisUtvidetBehandlingDetaljer: () => void;
  visUtvidetBehandlingDetaljer: boolean;
}

/**
 * BehandlingSupportIndex
 *
 * Har ansvar for å lage navigasjonsrad med korrekte navigasjonsvalg, og route til rett
 * støttepanelkomponent ihht. gitt parameter i URL-en.
 */
export const BehandlingSupportIndex = ({
  fagsakData,
  behandlingUuid,
  behandlingVersjon,
  hentOgSettBehandling,
  toggleVisUtvidetBehandlingDetaljer,
  visUtvidetBehandlingDetaljer,
}: Props) => {
  const intl = useIntl();

  const { selected: valgtSupportPanel, location } = useTrackRouteParam<string>({
    paramName: 'stotte',
    isQueryParam: true,
  });

  const [meldingFormData, setMeldingFormData] = useState();
  const [beslutterFormData, setBeslutterFormData] = useState();

  const fagsak = fagsakData.getFagsak();
  const behandling = fagsakData.getBehandling(behandlingUuid);

  const utvidEllerMinskBehandlingDetaljerKnapp = (
    <UtvidEllerMinskKnapp
      toggleVisUtvidetBehandlingDetaljer={toggleVisUtvidetBehandlingDetaljer}
      visUtvidetBehandlingDetaljer={visUtvidetBehandlingDetaljer}
    />
  );

  const navigate = useNavigate();

  const behandlingTillatteOperasjoner = behandling?.behandlingTillatteOperasjoner;

  const skalViseFraBeslutter = !!behandlingTillatteOperasjoner?.behandlingFraBeslutter;
  const skalViseTilGodkjenning = !!behandlingTillatteOperasjoner?.behandlingTilGodkjenning;

  const aktivtSupportPanel = utledAktivtPanel(skalViseFraBeslutter, skalViseTilGodkjenning, valgtSupportPanel);

  const changeRouteCallback = (supportPanel: string) => {
    const getSupportPanelLocation = getSupportPanelLocationCreator(location);
    navigate(getSupportPanelLocation(supportPanel));
  };

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
            toggleVisUtvidetBehandlingDetaljerKnapp={utvidEllerMinskBehandlingDetaljerKnapp}
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
            toggleVisUtvidetBehandlingDetaljerKnapp={utvidEllerMinskBehandlingDetaljerKnapp}
          />
        )}
      </Tabs.Panel>
      <Tabs.Panel value={SupportTabs.HISTORIKK}>
        <HistorikkIndex
          saksnummer={fagsak.saksnummer}
          behandlingUuid={behandlingUuid}
          historikkinnslagFpSak={fagsakData.getHistorikkFpSak()}
          historikkinnslagFpTilbake={fagsakData.getHistorikkFpTilbake()}
          toggleVisUtvidetBehandlingDetaljerKnapp={utvidEllerMinskBehandlingDetaljerKnapp}
        />
      </Tabs.Panel>
      <Tabs.Panel value={SupportTabs.MELDINGER}>
        {behandling && (
          <MeldingIndex
            fagsakData={fagsakData}
            valgtBehandlingUuid={behandling.uuid}
            meldingFormData={meldingFormData}
            setMeldingFormData={setMeldingFormData}
            hentOgSettBehandling={hentOgSettBehandling}
            toggleVisUtvidetBehandlingDetaljerKnapp={utvidEllerMinskBehandlingDetaljerKnapp}
          />
        )}
      </Tabs.Panel>
      <Tabs.Panel value={SupportTabs.DOKUMENTER}>
        <DokumentIndex
          saksnummer={fagsak.saksnummer}
          behandlingUuid={behandlingUuid}
          behandlingVersjon={behandlingVersjon}
          toggleVisUtvidetBehandlingDetaljerKnapp={utvidEllerMinskBehandlingDetaljerKnapp}
        />
      </Tabs.Panel>
      <Tabs.Panel value={SupportTabs.NOTATER}>
        <NotatIndex fagsak={fagsak} toggleVisUtvidetBehandlingDetaljerKnapp={utvidEllerMinskBehandlingDetaljerKnapp} />
      </Tabs.Panel>
    </Tabs>
  );
};

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
