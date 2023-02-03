import React, { FunctionComponent } from 'react';
import { Button } from '@navikt/ds-react';
import {
  Table, TableRow, TableColumn,
  FlexColumn, FlexRow, DateLabel, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import { FormattedMessage } from 'react-intl';

import fagsakStatus from '@navikt/fp-kodeverk/src/fagsakStatus';
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

type OwnProps = Readonly<{
  saksliste: JournalFagsak[];
  avbrytCallback: () => void;
  åpneFagsak: (saksnummer: string, behandlingUuid?: string) => void;
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
  åpneFagsak,
}) => {
  const finnesSaker = saksliste && saksliste.length > 0;
  return (
    <>
      {!finnesSaker && (
        <FormattedMessage id="Journal.Sak.Ingen" />
      )}
      {finnesSaker && (
        <div className={styles.saksliste}>
          <Table headerTextCodes={headerTextCodes}>
            {saksliste.map((sak) => (
              <TableRow key={sak.saksnummer}>
                <TableColumn><VelgSakLenke saksnummer={sak.saksnummer} åpneFagsak={åpneFagsak} /></TableColumn>
                <TableColumn>{sak.ytelseType}</TableColumn>
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
