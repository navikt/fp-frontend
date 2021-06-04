import React, { FunctionComponent, ReactElement } from 'react';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import { Location } from 'history';
import { Normaltekst } from 'nav-frontend-typografi';

import { BehandlingAppKontekst, KodeverkMedNavn, Kodeverk } from '@fpsak-frontend/types';

import BehandlingPickerItem from './BehandlingPickerItem';

import styles from './behandlingPicker.less';

export const sortBehandlinger = (behandlinger: BehandlingAppKontekst[]): BehandlingAppKontekst[] => [...behandlinger].sort((b1, b2) => {
  if (b1.avsluttet && !b2.avsluttet) {
    return 1;
  }
  if (!b1.avsluttet && b2.avsluttet) {
    return -1;
  }
  if (b1.avsluttet && b2.avsluttet) {
    return moment(b2.avsluttet).diff(moment(b1.avsluttet));
  }
  return moment(b2.opprettet).diff(moment(b1.opprettet));
});

const renderListItems = (
  behandlinger: BehandlingAppKontekst[],
  getBehandlingLocation: (behandlingUuid: string) => Location,
  showAll: boolean,
  toggleShowAll: () => void,
  getKodeverkFn: (kodeverk: Kodeverk, behandlingType: Kodeverk) => KodeverkMedNavn | undefined,
  behandlingUuid?: string,
): ReactElement[] => (
  sortBehandlinger(behandlinger)
    .filter((behandling) => showAll || behandling.uuid === behandlingUuid)
    .map((behandling) => (
      <li key={behandling.uuid}>
        <BehandlingPickerItem
          onlyOneBehandling={behandlinger.length === 1}
          behandling={behandling}
          getBehandlingLocation={getBehandlingLocation}
          isActive={behandling.uuid === behandlingUuid}
          showAll={showAll}
          toggleShowAll={toggleShowAll}
          getKodeverkFn={getKodeverkFn}
        />
      </li>
    ))
);

interface OwnProps {
  behandlinger: BehandlingAppKontekst[];
  getBehandlingLocation: (behandlingUuid: string) => Location;
  noExistingBehandlinger: boolean;
  behandlingUuid?: string;
  showAll: boolean;
  toggleShowAll: () => void;
  getKodeverkFn: (kodeverk: Kodeverk, behandlingType: Kodeverk) => KodeverkMedNavn | undefined;
}

/**
 * BehandlingPicker
 *
 * Viser behandlinger knyttet til fagsak,
 */
const BehandlingPicker: FunctionComponent<OwnProps> = ({
  noExistingBehandlinger,
  behandlinger,
  getBehandlingLocation,
  behandlingUuid,
  showAll,
  toggleShowAll,
  getKodeverkFn,
}) => (
  <ul className={styles.behandlingList}>
    {noExistingBehandlinger && <Normaltekst><FormattedMessage id="BehandlingList.ZeroBehandlinger" /></Normaltekst>}
    {!noExistingBehandlinger && renderListItems(behandlinger, getBehandlingLocation, showAll, toggleShowAll, getKodeverkFn, behandlingUuid)}
  </ul>
);

export default BehandlingPicker;
