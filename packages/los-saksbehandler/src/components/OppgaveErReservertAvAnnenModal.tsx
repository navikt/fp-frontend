import React, { FunctionComponent, useCallback } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import { Button, Label, Modal as NavModal } from '@navikt/ds-react';
import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { getDateAndTime } from '@navikt/ft-utils';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';

import { Oppgave, OppgaveStatus } from '@navikt/fp-los-felles';

import styles from './oppgaveErReservertAvAnnenModal.module.css';

type OwnProps = Readonly<{
  lukkErReservertModalOgOpneOppgave: (oppgave: Oppgave) => void;
  oppgave: Oppgave;
  oppgaveStatus: OppgaveStatus;
}>;

/**
 * OppgaveErReservertAvAnnenModal
 *
 * Modal som vises når en åpner oppgave som er reservert av en annen saksbehandler
 */
const OppgaveErReservertAvAnnenModal: FunctionComponent<OwnProps> = ({
  lukkErReservertModalOgOpneOppgave,
  oppgave,
  oppgaveStatus,
}) => {
  const intl = useIntl();
  const lukk = useCallback(() => lukkErReservertModalOgOpneOppgave(oppgave), [oppgave.id]);
  return (
    <NavModal
      className={styles.modal}
      open
      aria-label={intl.formatMessage({ id: 'OppgaveErReservertAvAnnenModal.ReservertAvEnkel' })}
      onClose={lukk}
    >
      <NavModal.Body>
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <ExclamationmarkTriangleFillIcon
                className={styles.image}
                title={intl.formatMessage({ id: 'OppgaveErReservertAvAnnenModal.ReservertAvEnkel' })}
              />
            </FlexColumn>
            <FlexColumn className={styles.text}>
              <Label size="small">
                <FormattedMessage
                  id="OppgaveErReservertAvAnnenModal.ReservertAv"
                  values={{
                    saksbehandlernavn: oppgaveStatus.reservertAvNavn,
                    saksbehandlerid: oppgaveStatus.reservertAvUid,
                    ...getDateAndTime(oppgaveStatus.reservertTilTidspunkt),
                  }}
                />
              </Label>
            </FlexColumn>
            <FlexColumn>
              <Button className={styles.okButton} size="small" variant="primary" onClick={lukk} autoFocus type="button">
                {intl.formatMessage({ id: 'OppgaveErReservertAvAnnenModal.Ok' })}
              </Button>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
      </NavModal.Body>
    </NavModal>
  );
};

export default OppgaveErReservertAvAnnenModal;
