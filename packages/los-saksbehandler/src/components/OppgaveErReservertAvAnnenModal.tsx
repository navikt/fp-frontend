import React, { FunctionComponent, useCallback } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import { Button, Label } from '@navikt/ds-react';
import { getDateAndTime } from '@navikt/ft-utils';
import {
  FlexColumn, FlexContainer, FlexRow, Image,
} from '@navikt/ft-ui-komponenter';

import { Modal, Oppgave, OppgaveStatus } from '@navikt/fp-los-felles';

import advarselImageUrl from '../images/advarsel.svg';

import styles from './oppgaveErReservertAvAnnenModal.less';

type OwnProps = Readonly<{
  lukkErReservertModalOgOpneOppgave: (oppgave: Oppgave) => void;
  oppgave: Oppgave;
  oppgaveStatus: OppgaveStatus;
}>

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
    <Modal
      className={styles.modal}
      open
      closeButton={false}
      aria-label={intl.formatMessage({ id: 'OppgaveErReservertAvAnnenModal.ReservertAvEnkel' })}
      onClose={lukk}
    >
      <FlexContainer>
        <FlexRow>
          <FlexColumn>
            <Image
              className={styles.image}
              alt={intl.formatMessage({ id: 'OppgaveErReservertAvAnnenModal.ReservertAvEnkel' })}
              src={advarselImageUrl}
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
            <Button
              className={styles.okButton}
              size="small"
              variant="primary"
              onClick={lukk}
              autoFocus
              type="button"
            >
              {intl.formatMessage({ id: 'OppgaveErReservertAvAnnenModal.Ok' })}
            </Button>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    </Modal>
  );
};

export default OppgaveErReservertAvAnnenModal;
