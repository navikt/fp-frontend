import React, { ReactElement } from 'react';

import { KodeverkType } from '@navikt/fp-kodeverk';
import { BehandlingAppKontekst,KodeverkMedNavn } from '@navikt/fp-types';

import { BehandlingInformasjon } from './BehandlingInformasjon';

import styles from './behandlingListeRad.module.css';

interface Props {
  behandling: BehandlingAppKontekst;
  erKunEnBehandling: boolean;
  erAktiv: boolean;
  skalViseAlleBehandlinger: boolean;
  toggleVisAlleBehandlinger: () => void;
  renderRadSomLenke: (className: string, behandlingInfoKomponent: ReactElement, uuid: string) => ReactElement;
  getKodeverkMedNavn: (kode: string, kodeverk: KodeverkType, behandlingType?: string) => KodeverkMedNavn | undefined;
}

export const BehandlingListeRad = ({
  behandling,
  erKunEnBehandling,
  erAktiv,
  skalViseAlleBehandlinger,
  toggleVisAlleBehandlinger,
  renderRadSomLenke,
  getKodeverkMedNavn,
}: Props) => {
  if (erKunEnBehandling && erAktiv) {
    return (
      <BehandlingInformasjon
        behandling={behandling}
        withChevronDown={false}
        withChevronUp={false}
        getKodeverkMedNavn={getKodeverkMedNavn}
      />
    );
  }
  if (erKunEnBehandling || skalViseAlleBehandlinger) {
    return renderRadSomLenke(
      styles.linkToBehandling,
      <BehandlingInformasjon
        behandling={behandling}
        withChevronDown={false}
        withChevronUp={skalViseAlleBehandlinger && erAktiv}
        getKodeverkMedNavn={getKodeverkMedNavn}
      />,
      behandling.uuid,
    );
  }
  if (erAktiv) {
    return (
      <button type="button" className={styles.toggleShowAllButton} onClick={toggleVisAlleBehandlinger}>
        <BehandlingInformasjon
          behandling={behandling}
          withChevronDown={!skalViseAlleBehandlinger}
          withChevronUp={skalViseAlleBehandlinger}
          getKodeverkMedNavn={getKodeverkMedNavn}
        />
      </button>
    );
  }
  return null;
};
