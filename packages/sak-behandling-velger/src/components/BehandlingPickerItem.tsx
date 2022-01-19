import React, { FunctionComponent, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { Location } from 'history';

import { BehandlingAppKontekst, KodeverkMedNavn } from '@fpsak-frontend/types';
import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';

import BehandlingPickerItemContent from './BehandlingPickerItemContent';

import styles from './behandlingPickerItem.less';

const getContentProps = (
  behandling: BehandlingAppKontekst,
  getKodeverkFn: (kodeverk: string, behandlingType: string) => KodeverkMedNavn | undefined,
) => ({
  behandlingTypeNavn: getKodeverkFn(behandling.type, behandling.type)?.navn || '',
  behandlingTypeKode: behandling.type,
  førsteÅrsak: behandling.førsteÅrsak,
  behandlendeEnhetId: behandling.behandlendeEnhetId,
  behandlendeEnhetNavn: behandling.behandlendeEnhetNavn,
  opprettetDato: behandling.opprettet,
  avsluttetDato: behandling.avsluttet,
  behandlingsstatus: getKodeverkFn(behandling.status, { kode: BehandlingType.FORSTEGANGSSOKNAD, kodeverk: '' })?.navn || '',
  erGjeldendeVedtak: behandling.gjeldendeVedtak,
  behandlingsresultatTypeNavn: behandling.behandlingsresultat ? getKodeverkFn(behandling.behandlingsresultat.type, behandling.type)?.navn : undefined,
  behandlingsresultatTypeKode: behandling.behandlingsresultat ? behandling.behandlingsresultat.type : undefined,
});

const renderItemContent = (
  behandling: BehandlingAppKontekst,
  getKodeverkFn: (kodeverk: string, behandlingType: string) => KodeverkMedNavn | undefined,
  withChevronDown = false,
  withChevronUp = false,
): ReactElement => (
  <BehandlingPickerItemContent
    withChevronDown={withChevronDown}
    withChevronUp={withChevronUp}
    getKodeverkFn={getKodeverkFn}
    {...getContentProps(behandling, getKodeverkFn)}
  />
);

const renderToggleShowAllButton = (
  toggleShowAll: () => void,
  behandling: BehandlingAppKontekst,
  showAll: boolean,
  getKodeverkFn: (kodeverk: string, behandlingType: string) => KodeverkMedNavn | undefined,
): ReactElement => (
  <button type="button" className={styles.toggleShowAllButton} onClick={toggleShowAll}>
    {renderItemContent(behandling, getKodeverkFn, !showAll, showAll)}
  </button>
);

const renderLinkToBehandling = (
  getBehandlingLocation: (behandlingUuid: string) => Location,
  behandling: BehandlingAppKontekst,
  isActive: boolean,
  toggleShowAll: () => void,
  showAll: boolean,
  getKodeverkFn: (kodeverk: string, behandlingType: string) => KodeverkMedNavn | undefined,
): ReactElement => (
  <NavLink
    className={styles.linkToBehandling}
    to={getBehandlingLocation(behandling.uuid)}
    onClick={toggleShowAll}
  >
    {renderItemContent(behandling, getKodeverkFn, false, showAll && isActive)}
  </NavLink>
);

interface OwnProps {
  onlyOneBehandling: boolean;
  behandling: BehandlingAppKontekst;
  getBehandlingLocation: (behandlingUuid: string) => Location;
  isActive: boolean;
  showAll: boolean;
  toggleShowAll: () => void;
  getKodeverkFn: (kodeverk: string, behandlingType: string) => KodeverkMedNavn | undefined;
}

const BehandlingPickerItem: FunctionComponent<OwnProps> = ({
  onlyOneBehandling,
  behandling,
  getBehandlingLocation,
  isActive,
  showAll,
  toggleShowAll,
  getKodeverkFn,
}) => {
  if (onlyOneBehandling && isActive) {
    return renderItemContent(behandling, getKodeverkFn);
  }
  if (onlyOneBehandling || showAll) {
    return renderLinkToBehandling(getBehandlingLocation, behandling, isActive, toggleShowAll, showAll, getKodeverkFn);
  }
  if (isActive) {
    return renderToggleShowAllButton(toggleShowAll, behandling, showAll, getKodeverkFn);
  }
  return null;
};

export default BehandlingPickerItem;
