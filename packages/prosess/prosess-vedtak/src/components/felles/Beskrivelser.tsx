import { useState } from 'react';
import { useIntl } from 'react-intl';

import { ChevronDownIcon, ChevronUpIcon } from '@navikt/aksel-icons';
import { Button, VStack } from '@navikt/ds-react';

import type { Beskrivelse } from '@navikt/fp-types';

import { BeskrivelseVisning } from './BeskrivelseVisning';

import styles from './beskrivelser.module.css';

interface Props {
  nyesteBeskrivelse?: Beskrivelse;
  eldreBeskrivelser: Beskrivelse[];
}

export const Beskrivelser = ({ nyesteBeskrivelse, eldreBeskrivelser }: Props) => {
  const intl = useIntl();

  const harEldreBeskrivelser = eldreBeskrivelser?.length > 0;
  const [erEldreBeskrivelserSkjult, setErEldreBeskrivelserSkjult] = useState(harEldreBeskrivelser);

  return (
    <VStack gap="1">
      {nyesteBeskrivelse && (
        <BeskrivelseVisning header={nyesteBeskrivelse.header} kommentar={nyesteBeskrivelse.kommentar} />
      )}
      {harEldreBeskrivelser && (
        <Button
          className={styles.button}
          variant="tertiary"
          size="xsmall"
          type="button"
          icon={erEldreBeskrivelserSkjult ? <ChevronDownIcon aria-hidden /> : <ChevronUpIcon aria-hidden />}
          onClick={() => setErEldreBeskrivelserSkjult(!erEldreBeskrivelserSkjult)}
          aria-expanded={!erEldreBeskrivelserSkjult}
        >
          {erEldreBeskrivelserSkjult
            ? intl.formatMessage({ id: 'Beskrivelser.VisEldreBeskrivelser' }, { antall: eldreBeskrivelser.length })
            : intl.formatMessage({ id: 'Beskrivelser.SkjulEldreBeskrivelser' }, { antall: eldreBeskrivelser.length })}
        </Button>
      )}
      {!erEldreBeskrivelserSkjult && (
        <VStack gap="3" className={styles.eldreBeskrivelser}>
          {eldreBeskrivelser.map(beskrivelse => (
            <BeskrivelseVisning
              key={beskrivelse.kommentar}
              header={beskrivelse.header}
              kommentar={beskrivelse.kommentar}
            />
          ))}
        </VStack>
      )}
    </VStack>
  );
};
