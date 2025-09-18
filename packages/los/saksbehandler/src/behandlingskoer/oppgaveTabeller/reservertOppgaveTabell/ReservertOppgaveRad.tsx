import React, { type ReactNode, useRef, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { ChatElipsisIcon, CheckmarkIcon, FilesIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, CopyButton, HStack, Label, Popover, Table, Tooltip, VStack } from '@navikt/ds-react';
import { DateLabel, DateTimeLabel } from '@navikt/ft-ui-komponenter';
import { getDateAndTime } from '@navikt/ft-utils';

import type { Oppgave, ReservasjonStatus } from '@navikt/fp-los-felles';

import { OppgaveLabels } from '../OppgaveLabels';
import { OppgaveHandlingerMenu } from './menu/OppgaveHandlingerMenu';

import styles from './ReservertOppgaveRad.module.css';

interface Props {
  oppgave: Oppgave;
  reserverOppgave: (oppgave: Oppgave) => void;
  brukernavn: string;
}

export const ReservertOppgaveRad = ({ oppgave, reserverOppgave, brukernavn }: Props) => {
  const intl = useIntl();

  const [enableTableEvents, setEnableTableEvents] = useState(true);

  const refMeny = useRef<HTMLDivElement | null>(null);
  const refPopover = useRef<HTMLDivElement | null>(null);
  const refCopyButton = useRef<HTMLDivElement | null>(null);

  const goToFagsak = (event: React.MouseEvent | React.KeyboardEvent, valgtOppgave: Oppgave) => {
    const erMenyKlikk = refMeny.current?.contains(event.target as Node);
    const erPopoverKlikk = refPopover.current?.contains(event.target as Node);
    const erCopyButtonKlikk = refCopyButton.current?.contains(event.target as Node);

    if (erMenyKlikk || erPopoverKlikk || erCopyButtonKlikk) {
      return;
    }

    reserverOppgave(valgtOppgave);
  };

  return (
    <Table.Row
      key={oppgave.id}
      onMouseDown={enableTableEvents ? (event: React.MouseEvent) => goToFagsak(event, oppgave) : undefined}
      onKeyDown={enableTableEvents ? (event: React.KeyboardEvent) => goToFagsak(event, oppgave) : undefined}
      className={styles['isUnderBehandling']}
    >
      <Table.DataCell>{oppgave.navn}</Table.DataCell>
      <Table.DataCell>
        <HStack align="center" ref={refCopyButton} wrap={false}>
          <BodyShort>{oppgave.saksnummer}</BodyShort>
          <Tooltip content={intl.formatMessage({ id: 'ReservertOppgaveRad.Saksnr' })}>
            <CopyButton
              activeIcon={<CheckmarkIcon className={styles['image']} aria-hidden />}
              copyText={oppgave.saksnummer}
              icon={<FilesIcon aria-hidden className={styles['image']} />}
            />
          </Tooltip>
        </HStack>
      </Table.DataCell>
      <Table.DataCell>
        <OppgaveLabels oppgave={oppgave} />
      </Table.DataCell>
      <Table.DataCell>
        {oppgave.opprettetTidspunkt && <DateLabel dateString={oppgave.opprettetTidspunkt} />}
      </Table.DataCell>
      <Table.DataCell>
        {oppgave.reservasjonStatus.reservertTilTidspunkt && (
          <DateTimeLabel dateTimeString={oppgave.reservasjonStatus.reservertTilTidspunkt} separator="kl" />
        )}
      </Table.DataCell>
      <Table.DataCell>
        {oppgave.reservasjonStatus.flyttetReservasjon && (
          <div ref={refPopover}>
            <NotatKnapp oppgave={oppgave} brukernavn={brukernavn} />
          </div>
        )}
      </Table.DataCell>
      <Table.DataCell>
        <div ref={refMeny}>
          <OppgaveHandlingerMenu
            oppgave={oppgave}
            setEnableTableEvents={setEnableTableEvents}
            brukernavn={brukernavn}
          />
        </div>
      </Table.DataCell>
    </Table.Row>
  );
};

const lagFlyttetReservasjonPopover = (oppgaveStatus: ReservasjonStatus, brukernavn: string): ReactNode | undefined => {
  const { flyttetReservasjon } = oppgaveStatus;
  if (!flyttetReservasjon) {
    return undefined;
  }
  const datoOgTid = getDateAndTime(flyttetReservasjon.tidspunkt);

  const erLagetAvInnloggetBruker = brukernavn === flyttetReservasjon.uid;

  return (
    <VStack gap="space-8">
      {!erLagetAvInnloggetBruker && (
        <VStack gap="space-4">
          <Label size="small">
            <FormattedMessage id="ReservertOppgaveRad.OverfortReservasjonHeader" />
          </Label>
          <BodyShort size="small">
            <FormattedMessage
              id="ReservertOppgaveRad.OverfortReservasjonBody"
              values={{
                dato: datoOgTid?.date,
                tid: datoOgTid?.time,
                uid: flyttetReservasjon.uid,
                navn: flyttetReservasjon.navn,
              }}
            />
          </BodyShort>
        </VStack>
      )}
      <VStack gap="space-4">
        <Label size="small">
          {erLagetAvInnloggetBruker ? (
            <FormattedMessage id="ReservertOppgaveRad.Notat" />
          ) : (
            <FormattedMessage id="ReservertOppgaveRad.OverfortReservasjonBegrunnelse" />
          )}
        </Label>
        <BodyShort size="small">{flyttetReservasjon.begrunnelse}</BodyShort>
      </VStack>
    </VStack>
  );
};

const NotatKnapp = ({ oppgave, brukernavn }: { oppgave: Oppgave; brukernavn: string }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [openState, setOpenState] = useState(false);
  return (
    <>
      <Button
        ref={buttonRef}
        onClick={() => setOpenState(!openState)}
        aria-expanded={openState}
        icon={<ChatElipsisIcon className={styles['image']} aria-hidden />}
        variant="tertiary-neutral"
      ></Button>
      <Popover open={openState} onClose={() => setOpenState(false)} anchorEl={buttonRef.current}>
        <Popover.Content>{lagFlyttetReservasjonPopover(oppgave.reservasjonStatus, brukernavn)}</Popover.Content>
      </Popover>
    </>
  );
};
