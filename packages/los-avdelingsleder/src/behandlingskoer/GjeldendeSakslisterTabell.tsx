import React, { KeyboardEvent, ReactElement, useEffect, useRef, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { PlusCircleIcon, XMarkIcon } from '@navikt/aksel-icons';
import { BodyShort, Detail, Heading, HStack, Label, Link, Table, VStack } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { KodeverkType } from '@navikt/fp-kodeverk';
import { KodeverkMedNavn } from '@navikt/fp-types';

import { LosUrl, slettSaksliste } from '../data/fplosAvdelingslederApi';
import { useLosKodeverk } from '../data/useLosKodeverk';
import { SakslisteAvdeling } from '../typer/sakslisteAvdelingTsType';
import { SletteSakslisteModal } from './SletteSakslisteModal';

import styles from './gjeldendeSakslisterTabell.module.css';

const headerTextCodes = [
  'GjeldendeSakslisterTabell.Listenavn',
  'GjeldendeSakslisterTabell.Stonadstype',
  'GjeldendeSakslisterTabell.Behandlingtype',
  'GjeldendeSakslisterTabell.AntallSaksbehandlere',
  'GjeldendeSakslisterTabell.AntallBehandlinger',
  'GjeldendeSakslisterTabell.SistEndret',
];

const formatStonadstyper = (fagsakYtelseTyper: KodeverkMedNavn[], valgteFagsakYtelseTyper?: string[]) => {
  if (!valgteFagsakYtelseTyper || valgteFagsakYtelseTyper.length === 0) {
    return <FormattedMessage id="GjeldendeSakslisterTabell.Alle" />;
  }

  return valgteFagsakYtelseTyper
    .map<string>(fyt => {
      const type = fagsakYtelseTyper.find(def => def.kode === fyt);
      return type ? type.navn : '';
    })
    .join(', ');
};

const formatBehandlingstyper = (behandlingTyper: KodeverkMedNavn[], valgteBehandlingTyper?: string[]) => {
  if (
    !valgteBehandlingTyper ||
    valgteBehandlingTyper.length === 0 ||
    valgteBehandlingTyper.length === behandlingTyper.length
  ) {
    return <FormattedMessage id="GjeldendeSakslisterTabell.Alle" />;
  }

  return valgteBehandlingTyper
    .map<string>(bt => {
      const type = behandlingTyper.find(def => def.kode === bt);
      return type ? type.navn : '';
    })
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

const wait = (ms: number): Promise<any> =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

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

  const behandlingTyper = useLosKodeverk(KodeverkType.BEHANDLING_TYPE);
  const fagsakYtelseTyper = useLosKodeverk(KodeverkType.FAGSAK_YTELSE);

  const { mutate: fjernSaksliste } = useMutation({
    mutationFn: (values: { sakslisteId: number }) => slettSaksliste(values.sakslisteId, valgtAvdelingEnhet),
    onSuccess: () => {
      resetValgtSakslisteId();
      queryClient.invalidateQueries({
        queryKey: [LosUrl.SAKSLISTER_FOR_AVDELING],
      });
    },
  });

  useEffect(() => {
    tabRef.current = tabRef.current.slice(0, sakslister.length);
  }, [sakslister]);

  const setValgtSaksliste = async (isOpen: boolean, id: number): Promise<void> => {
    // Må vente 100 ms før en byttar behandlingskø i tabell. Dette fordi lagring av navn skjer som blur-event. Så i tilfellet
    // der en endrer navn og så trykker direkte på en annen behandlingskø vil ikke lagringen skje før etter at ny kø er valgt.
    await wait(100);

    if (id) {
      setValgtSakslisteId(isOpen ? id : undefined);
    }
    return Promise.resolve();
  };

  const lagNySakslisteFn = (event: KeyboardEvent): void => {
    if (event.keyCode === 13) {
      lagNySaksliste();
    }
  };

  const fjernSakslisteOgSkjulModal = (saksliste: SakslisteAvdeling): void => {
    setValgtSakslisteForSletting(undefined);
    fjernSaksliste({ sakslisteId: saksliste.sakslisteId });
  };

  return (
    <VStack gap="4">
      <HStack justify="space-between">
        <Label size="small">
          <FormattedMessage id="GjeldendeSakslisterTabell.GjeldendeLister" />
        </Label>
        <div className={styles.grayBox}>
          <BodyShort size="small">
            <FormattedMessage id="GjeldendeSakslisterTabell.OppgaverForAvdeling" />
          </BodyShort>
          <Heading size="small">{oppgaverForAvdelingAntall || '0'}</Heading>
        </div>
      </HStack>
      {sakslister.length === 0 && (
        <BodyShort size="small">
          <FormattedMessage id="GjeldendeSakslisterTabell.IngenLister" />
        </BodyShort>
      )}
      {sakslister.length > 0 && (
        <Table size="small">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell scope="col" />
              {headerTextCodes.map(code => (
                <Table.HeaderCell key={code} scope="col">
                  <FormattedMessage id={code} />
                </Table.HeaderCell>
              ))}
              <Table.HeaderCell scope="col" />
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {sakslister.map((saksliste, index) => (
              <Table.ExpandableRow
                key={saksliste.sakslisteId}
                className={saksliste.sakslisteId === valgtSakslisteId ? styles.isSelected : undefined}
                onOpenChange={isOpen => setValgtSaksliste(isOpen, saksliste.sakslisteId)}
                content={saksliste.sakslisteId === valgtSakslisteId ? children : undefined}
                open={saksliste.sakslisteId === valgtSakslisteId}
              >
                <Table.DataCell>{saksliste.navn}</Table.DataCell>
                <Table.DataCell>{formatStonadstyper(fagsakYtelseTyper, saksliste.fagsakYtelseTyper)}</Table.DataCell>
                <Table.DataCell>{formatBehandlingstyper(behandlingTyper, saksliste.behandlingTyper)}</Table.DataCell>
                <Table.DataCell>
                  {saksliste.saksbehandlerIdenter.length > 0 ? saksliste.saksbehandlerIdenter.length : ''}
                </Table.DataCell>
                <Table.DataCell>{saksliste.antallBehandlinger}</Table.DataCell>
                <Table.DataCell>
                  <DateLabel dateString={saksliste.sistEndret} />
                </Table.DataCell>
                <Table.DataCell>
                  <div
                    ref={el => {
                      tabRef.current[index] = el;
                    }}
                  >
                    <XMarkIcon
                      className={styles.removeImage}
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
        <Detail className={styles.imageText}>
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
