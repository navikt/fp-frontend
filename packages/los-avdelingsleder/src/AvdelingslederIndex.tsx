import React, { FunctionComponent, useState, useEffect, useCallback } from 'react';
import { RawIntlProvider, FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import { Location } from 'history';
import { Heading, Panel, Tabs } from '@navikt/ds-react';
import { LoadingPanel, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { formatQueryString, parseQueryString, createIntl } from '@navikt/ft-utils';

import { NavAnsatt } from '@navikt/fp-types';
import { RestApiState, useRestApiErrorDispatcher } from '@navikt/fp-rest-api-hooks';

import useTrackRouteParam from './useTrackRouteParam';
import { requestApi, RestApiPathsKeys, RestApiGlobalStatePathsKeys, restApiHooks } from './data/fplosRestApi';
import AvdelingslederDashboard from './components/AvdelingslederDashboard';
import IkkeTilgangTilAvdelingslederPanel from './components/IkkeTilgangTilAvdelingslederPanel';
import Saksbehandler from './typer/saksbehandlerAvdelingTsType';
import AvdelingslederPanels from './avdelingslederPanels';
import NokkeltallIndex from './nokkeltall/NokkeltallIndex';
import EndreSaksbehandlereIndex from './saksbehandlere/EndreSaksbehandlereIndex';
import EndreBehandlingskoerIndex from './behandlingskoer/EndreBehandlingskoerIndex';
import ReservasjonerIndex from './reservasjoner/ReservasjonerIndex';
import Avdeling from './typer/avdelingTsType';
import { getValueFromLocalStorage, removeValueFromLocalStorage } from './data/localStorageHelper';
import Avdelingsvelger from './components/Avdelingsvelger';

import styles from './avdelingslederIndex.module.css';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

const EMPTY_ARRAY: Saksbehandler[] = [];

const setAvdeling = (
  setValgtAvdeling: (avdelingEnhet: string) => void,
  avdelinger: Avdeling[],
  valgtAvdelingEnhet?: string,
) => {
  if (avdelinger.length > 0 && !valgtAvdelingEnhet) {
    let valgtEnhet = avdelinger[0].avdelingEnhet;
    const lagretAvdelingEnhet = getValueFromLocalStorage('avdelingEnhet');
    if (lagretAvdelingEnhet) {
      if (avdelinger.some(a => a.avdelingEnhet === lagretAvdelingEnhet)) {
        valgtEnhet = lagretAvdelingEnhet;
      } else {
        removeValueFromLocalStorage('avdelingEnhet');
      }
    }
    setValgtAvdeling(valgtEnhet);
  }
};

const emptyQueryString = (queryString: string) => queryString === '?' || !queryString;

const updateQueryParams = (queryString: string, nextParams: Record<string, string>) => {
  const prevParams = emptyQueryString(queryString) ? {} : parseQueryString(queryString);
  return formatQueryString({
    ...prevParams,
    ...nextParams,
  });
};

const getLocationWithQueryParams = (location: Location, queryParams: Record<string, string>) => ({
  ...location,
  search: updateQueryParams(location.search, queryParams),
});

const getAvdelingslederPanelLocationCreator = (location: Location) => (avdelingslederPanel: string) =>
  getLocationWithQueryParams(location, { fane: avdelingslederPanel });

const renderAvdelingslederPanel = (
  avdelingslederPanel: string,
  valgtAvdelingEnhet: string,
  hentAvdelingensSaksbehandlere: (params: { avdelingEnhet: string }) => void,
  avdelingensSaksbehandlere: Saksbehandler[],
) => {
  switch (avdelingslederPanel) {
    case AvdelingslederPanels.BEHANDLINGSKOER:
      return (
        <EndreBehandlingskoerIndex
          valgtAvdelingEnhet={valgtAvdelingEnhet}
          avdelingensSaksbehandlere={avdelingensSaksbehandlere}
        />
      );
    case AvdelingslederPanels.SAKSBEHANDLERE:
      return (
        <EndreSaksbehandlereIndex
          valgtAvdelingEnhet={valgtAvdelingEnhet}
          hentAvdelingensSaksbehandlere={hentAvdelingensSaksbehandlere}
          avdelingensSaksbehandlere={avdelingensSaksbehandlere}
        />
      );
    case AvdelingslederPanels.NOKKELTALL:
      return <NokkeltallIndex valgtAvdelingEnhet={valgtAvdelingEnhet} />;
    case AvdelingslederPanels.RESERVASJONER:
      return <ReservasjonerIndex valgtAvdelingEnhet={valgtAvdelingEnhet} />;
    default:
      return null;
  }
};

const messageId = {
  [AvdelingslederPanels.BEHANDLINGSKOER]: 'AvdelingslederIndex.Behandlingskoer',
  [AvdelingslederPanels.SAKSBEHANDLERE]: 'AvdelingslederIndex.Saksbehandlere',
  [AvdelingslederPanels.NOKKELTALL]: 'AvdelingslederIndex.Nokkeltall',
  [AvdelingslederPanels.RESERVASJONER]: 'AvdelingslederIndex.Reservasjoner',
};

interface OwnProps {
  valgtAvdelingEnhet?: string;
  navAnsatt: NavAnsatt;
}

const getPanelFromUrlOrDefault = (location: Location) => {
  const panelFromUrl = parseQueryString(location.search);
  return panelFromUrl.avdelingsleder ? panelFromUrl.avdelingsleder : AvdelingslederPanels.BEHANDLINGSKOER;
};

/**
 * AvdelingslederIndex
 */
const AvdelingslederIndex: FunctionComponent<OwnProps> = ({ navAnsatt }) => {
  const [valgtAvdelingEnhet, setValgtAvdelingEnhet] = useState<string>();

  const { selected: activeAvdelingslederPanelTemp, location } = useTrackRouteParam<string>({
    paramName: 'fane',
    isQueryParam: true,
  });

  const { kanOppgavestyre, kanBehandleKode6 } = navAnsatt;

  const avdelingerData = restApiHooks.useRestApi(RestApiPathsKeys.AVDELINGER, undefined, {
    isCachingOn: true,
    suspendRequest: !kanOppgavestyre,
  });

  const avdelinger = avdelingerData?.data;
  const filtrerteAvdelinger = avdelinger ? avdelinger.filter(a => kanBehandleKode6 || !a.kreverKode6) : [];

  useEffect(() => {
    if (avdelingerData.state === RestApiState.SUCCESS) {
      setAvdeling(setValgtAvdelingEnhet, filtrerteAvdelinger, valgtAvdelingEnhet);
    }
  }, [avdelingerData]);

  const { startRequest: hentAvdelingensSb, data: avdelingensSaksbehandlere = EMPTY_ARRAY } =
    restApiHooks.useRestApiRunner(RestApiPathsKeys.SAKSBEHANDLERE_FOR_AVDELING);
  const hentAvdelingensSaksbehandlere = useCallback(
    (params: { avdelingEnhet: string }) => hentAvdelingensSb(params, true),
    [],
  );

  useEffect(() => {
    if (valgtAvdelingEnhet) {
      hentAvdelingensSaksbehandlere({ avdelingEnhet: valgtAvdelingEnhet });
    }
  }, [valgtAvdelingEnhet]);

  const getAvdelingslederPanelLocation = getAvdelingslederPanelLocationCreator(location);
  const activeAvdelingslederPanel = activeAvdelingslederPanelTemp || getPanelFromUrlOrDefault(location);

  const navigate = useNavigate();

  if (!kanOppgavestyre) {
    return <IkkeTilgangTilAvdelingslederPanel />;
  }
  if (avdelingerData.state !== RestApiState.SUCCESS) {
    return null;
  }
  if (valgtAvdelingEnhet) {
    return (
      <AvdelingslederDashboard key={valgtAvdelingEnhet}>
        <Avdelingsvelger
          valgtAvdelingEnhet={valgtAvdelingEnhet}
          avdelinger={filtrerteAvdelinger}
          setValgtAvdelingEnhet={setValgtAvdelingEnhet}
        />
        <VerticalSpacer sixteenPx />
        <Tabs
          size="small"
          value={activeAvdelingslederPanel}
          onChange={(avdelingslederPanel: string) => {
            navigate(getAvdelingslederPanelLocation(avdelingslederPanel));
          }}
          className={styles.paddingHeader}
        >
          <Tabs.List>
            <Tabs.Tab
              value={AvdelingslederPanels.BEHANDLINGSKOER}
              label={
                <Heading size="small">
                  <FormattedMessage id={messageId[AvdelingslederPanels.BEHANDLINGSKOER]} />
                </Heading>
              }
            />
            <Tabs.Tab
              value={AvdelingslederPanels.NOKKELTALL}
              label={
                <Heading size="small">
                  <FormattedMessage id={messageId[AvdelingslederPanels.NOKKELTALL]} />
                </Heading>
              }
            />
            <Tabs.Tab
              value={AvdelingslederPanels.SAKSBEHANDLERE}
              label={
                <Heading size="small">
                  <FormattedMessage id={messageId[AvdelingslederPanels.SAKSBEHANDLERE]} />
                </Heading>
              }
            />
            <Tabs.Tab
              value={AvdelingslederPanels.RESERVASJONER}
              label={
                <Heading size="small">
                  <FormattedMessage id={messageId[AvdelingslederPanels.RESERVASJONER]} />
                </Heading>
              }
            />
          </Tabs.List>
        </Tabs>
        <Panel className={styles.padding}>
          {renderAvdelingslederPanel(
            activeAvdelingslederPanel,
            valgtAvdelingEnhet,
            hentAvdelingensSaksbehandlere,
            avdelingensSaksbehandlere,
          )}
        </Panel>
      </AvdelingslederDashboard>
    );
  }
  return <LoadingPanel />;
};

interface OwnPropsWrapper {
  setLosErIkkeTilgjengelig: () => void;
  navAnsatt: NavAnsatt;
}

const AvdelingslederIndexIntlWrapper: FunctionComponent<OwnPropsWrapper> = ({
  setLosErIkkeTilgjengelig,
  navAnsatt,
}) => {
  const { addErrorMessage } = useRestApiErrorDispatcher();
  requestApi.setAddErrorMessageHandler(addErrorMessage);

  const kodeverk = restApiHooks.useGlobalStateRestApiData(RestApiGlobalStatePathsKeys.KODEVERK_LOS);

  const kodeverkData = restApiHooks.useGlobalStateRestApi(RestApiGlobalStatePathsKeys.KODEVERK_LOS, undefined, {
    suspendRequest: !!kodeverk,
  });

  useEffect(() => {
    if (!kodeverk && kodeverkData.state === RestApiState.ERROR) {
      setLosErIkkeTilgjengelig();
    }
  }, [kodeverkData.state]);

  if (!kodeverk && kodeverkData.state !== RestApiState.SUCCESS) {
    return null;
  }

  return (
    <RawIntlProvider value={intl}>
      <AvdelingslederIndex navAnsatt={navAnsatt} />
    </RawIntlProvider>
  );
};

export default AvdelingslederIndexIntlWrapper;
