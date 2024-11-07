import React from 'react';
import { SectorChartIcon } from '@navikt/aksel-icons';
import { NyeOgFerdigstilteOppgaver } from '../../typer/nyeOgFerdigstilteOppgaverTsType';
import { NyeOgFerdigstilteOppgaverForIdagPanel } from './nyeOgFerdigstilteOppgaverForIdag/NyeOgFerdigstilteOppgaverForIdagPanel';
import { NyeOgFerdigstilteOppgaverForSisteSyvPanel } from './nyeOgFerdigstilteOppgaverForSisteSyv/NyeOgFerdigstilteOppgaverForSisteSyvPanel';
import { Box, Detail, HStack, Heading, VStack } from '@navikt/ds-react';
import { FormattedMessage } from 'react-intl';

import styles from './saksbehandlerNokkeltallPanel.module.css';

interface Props {
  nyeOgFerdigstilteOppgaver?: NyeOgFerdigstilteOppgaver[];
}

export const SaksbehandlerNokkeltallPanel = ({ nyeOgFerdigstilteOppgaver }: Props) => {
  const HEIGHT = 250;

  return (
    <VStack gap="4">
      <HStack gap="2" align="center">
        <div className={styles.iconBackground}>
          <SectorChartIcon aria-hidden className={styles.sectorChatIcon} />
        </div>
        <Heading size="xsmall">
          <FormattedMessage id="SaksbehandlerNokkeltallPanel.Statistikk" />
        </Heading>
      </HStack>
      <Box background="surface-neutral-subtle" padding="4" borderRadius="large">
        <VStack gap="4">
          <VStack gap="1">
            <Heading size="small">
              <FormattedMessage id="SaksbehandlerNokkeltallPanel.ForAlle" />
            </Heading>
            <Detail>
              <FormattedMessage id="SaksbehandlerNokkeltallPanel.ForAlleDetaljer" />
            </Detail>
          </VStack>
          <NyeOgFerdigstilteOppgaverForIdagPanel
            height={HEIGHT}
            nyeOgFerdigstilteOppgaver={nyeOgFerdigstilteOppgaver}
          />
          <NyeOgFerdigstilteOppgaverForSisteSyvPanel
            height={HEIGHT}
            nyeOgFerdigstilteOppgaver={nyeOgFerdigstilteOppgaver}
          />
        </VStack>
      </Box>
    </VStack>
  );
};
