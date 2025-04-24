import React, { type ReactNode, useRef, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { ChatElipsisIcon, CheckmarkIcon, FilesIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, CopyButton, HStack, Label, Popover, Table, Tooltip, VStack } from '@navikt/ds-react';
import { DateLabel, DateTimeLabel } from '@navikt/ft-ui-komponenter';
import { getDateAndTime } from '@navikt/ft-utils';

import { KodeverkType } from '@navikt/fp-kodeverk';
import type { Oppgave, OppgaveStatus } from '@navikt/fp-los-felles';

import { useLosKodeverk } from '../../data/useLosKodeverk';
import { OppgaveHandlingerMenu } from './menu/OppgaveHandlingerMenu';

import styles from './oppgaveRad.module.css';

export type OppgaveMedReservertIndikator = Oppgave & {
  underBehandling: boolean;
  reservertTilTidspunkt: string | undefined;
};

const lagFlyttetReservasjonPopover = (oppgaveStatus: OppgaveStatus): ReactNode | undefined => {
  const { flyttetReservasjon } = oppgaveStatus;
  if (!flyttetReservasjon) {
    return undefined;
  }
  const datoOgTid = getDateAndTime(flyttetReservasjon.tidspunkt);

  return (
    <VStack gap="2">
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
      <VStack gap="1">
        <Label size="small">
          <FormattedMessage id="OppgaverTabell.OverfortReservasjonBegrunnelse" />
        </Label>
        <BodyShort size="small">{flyttetReservasjon.begrunnelse}</BodyShort>
      </VStack>
    </VStack>
  );
};

const NotatKnapp = ({ oppgave }: { oppgave: Oppgave }) => {
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
        <Popover.Content>{lagFlyttetReservasjonPopover(oppgave.status)}</Popover.Content>
      </Popover>
    </>
  );
};

interface Props {
  oppgave: OppgaveMedReservertIndikator;
  reserverOppgave: (oppgave: Oppgave) => void;
}

export const OppgaveRad = ({ oppgave, reserverOppgave }: Props) => {
  const intl = useIntl();
  const behandlingTyper = useLosKodeverk(KodeverkType.BEHANDLING_TYPE);

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
      className={oppgave.underBehandling ? styles.isUnderBehandling : undefined}
    >
      <Table.DataCell>{oppgave.navn ? `${oppgave.navn} ${oppgave.personnummer}` : '<navn>'}</Table.DataCell>
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
      <Table.DataCell>{behandlingTyper.find(b => b.kode === oppgave.behandlingstype)?.navn}</Table.DataCell>
      <Table.DataCell>
        {oppgave.opprettetTidspunkt && <DateLabel dateString={oppgave.opprettetTidspunkt} />}
      </Table.DataCell>
      <Table.DataCell>{oppgave.behandlingsfrist && <DateLabel dateString={oppgave.behandlingsfrist} />}</Table.DataCell>
      <Table.DataCell>
        {oppgave.reservertTilTidspunkt && (
          <DateTimeLabel dateTimeString={oppgave.reservertTilTidspunkt} separator="kl" />
        )}
      </Table.DataCell>
      <Table.DataCell>
        {oppgave.status.flyttetReservasjon && (
          <div ref={refPopover}>
            <NotatKnapp oppgave={oppgave} />
          </div>
        )}
      </Table.DataCell>
      <Table.DataCell>
        {oppgave.underBehandling && (
          <div ref={refMeny}>
            <OppgaveHandlingerMenu oppgave={oppgave} setEnableTableEvents={setEnableTableEvents} />
          </div>
        )}
      </Table.DataCell>
    </Table.Row>
  );
};
