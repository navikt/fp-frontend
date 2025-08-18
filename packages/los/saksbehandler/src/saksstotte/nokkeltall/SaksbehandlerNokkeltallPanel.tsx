import { FormattedMessage } from 'react-intl';

import { SectorChartIcon } from '@navikt/aksel-icons';
import { Box, Detail, Heading, HStack, VStack } from '@navikt/ds-react';
import { useQuery } from '@tanstack/react-query';

import { hentNyeOgFerdigstilteOppgaverOptions } from '../../data/fplosSaksbehandlerApi';
import { NyeOgFerdigstilteOppgaverForIdagPanel } from './nyeOgFerdigstilteOppgaverForIdag/NyeOgFerdigstilteOppgaverForIdagPanel';
import { NyeOgFerdigstilteOppgaverForSisteSyvPanel } from './nyeOgFerdigstilteOppgaverForSisteSyv/NyeOgFerdigstilteOppgaverForSisteSyvPanel';

import styles from './saksbehandlerNokkeltallPanel.module.css';

interface Props {
  valgtSakslisteId: number;
}

export const SaksbehandlerNokkeltallPanel = ({ valgtSakslisteId }: Props) => {
  const HEIGHT = 250;

  const nyeOgFerdigstilteOppgaver = useQuery(hentNyeOgFerdigstilteOppgaverOptions(valgtSakslisteId)).data;

  return (
    <VStack gap="space-16">
      <HStack gap="space-8" align="center">
        <div className={styles.iconBackground}>
          <SectorChartIcon aria-hidden className={styles.sectorChatIcon} />
        </div>
        <Heading size="xsmall" level="2">
          <FormattedMessage id="SaksbehandlerNokkeltallPanel.Statistikk" />
        </Heading>
      </HStack>
      <Box.New padding="4" borderRadius="large">
        <VStack gap="space-16">
          <VStack gap="space-4">
            <Heading size="small" level="3">
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
      </Box.New>
    </VStack>
  );
};
