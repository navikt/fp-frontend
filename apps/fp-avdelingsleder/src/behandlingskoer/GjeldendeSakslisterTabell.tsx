import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { ArrowDownIcon, XMarkIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, HStack, Table } from '@navikt/ds-react';

import type { LosKodeverkMedNavn, SaksbehandlerDto, SakslisteDto } from '@navikt/fp-types';

import { useLosKodeverk } from '../data/useLosKodeverk';
import { OppgaverGrafDialog } from './OppgaverGrafDialog';
import { SaksbehandlereForSakslisteForm } from './saksbehandlerForm/SaksbehandlereForSakslisteForm';
import { UtvalgskriterierForSakslisteForm } from './sakslisteForm/UtvalgskriterierForSakslisteForm';

import styles from './gjeldendeSakslisterTabell.module.css';

interface Props {
  sakslister: SakslisteDto[];
  setValgtSakslisteId: (sakslisteId?: number) => void;
  setValgtSakslisteForSletting: (saksliste?: SakslisteDto) => void;
  avdelingensSaksbehandlere: SaksbehandlerDto[];
  valgtSakslisteId?: number;
  valgtAvdelingEnhet: string;
}

export const GjeldendeSakslisterTabell = ({
  sakslister,
  valgtSakslisteId,
  setValgtSakslisteId,
  setValgtSakslisteForSletting,
  avdelingensSaksbehandlere,
  valgtAvdelingEnhet,
}: Props) => {
  const intl = useIntl();

  const behandlingTyper = useLosKodeverk('BehandlingType');
  const fagsakYtelseTyper = useLosKodeverk('FagsakYtelseType');

  if (sakslister.length === 0) {
    return (
      <BodyShort size="small">
        <FormattedMessage id="GjeldendeSakslisterTabell.IngenLister" />
      </BodyShort>
    );
  }

  return (
    <Table size="small" stickyHeader={true}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell scope="col" />
          <Table.HeaderCell scope="col">
            <FormattedMessage id="Label.Navn" />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col">
            <FormattedMessage id="Label.Stønadstype" />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col">
            <FormattedMessage id="Label.Behandlingstype" />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col" align="right" textSize="small">
            <FormattedMessage id="Label.AntallSaksbehandlere" />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col" align="right" textSize="small">
            <FormattedMessage id="GjeldendeSakslisterTabell.BehandlingerPåVent" />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col" align="right" textSize="small">
            <FormattedMessage id="GjeldendeSakslisterTabell.AntallOppgaver" />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col" align="right" textSize="small">
            <FormattedMessage id="GjeldendeSakslisterTabell.AntallReserverte" />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col" />
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {sakslister.map(saksliste => (
          <Table.ExpandableRow
            key={saksliste.sakslisteId}
            className={saksliste.sakslisteId === valgtSakslisteId ? styles['isSelected'] : undefined}
            onOpenChange={isOpen => setValgtSakslisteId(isOpen ? saksliste.sakslisteId : undefined)}
            open={saksliste.sakslisteId === valgtSakslisteId}
            expandOnRowClick
            content={
              <React.Fragment key={saksliste.sakslisteId}>
                {saksliste.sakslisteId === valgtSakslisteId ? (
                  <UtvalgskriterierForSakslisteForm
                    valgtSaksliste={saksliste}
                    valgtAvdelingEnhet={valgtAvdelingEnhet}
                  />
                ) : undefined}
                <HStack gap="space-16" justify="center" align="center">
                  <ArrowDownIcon
                    height={35}
                    width={35}
                    color="var(--ax-neutral-500)"
                    title={intl.formatMessage({ id: 'EndreSakslisterPanel.KnyttetMotSaksbehandlere' })}
                  />
                  <BodyShort>
                    <FormattedMessage id="EndreSakslisterPanel.KnyttetMotSaksbehandlere" />
                  </BodyShort>
                </HStack>
                {saksliste.sakslisteId === valgtSakslisteId ? (
                  <SaksbehandlereForSakslisteForm
                    valgtSaksliste={saksliste}
                    valgtAvdelingEnhet={valgtAvdelingEnhet}
                    avdelingensSaksbehandlere={avdelingensSaksbehandlere}
                  />
                ) : undefined}
              </React.Fragment>
            }
          >
            <Table.DataCell>{saksliste.navn}</Table.DataCell>
            <Table.DataCell>{formatStonadstyper(fagsakYtelseTyper, saksliste.fagsakYtelseTyper)}</Table.DataCell>
            <Table.DataCell>{formatBehandlingstyper(behandlingTyper, saksliste.behandlingTyper)}</Table.DataCell>
            <Table.DataCell align="right">{saksliste.saksbehandlere.length}</Table.DataCell>
            <Table.DataCell align="right">{saksliste.gjeldendeStatistikk?.behandlingerPåVent ?? '-'}</Table.DataCell>
            <Table.DataCell align="right">{saksliste.gjeldendeStatistikk?.alleOppgaver ?? '-'}</Table.DataCell>
            <Table.DataCell align="right">{reserverteOppgaver(saksliste)}</Table.DataCell>
            <Table.DataCell align="right">
              <HStack gap="space-8" justify="end" wrap={false}>
                <OppgaverGrafDialog saksliste={saksliste} valgtAvdelingEnhet={valgtAvdelingEnhet} />
                <Button
                  variant="tertiary"
                  data-color="danger"
                  size="small"
                  title={intl.formatMessage(
                    { id: 'GjeldendeSakslisterTabell.SlettSaksliste' },
                    { sakslisteNavn: saksliste.navn },
                  )}
                  icon={<XMarkIcon aria-hidden />}
                  onClick={() => setValgtSakslisteForSletting(saksliste)}
                />
              </HStack>
            </Table.DataCell>
          </Table.ExpandableRow>
        ))}
      </Table.Body>
    </Table>
  );
};

const formatStonadstyper = (
  fagsakYtelseTyper: LosKodeverkMedNavn<'FagsakYtelseType'>[],
  valgteFagsakYtelseTyper: string[],
) => {
  if (valgteFagsakYtelseTyper.length === 0 || valgteFagsakYtelseTyper.length === fagsakYtelseTyper.length) {
    return <FormattedMessage id="Label.Alle" />;
  }

  return valgteFagsakYtelseTyper
    .map(fyt => fagsakYtelseTyper.find(def => def.kode === fyt)?.navn ?? '')
    .sort((a, b) => a.localeCompare(b))
    .join(', ');
};

const formatBehandlingstyper = (
  behandlingTyper: LosKodeverkMedNavn<'BehandlingType'>[],
  valgteBehandlingTyper: string[],
) => {
  if (valgteBehandlingTyper.length === 0 || valgteBehandlingTyper.length === behandlingTyper.length) {
    return <FormattedMessage id="Label.Alle" />;
  }

  return valgteBehandlingTyper
    .map(bt => behandlingTyper.find(def => def.kode === bt)?.navn ?? '')
    .sort((a, b) => a.localeCompare(b))
    .join(', ');
};

const reserverteOppgaver = (saksliste: SakslisteDto) => {
  if (saksliste.gjeldendeStatistikk === undefined) {
    return '-';
  }
  return saksliste.gjeldendeStatistikk.alleOppgaver - saksliste.gjeldendeStatistikk.tilgjengeligeOppgaver;
};
