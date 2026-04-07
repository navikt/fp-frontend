import { FormattedMessage, useIntl } from 'react-intl';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { Button, HStack, Label, Modal } from '@navikt/ds-react';
import { dateTimeFormat } from '@navikt/ft-utils';

import { type OppgaveDto, type ReservasjonStatusDto } from '@navikt/fp-types';


type Props = Readonly<{
  lukkErReservertModalOgOpneOppgave: (oppgave: OppgaveDto) => void;
  oppgave: OppgaveDto;
  reservasjonStatus: ReservasjonStatusDto;
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
    <Modal
      width="600px"
      open
      aria-label={intl.formatMessage({ id: 'OppgaveErReservertAvAnnenModal.ReservertAvEnkel' })}
      onClose={lukk}
    >
      <Modal.Body>
        <HStack gap="space-16" wrap={false} align="center">
          <ExclamationmarkTriangleFillIcon
            color="var(--ax-warning-600)"
            height="55px"
            width="55px"
            title={intl.formatMessage({ id: 'OppgaveErReservertAvAnnenModal.ReservertAvEnkel' })}
          />
          <Label size="small">
            <FormattedMessage
              id="OppgaveErReservertAvAnnenModal.ReservertAv"
              values={{
                saksbehandlernavn: reservasjonStatus.reservertAvNavn,
                saksbehandlerid: reservasjonStatus.reservertAvIdent,
                datetime: reservasjonStatus.reservertTilTidspunkt
                  ? dateTimeFormat(reservasjonStatus.reservertTilTidspunkt)
                  : '',
              }}
            />
          </Label>
          <Button size="small" variant="primary" onClick={lukk} autoFocus type="button">
            <FormattedMessage id="Label.Ok" />
          </Button>
        </HStack>
      </Modal.Body>
    </Modal>
  );
};
