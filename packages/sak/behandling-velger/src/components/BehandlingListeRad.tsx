import { type ReactElement } from 'react';

import type { AlleKodeverk, AlleKodeverkTilbakekreving, BehandlingAppKontekst } from '@navikt/fp-types';

import { BehandlingInformasjon } from './BehandlingInformasjon';

import styles from './behandlingListeRad.module.css';

interface Props {
  behandling: BehandlingAppKontekst;
  erKunEnBehandling: boolean;
  erAktiv: boolean;
  skalViseAlleBehandlinger: boolean;
  toggleVisAlleBehandlinger: () => void;
  renderRadSomLenke: (className: string, behandlingInfoKomponent: ReactElement, uuid: string) => ReactElement;
  alleKodeverk: AlleKodeverk;
  alleKodeverkTilbakekreving: AlleKodeverkTilbakekreving;
}

export const BehandlingListeRad = ({
  behandling,
  erKunEnBehandling,
  erAktiv,
  skalViseAlleBehandlinger,
  toggleVisAlleBehandlinger,
  renderRadSomLenke,
  alleKodeverk,
  alleKodeverkTilbakekreving,
}: Props) => {
  if (erKunEnBehandling && erAktiv) {
    return (
      <BehandlingInformasjon
        behandling={behandling}
        withChevronDown={false}
        withChevronUp={false}
        alleKodeverk={alleKodeverk}
        alleKodeverkTilbakekreving={alleKodeverkTilbakekreving}
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
        alleKodeverk={alleKodeverk}
        alleKodeverkTilbakekreving={alleKodeverkTilbakekreving}
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
          alleKodeverk={alleKodeverk}
          alleKodeverkTilbakekreving={alleKodeverkTilbakekreving}
        />
      </button>
    );
  }
  return null;
};
