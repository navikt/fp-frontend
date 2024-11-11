import React from 'react';
import { ChatElipsisIcon, FilesIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, CopyButton, HStack, Label, Popover, Table, Tooltip, VStack } from '@navikt/ds-react';
import { getKodeverknavnFraKode, KodeverkType } from '@navikt/fp-kodeverk';
import { Oppgave, OppgaveStatus } from '@navikt/fp-los-felles';
import { DateLabel, DateTimeLabel } from '@navikt/ft-ui-komponenter';
import { getDateAndTime } from '@navikt/ft-utils';
import { ReactNode, useRef, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { RestApiGlobalStatePathsKeys, restApiHooks } from '../../data/fplosSaksbehandlerRestApi';

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
  hentReserverteOppgaver: (params?: void, keepData?: boolean) => void;
}

export const OppgaveRad = ({ oppgave, reserverOppgave, hentReserverteOppgaver }: Props) => {
  const intl = useIntl();
  const alleKodeverk = restApiHooks.useGlobalStateRestApiData(RestApiGlobalStatePathsKeys.KODEVERK_LOS);

  const [enableTableEvents, setEnableTableEvents] = useState(true);

  const refMeny = useRef<HTMLDivElement | null>(null);
  const refPopover = useRef<HTMLDivElement | null>(null);
  const refCopyButton = useRef<HTMLDivElement | null>(null);

  const goToFagsak = (event: React.MouseEvent | React.KeyboardEvent, valgtOppgave: Oppgave) => {
    const erMenyKlikk = refMeny.current && refMeny.current.contains(event.target as Node);
    const erPopoverKlikk = refPopover.current && refPopover.current.contains(event.target as Node);
    const erCopyButtonKlikk = refCopyButton.current && refCopyButton.current.contains(event.target as Node);

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
        <HStack gap="1" align="center" ref={refCopyButton}>
          <BodyShort>{oppgave.saksnummer}</BodyShort>
          <Tooltip content={intl.formatMessage({ id: 'OppgaverTabell.Saksnr' })}>
            <CopyButton copyText={oppgave.saksnummer.toString()} icon={<FilesIcon aria-hidden />} />
          </Tooltip>
        </HStack>
      </Table.DataCell>
      <Table.DataCell>
        {getKodeverknavnFraKode(alleKodeverk, KodeverkType.BEHANDLING_TYPE, oppgave.behandlingstype)}
      </Table.DataCell>
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
            <OppgaveHandlingerMenu
              oppgave={oppgave}
              hentReserverteOppgaver={hentReserverteOppgaver}
              setEnableTableEvents={setEnableTableEvents}
            />
          </div>
        )}
      </Table.DataCell>
    </Table.Row>
  );
};
