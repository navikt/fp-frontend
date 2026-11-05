import { type MouseEventHandler, useId } from 'react';
import { useIntl } from 'react-intl';

import { ChevronDownIcon, ChevronUpIcon } from '@navikt/aksel-icons';
import { Box, Button } from '@navikt/ds-react';

import type { AlleKodeverk, AlleKodeverkTilbakekreving, FagsakBehandlingDto } from '@navikt/fp-types';

import { BehandlingInformasjon } from './BehandlingInformasjon';

import styles from './behandlingKort.module.css';

interface Props {
  listeId: string;
  behandling: FagsakBehandlingDto;
  erKunEnBehandling: boolean;
  skalViseAlleBehandlinger: boolean;
  toggleVisAlleBehandlinger: MouseEventHandler<HTMLButtonElement>;
  alleKodeverk: AlleKodeverk;
  alleKodeverkTilbakekreving: AlleKodeverkTilbakekreving;
}

export const BehandlingVelgerUtløser = ({
  listeId,
  behandling,
  erKunEnBehandling,
  skalViseAlleBehandlinger,
  toggleVisAlleBehandlinger,
  alleKodeverk,
  alleKodeverkTilbakekreving,
}: Props) => {
  const intl = useIntl();
  const tittelId = useId();
  const visBehandlingslisteTekst = intl.formatMessage({
    id: skalViseAlleBehandlinger ? 'BehandlingPickerItemContent.Close' : 'BehandlingPickerItemContent.Open',
  });

  return (
    <Box
      data-color="neutral"
      background="raised"
      paddingBlock="space-8"
      paddingInline="space-16"
      data-interactive={!erKunEnBehandling}
      data-trigger
      className={styles['behandling']}
    >
      {!erKunEnBehandling && (
        <button
          type="button"
          className={styles['hovedHandling']}
          onClick={toggleVisAlleBehandlinger}
          aria-current="page"
          aria-expanded={skalViseAlleBehandlinger}
          aria-controls={listeId}
          aria-labelledby={tittelId}
        />
      )}
      <BehandlingInformasjon
        tittelId={tittelId}
        behandling={behandling}
        alleKodeverk={alleKodeverk}
        alleKodeverkTilbakekreving={alleKodeverkTilbakekreving}
      />
      {!erKunEnBehandling && (
        <Button
          type="button"
          variant="tertiary"
          size="small"
          className={styles['ikonHandling']}
          onClick={toggleVisAlleBehandlinger}
          onKeyDown={event => {
            if (event.key === ' ') {
              // Aksel håndterer mellomrom selv; unngå et ekstra klikk fra nettleseren.
              event.preventDefault();
            }
          }}
          aria-expanded={skalViseAlleBehandlinger}
          aria-controls={listeId}
          icon={
            skalViseAlleBehandlinger ? (
              <ChevronUpIcon title={visBehandlingslisteTekst} fontSize="2rem" />
            ) : (
              <ChevronDownIcon title={visBehandlingslisteTekst} fontSize="2rem" />
            )
          }
        />
      )}
    </Box>
  );
};
