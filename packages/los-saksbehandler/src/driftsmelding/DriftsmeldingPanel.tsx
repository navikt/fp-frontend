import React from 'react';
import { Detail, HStack, VStack } from '@navikt/ds-react';
import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';

import { Driftsmelding } from '../typer/driftsmeldingTsType';

import styles from './driftsmeldingPanel.module.css';

interface Props {
  driftsmeldinger: Driftsmelding[];
}

/**
 * DriftsmeldingPanel
 *
 * Definerer hvordan driftsmeldinger vises.
 */
export const DriftsmeldingPanel = ({ driftsmeldinger }: Props) => {
  if (driftsmeldinger === undefined || driftsmeldinger.length === 0) {
    return null;
  }

  return (
    <div className={styles.container}>
      <VStack gap="2">
        {driftsmeldinger.map(message => (
          <HStack gap="2" key={message.id}>
            <ExclamationmarkTriangleFillIcon className={styles.driftsInfo} />
            <Detail className={styles.wordWrap}>{message.melding}</Detail>
          </HStack>
        ))}
      </VStack>
    </div>
  );
};
