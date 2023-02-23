import React, {
  useState, KeyboardEvent, FunctionComponent, useEffect, useRef, useCallback,
} from 'react';
import { FormattedMessage } from 'react-intl';
import {
  BodyShort, Detail, Label, Heading,
} from '@navikt/ds-react';
import { KodeverkMedNavn } from '@navikt/ft-types';
import {
  Image, VerticalSpacer, Table, TableRow, TableColumn, DateLabel, FlexContainer, FlexRow, FlexColumn,
} from '@navikt/ft-ui-komponenter';
import { KodeverkType } from '@navikt/ft-kodeverk';

import addCircleIcon from '../../images/add-circle.svg';
import removeIcon from '../../images/remove.svg';
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
  'EMPTY_1',
];

const formatStonadstyper = (fagsakYtelseTyper: KodeverkMedNavn[], valgteFagsakYtelseTyper?: string[]) => {
  if (!valgteFagsakYtelseTyper || valgteFagsakYtelseTyper.length === 0) {
    return <FormattedMessage id="GjeldendeSakslisterTabell.Alle" />;
  }

  return valgteFagsakYtelseTyper.map<string>((fyt) => {
    const type = fagsakYtelseTyper.find((def) => def.kode === fyt);
    return type ? type.navn : '';
  }).join(', ');
};

const formatBehandlingstyper = (behandlingTyper: KodeverkMedNavn[], valgteBehandlingTyper?: string[]) => {
  if (!valgteBehandlingTyper || valgteBehandlingTyper.length === 0
    || valgteBehandlingTyper.length === behandlingTyper.length) {
    return <FormattedMessage id="GjeldendeSakslisterTabell.Alle" />;
  }

  return valgteBehandlingTyper.map<string>((bt) => {
    const type = behandlingTyper.find((def) => def.kode === bt);
    return type ? type.navn : '';
  }).join(', ');
};

interface OwnProps {
  sakslister: Saksliste[];
  setValgtSakslisteId: (sakslisteId: number) => void;
  valgtSakslisteId?: number;
  valgtAvdelingEnhet: string;
  oppgaverForAvdelingAntall?: number;
  lagNySaksliste: (avdelingEnhet: string) => void;
  resetValgtSakslisteId: () => void;
  hentAvdelingensSakslister: (params: {avdelingEnhet: string}) => void;
}

const wait = (ms: number): Promise<any> => new Promise((resolve) => {
  setTimeout(resolve, ms);
});

/**
 * GjeldendeSakslisterTabell
 */
