import React, { type ReactNode, useRef, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { ChatElipsisIcon, CheckmarkIcon, FilesIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, CopyButton, HStack, Label, Popover, Table, Tag, Tooltip, VStack } from '@navikt/ds-react';
import { DateLabel, DateTimeLabel } from '@navikt/ft-ui-komponenter';
import { getDateAndTime } from '@navikt/ft-utils';

import { KodeverkLosType } from '@navikt/fp-kodeverk';
import type { Oppgave, OppgaveStatus } from '@navikt/fp-los-felles';

import { useLosKodeverk } from '../../data/useLosKodeverk';
import { OppgaveHandlingerMenu } from './menu/OppgaveHandlingerMenu';

import styles from './reservertOppgaveRad.module.css';

interface Props {
  oppgave: Oppgave;
  reserverOppgave: (oppgave: Oppgave) => void;
  brukernavn: string;
}

export const ReservertOppgaveRad = ({ oppgave, reserverOppgave, brukernavn }: Props) => {
  const intl = useIntl();
  const behandlingTyper = useLosKodeverk(KodeverkLosType.BEHANDLING_TYPE);
  const fagsakYtelseTyper = useLosKodeverk(KodeverkLosType.FAGSAK_YTELSE_TYPE);

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

    if (valgtOppgave) {
      reserverOppgave(valgtOppgave);
    }
  };

  return (
    <Table.Row
      key={oppgave.id}
      onMouseDown={enableTableEvents ? (event: React.MouseEvent) => goToFagsak(event, oppgave) : undefined}
      onKeyDown={enableTableEvents ? (event: React.KeyboardEvent) => goToFagsak(event, oppgave) : undefined}
      className={styles.isUnderBehandling}
    >
      <Table.DataCell>{oppgave.navn ?? '<navn>'}</Table.DataCell>
      <Table.DataCell>
        <HStack align="center" ref={refCopyButton} wrap={false}>
          <BodyShort>{oppgave.saksnummer}</BodyShort>
          <Tooltip content={intl.formatMessage({ id: 'OppgaverTabell.Saksnr' })}>
            <CopyButton
              activeIcon={<CheckmarkIcon className={styles.image} aria-hidden />}
              copyText={oppgave.saksnummer}
              icon={<FilesIcon aria-hidden className={styles.image} />}
            />
          </Tooltip>
        </HStack>
      </Table.DataCell>
      <Table.DataCell>
        <HStack gap="2">
          <Tag
            variant="success"
            size="small"
            title={fagsakYtelseTyper.find(b => b.kode === oppgave.fagsakYtelseType)?.navn}
          >
            {oppgave.fagsakYtelseType}
          </Tag>
          <Tag
            variant="warning-filled"
            size="small"
            title={behandlingTyper.find(b => b.kode === oppgave.behandlingstype)?.navn}
          >
            {oppgave.behandlingstype}
          </Tag>
        </HStack>
      </Table.DataCell>
      <Table.DataCell>
        {oppgave.opprettetTidspunkt && <DateLabel dateString={oppgave.opprettetTidspunkt} />}
      </Table.DataCell>
      <Table.DataCell>{oppgave.behandlingsfrist && <DateLabel dateString={oppgave.behandlingsfrist} />}</Table.DataCell>
      <Table.DataCell>
        {oppgave.status.reservertTilTidspunkt && (
          <DateTimeLabel dateTimeString={oppgave.status.reservertTilTidspunkt} separator="kl" />
        )}
      </Table.DataCell>
      <Table.DataCell>
        {oppgave.status.flyttetReservasjon && (
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

const lagFlyttetReservasjonPopover = (oppgaveStatus: OppgaveStatus, brukernavn: string): ReactNode | undefined => {
  const { flyttetReservasjon } = oppgaveStatus;
  if (!flyttetReservasjon) {
    return undefined;
  }
  const datoOgTid = getDateAndTime(flyttetReservasjon.tidspunkt);

  const erLagetAvInnloggetBruker = brukernavn === flyttetReservasjon.uid;

  return (
    <VStack gap="2">
      {!erLagetAvInnloggetBruker && (
        <VStack gap="1">
          <Label size="small">
            <FormattedMessage id="OppgaverTabell.OverfortReservasjonHeader" />
          </Label>
          <BodyShort size="small">
            <FormattedMessage
              id="OppgaverTabell.OverfortReservasjonBody"
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
      <VStack gap="1">
        <Label size="small">
          {erLagetAvInnloggetBruker ? (
            <FormattedMessage id="OppgaverTabell.Notat" />
          ) : (
            <FormattedMessage id="OppgaverTabell.OverfortReservasjonBegrunnelse" />
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
        icon={<ChatElipsisIcon className={styles.image} aria-hidden />}
        variant="tertiary-neutral"
      ></Button>
      <Popover open={openState} onClose={() => setOpenState(false)} anchorEl={buttonRef.current}>
        <Popover.Content>{lagFlyttetReservasjonPopover(oppgave.status, brukernavn)}</Popover.Content>
      </Popover>
    </>
  );
};
