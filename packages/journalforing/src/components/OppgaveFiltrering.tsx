import React, { FunctionComponent } from 'react';

import { Heading } from '@navikt/ds-react';
import { FormattedMessage } from 'react-intl';
import OppgaveOversikt from '../typer/oppgaveOversiktTsType';
import styles from './oppgaveFiltrering.less';

type OwnProps = Readonly<{
  oppgaver: OppgaveOversikt[];
}>;

/**
 * JournalforingPanel
 */
const OppgaveFiltrering: FunctionComponent<OwnProps> = ({
  oppgaver,
}) => {
  if (!oppgaver) {
    return null;
  }
  return (
    <div className={styles.filterContainer}>
      <Heading size="xsmall">
        <FormattedMessage id="Journalforing.Filtrering" />
      </Heading>
    </div>
  );
};

export default OppgaveFiltrering;
