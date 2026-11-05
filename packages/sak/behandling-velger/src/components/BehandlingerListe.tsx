import { type ComponentType, useId } from 'react';
import { FormattedMessage } from 'react-intl';

import { BodyShort, Box } from '@navikt/ds-react';
import dayjs from 'dayjs';

import type { AlleKodeverk, AlleKodeverkTilbakekreving, FagsakBehandlingDto } from '@navikt/fp-types';

import type { BehandlingLenkeProps } from '../BehandlingVelgerSakIndex';
import { BehandlingListeRad } from './BehandlingListeRad';

import styles from './behandlingerListe.module.css';

const sorterBehandlinger = (behandlinger: FagsakBehandlingDto[]): FagsakBehandlingDto[] =>
  [...behandlinger].sort((b1, b2) => {
    if (b1.avsluttet && !b2.avsluttet) {
      return 1;
    }
    if (!b1.avsluttet && b2.avsluttet) {
      return -1;
    }
    if (b1.avsluttet && b2.avsluttet) {
      return dayjs(b2.avsluttet).diff(dayjs(b1.avsluttet));
    }
    return dayjs(b2.opprettet).diff(dayjs(b1.opprettet));
  });

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
  const sorterteOgFiltrerteBehandlinger = sorterBehandlinger(behandlinger).filter(
    behandling => skalViseAlleBehandlinger || behandling.uuid === behandlingUuid,
  );

  return (
    <ul id={listeId} className={styles['behandlingList']}>
      {behandlinger.length === 0 && (
        <li>
          <Box background="raised" borderWidth="1" borderColor="neutral-subtle" borderRadius="8" padding="space-16">
            <BodyShort size="small" textColor="subtle">
              <FormattedMessage id="BehandlingList.ZeroBehandlinger" />
            </BodyShort>
          </Box>
        </li>
      )}
      {behandlinger.length > 0 &&
        sorterteOgFiltrerteBehandlinger.map(behandling => (
          <li
            key={behandling.uuid}
            data-testid={`behandling-${behandling.uuid}`}
            aria-current={behandlinger.length === 1 && behandling.uuid === behandlingUuid ? 'page' : undefined}
          >
            <BehandlingListeRad
              listeId={listeId}
              erKunEnBehandling={behandlinger.length === 1}
              behandling={behandling}
              behandlingLenke={behandlingLenke}
              erAktiv={behandling.uuid === behandlingUuid}
              skalViseAlleBehandlinger={skalViseAlleBehandlinger}
              toggleVisAlleBehandlinger={toggleVisAlleBehandlinger}
              alleKodeverk={alleKodeverk}
              alleKodeverkTilbakekreving={alleKodeverkTilbakekreving}
            />
          </li>
        ))}
    </ul>
  );
};
