import { FormattedMessage } from 'react-intl';

import { SectorChartIcon } from '@navikt/aksel-icons';
import { Heading, HStack, VStack } from '@navikt/ds-react';

import { AktiveOgTilgjengligeOppgaverPanel } from './AktiveOgTilgjengligeOppgaverPanel.tsx';

import styles from './saksbehandlerNokkeltallPanel.module.css';

interface Props {
  valgtSakslisteId: number;
}

export const SaksbehandlerNokkeltallPanel = ({ valgtSakslisteId }: Props) => {
  return (
    <VStack gap="space-16">
      <HStack gap="space-8" align="center">
        <div className={styles['iconBackground']}>
          <SectorChartIcon aria-hidden className={styles['sectorChatIcon']} />
        </div>
        <Heading size="xsmall" level="2">
          <FormattedMessage id="SaksbehandlerNokkeltallPanel.Statistikk" />
        </Heading>
      </HStack>
      <AktiveOgTilgjengligeOppgaverPanel valgtSakslisteId={valgtSakslisteId} />
    </VStack>
  );
};
