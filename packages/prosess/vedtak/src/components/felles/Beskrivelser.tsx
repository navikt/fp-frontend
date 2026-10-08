import { useState } from 'react';
import { useIntl } from 'react-intl';

import { ChevronDownIcon, ChevronUpIcon } from '@navikt/aksel-icons';
import { Button, VStack } from '@navikt/ds-react';

import type { Beskrivelse } from '@navikt/fp-types';

import { BeskrivelseVisning } from './BeskrivelseVisning';

interface Props {
  beskrivelser: Beskrivelse[];
}

export const Beskrivelser = ({ beskrivelser }: Props) => {
  const intl = useIntl();

  const [erResterendeBeskrivelserSkjult, setErResterendeBeskrivelserSkjult] = useState(true);

  const beskrivelseForVisning = erResterendeBeskrivelserSkjult ? beskrivelser.slice(0, 1) : beskrivelser;

  return beskrivelser.length === 1 ? (
    <BeskrivelseVisning beskrivelse={beskrivelser[0]!} />
  ) : (
    <VStack gap="space-8">
      {beskrivelseForVisning.map(beskrivelse => (
        <BeskrivelseVisning
          key={(beskrivelse.header ?? '') + (beskrivelse.kommentarer.at(0) ?? '')}
          beskrivelse={beskrivelse}
        />
      ))}

      <Button
        className="text-nowrap self-start"
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
    </VStack>
  );
};
