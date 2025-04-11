import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { Button } from '@navikt/ds-react';

import type { Oppgave, OppgaveId } from '@navikt/fp-types';

import styles from './ferdigstillOppgaveKnapp.module.css';

interface Props {
  oppgave: Oppgave;
  ferdigstillOppgave: (oppgaveId: OppgaveId) => Promise<void>;
}

export const FerdigstillOppgaveKnapp = ({ oppgave, ferdigstillOppgave }: Props) => {
  const [ferdigstiller, setFerdigstiller] = useState(false);

  return (
    <Button
      className={styles.knapp}
      size="small"
      variant="secondary"
      onClick={async () => {
        setFerdigstiller(true);
        try {
          await ferdigstillOppgave(oppgave.oppgaveId);
        } finally {
          setFerdigstiller(false);
        }
      }}
      type="button"
      loading={ferdigstiller}
      disabled={ferdigstiller}
    >
      <FormattedMessage id="FerdigstillOppgaveKnapp.FerdigstillOppgave" />
    </Button>
  );
};
