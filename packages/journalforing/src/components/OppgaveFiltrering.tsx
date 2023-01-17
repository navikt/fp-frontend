import React, { FunctionComponent, useState } from 'react';

import { Heading } from '@navikt/ds-react';
import { FormattedMessage } from 'react-intl';
import Oppgave from '../typer/oppgaveTsType';
import OppgaveTabell from './OppgaveTabell';
import styles from './oppgaveFiltrering.less';

type OwnProps = Readonly<{
  oppgaver: Oppgave[];
}>;

/**
 * JournalforingPanel
 */
const OppgaveFiltrering: FunctionComponent<OwnProps> = ({
  oppgaver,
}) => (
  <div className={styles.filterContainer}>
    <Heading size="xsmall">
      <FormattedMessage id="Journalforing.Filtrering" />
    </Heading>
  </div>
);

export default OppgaveFiltrering;
