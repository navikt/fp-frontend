import {
  type ComponentType,
  type KeyboardEventHandler,
  type MouseEventHandler,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import { FormattedMessage } from 'react-intl';

import { BodyShort, Box, Popover } from '@navikt/ds-react';
import dayjs from 'dayjs';

import type { AlleKodeverk, AlleKodeverkTilbakekreving, FagsakBehandlingDto } from '@navikt/fp-types';

import type { BehandlingLenkeProps } from '../BehandlingVelgerSakIndex';
import { BehandlingListeRad } from './BehandlingListeRad';
import { BehandlingVelgerUtløser } from './BehandlingVelgerUtløser';

import styles from './behandlingerListe.module.css';

interface Props {
  behandlinger: FagsakBehandlingDto[];
  behandlingLenke: ComponentType<BehandlingLenkeProps>;
  behandlingUuid?: string;
  skalViseAlleBehandlinger: boolean;
  toggleVisAlleBehandlinger: () => void;
  alleKodeverk: AlleKodeverk;
  alleKodeverkTilbakekreving: AlleKodeverkTilbakekreving;
}

/**
 * BehandlingerListe
 *
 * Viser behandlinger knyttet til fagsak,
 */
export const BehandlingerListe = ({
  behandlinger,
  behandlingLenke,
  behandlingUuid,
  skalViseAlleBehandlinger,
  toggleVisAlleBehandlinger,
  alleKodeverk,
  alleKodeverkTilbakekreving,
}: Props) => {
  const listeId = useId();
  const [utløserElement, setUtløserElement] = useState<HTMLDivElement | null>(null);
  const listeRef = useRef<HTMLUListElement>(null);
  const skalFokusereFørsteRef = useRef(false);
  const valgtBehandling = behandlinger.find(behandling => behandling.uuid === behandlingUuid);
  const erKunEnBehandling = behandlinger.length === 1;
  const erMenyÅpen = skalViseAlleBehandlinger && (!erKunEnBehandling || !valgtBehandling);

  useEffect(() => {
    if (erMenyÅpen && skalFokusereFørsteRef.current) {
      skalFokusereFørsteRef.current = false;
      listeRef.current?.querySelector<HTMLAnchorElement | HTMLButtonElement>('a, button')?.focus();
    }
  }, [erMenyÅpen]);

  const toggleMeny: MouseEventHandler<HTMLButtonElement> = event => {
    skalFokusereFørsteRef.current = !erMenyÅpen && event.detail === 0;
    toggleVisAlleBehandlinger();
  };

  const lukkMeny = () => {
    toggleVisAlleBehandlinger();
    if (listeRef.current?.contains(document.activeElement)) {
      utløserElement?.querySelector<HTMLButtonElement>('button[aria-current="page"]')?.focus();
    }
  };

  const håndterTast: KeyboardEventHandler<HTMLDivElement> = event => {
    if (
      event.altKey ||
      event.ctrlKey ||
      event.metaKey ||
      !['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)
    ) {
      return;
    }

    if (!erMenyÅpen) {
      if (erKunEnBehandling || (event.key !== 'ArrowDown' && event.key !== 'ArrowUp')) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      skalFokusereFørsteRef.current = true;
      toggleVisAlleBehandlinger();
      return;
    }

    const rader = Array.from(listeRef.current?.children ?? []);
    if (rader.length === 0) {
      return;
    }
    const aktivIndex = rader.findIndex(rad => rad.contains(document.activeElement));
    event.preventDefault();
    // Containeren i appen har også tastaturnavigasjon.
    event.stopPropagation();
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      rader[aktivIndex]
        ?.querySelector<HTMLElement>(event.key === 'ArrowRight' ? 'a[target="_blank"]' : 'a, button')
        ?.focus();
      return;
    }

    let nesteIndex = 0;
    switch (event.key) {
      case 'ArrowDown':
        nesteIndex = (aktivIndex + 1) % rader.length;
        break;
      case 'ArrowUp':
        nesteIndex = aktivIndex <= 0 ? rader.length - 1 : aktivIndex - 1;
        break;
      case 'End':
        nesteIndex = rader.length - 1;
        break;
    }
    rader[nesteIndex]?.querySelector<HTMLElement>('a, button')?.focus();
  };

  const liste = (
    <ul ref={listeRef} id={listeId} className={styles['behandlingList']} hidden={!erMenyÅpen}>
      {erMenyÅpen &&
        behandlinger.toSorted(sorterBehandlinger).map((behandling, index) => (
          <li key={behandling.uuid} data-testid={`behandling-${behandling.uuid}`}>
            <BehandlingListeRad
              behandling={behandling}
              behandlingLenke={behandlingLenke}
              erAktiv={behandling.uuid === behandlingUuid}
              tabIndex={!valgtBehandling && index === 0 ? 0 : -1}
              lukkMeny={lukkMeny}
              alleKodeverk={alleKodeverk}
              alleKodeverkTilbakekreving={alleKodeverkTilbakekreving}
            />
          </li>
        ))}
    </ul>
  );

  return (
    <Box data-color="neutral" width="100%" className={styles['velger']} onKeyDownCapture={håndterTast}>
      {behandlinger.length === 0 && (
        <Box background="raised" borderWidth="1" borderColor="neutral" borderRadius="8" padding="space-16">
          <BodyShort size="small" textColor="subtle">
            <FormattedMessage id="BehandlingList.ZeroBehandlinger" />
          </BodyShort>
        </Box>
      )}
      {valgtBehandling && (
        <div
          ref={setUtløserElement}
          className={styles['valgtBehandling']}
          data-testid="valgt-behandling"
          aria-current={erKunEnBehandling ? 'page' : undefined}
        >
          <BehandlingVelgerUtløser
            listeId={listeId}
            erKunEnBehandling={erKunEnBehandling}
            behandling={valgtBehandling}
            skalViseAlleBehandlinger={skalViseAlleBehandlinger}
            toggleVisAlleBehandlinger={toggleMeny}
            alleKodeverk={alleKodeverk}
            alleKodeverkTilbakekreving={alleKodeverkTilbakekreving}
          />
        </div>
      )}
      {behandlinger.length > 0 &&
        (valgtBehandling ? (
          <Popover
            anchorEl={utløserElement}
            open={erMenyÅpen}
            onClose={lukkMeny}
            placement="bottom-start"
            offset={4}
            className={styles['meny']}
          >
            {liste}
          </Popover>
        ) : (
          <Box borderWidth="1" borderColor="neutral" borderRadius="8">
            {liste}
          </Box>
        ))}
    </Box>
  );
};

const sorterBehandlinger = (a: FagsakBehandlingDto, b: FagsakBehandlingDto): number => {
  if (a.avsluttet && !b.avsluttet) {
    return 1;
  }
  if (!a.avsluttet && b.avsluttet) {
    return -1;
  }
  if (a.avsluttet && b.avsluttet) {
    return dayjs(b.avsluttet).diff(dayjs(a.avsluttet));
  }
  return dayjs(b.opprettet).diff(dayjs(a.opprettet));
};
