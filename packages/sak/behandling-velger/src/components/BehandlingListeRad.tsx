import { type ComponentType, useId } from 'react';
import { useIntl } from 'react-intl';

import { CheckmarkIcon, ExternalLinkIcon } from '@navikt/aksel-icons';
import { Box, Button } from '@navikt/ds-react';

import type { AlleKodeverk, AlleKodeverkTilbakekreving, FagsakBehandlingDto } from '@navikt/fp-types';

import type { BehandlingLenkeProps } from '../BehandlingVelgerSakIndex';
import { BehandlingInformasjon } from './BehandlingInformasjon';

import styles from './behandlingKort.module.css';

interface Props {
  behandling: FagsakBehandlingDto;
  erAktiv: boolean;
  tabIndex: 0 | -1;
  lukkMeny: () => void;
  behandlingLenke: ComponentType<BehandlingLenkeProps>;
  alleKodeverk: AlleKodeverk;
  alleKodeverkTilbakekreving: AlleKodeverkTilbakekreving;
}

export const BehandlingListeRad = ({
  behandling,
  erAktiv,
  tabIndex,
  lukkMeny,
  behandlingLenke: BehandlingLenke,
  alleKodeverk,
  alleKodeverkTilbakekreving,
}: Props) => {
  const intl = useIntl();
  const tittelId = useId();

  return (
    <Box
      data-color={erAktiv ? 'accent' : 'neutral'}
      background="raised"
      paddingBlock="space-8"
      paddingInline="space-16"
      data-interactive
      data-pressed={erAktiv || undefined}
      className={styles['behandling']}
    >
      {erAktiv ? (
        <button
          type="button"
          className={styles['hovedHandling']}
          onClick={lukkMeny}
          aria-current="page"
          aria-labelledby={tittelId}
          tabIndex={tabIndex}
        />
      ) : (
        <BehandlingLenke
          behandlingUuid={behandling.uuid}
          className={styles['hovedHandling']}
          onClick={lukkMeny}
          aria-labelledby={tittelId}
          tabIndex={tabIndex}
        />
      )}
      <BehandlingInformasjon
        tittelId={tittelId}
        behandling={behandling}
        alleKodeverk={alleKodeverk}
        alleKodeverkTilbakekreving={alleKodeverkTilbakekreving}
      >
        {!erAktiv && (
          <Button
            as={BehandlingLenke}
            variant="tertiary"
            size="small"
            className={styles['ikonHandling']}
            icon={
              <ExternalLinkIcon
                title={intl.formatMessage({ id: 'BehandlingPickerItemContent.OpenInNewWindow' })}
                fontSize="1.75rem"
              />
            }
            behandlingUuid={behandling.uuid}
            role="link"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={-1}
          />
        )}
      </BehandlingInformasjon>
      <span className={styles['valgtIkon']}>{erAktiv && <CheckmarkIcon aria-hidden fontSize="1.5rem" />}</span>
    </Box>
  );
};
