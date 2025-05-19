import React, { useRef } from 'react';
import { useIntl } from 'react-intl';

import { CheckmarkIcon, FilesIcon } from '@navikt/aksel-icons';
import { BodyShort, CopyButton, HStack, Table, Tag, Tooltip } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';

import type { Oppgave, OppgaveStatus } from '@navikt/fp-los-felles';

import { useLosKodeverk } from '../../data/useLosKodeverk';

import styles from './oppgaveRad.module.css';

interface Props {
  oppgave: Oppgave;
  reserverOppgave: (oppgave: Oppgave) => void;
  erNyBehandling: boolean;
}

export const OppgaveRad = ({ oppgave, reserverOppgave, erNyBehandling }: Props) => {
  const intl = useIntl();
  const behandlingTyper = useLosKodeverk('BehandlingType');

  const refCopyButton = useRef<HTMLDivElement | null>(null);

  const goToFagsak = (event: React.MouseEvent | React.KeyboardEvent, valgtOppgave: Oppgave) => {
    const erCopyButtonKlikk = refCopyButton.current?.contains(event.target as Node);

    if (erCopyButtonKlikk) {
      return;
    }

    if (valgtOppgave) {
      reserverOppgave(valgtOppgave);
    }
  };

  return (
    <Table.Row
      key={oppgave.id}
      onMouseDown={(event: React.MouseEvent) => goToFagsak(event, oppgave)}
      onKeyDown={(event: React.KeyboardEvent) => goToFagsak(event, oppgave)}
      className={erNyBehandling ? styles.fadeIn : undefined}
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
          <Tag variant="success" title={fagsakYtelseTyper.find(b => b.kode === oppgave.fagsakYtelseType)?.navn}>
            {oppgave.fagsakYtelseType}
          </Tag>
          <Tag variant="warning-filled" title={behandlingTyper.find(b => b.kode === oppgave.behandlingstype)?.navn}>
            {oppgave.behandlingstype}
          </Tag>
        </HStack>
      </Table.DataCell>
      <Table.DataCell>
        {oppgave.opprettetTidspunkt && <DateLabel dateString={oppgave.opprettetTidspunkt} />}
      </Table.DataCell>
      <Table.DataCell>{oppgave.behandlingsfrist && <DateLabel dateString={oppgave.behandlingsfrist} />}</Table.DataCell>
    </Table.Row>
  );
};
