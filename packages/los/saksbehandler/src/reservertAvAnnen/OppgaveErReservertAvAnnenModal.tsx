import { FormattedMessage, useIntl } from 'react-intl';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { Button, HStack, Label, Modal as NavModal } from '@navikt/ds-react';
import { getDateAndTime } from '@navikt/ft-utils';

import type { Oppgave, ReservasjonStatus } from '@navikt/fp-los-felles';

import styles from './oppgaveErReservertAvAnnenModal.module.css';

type Props = Readonly<{
  lukkErReservertModalOgOpneOppgave: (oppgave: Oppgave) => void;
  oppgave: Oppgave;
  reservasjonStatus: ReservasjonStatus;
}>;

/**
 * OppgaveErReservertAvAnnenModal
 *
 * Modal som vises når en åpner oppgave som er reservert av en annen saksbehandler
 */
export const OppgaveErReservertAvAnnenModal = ({
  lukkErReservertModalOgOpneOppgave,
  oppgave,
  reservasjonStatus,
}: Props) => {
  const intl = useIntl();
  const lukk = () => lukkErReservertModalOgOpneOppgave(oppgave);

  return (
    <NavModal
      className={styles.modal}
      open
      aria-label={intl.formatMessage({ id: 'OppgaveErReservertAvAnnenModal.ReservertAvEnkel' })}
      onClose={lukk}
    >
      <NavModal.Body>
        <HStack gap="space-16" wrap={false} align="center">
          <ExclamationmarkTriangleFillIcon
            className={styles.image}
            title={intl.formatMessage({ id: 'OppgaveErReservertAvAnnenModal.ReservertAvEnkel' })}
          />
          <Label size="small">
            <FormattedMessage
              id="OppgaveErReservertAvAnnenModal.ReservertAv"
              values={{
                saksbehandlernavn: reservasjonStatus.reservertAvNavn,
                saksbehandlerid: reservasjonStatus.reservertAvUid,
                ...getDateAndTime(reservasjonStatus.reservertTilTidspunkt),
              }}
            />
          </Label>
          <Button className={styles.okButton} size="small" variant="primary" onClick={lukk} autoFocus type="button">
            <FormattedMessage id="OppgaveErReservertAvAnnenModal.Ok" />
          </Button>
        </HStack>
      </NavModal.Body>
    </NavModal>
  );
};
