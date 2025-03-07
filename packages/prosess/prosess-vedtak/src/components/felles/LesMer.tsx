import { useState } from 'react';
import { useIntl } from 'react-intl';

import { ChevronDownIcon, ChevronUpIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, HStack } from '@navikt/ds-react';

import styles from './lesMer.module.css';

interface Props {
  tekst: string;
  maksLengde: number;
}

export const LesMer = ({ tekst, maksLengde }: Props) => {
  const intl = useIntl();
  const [erKnappEnabled, setErKnappEnabled] = useState(false);

  return (
    <HStack justify="space-between" align="start" wrap={false}>
      <BodyShort size="small">{erKnappEnabled ? tekst : `${tekst.substring(0, maksLengde)}...`}</BodyShort>
      <Button
        className={styles.button}
        variant="tertiary"
        size="xsmall"
        type="button"
        icon={erKnappEnabled ? <ChevronUpIcon aria-hidden /> : <ChevronDownIcon aria-hidden />}
        onClick={() => setErKnappEnabled(!erKnappEnabled)}
      >
        {erKnappEnabled ? intl.formatMessage({ id: 'LesMer.Skjul' }) : intl.formatMessage({ id: 'LesMer.LesMer' })}
      </Button>
    </HStack>
  );
};
