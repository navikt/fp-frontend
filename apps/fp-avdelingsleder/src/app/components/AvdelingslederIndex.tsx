import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import { Box, Heading, HStack, Select, Tabs } from '@navikt/ds-react';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { formatQueryString, parseQueryString } from '@navikt/ft-utils';
import { useQuery } from '@tanstack/react-query';
import { type Location } from 'history';

import type { NavAnsatt } from '@navikt/fp-types';
import { useTrackRouteParam } from '@navikt/fp-utils';

import { EndreSakslisterPanel } from '../../behandlingskoer/EndreSakslisterPanel';
import { IkkeTilgangTilAvdelingslederPanel } from '../../components/IkkeTilgangTilAvdelingslederPanel';
import {
  avdelingerOptions,
  losKodeverkOptions,
  saksbehandlareForAvdelingOptions,
} from '../../data/fplosAvdelingslederApi';
import {
  getValueFromLocalStorage,
  removeValueFromLocalStorage,
  setValueInLocalStorage,
} from '../../data/localStorageHelper';
import { GrupperPanel } from '../../grupper/GrupperPanel';
import { NokkeltallPanel } from '../../nokkeltall/NokkeltallPanel';
import { ReservasjonerTabell } from '../../reservasjoner/ReservasjonerTabell';
import { SaksbehandlerePanel } from '../../saksbehandlere/SaksbehandlerePanel';
import type { Avdeling } from '../../typer/avdelingTsType';
import { AvdelingslederPanels } from './avdelingslederPanels';

import styles from './avdelingslederIndex.module.css';

interface Props {
  navAnsatt?: NavAnsatt;
}

export const AvdelingslederIndex = ({ navAnsatt }: Props) => {
  const navigate = useNavigate();
  const [valgtAvdelingEnhet, setValgtAvdelingEnhet] = useState<string>();

  const { selected: activeAvdelingslederPanelTemp, location } = useTrackRouteParam<string>({
    paramName: 'fane',
    isQueryParam: true,
  });

  const alleKodeverkQuery = useQuery(losKodeverkOptions());

  const { data: filtrerteAvdelinger, status: avdelingerStatus } = useQuery({
    ...avdelingerOptions(!!navAnsatt?.kanOppgavestyre),
    select: avdelinger => avdelinger.filter(a => !!navAnsatt?.kanBehandleKode6 || !a.kreverKode6),
  });

  const { data: avdelingensSaksbehandlere } = useQuery(saksbehandlareForAvdelingOptions(valgtAvdelingEnhet));

  useEffect(() => {
    if (avdelingerStatus === 'success') {
      setAvdeling(setValgtAvdelingEnhet, filtrerteAvdelinger, valgtAvdelingEnhet);
    }
  }, [avdelingerStatus]);

  const getAvdelingslederPanelLocation = (avdelingslederPanel: string) => ({
    ...location,
    search: updateQueryParams(location.search, { fane: avdelingslederPanel }),
  });
  const activeAvdelingslederPanel = activeAvdelingslederPanelTemp || getPanelFromUrlOrDefault(location);

  if (!navAnsatt?.kanOppgavestyre) {
    return <IkkeTilgangTilAvdelingslederPanel />;
  }
  if (alleKodeverkQuery.isPending || avdelingerStatus !== 'success' || valgtAvdelingEnhet === undefined) {
    return <LoadingPanel />;
  }

  return (
    <div key={valgtAvdelingEnhet} className={styles.container}>
      <HStack justify="end" padding="2">
        <Select
          size="small"
          hideLabel
          label=""
          onChange={e => {
            const index = e.target.value;
            setValueInLocalStorage('avdelingEnhet', index);
            setValgtAvdelingEnhet(index);
          }}
          value={valgtAvdelingEnhet}
          className={styles.paddingSelect}
        >
          {filtrerteAvdelinger.map(avdeling => (
            <option key={avdeling.avdelingEnhet} value={avdeling.avdelingEnhet}>
              {`${avdeling.avdelingEnhet} ${avdeling.navn}`}
            </option>
          ))}
        </Select>
      </HStack>
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
              <Heading size="small" level="2">
                <FormattedMessage id="AvdelingslederIndex.Behandlingskoer" />
              </Heading>
            }
          />
          <Tabs.Tab
            value={AvdelingslederPanels.NOKKELTALL}
            label={
              <Heading size="small" level="2">
                <FormattedMessage id="AvdelingslederIndex.Nokkeltall" />
              </Heading>
            }
          />
          <Tabs.Tab
            value={AvdelingslederPanels.SAKSBEHANDLERE}
            label={
              <Heading size="small" level="2">
                <FormattedMessage id="AvdelingslederIndex.Saksbehandlere" />
              </Heading>
            }
          />
          <Tabs.Tab
            value={AvdelingslederPanels.GRUPPER}
            label={
              <Heading size="small" level="2">
                <FormattedMessage id="AvdelingslederIndex.Grupper" />
              </Heading>
            }
          />
          <Tabs.Tab
            value={AvdelingslederPanels.RESERVASJONER}
            label={
              <Heading size="small" level="2">
                <FormattedMessage id="AvdelingslederIndex.Reservasjoner" />
              </Heading>
            }
          />
        </Tabs.List>
      </Tabs>
      <Box.New background="default" padding="5">
        {activeAvdelingslederPanel === AvdelingslederPanels.BEHANDLINGSKOER && (
          <EndreSakslisterPanel
            valgtAvdelingEnhet={valgtAvdelingEnhet}
            avdelingensSaksbehandlere={avdelingensSaksbehandlere}
          />
        )}
        {activeAvdelingslederPanel === AvdelingslederPanels.SAKSBEHANDLERE && (
          <SaksbehandlerePanel
            valgtAvdelingEnhet={valgtAvdelingEnhet}
            avdelingensSaksbehandlere={avdelingensSaksbehandlere}
          />
        )}
        {activeAvdelingslederPanel === AvdelingslederPanels.GRUPPER && (
          <GrupperPanel valgtAvdelingEnhet={valgtAvdelingEnhet} avdelingensSaksbehandlere={avdelingensSaksbehandlere} />
        )}
        {activeAvdelingslederPanel === AvdelingslederPanels.NOKKELTALL && (
          <NokkeltallPanel valgtAvdelingEnhet={valgtAvdelingEnhet} />
        )}
        {activeAvdelingslederPanel === AvdelingslederPanels.RESERVASJONER && (
          <ReservasjonerTabell valgtAvdelingEnhet={valgtAvdelingEnhet} />
        )}
      </Box.New>
    </div>
  );
};

const nasjonalEnhet = '4867';

const setAvdeling = (
  setValgtAvdeling: (avdelingEnhet: string) => void,
  avdelinger: Avdeling[],
  valgtAvdelingEnhet?: string,
) => {
  if (avdelinger.length > 0 && !valgtAvdelingEnhet) {
    let valgtEnhet = avdelinger.some(a => a.avdelingEnhet === nasjonalEnhet)
      ? nasjonalEnhet
      : avdelinger[0].avdelingEnhet;
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

const getPanelFromUrlOrDefault = (location: Location) => {
  const panelFromUrl = parseQueryString(location.search);
  return panelFromUrl['avdelingsleder'] ?? AvdelingslederPanels.BEHANDLINGSKOER;
};
