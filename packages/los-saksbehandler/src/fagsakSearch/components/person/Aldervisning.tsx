import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { BodyShort } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';

import styles from './aldervisning.less';

interface OwnProps {
  erDod: boolean;
  alder: number;
  dodsdato?: string;
}

/**
 * AlderVisning
 *
 * Presentasjonskomponent. Definerer visning av personens alder. (Søker)
 */
const AlderVisning: FunctionComponent<OwnProps> = ({
  erDod,
  alder,
  dodsdato,
}) => {
  if (erDod) {
    return (
      <BodyShort size="small" className={styles.displayInline}>
        { dodsdato
          ? <DateLabel dateString={dodsdato} />
          : <FormattedMessage id="Person.ManglerDodsdato" />}
      </BodyShort>
    );
  }

  return (
    <span>
      <FormattedMessage id="Person.Age" values={{ age: alder }} />
    </span>
  );
};

AlderVisning.defaultProps = {
  dodsdato: '',
};

export default AlderVisning;
