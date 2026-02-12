import { type KeyboardEvent, type ReactElement, useEffect, useRef, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { PlusCircleIcon, XMarkIcon } from '@navikt/aksel-icons';
import { BodyShort, Box, Button, Detail, HStack, Label, Link, Table, VStack } from '@navikt/ds-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { LosKodeverkMedNavn, SakslisteAvdeling } from '@navikt/fp-types';

import { LosUrl, slettSaksliste } from '../data/fplosAvdelingslederApi';
import { useLosKodeverk } from '../data/useLosKodeverk';
import { OppgaverGrafDialog } from './OppgaverGrafDialog';
import { SletteSakslisteModal } from './SletteSakslisteModal';

import styles from './gjeldendeSakslisterTabell.module.css';

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

const reserverteOppgaver = (saksliste: SakslisteAvdeling) => {
  if (saksliste.gjeldendeStatistikk === undefined) {
    return '-';
  }
  return saksliste.gjeldendeStatistikk.alleOppgaver - saksliste.gjeldendeStatistikk.tilgjengeligeOppgaver;
};

interface Props {
  sakslister: SakslisteAvdeling[];
  setValgtSakslisteId: (sakslisteId?: number) => void;
  valgtSakslisteId?: number;
  valgtAvdelingEnhet: string;
  oppgaverForAvdelingAntall?: number;
  lagNySaksliste: () => void;
  resetValgtSakslisteId: () => void;
  children: ReactElement;
}

export const GjeldendeSakslisterTabell = ({
  sakslister,
  valgtAvdelingEnhet,
  setValgtSakslisteId,
  valgtSakslisteId,
  oppgaverForAvdelingAntall,
  lagNySaksliste,
  resetValgtSakslisteId,
  children,
}: Props) => {
  const queryClient = useQueryClient();

  const [valgtSakslisteForSletting, setValgtSakslisteForSletting] = useState<SakslisteAvdeling>();
  const tabRef = useRef<(HTMLDivElement | null)[]>([]);

  const behandlingTyper = useLosKodeverk('BehandlingType');
  const fagsakYtelseTyper = useLosKodeverk('FagsakYtelseType');

  const { mutate: fjernSaksliste } = useMutation({
    mutationFn: (values: { sakslisteId: number }) => slettSaksliste(values.sakslisteId, valgtAvdelingEnhet),
    onSuccess: () => {
      resetValgtSakslisteId();
      void queryClient.invalidateQueries({
        queryKey: [LosUrl.SAKSLISTER_FOR_AVDELING],
      });
    },
  });

  useEffect(() => {
    tabRef.current = tabRef.current.slice(0, sakslister.length);
  }, [sakslister]);

  const lagNySakslisteFn = (event: KeyboardEvent<HTMLAnchorElement>): void => {
    if (event.key === 'Enter') {
      lagNySaksliste();
    }
  };

  const fjernSakslisteOgSkjulModal = (saksliste: SakslisteAvdeling): void => {
    setValgtSakslisteForSletting(undefined);
    fjernSaksliste({ sakslisteId: saksliste.sakslisteId });
  };

  return (
    <VStack gap="space-16">
      <HStack justify="space-between">
        <Label size="small">
          <FormattedMessage id="GjeldendeSakslisterTabell.GjeldendeLister" />
        </Label>
        <Box background="neutral-moderate" paddingBlock="space-8" paddingInline="space-16">
          <Detail>
            <FormattedMessage id="GjeldendeSakslisterTabell.OppgaverForAvdeling" />
          </Detail>
          <BodyShort size="large">{oppgaverForAvdelingAntall ?? '0'}</BodyShort>
        </Box>
      </HStack>
      {sakslister.length === 0 && (
        <BodyShort size="small">
          <FormattedMessage id="GjeldendeSakslisterTabell.IngenLister" />
        </BodyShort>
      )}
      {sakslister.length > 0 && (
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
            {sakslister.map((saksliste, index) => (
              <Table.ExpandableRow
                key={saksliste.sakslisteId}
                className={saksliste.sakslisteId === valgtSakslisteId ? styles['isSelected'] : undefined}
                onOpenChange={isOpen => setValgtSakslisteId(isOpen ? saksliste.sakslisteId : undefined)}
                content={saksliste.sakslisteId === valgtSakslisteId ? children : undefined}
                open={saksliste.sakslisteId === valgtSakslisteId}
                expandOnRowClick
              >
                <Table.DataCell>{saksliste.navn}</Table.DataCell>
                <Table.DataCell>{formatStonadstyper(fagsakYtelseTyper, saksliste.fagsakYtelseTyper)}</Table.DataCell>
                <Table.DataCell>{formatBehandlingstyper(behandlingTyper, saksliste.behandlingTyper)}</Table.DataCell>
                <Table.DataCell align="right">{saksliste.saksbehandlerIdenter.length}</Table.DataCell>
                <Table.DataCell align="right">
                  {saksliste.gjeldendeStatistikk?.behandlingerPåVent ?? '-'}
                </Table.DataCell>
                <Table.DataCell align="right">{saksliste.gjeldendeStatistikk?.alleOppgaver ?? '-'}</Table.DataCell>
                <Table.DataCell align="right">{reserverteOppgaver(saksliste)}</Table.DataCell>
                <Table.DataCell align="right">
                  <HStack gap="space-8" justify="end">
                    <div>
                      <OppgaverGrafDialog saksliste={saksliste} valgtAvdelingEnhet={valgtAvdelingEnhet} />
                    </div>
                    <div
                      ref={el => {
                        tabRef.current[index] = el;
                      }}
                    >
                      <Button
                        variant="tertiary"
                        data-color="danger"
                        size="small"
                        icon={<XMarkIcon title={'Slett saksliste ' + saksliste.navn} />}
                        onClick={() => setValgtSakslisteForSletting(saksliste)}
                      />
                    </div>
                  </HStack>
                </Table.DataCell>
              </Table.ExpandableRow>
            ))}
          </Table.Body>
        </Table>
      )}
      <Link onClick={lagNySaksliste} onKeyDown={lagNySakslisteFn}>
        <Detail>
          <FormattedMessage id="GjeldendeSakslisterTabell.LeggTilListe" />
        </Detail>
        <PlusCircleIcon />
      </Link>
      {valgtSakslisteForSletting && (
        <SletteSakslisteModal
          valgtSaksliste={valgtSakslisteForSletting}
          cancel={() => setValgtSakslisteForSletting(undefined)}
          submit={fjernSakslisteOgSkjulModal}
        />
      )}
    </VStack>
  );
};
