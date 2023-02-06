import React, { FunctionComponent } from 'react';
import { BodyShort, Button } from '@navikt/ds-react';
import {
  Table, TableRow, TableColumn,
  FlexColumn, FlexRow, DateLabel, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import { FormattedMessage } from 'react-intl';
import fagsakStatus from '@navikt/fp-kodeverk/src/fagsakStatus';
import fagsakYtelseType from '@navikt/fp-kodeverk/src/fagsakYtelseType';
import styles from './journalforingPanel.less';
import JournalFagsak from '../typer/journalFagsakTsType';
import VelgSakLenke from './VelgSakLenke';

const finnStatusTekst = (statusKode: string): string => {
  switch (statusKode) {
    case fagsakStatus.AVSLUTTET:
      return 'Journal.Sak.Avsluttet';
    case fagsakStatus.LOPENDE:
      return 'Journal.Sak.Løpende';
    case fagsakStatus.OPPRETTET:
      return 'Journal.Sak.Opprettet';
    case fagsakStatus.UNDER_BEHANDLING:
      return 'Journal.Sak.UnderBehandling';
    default:
      return '';
  }
};

export const finnYtelseTekst = (ytelseKode: string): string => {
  switch (ytelseKode) {
    case fagsakYtelseType.ENGANGSSTONAD:
      return 'Journal.Sak.Ytelse.Engangsstønad';
    case fagsakYtelseType.FORELDREPENGER:
      return 'Journal.Sak.Ytelse.Foreldrepenger';
    case fagsakYtelseType.SVANGERSKAPSPENGER:
      return 'Journal.Sak.Ytelse.Svangerskapspenger';
    default:
      return 'Journal.Sak.Ytelse.Ukjent';
  }
};

type OwnProps = Readonly<{
  saksliste: JournalFagsak[];
  avbrytCallback: () => void;
}>;

const headerTextCodes = [
  'Saksliste.Saksnummer',
  'Saksliste.Ytelsetype',
  'Saksliste.OpprettetDato',
  'Saksliste.EndretDato',
  'Saksliste.Status',
];

/**
 * VelgSakForm - Inneholder formen som lar saksbehandler velge en sak og journalfære dokumentet på, evt opprette ny sak.
 */
const VelgSakForm: FunctionComponent<OwnProps> = ({
  saksliste,
  avbrytCallback,
}) => {
  const finnesSaker = saksliste && saksliste.length > 0;
  return (
    <>
      {!finnesSaker && (
        <BodyShort><FormattedMessage id="Journal.Sak.Ingen" /></BodyShort>
      )}
      {finnesSaker && (
        <div className={styles.saksliste}>
          <Table headerTextCodes={headerTextCodes}>
            {saksliste.map((sak) => (
              <TableRow key={sak.saksnummer}>
                <TableColumn><VelgSakLenke saksnummer={sak.saksnummer} /></TableColumn>
                <TableColumn><FormattedMessage id={finnYtelseTekst(sak.ytelseType)} /></TableColumn>
                <TableColumn><DateLabel dateString={sak.datoOpprettet} /></TableColumn>
                <TableColumn>{sak.sistEndret ? <DateLabel dateString={sak.sistEndret} /> : <FormattedMessage id="Saksliste.IngenSøknad" />}</TableColumn>
                <TableColumn><FormattedMessage id={finnStatusTekst(sak.status)} /></TableColumn>
              </TableRow>
            ))}
          </Table>
        </div>
      )}
      <>
        <VerticalSpacer eightPx />
        <FlexRow>
          <FlexColumn>
            <Button
              size="small"
              variant="secondary"
              onClick={avbrytCallback}
              disabled={false}
              type="button"
            >
              <FormattedMessage id="ValgtOppgave.Avbryt" />
            </Button>
          </FlexColumn>
        </FlexRow>
      </>
    </>
  );
};
export default VelgSakForm;
