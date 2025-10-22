import { type ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import { Box, Label } from '@navikt/ds-react';
import dayjs from 'dayjs';

import type { AlleKodeverk, AlleKodeverkTilbakekreving, FagsakBehandlingDto } from '@navikt/fp-types';

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
  renderRadSomLenke: (className: string, behandlingInfoKomponent: ReactElement, uuid: string) => ReactElement;
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
  renderRadSomLenke,
  behandlingUuid,
  skalViseAlleBehandlinger,
  toggleVisAlleBehandlinger,
  alleKodeverk,
  alleKodeverkTilbakekreving,
}: Props) => {
  const sorterteOgFiltrerteBehandlinger = sorterBehandlinger(behandlinger).filter(
    behandling => skalViseAlleBehandlinger || behandling.uuid === behandlingUuid,
  );

  return (
    <ul className={styles['behandlingList']}>
      {behandlinger.length === 0 && (
        <Box.New borderWidth="2" borderColor="neutral-subtle" borderRadius="large" padding="3">
          <Label size="small">
            <FormattedMessage id="BehandlingList.ZeroBehandlinger" />
          </Label>
        </Box.New>
      )}
      {behandlinger.length > 0 &&
        sorterteOgFiltrerteBehandlinger.map(behandling => (
          <li key={behandling.uuid} data-testid={`behandling-${behandling.uuid}`}>
            <BehandlingListeRad
              erKunEnBehandling={behandlinger.length === 1}
              behandling={behandling}
              renderRadSomLenke={renderRadSomLenke}
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
