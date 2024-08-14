import React, { FunctionComponent, useState, useCallback, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { BodyShort, Table } from '@navikt/ds-react';
import { XMarkIcon } from '@navikt/aksel-icons';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { SaksbehandlerProfil } from '@navikt/fp-los-felles';

import SletteSaksbehandlerModal from './SletteSaksbehandlerModal';
import { RestApiPathsKeys, restApiHooks } from '../../data/fplosRestApi';

import styles from './saksbehandlereTabell.module.css';


interface OwnProps {
  saksbehandlere: SaksbehandlerProfil[];
  valgtAvdelingEnhet: string;
  hentAvdelingensSaksbehandlere: (params: { avdelingEnhet: string }) => void;
}

/**
 * SaksbehandlereTabell
 */
const SaksbehandlereTabell: FunctionComponent<OwnProps> = ({
  saksbehandlere,
  valgtAvdelingEnhet,
  hentAvdelingensSaksbehandlere,
}) => {
  const [valgtSaksbehandler, setValgtSaksbehandler] = useState<SaksbehandlerProfil>();

  const { startRequest: fjernSaksbehandler } = restApiHooks.useRestApiRunner(RestApiPathsKeys.SLETT_SAKSBEHANDLER);

  const fjernSaksbehandlerFn = useCallback(
    (saksbehandler: SaksbehandlerProfil) => {
      fjernSaksbehandler({ brukerIdent: saksbehandler.brukerIdent, avdelingEnhet: valgtAvdelingEnhet }).then(() =>
        hentAvdelingensSaksbehandlere({ avdelingEnhet: valgtAvdelingEnhet }),
      );
      setValgtSaksbehandler(undefined);
    },
    [valgtAvdelingEnhet],
  );

  const sorterteSaksbehandlere = useMemo(
    () =>
      saksbehandlere.sort((saksbehandler1, saksbehandler2) => {
        const compareWithNullsLast = (a: string | null, b: string | null) => {
          if (a != null && b != null) return a.localeCompare(b);
          if (a == null && b == null) return 0;
          return a == null ? 1 : -1;
        };

        const enhetComparison = compareWithNullsLast(saksbehandler1.ansattAvdeling, saksbehandler2.ansattAvdeling);
        if (enhetComparison !== 0) {
          return enhetComparison;
        }
        return compareWithNullsLast(saksbehandler1.navn, saksbehandler2.navn);
      }),
    [saksbehandlere],
  );

  return (
    <>
      {sorterteSaksbehandlere.length === 0 && (
        <>
          <VerticalSpacer eightPx />
          <BodyShort size="small">
            <FormattedMessage id="SaksbehandlereTabell.IngenSaksbehandlere" />
          </BodyShort>
          <VerticalSpacer eightPx />
        </>
      )}
      {sorterteSaksbehandlere.length > 0 && (
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell scope="col">
                <FormattedMessage id="SaksbehandlereTabell.Navn" />
              </Table.HeaderCell>
              <Table.HeaderCell scope="col">
                <FormattedMessage id="SaksbehandlereTabell.Brukerident" />
              </Table.HeaderCell>
              <Table.HeaderCell scope="col">
                <FormattedMessage id="SaksbehandlereTabell.AnsattVed" />
              </Table.HeaderCell>
              <Table.HeaderCell scope="col" />
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {sorterteSaksbehandlere.map(saksbehandler => (
              <Table.Row key={saksbehandler.brukerIdent}>
                <Table.DataCell scope="row">{saksbehandler.navn}</Table.DataCell>
                <Table.DataCell>{saksbehandler.brukerIdent}</Table.DataCell>
                <Table.DataCell>{saksbehandler.ansattAvdeling}</Table.DataCell>
                <Table.DataCell>
                  <XMarkIcon
                    className={styles.removeIcon}
                    onMouseDown={() => setValgtSaksbehandler(saksbehandler)}
                    onKeyDown={() => setValgtSaksbehandler(saksbehandler)}
                  />
                </Table.DataCell>
              </Table.Row>
            ))}
          </Table.Body>
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
