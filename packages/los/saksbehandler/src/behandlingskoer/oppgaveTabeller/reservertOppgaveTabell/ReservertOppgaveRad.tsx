import { useIntl } from 'react-intl';

import { FilesIcon } from '@navikt/aksel-icons';
import { CopyButton, HStack, Table } from '@navikt/ds-react';
import { DateLabel, DateTimeLabel } from '@navikt/ft-ui-komponenter';

import { OppgaveLabels } from '@navikt/fp-los-felles';
import type { OppgaveDto } from '@navikt/fp-types';

import { useLosKodeverk } from '../../../data/useLosKodeverk';
import { OppgaveHandlingerMenu } from './menu/OppgaveHandlingerMenu';
import { NotatKnapp } from './NotatKnapp';

import styles from './ReservertOppgaveRad.module.css';

interface Props {
  oppgave: OppgaveDto;
  reserverOppgave: (oppgave: OppgaveDto) => void;
  brukernavn: string;
}

export const ReservertOppgaveRad = ({ oppgave, reserverOppgave, brukernavn }: Props) => {
  const intl = useIntl();

  return (
    <Table.Row key={oppgave.id} onRowClick={() => reserverOppgave(oppgave)} className={styles['isUnderBehandling']}>
      <Table.DataCell>{oppgave.navn}</Table.DataCell>
      <Table.DataCell>
        <HStack align="center" gap="space-8" wrap={false}>
          <span>{oppgave.saksnummer}</span>
          <CopyButton
            size="small"
            data-color="accent"
            aria-label={intl.formatMessage({ id: 'ReservertOppgaveRad.Saksnr' })}
            copyText={oppgave.saksnummer}
            icon={<FilesIcon aria-hidden />}
          />
        </HStack>
      </Table.DataCell>
      <Table.DataCell>
        <OppgaveLabels
          behandlingType={oppgave.behandlingstype}
          fagsakYtelseType={oppgave.fagsakYtelseType}
          kriterier={oppgave.andreKriterier}
          hentKodeverk={useLosKodeverk}
        />
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
          <NotatKnapp flyttetReservasjon={oppgave.reservasjonStatus.flyttetReservasjon} brukernavn={brukernavn} />
        )}
      </Table.DataCell>
      <Table.DataCell>
        <OppgaveHandlingerMenu oppgave={oppgave} brukernavn={brukernavn} />
      </Table.DataCell>
    </Table.Row>
  );
};
