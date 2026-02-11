import { type KeyboardEvent, type ReactElement, useEffect, useRef, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { PlusCircleIcon, XMarkIcon } from '@navikt/aksel-icons';
import { BodyShort, Detail, HStack, Label, Link, Table, VStack } from '@navikt/ds-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { LosKodeverkMedNavn } from '@navikt/fp-types';

import { LosUrl, slettSaksliste } from '../data/fplosAvdelingslederApi';
import { useLosKodeverk } from '../data/useLosKodeverk';
import type { SakslisteAvdeling } from '../typer/sakslisteAvdelingTsType';
import { OppgaverGrafDialog } from './OppgaverGrafDialog.tsx';
import { SletteSakslisteModal } from './SletteSakslisteModal';

import styles from './gjeldendeSakslisterTabell.module.css';

const formatStonadstyper = (
  fagsakYtelseTyper: LosKodeverkMedNavn<'FagsakYtelseType'>[],
  valgteFagsakYtelseTyper: string[],
) => {
  if (valgteFagsakYtelseTyper.length === 0 || valgteFagsakYtelseTyper.length === fagsakYtelseTyper.length) {
    return <FormattedMessage id="GjeldendeSakslisterTabell.Alle" />;
  }

  return valgteFagsakYtelseTyper
    .map<string>(fyt => {
      const type = fagsakYtelseTyper.find(def => def.kode === fyt);
      return type ? type.navn : '';
    })
    .sort((a, b) => a.localeCompare(b))
    .join(', ');
};

const formatBehandlingstyper = (
  behandlingTyper: LosKodeverkMedNavn<'BehandlingType'>[],
  valgteBehandlingTyper: string[],
) => {
  if (valgteBehandlingTyper.length === 0 || valgteBehandlingTyper.length === behandlingTyper.length) {
    return <FormattedMessage id="GjeldendeSakslisterTabell.Alle" />;
  }

  return valgteBehandlingTyper
    .map<string>(bt => {
      const type = behandlingTyper.find(def => def.kode === bt);
      return type ? type.navn : '';
    })
    .sort((a, b) => a.localeCompare(b))
    .join(', ');
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
        <div className={styles['grayBox']}>
          <BodyShort size="small">
            <FormattedMessage id="GjeldendeSakslisterTabell.OppgaverForAvdeling" />
          </BodyShort>
          <BodyShort size="large">{oppgaverForAvdelingAntall ?? '0'}</BodyShort>
        </div>
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
                <FormattedMessage id="GjeldendeSakslisterTabell.Listenavn" />
              </Table.HeaderCell>
              <Table.HeaderCell scope="col">
                <FormattedMessage id="GjeldendeSakslisterTabell.Stonadstype" />
              </Table.HeaderCell>
              <Table.HeaderCell scope="col">
                <FormattedMessage id="GjeldendeSakslisterTabell.Behandlingtype" />
              </Table.HeaderCell>
              <Table.HeaderCell scope="col">
                <FormattedMessage id="GjeldendeSakslisterTabell.AntallSaksbehandlere" />
              </Table.HeaderCell>
              <Table.HeaderCell scope="col">
                <FormattedMessage id="GjeldendeSakslisterTabell.BehandlingerPåVent" />
              </Table.HeaderCell>
              <Table.HeaderCell scope="col">
                <FormattedMessage id="GjeldendeSakslisterTabell.AntallOppgaver" />
              </Table.HeaderCell>
              <Table.HeaderCell scope="col">
                <FormattedMessage id="GjeldendeSakslisterTabell.AntallTilgjengelige" />
              </Table.HeaderCell>
              <Table.HeaderCell scope="col">
                <FormattedMessage id="GjeldendeSakslisterTabell.Graf" />
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
                <Table.DataCell>{saksliste.saksbehandlerIdenter.length}</Table.DataCell>
                <Table.DataCell>{saksliste.gjeldendeStatistikk?.behandlingerPåVent ?? '-'}</Table.DataCell>
                <Table.DataCell>{saksliste.gjeldendeStatistikk?.alleOppgaver ?? '-'}</Table.DataCell>
                <Table.DataCell>{saksliste.gjeldendeStatistikk?.tilgjengeligeOppgaver ?? '-'}</Table.DataCell>
                <Table.DataCell>
                  <OppgaverGrafDialog saksliste={saksliste} valgtAvdelingEnhet={valgtAvdelingEnhet} />
                </Table.DataCell>
                <Table.DataCell>
                  <div
                    ref={el => {
                      tabRef.current[index] = el;
                    }}
                  >
                    <XMarkIcon
                      className={styles['removeImage']}
                      onMouseDown={() => setValgtSakslisteForSletting(saksliste)}
                      onKeyDown={() => setValgtSakslisteForSletting(saksliste)}
                    />
                  </div>
                </Table.DataCell>
              </Table.ExpandableRow>
            ))}
          </Table.Body>
        </Table>
      )}
      <Link onClick={lagNySaksliste} onKeyDown={lagNySakslisteFn}>
        <Detail className={styles['imageText']}>
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
