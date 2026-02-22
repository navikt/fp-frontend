import React, { useRef } from 'react';
import { useIntl } from 'react-intl';

import { FilesIcon } from '@navikt/aksel-icons';
import { BodyShort, CopyButton, HStack, Table } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';

import { type OppgaveDto } from '@navikt/fp-types';

import { OppgaveLabels } from '../OppgaveLabels';

import styles from './ledigOppgaveRad.module.css';

interface Props {
  oppgave: OppgaveDto;
  reserverOppgave: (oppgave: OppgaveDto) => void;
  erNyBehandling: boolean;
}

export const LedigOppgaveRad = ({ oppgave, reserverOppgave, erNyBehandling }: Props) => {
  const intl = useIntl();

  const refCopyButton = useRef<HTMLDivElement | null>(null);

  const goToFagsak = (event: React.MouseEvent | React.KeyboardEvent, valgtOppgave: OppgaveDto) => {
    const erCopyButtonKlikk = refCopyButton.current?.contains(event.target as Node);

    if (erCopyButtonKlikk) {
      return;
    }

    reserverOppgave(valgtOppgave);
  };

  return (
    <Table.Row
      key={oppgave.id}
      onMouseDown={(event: React.MouseEvent) => goToFagsak(event, oppgave)}
      onKeyDown={(event: React.KeyboardEvent) => goToFagsak(event, oppgave)}
      className={erNyBehandling ? styles['fadeIn'] : undefined}
    >
      <Table.DataCell>{oppgave.navn}</Table.DataCell>
      <Table.DataCell>
        <HStack align="center" gap="space-8" ref={refCopyButton} wrap={false}>
          <BodyShort>{oppgave.saksnummer}</BodyShort>
          <CopyButton
            size="small"
            data-color="accent"
            aria-label={intl.formatMessage({ id: 'LedigOppgaveRad.Saksnr' })}
            copyText={oppgave.saksnummer}
            icon={<FilesIcon aria-hidden />}
          />
        </HStack>
      </Table.DataCell>
      <Table.DataCell>
        <OppgaveLabels oppgave={oppgave} />
      </Table.DataCell>
      <Table.DataCell>
        {oppgave.opprettetTidspunkt && <DateLabel dateString={oppgave.opprettetTidspunkt} />}
      </Table.DataCell>
    </Table.Row>
  );
};
