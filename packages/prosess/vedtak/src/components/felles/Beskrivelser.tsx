import { useState } from 'react';
import { useIntl } from 'react-intl';

import { ChevronDownIcon, ChevronUpIcon } from '@navikt/aksel-icons';
import { Button, VStack } from '@navikt/ds-react';

import type { Beskrivelse } from '@navikt/fp-types';

import { BeskrivelseVisning } from './BeskrivelseVisning';

import styles from './beskrivelser.module.css';

interface Props {
  beskrivelser: Beskrivelse[];
}

export const Beskrivelser = ({ beskrivelser }: Props) => {
  const intl = useIntl();

  const skalSkjuleResterendeBeskrivelser = beskrivelser.length > 1;
  const [erResterendeBeskrivelserSkjult, setErResterendeBeskrivelserSkjult] = useState(
    skalSkjuleResterendeBeskrivelser,
  );

  const beskrivelseForVisning = beskrivelser[0];
  const beskrivelserSomSkjules = beskrivelser.slice(1);

  return (
    <VStack gap="space-4">
      {/*eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- [JOHANNES] vent til vi har bestemt strict index access*/}
      {beskrivelseForVisning && <BeskrivelseVisning beskrivelse={beskrivelseForVisning} />}
      {skalSkjuleResterendeBeskrivelser && (
        <Button
          className={styles['button']}
          variant="tertiary"
          size="xsmall"
          type="button"
          icon={erResterendeBeskrivelserSkjult ? <ChevronDownIcon aria-hidden /> : <ChevronUpIcon aria-hidden />}
          onClick={() => setErResterendeBeskrivelserSkjult(!erResterendeBeskrivelserSkjult)}
          aria-expanded={!erResterendeBeskrivelserSkjult}
        >
          {erResterendeBeskrivelserSkjult
            ? intl.formatMessage({ id: 'Beskrivelser.VisMer' })
            : intl.formatMessage({ id: 'Beskrivelser.VisMindre' })}
        </Button>
      )}
      {!erResterendeBeskrivelserSkjult && (
        <VStack gap="space-12" className={styles['eldreBeskrivelser']}>
          {beskrivelserSomSkjules.map(beskrivelse => (
            <BeskrivelseVisning key={beskrivelse.header + beskrivelse.kommentarer[0]} beskrivelse={beskrivelse} />
          ))}
        </VStack>
      )}
    </VStack>
  );
};
