import React, { useState, KeyboardEvent, FunctionComponent, useEffect, useRef, useCallback, ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import { BodyShort, Detail, Label, Heading, Link, Table, HStack } from '@navikt/ds-react';
import { KodeverkMedNavn } from '@navikt/ft-types';
import { VerticalSpacer, DateLabel } from '@navikt/ft-ui-komponenter';
import { KodeverkType } from '@navikt/ft-kodeverk';
import { PlusCircleIcon, XMarkIcon } from '@navikt/aksel-icons';

import { restApiHooks, RestApiPathsKeys } from '../../data/fplosRestApi';
import useLosKodeverk from '../../data/useLosKodeverk';
import SletteSakslisteModal from './SletteSakslisteModal';
import Saksliste from '../../typer/sakslisteAvdelingTsType';

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

interface OwnProps {
  sakslister: Saksliste[];
  setValgtSakslisteId: (sakslisteId?: number) => void;
  valgtSakslisteId?: number;
  valgtAvdelingEnhet: string;
  oppgaverForAvdelingAntall?: number;
  lagNySaksliste: (avdelingEnhet: string) => void;
  resetValgtSakslisteId: () => void;
  hentAvdelingensSakslister: (params: { avdelingEnhet: string }) => void;
  content: ReactElement;
}

const wait = (ms: number): Promise<any> =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

/**
 * GjeldendeSakslisterTabell
 */
const GjeldendeSakslisterTabell: FunctionComponent<OwnProps> = ({
  sakslister,
  valgtAvdelingEnhet,
  setValgtSakslisteId,
  valgtSakslisteId,
  oppgaverForAvdelingAntall,
  lagNySaksliste,
  resetValgtSakslisteId,
  hentAvdelingensSakslister,
  content,
}) => {
  const [valgtSaksliste, setValgtSakslisteTemp] = useState<Saksliste>();
  const tabRef = useRef<(HTMLDivElement | null)[]>([]);

  const behandlingTyper = useLosKodeverk(KodeverkType.BEHANDLING_TYPE);
  const fagsakYtelseTyper = useLosKodeverk(KodeverkType.FAGSAK_YTELSE);

  const { startRequest: fjernSaksliste } = restApiHooks.useRestApiRunner(RestApiPathsKeys.SLETT_SAKSLISTE);

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

  const lagNySakslisteFn = useCallback(
    (event: KeyboardEvent): void => {
      if (event.keyCode === 13) {
        lagNySaksliste(valgtAvdelingEnhet);
      }
    },
    [valgtAvdelingEnhet],
  );

  const visFjernSakslisteModal = (nyValgtSaksliste: Saksliste): void => {
    setValgtSakslisteTemp(nyValgtSaksliste);
  };

  const closeSletteModal = useCallback((): void => {
    setValgtSakslisteTemp(undefined);
  }, []);

  const fjernSakslisteFn = useCallback(
    (saksliste: Saksliste): void => {
      closeSletteModal();
      fjernSaksliste({ sakslisteId: saksliste.sakslisteId, avdelingEnhet: valgtAvdelingEnhet }).then(() => {
        resetValgtSakslisteId();
        hentAvdelingensSakslister({ avdelingEnhet: valgtAvdelingEnhet });
      });
    },
    [valgtAvdelingEnhet],
  );

  return (
    <>
      <VerticalSpacer sixteenPx />
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
      <VerticalSpacer sixteenPx />
      {sakslister.length === 0 && (
        <>
          <VerticalSpacer eightPx />
          <BodyShort size="small">
            <FormattedMessage id="GjeldendeSakslisterTabell.IngenLister" />
          </BodyShort>
          <VerticalSpacer eightPx />
        </>
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
                content={content}
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
                      onMouseDown={() => visFjernSakslisteModal(saksliste)}
                      onKeyDown={() => visFjernSakslisteModal(saksliste)}
                    />
                  </div>
                </Table.DataCell>
              </Table.ExpandableRow>
            ))}
          </Table.Body>
        </Table>
      )}
      <VerticalSpacer eightPx />
      <Link onClick={() => lagNySaksliste(valgtAvdelingEnhet)} onKeyDown={lagNySakslisteFn}>
        <Detail className={styles.imageText}>
          <FormattedMessage id="GjeldendeSakslisterTabell.LeggTilListe" />
        </Detail>
        <PlusCircleIcon />
      </Link>
      {valgtSaksliste && (
        <SletteSakslisteModal valgtSaksliste={valgtSaksliste} cancel={closeSletteModal} submit={fjernSakslisteFn} />
      )}
    </>
  );
};

export default GjeldendeSakslisterTabell;