export const GjeldendeSakslisterTabell: FunctionComponent<OwnProps> = ({
  sakslister,
  valgtAvdelingEnhet,
  setValgtSakslisteId,
  valgtSakslisteId,
  oppgaverForAvdelingAntall,
  lagNySaksliste,
  resetValgtSakslisteId,
  hentAvdelingensSakslister,
}) => {
  const [valgtSaksliste, setValgtSakslisteTemp] = useState<Saksliste>();
  const tabRef = useRef<(HTMLDivElement | null)[]>([]);

  const behandlingTyper = useLosKodeverk(KodeverkType.BEHANDLING_TYPE);
  const fagsakYtelseTyper = useLosKodeverk(KodeverkType.FAGSAK_YTELSE);

  const { startRequest: fjernSaksliste } = restApiHooks.useRestApiRunner(RestApiPathsKeys.SLETT_SAKSLISTE);

  useEffect(() => {
    tabRef.current = tabRef.current.slice(0, sakslister.length);
  }, [sakslister]);

  const setValgtSaksliste = async (event: React.MouseEvent | React.KeyboardEvent, id?: number): Promise<string | undefined> => {
    // @ts-ignore Fiks
    if (tabRef.current.some((node) => node && node.contains(event.target))) {
      return;
    }

    // Må vente 100 ms før en byttar behandlingskø i tabell. Dette fordi lagring av navn skjer som blur-event. Så i tilfellet
    // der en endrer navn og så trykker direkte på en annen behandlingskø vil ikke lagringen skje før etter at ny kø er valgt.
    await wait(100);

    if (id) {
      setValgtSakslisteId(id);
    }
  };

  const lagNySakslisteFn = useCallback((event: KeyboardEvent): void => {
    if (event.keyCode === 13) {
      lagNySaksliste(valgtAvdelingEnhet);
    }
  }, [valgtAvdelingEnhet]);

  const visFjernSakslisteModal = (nyValgtSaksliste: Saksliste): void => {
    setValgtSakslisteTemp(nyValgtSaksliste);
  };

  const closeSletteModal = useCallback((): void => {
    setValgtSakslisteTemp(undefined);
  }, []);

  const fjernSakslisteFn = useCallback((saksliste: Saksliste): void => {
    closeSletteModal();
    fjernSaksliste({ sakslisteId: saksliste.sakslisteId, avdelingEnhet: valgtAvdelingEnhet })
      .then(() => {
        resetValgtSakslisteId();
        hentAvdelingensSakslister({ avdelingEnhet: valgtAvdelingEnhet });
      });
  }, [valgtAvdelingEnhet]);

  return (
    <>
      <FlexContainer>
        <FlexRow>
          <FlexColumn>
            <Label size="small">
              <FormattedMessage id="GjeldendeSakslisterTabell.GjeldendeLister" />
            </Label>
          </FlexColumn>
          <FlexColumn className={styles.margin}>
            <div className={styles.grayBox}>
              <BodyShort size="small">
                <FormattedMessage id="GjeldendeSakslisterTabell.OppgaverForAvdeling" />
              </BodyShort>
              <Heading size="small">{oppgaverForAvdelingAntall || '0'}</Heading>
            </div>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
      {sakslister.length === 0 && (
        <>
          <VerticalSpacer eightPx />
          <BodyShort size="small"><FormattedMessage id="GjeldendeSakslisterTabell.IngenLister" /></BodyShort>
          <VerticalSpacer eightPx />
        </>
      )}
      {sakslister.length > 0 && (
      <Table headerTextCodes={headerTextCodes}>
        {sakslister.map((saksliste, index) => (
          <TableRow
            key={saksliste.sakslisteId}
            className={saksliste.sakslisteId === valgtSakslisteId ? styles.isSelected : undefined}
            id={saksliste.sakslisteId}
            onMouseDown={setValgtSaksliste}
            onKeyDown={setValgtSaksliste}
          >
            <TableColumn>{saksliste.navn}</TableColumn>
            <TableColumn>{formatStonadstyper(fagsakYtelseTyper, saksliste.fagsakYtelseTyper)}</TableColumn>
            <TableColumn>{formatBehandlingstyper(behandlingTyper, saksliste.behandlingTyper)}</TableColumn>
            <TableColumn>{saksliste.saksbehandlerIdenter.length > 0 ? saksliste.saksbehandlerIdenter.length : ''}</TableColumn>
            <TableColumn>{saksliste.antallBehandlinger}</TableColumn>
            <TableColumn>
              <DateLabel dateString={saksliste.sistEndret} />
            </TableColumn>
            <TableColumn>
              <div ref={(el) => { tabRef.current[index] = el; }}>
                <Image
                  src={removeIcon}
                  className={styles.removeImage}
                  onMouseDown={() => visFjernSakslisteModal(saksliste)}
                  onKeyDown={() => visFjernSakslisteModal(saksliste)}
                />
              </div>
            </TableColumn>
          </TableRow>
        ))}
      </Table>
      )}
      <div
        id="leggTilListe"
        role="button"
        tabIndex={0}
        className={styles.addPeriode}
        onClick={() => lagNySaksliste(valgtAvdelingEnhet)}
        onKeyDown={lagNySakslisteFn}
      >
        <Image className={styles.addCircleIcon} src={addCircleIcon} />
        <Detail size="small" className={styles.imageText}>
          <FormattedMessage id="GjeldendeSakslisterTabell.LeggTilListe" />
        </Detail>
      </div>
      {valgtSaksliste && (
        <SletteSakslisteModal
          valgtSaksliste={valgtSaksliste}
          cancel={closeSletteModal}
          submit={fjernSakslisteFn}
        />
      )}
    </>
  );
};

export default GjeldendeSakslisterTabell;
