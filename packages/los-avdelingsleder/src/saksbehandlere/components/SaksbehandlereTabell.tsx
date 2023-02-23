import React, {
  FunctionComponent, useState, useCallback, useMemo,
} from 'react';
import { FormattedMessage } from 'react-intl';
import { BodyShort, Label } from '@navikt/ds-react';

import {
  Table, TableRow, TableColumn, Image, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';

import removeIcon from '../../images/remove.svg';
import Saksbehandler from '../../typer/saksbehandlerAvdelingTsType';
import SletteSaksbehandlerModal from './SletteSaksbehandlerModal';
import { RestApiPathsKeys, restApiHooks } from '../../data/fplosRestApi';

import styles from './saksbehandlereTabell.less';

const headerTextCodes = [
  'SaksbehandlereTabell.Navn',
  'SaksbehandlereTabell.Brukerident',
  'SaksbehandlereTabell.Avdeling',
];

interface OwnProps {
  saksbehandlere: Saksbehandler[];
  valgtAvdelingEnhet: string;
  hentAvdelingensSaksbehandlere: (params: {avdelingEnhet: string}) => void;
}

/**
 * SaksbehandlereTabell
 */
const SaksbehandlereTabell: FunctionComponent<OwnProps> = ({
  saksbehandlere,
  valgtAvdelingEnhet,
  hentAvdelingensSaksbehandlere,
}) => {
  const [valgtSaksbehandler, setValgtSaksbehandler] = useState<Saksbehandler>();

  const { startRequest: fjernSaksbehandler } = restApiHooks.useRestApiRunner(RestApiPathsKeys.SLETT_SAKSBEHANDLER);

  const fjernSaksbehandlerFn = useCallback((saksbehandler: Saksbehandler) => {
    fjernSaksbehandler({ brukerIdent: saksbehandler.brukerIdent, avdelingEnhet: valgtAvdelingEnhet })
      .then(() => hentAvdelingensSaksbehandlere({ avdelingEnhet: valgtAvdelingEnhet }));
    setValgtSaksbehandler(undefined);
  }, [valgtAvdelingEnhet]);

  const sorterteSaksbehandlere = useMemo(() => saksbehandlere
    .sort((saksbehandler1, saksbehandler2) => saksbehandler1.navn.localeCompare(saksbehandler2.navn)), [saksbehandlere]);

  return (
    <>
      <Label size="small"><FormattedMessage id="SaksbehandlereTabell.Saksbehandlere" /></Label>
      {sorterteSaksbehandlere.length === 0 && (
        <>
          <VerticalSpacer eightPx />
          <BodyShort size="small"><FormattedMessage id="SaksbehandlereTabell.IngenSaksbehandlere" /></BodyShort>
          <VerticalSpacer eightPx />
        </>
      )}
      {sorterteSaksbehandlere.length > 0 && (
      <Table headerTextCodes={headerTextCodes} noHover>
        {sorterteSaksbehandlere.map((saksbehandler) => (
          <TableRow key={saksbehandler.brukerIdent}>
            <TableColumn>{saksbehandler.navn}</TableColumn>
            <TableColumn>{saksbehandler.brukerIdent}</TableColumn>
            <TableColumn>{saksbehandler.avdelingsnavn.join(', ')}</TableColumn>
            <TableColumn>
              <Image
                src={removeIcon}
                className={styles.removeImage}
                onMouseDown={() => setValgtSaksbehandler(saksbehandler)}
                onKeyDown={() => setValgtSaksbehandler(saksbehandler)}
              />
            </TableColumn>
          </TableRow>
        ))}
      </Table>
      )}
      {valgtSaksbehandler && (
      <SletteSaksbehandlerModal
        valgtSaksbehandler={valgtSaksbehandler}
        closeSletteModal={() => setValgtSaksbehandler(undefined)}
        fjernSaksbehandler={fjernSaksbehandlerFn}
      />
      )}
    </>
  );
};

export default SaksbehandlereTabell;
