import React from 'react';
import { FormattedMessage } from 'react-intl';
import { BodyShort } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';

import styles from './aldersvisning.module.css';

interface Props {
  erDød: boolean;
  alder: number;
  dødsdato?: string;
}

/**
 * Aldersvisning
 *
 * Definerer visning av personens alder. (Søker)
 */
export const Aldersvisning = ({ erDød, alder, dødsdato }: Props) => {
  if (erDød) {
    return (
      <BodyShort size="small" className={styles.displayInline}>
        {dødsdato ? <DateLabel dateString={dødsdato} /> : <FormattedMessage id="Person.ManglerDodsdato" />}
      </BodyShort>
    );
  }

  return (
    <span>
      <FormattedMessage id="Person.Age" values={{ age: alder }} />
    </span>
  );
};
